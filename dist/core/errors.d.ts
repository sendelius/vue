export class ApiError extends Error {
    constructor({ status, data }?: {
        status?: any;
        data?: any;
    });
    status: any;
    data: any;
    error: {
        code: any;
        message: any;
        field: any;
    };
    field: any;
}
