import {getConfig} from "../config/config.js"

const RSA_ALGORITHM = {
    name: 'RSA-OAEP',
    modulusLength: 3072,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: 'SHA-256',
}

export async function generateKeyPair() {
    return await crypto.subtle.generateKey(RSA_ALGORITHM, true, ['encrypt', 'decrypt'])
}

export async function exportPrivateKey(key, recovery = false) {
    const data = await crypto.subtle.exportKey('pkcs8', key,)
    return bytesToPem(new Uint8Array(data), (recovery) ? 'RECOVERY KEY' : 'PRIVATE KEY')
}

export async function importPrivateKey(pem, recovery = false) {
    const bytes = pemToBytes(pem, (recovery) ? 'RECOVERY KEY' : 'PRIVATE KEY')
    return await crypto.subtle.importKey(
        'pkcs8',
        bytes,
        {
            name: 'RSA-OAEP',
            hash: 'SHA-256',
        },
        false,
        ['decrypt'],
    )
}

export async function exportPublicKey(key) {
    return await crypto.subtle.exportKey('jwk', key)
}

export async function importPublicKey(jwk) {
    return await crypto.subtle.importKey(
        'jwk',
        jwk,
        {
            name: 'RSA-OAEP',
            hash: 'SHA-256',
        },
        false,
        ['encrypt'],
    )
}

function bytesToPem(bytes, title) {
    const base64 = btoa(String.fromCharCode(...bytes))
    const lines = base64.match(/.{1,64}/g) || []
    const mainTitle = getConfig()?.title
    return [
        `-----BEGIN ${mainTitle} ${title}-----`,
        ...lines,
        `-----END ${mainTitle} ${title}-----`,
    ].join('\n')
}

function pemToBytes(pem, title) {
    const mainTitle = getConfig()?.title
    const header = `-----BEGIN ${mainTitle} ${title}-----`
    const footer = `-----END ${mainTitle} ${title}-----`
    const start = pem.indexOf(header)
    const end = pem.indexOf(footer)
    if (start === -1 || end === -1) {
        throw new Error('Неверный формат PEM')
    }

    const base64 = pem.slice(start + header.length, end).replace(/\s/g, '')
    if (!base64) {
        throw new Error('Пустые данные PEM')
    }

    try {
        const binary = atob(base64)
        return Uint8Array.from(binary, char => char.charCodeAt(0))
    } catch {
        throw new Error('Некорректные данные PEM в формате base64')
    }
}

export async function getPublicKeyFromPrivateKey(privateKey) {
    const jwk = await crypto.subtle.exportKey('jwk', privateKey)
    return {
        kty: jwk.kty,
        n: jwk.n,
        e: jwk.e,
        alg: jwk.alg,
        ext: jwk.ext,
    }
}