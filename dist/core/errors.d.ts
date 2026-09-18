export class ApiError extends Error {
    constructor(e: any);
    status: any;
    data: any;
    field: any;
}
