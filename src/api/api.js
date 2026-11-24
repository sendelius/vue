import axios from 'axios'
import {getConfig} from "../config/config.js"

const clients = {}

export const initApi = () => {
    const config = getConfig()
    const options = {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    }
    Object.entries(config.api).forEach(([name, baseURL]) => {
        clients[name] = axios.create({ ...options, baseURL })
    })
    return clients
}

export const getClient = (name = 'default') => {
    const client = clients[name] || clients.default
    if (!client) {
        throw new Error(
            '@sendelius/vue: API-клиенты не инициализированы. Вызови initApi().'
        )
    }
    return client
}