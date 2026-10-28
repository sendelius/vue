let config = {
    router: null,
    baseURL: '',
    routeAfterLogin: '/app/',
    routeAfterLogout: '/',
    urlUserInfo: '/auth/me',
    urlLogin: '/auth/login',
    urlLogout: '/auth/logout',
    onUnauthorized: null,
    onLogout: null,
}

export const configure = (options = {}) => {
    config = {
        ...config,
        ...options,
    }
}

export const getConfig = () => config