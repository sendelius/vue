export function configure(options?: {}): void;
export function getConfig(): {
    router: any;
    api: {
        default: string;
    };
    endpoints: {
        auth: {
            me: string;
            login: string;
            logout: string;
        };
        captcha: {
            challenge: string;
            verify: string;
        };
    };
    title: {
        default: string;
        separator: string;
    };
    redirects: {
        afterLogin: string;
        afterLogout: string;
    };
    callbacks: {
        onUnauthorized: any;
        onLogout: any;
    };
};
