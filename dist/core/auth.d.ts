export function useAuth(): import('pinia').Store<"auth", {
    user: {};
    avatar: {
        color: string;
        initials: string;
        image: string;
    };
    isAuth: boolean;
    isInit: boolean;
}, {}, {
    init(check?: boolean): Promise<boolean>;
    login(login: any, password: any, captcha: any): Promise<boolean>;
    logout(): Promise<void>;
    clear(): void;
}>;
