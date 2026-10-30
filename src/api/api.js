import axios from 'axios'
import {getConfig} from "../config/config.js"

let client = null

export const initApi = () => {
    client = axios.create({
        baseURL: getConfig().baseURL,
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
            "@sendelius/vue: initApi() должен быть запущен до getClient()."
        )
    }
    return client
}
