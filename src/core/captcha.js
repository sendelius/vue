import {get, post} from './requests.js'

export async function captcha() {
    const challenge = await create()
    const nonce = await calculateNonce(challenge.challenge)
    return verify(challenge.id, nonce)
}

async function create() {
    return get('/captcha/challenge')
}

async function verify(id, nonce) {
    const response = await post('/captcha/verify', { id, nonce })
    return response?.token
}

async function calculateNonce(challenge) {
    const prefix = '0'.repeat(4)
    let nonce = 0
    while (true) {
        const hash = await sha256(`${challenge}:${nonce}`)
        if (hash.startsWith(prefix)) {
            return nonce
        }
        nonce++
    }
}

async function sha256(value) {
    const data = new TextEncoder().encode(value)
    const hash = await crypto.subtle.digest('SHA-256', data)
    return Array.from(new Uint8Array(hash)).map(byte => byte.toString(16).padStart(2, '0')).join('')
}