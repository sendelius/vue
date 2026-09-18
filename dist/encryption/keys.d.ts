export function generateKeyPair(): Promise<CryptoKeyPair>;
export function exportPrivateKey(key: any, recovery?: boolean): Promise<string>;
export function importPrivateKey(pem: any, recovery?: boolean): Promise<CryptoKey>;
export function exportPublicKey(key: any): Promise<JsonWebKey>;
export function importPublicKey(jwk: any): Promise<CryptoKey>;
export function getPublicKeyFromPrivateKey(privateKey: any): Promise<{
    kty: string;
    n: string;
    e: string;
    alg: string;
    ext: boolean;
}>;
