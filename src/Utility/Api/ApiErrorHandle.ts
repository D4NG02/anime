interface errorType {
    data: any,
    status: any,
    header: any,
    response: any,
    request: any,
    message: any,
    config: any,
}

export const ErrorJikanApi = (error: errorType) => {
    switch (error.response.status) {
        case 400:
            console.log(`[Error: ${error.response}] Required parameters were not supplied.`)
            break;

        case 404:
            console.log(`[Error: ${error.response}] Parameter value undefined`)
            break;

        default:
            console.log('Error', error.message);
            break;
    }
}