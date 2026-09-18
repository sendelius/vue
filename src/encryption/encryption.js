import {
    bytesToBase64Url,
    base64UrlToBytes,
    stringToBytes,
    bytesToString,
} from './base64.js'
import {importPublicKey} from "./keys.js"

const AES_ALGORITHM = {
    name: 'AES-GCM',
    length: 256,
}

const RSA_ALGORITHM = {
    name: 'RSA-OAEP',
}

export async function generateDataKey() {
    return await crypto.subtle.generateKey(AES_ALGORITHM, true, ['encrypt', 'decrypt'])
}

export async function encryptData(data, key) {
    const iv = crypto.getRandomValues(new Uint8Array(12))
    const encrypted = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        stringToBytes(data),
    )
    return { iv: bytesToBase64Url(iv), data: bytesToBase64Url(new Uint8Array(encrypted)) }
}

export async function decryptData(data, key) {
    const iv = base64UrlToBytes(data.iv)
    const encrypted = base64UrlToBytes(data.data)
    const decrypted = await crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv,
    }, key, encrypted)
    return bytesToString(new Uint8Array(decrypted))
}

export async function encryptDataKey(dataKey, publicKey) {
    const rawKey = await crypto.subtle.exportKey('raw', dataKey)
    const encrypted = await crypto.subtle.encrypt(
        RSA_ALGORITHM,
        publicKey,
        rawKey,
    )
    return bytesToBase64Url(new Uint8Array(encrypted))
}

export async function decryptDataKey(encryptedKey, privateKey) {
    const encrypted = base64UrlToBytes(encryptedKey)
    const rawKey = await crypto.subtle.decrypt(
        RSA_ALGORITHM,
        privateKey,
        encrypted,
    )
    return await crypto.subtle.importKey(
        'raw',
        rawKey,
        AES_ALGORITHM,
        false,
        ['encrypt', 'decrypt'],
    )
}

export async function encryptPrivateKey(privateKey, publicKey, recoveryPublicKey) {
    const dataKey = await generateDataKey()
    const encrypted = await encryptData(privateKey, dataKey)
    const recoveryKey = await importPublicKey(recoveryPublicKey)
    const encryptedKey = await encryptDataKey(dataKey, recoveryKey)
    return {
        v: 1,
        alg: 'AES-256-GCM',
        public_key: publicKey,
        iv: encrypted.iv,
        data: encrypted.data,
        key: encryptedKey,
    }
}

export async function decryptPrivateKey(backup, recoveryPrivateKey) {
    const dataKey = await decryptDataKey(backup.key, recoveryPrivateKey)
    return await decryptData({ iv: backup.iv, data: backup.data }, dataKey)
}