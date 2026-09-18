export function generateDataKey(): Promise<CryptoKey>;
export function encryptData(data: any, key: any): Promise<{
    iv: string;
    data: string;
}>;
export function decryptData(data: any, key: any): Promise<string>;
export function encryptDataKey(dataKey: any, publicKey: any): Promise<string>;
export function decryptDataKey(encryptedKey: any, privateKey: any): Promise<CryptoKey>;
export function encryptPrivateKey(privateKey: any, publicKey: any, recoveryPublicKey: any): Promise<{
    v: number;
    alg: string;
    public_key: any;
    iv: string;
    data: string;
    key: string;
}>;
export function decryptPrivateKey(backup: any, recoveryPrivateKey: any): Promise<string>;
