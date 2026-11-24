export function useApi(client?: string): {
    get: (url: any, body?: {}, config?: {}) => Promise<any>;
    post: (url: any, body?: {}, config?: {}) => Promise<any>;
    put: (url: any, body?: {}, config?: {}) => Promise<any>;
    patch: (url: any, body?: {}, config?: {}) => Promise<any>;
    remove: (url: any, body?: {}, config?: {}) => Promise<any>;
    request: (method: any, url: any, data?: {}, config?: {}) => Promise<any>;
};
