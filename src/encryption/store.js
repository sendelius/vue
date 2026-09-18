import {defineStore} from 'pinia'
import {exportPrivateKey, exportPublicKey, generateKeyPair, importPrivateKey, importPublicKey} from "./keys.js"
import {getPrivateKey, removePrivateKey, savePrivateKey} from "./vault.js"
import {
    decryptData,
    decryptDataKey,
    encryptData,
    encryptDataKey,
    generateDataKey,
    encryptPrivateKey,
    decryptPrivateKey,
} from "./encryption.js"

const useEncryptionStore = defineStore('encryption', {
    state: () => ({
        privateKey: null,
        unlocked: false,
        userId: null,
        userPublicKey: null,
        recoveryPublicKey: null,
    }),
    actions: {
        async init(userId = null, userPublicKey = null, recoveryPublicKey = null) {
            this.userId = userId ?? this.userId
            this.userPublicKey = userPublicKey ?? this.userPublicKey
            this.recoveryPublicKey = recoveryPublicKey ?? this.recoveryPublicKey
            this.privateKey = await getPrivateKey(this.userId)
            this.unlocked = this.privateKey !== null
        },
        async recover(backup, file) {
            if (!this.userId) {
                throw new Error('Пользователь не авторизован')
            }
            const text = await file.text()
            const recoveryPrivateKey = await importPrivateKey(text, true)
            const privateKeyPem = await decryptPrivateKey(backup, recoveryPrivateKey)
            const privateKey = await importPrivateKey(privateKeyPem)
            await savePrivateKey(this.userId, privateKey)
            await this.init()
            return true
        },
        async unlock(file) {
            if (!this.userId) return
            const text = await file.text()
            const privateKey = await importPrivateKey(text)
            await savePrivateKey(this.userId, privateKey)
            await this.init()
        },
        async lock() {
            if (!this.userId) return
            await removePrivateKey(this.userId)
            await this.init()
        },
        async createUserKeys() {
            const userPair = await generateKeyPair()
            const recoveryPair = await generateKeyPair()
            const privateKey = await exportPrivateKey(userPair.privateKey)
            const publicKey = await exportPublicKey(userPair.publicKey)
            const recoveryPrivateKey = await exportPrivateKey(recoveryPair.privateKey, true)
            const recoveryPublicKey = await exportPublicKey(recoveryPair.publicKey)
            const recoveryBackupKey = await encryptPrivateKey(privateKey, publicKey, recoveryPublicKey)
            return {
                privateKey,
                publicKey,
                recoveryPrivateKey,
                recoveryPublicKey,
                recoveryBackupKey,
            }
        },
        async confirmKeys(key) {
            if (!this.userId) return
            const privateKey = await importPrivateKey(key)
            await savePrivateKey(this.userId, privateKey)
            await this.init()
        },
        async encrypt(value, recipients = []) {
            const dataKey = await generateDataKey()
            const encrypted = await encryptData(JSON.stringify(value), dataKey)
            const allRecipients = [{
                id: this.userId,
                publicKey: this.userPublicKey,
            }, ...recipients.filter(recipient => recipient.id !== this.userId)]
            const keys = []
            for (const recipient of allRecipients) {
                const publicKey = await importPublicKey(recipient.publicKey)
                const encryptedKey = await encryptDataKey(dataKey, publicKey)
                keys.push({ id: recipient.id, key: encryptedKey })
            }
            return {
                v: 1,
                alg: 'AES-256-GCM',
                iv: encrypted.iv,
                data: encrypted.data,
                keys,
            }
        },
        async decrypt(value) {
            if (!this.privateKey) {
                throw new Error('Ключ шифрования не загружен')
            }
            if (!value?.keys?.length) {
                throw new Error('Ключи шифрования не найдены')
            }
            const recipient = value.keys.find(item => item.id === this.userId)
            if (!recipient) {
                throw new Error('Ключ шифрования для текущего пользователя не найден')
            }
            try {
                const dataKey = await decryptDataKey(recipient.key, this.privateKey)
                const json = await decryptData({ iv: value.iv, data: value.data }, dataKey)
                return JSON.parse(json)
            } catch {
                throw new Error('Не удалось расшифровать данные. Проверьте ключ.')
            }
        },
        downloadKeyFile(filename, content) {
            const blob = new Blob([content], { type: 'application/octet-stream' })
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = filename
            document.body.appendChild(link)
            link.click()
            link.remove()
            URL.revokeObjectURL(url)
        },
    }
})

export function useEncryption() {
    return useEncryptionStore()
}