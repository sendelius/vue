export function bytesToBase64Url(bytes) {
    let binary = ''
    for (const byte of bytes) {
        binary += String.fromCharCode(byte)
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

export function base64UrlToBytes(value) {
    value = value.replace(/-/g, '+').replace(/_/g, '/')
    while (value.length % 4) {
        value += '='
    }
    const binary = atob(value)
    return Uint8Array.from(binary, char => char.charCodeAt(0))
}

export function stringToBytes(value) {
    return new TextEncoder().encode(value)
}

export function bytesToString(value) {
    return new TextDecoder().decode(value)
}