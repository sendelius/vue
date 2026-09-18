import {getClient} from './api.js'
import {getConfig} from '../config/config.js'
import {ApiError} from './errors.js'

/* ----------------------------------- HTTP METHODS --------------------------------------- */
export async function get(url, params = {}, config = {}) {
    return request('get', url, { params, ...config })
}

export async function post(url, body = {}, config = {}) {
    return request('post', url, body, config)
}

export async function put(url, body = {}, config = {}) {
    return request('put', url, body, config)
}

export async function patch(url, body = {}, config = {}) {
    return request('patch', url, body, config)
}

export async function remove(url, body = {}, config = {}) {
    return request('delete', url, body, config)
}

/* ----------------------------------- MAIN REQUEST --------------------------------------- */
export async function request(method, url, data = {}, config = {}) {
    let response
    try {
        if (method === 'get') {
            response = await getClient().get(url, data)
        } else if (method === 'delete') {
            response = await getClient().delete(url, {
                data,
                ...config,
            })
        } else {
            response = await getClient()[method](url, data, config)
        }
    } catch (error) {
        if (error.response?.status === 401) {
            getConfig().onUnauthorized?.()
        }
        throw new ApiError(error)
    }

    const responseData = response.data
    if (responseData?.status !== 'success') {
        throw new ApiError({
            message: responseData?.error || responseData?.message || 'неизвестная ошибка',
            status: response.status,
            data: responseData,
        })
    }
    return responseData
}