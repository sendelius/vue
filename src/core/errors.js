export class ApiError extends Error {
    constructor(e) {
        const data = e.response?.data
        super(data?.error ?? data?.message ?? 'неизвестная ошибка')
        this.name = 'ApiError'
        this.status = e.response?.status ?? null
        this.data = data ?? null
        this.field = data?.field ?? null
    }
}