import {getConfig} from "../config/config.js"

function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(getConfig().dbName, getConfig().dbVersion)
        request.onupgradeneeded = () => {
            const db = request.result
            if (!db.objectStoreNames.contains(getConfig().storeName)) {
                db.createObjectStore(getConfig().storeName)
            }
        }
        request.onsuccess = () => {
            resolve(request.result)
        }
        request.onerror = () => {
            reject(request.error)
        }
    })
}

export async function savePrivateKey(userId, privateKey) {
    const db = await openDatabase()
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(getConfig().storeName, 'readwrite',)
        transaction.objectStore(getConfig().storeName).put(privateKey, `private:${userId}`)
        transaction.oncomplete = () => {
            db.close()
            resolve()
        }
        transaction.onerror = () => {
            db.close()
            reject(transaction.error)
        }
    })
}

export async function getPrivateKey(userId) {
    const db = await openDatabase()
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(getConfig().storeName, 'readonly')
        const request = transaction.objectStore(getConfig().storeName).get(`private:${userId}`)
        request.onsuccess = () => {
            db.close()
            resolve(request.result || null)
        }
        request.onerror = () => {
            db.close()
            reject(request.error)
        }
    })
}

export async function removePrivateKey(userId) {
    const db = await openDatabase()
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(getConfig().storeName, 'readwrite')
        transaction.objectStore(getConfig().storeName).delete(`private:${userId}`)
        transaction.oncomplete = () => {
            db.close()
            resolve()
        }
        transaction.onerror = () => {
            db.close()
            reject(transaction.error)
        }
    })
}