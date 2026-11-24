import {getClient} from './api.js'
import {getConfig} from '../config/config.js'
import {ApiError} from './errors.js'

async function request(method, url, data = {}, config = {}, client = 'default') {
    const api = getClient(client)
    let response
    try {
        if (method === 'get') {
            response = await api.get(url, { params: data, ...config })
        } else if (method === 'delete') {
            response = await api.delete(url, { data, ...config })
        } else {
            response = await api[method](url, data, config)
        }
    } catch (error) {
        if (error.response?.status === 401) {
            getConfig().callbacks.onUnauthorized?.()
        }
        throw new ApiError({
            status: error.response?.status ?? null,
            data: error.response?.data ?? null
        })
    }

    const responseData = response.data
    if (responseData?.status !== 'success') {
        throw new ApiError({
            status: response.status,
            data: responseData,
        })
    }
    return responseData
}

export function useApi(client = 'default') {
    return {
        get: (url, body = {}, config = {}) => request('get', url, body, config, client),
        post: (url, body = {}, config = {}) => request('post', url, body, config, client),
        put: (url, body = {}, config = {}) => request('put', url, body, config, client),
        patch: (url, body = {}, config = {}) => request('patch', url, body, config, client),
        remove: (url, body = {}, config = {}) => request('delete', url, body, config, client),
        request: (method, url, data = {}, config = {}) => request(method, url, data, config, client),
    }
}