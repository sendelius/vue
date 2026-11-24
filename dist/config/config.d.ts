export function configure(options?: {}): void;
export function getConfig(): {
    router: any;
    api: {
        default: string;
    };
    baseTitle: string;
    baseTitleSeparator: string;
    routeAfterLogin: string;
    routeAfterLogout: string;
    urlUserInfo: string;
    urlLogin: string;
    urlLogout: string;
    onUnauthorized: any;
    onLogout: any;
};
