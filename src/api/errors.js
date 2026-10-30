export class ApiError extends Error {
    constructor({ status = null, data = null } = {}) {
        const error = data?.error

        const normalizedError = {
            code: error?.code  ?? 'UNKNOWN_ERROR',
            message: error?.message ?? 'неизвестная ошибка',
            field: error?.field ?? null,
        }

        super(normalizedError.message)

        this.name = 'ApiError'
        this.status = status
        this.data = data
        this.error = normalizedError
        this.field = normalizedError.field
    }
}