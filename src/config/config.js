let config = {
    title: 'APP',
    dbName: 'db-crypto',
    dbVersion: 1,
    storeName: 'keys',
    router: null,
    baseURL: '',
    routeAfterLogin: '/app/',
    routeAfterLogout: '/',
    urlUserInfo: '/auth/user',
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