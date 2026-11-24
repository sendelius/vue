let config = {
    router: null,
    api: {
        default: '',
    },
    endpoints: {
        auth: {
            me: '/v1/auth/me',
            login: '/v1/auth/login',
            logout: '/v1/auth/logout',
        },
        captcha: {
            challenge: '/v1/captcha/challenge',
            verify: '/v1/captcha/verify',
        }
    },
    title: {
        default: '',
        separator: ' - ',
    },
    redirects: {
        afterLogin: '/',
        afterLogout: '/',
    },
    callbacks: {
        onUnauthorized: null,
        onLogout: null,
    },
}

export const configure = (options = {}) => {
    config = {
        ...config,
        ...options,
    }
}

export const getConfig = () => config