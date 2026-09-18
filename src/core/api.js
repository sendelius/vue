import axios from 'axios'
import {getConfig} from "../config/config.js"

let client = null

export const initApi = () => {
    const config = getConfig()

    client = axios.create({
        baseURL: config.baseURL,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })

    return client
}

export const getClient = () => {
    if (!client) {
        throw new Error(
            "@sendelius/vue: configure() должен быть запущен до getClient()."
        )
    }
    return client
}
