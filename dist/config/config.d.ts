export function configure(options?: {}): void;
export function getConfig(): {
    title: string;
    dbName: string;
    dbVersion: number;
    storeName: string;
    router: any;
    baseURL: string;
    routeAfterLogin: string;
    routeAfterLogout: string;
    urlUserInfo: string;
    urlLogin: string;
    urlLogout: string;
    onUnauthorized: any;
    onLogout: any;
};
