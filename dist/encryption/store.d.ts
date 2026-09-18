export function useEncryption(): import('pinia').Store<"encryption", {
    privateKey: any;
    unlocked: boolean;
    userId: any;
    userPublicKey: any;
    recoveryPublicKey: any;
}, {}, {
    init(userId?: any, userPublicKey?: any, recoveryPublicKey?: any): Promise<void>;
    recover(backup: any, file: any): Promise<boolean>;
    unlock(file: any): Promise<void>;
    lock(): Promise<void>;
    createUserKeys(): Promise<{
        privateKey: string;
        publicKey: JsonWebKey;
        recoveryPrivateKey: string;
        recoveryPublicKey: JsonWebKey;
        recoveryBackupKey: {
            v: number;
            alg: string;
            public_key: any;
            iv: string;
            data: string;
            key: string;
        };
    }>;
    confirmKeys(key: any): Promise<void>;
    encrypt(value: any, recipients?: any[]): Promise<{
        v: number;
        alg: string;
        iv: string;
        data: string;
        keys: {
            id: any;
            key: string;
        }[];
    }>;
    decrypt(value: any): Promise<any>;
    downloadKeyFile(filename: any, content: any): void;
}>;
