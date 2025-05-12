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
    if (!error.response) {
        error.message === 'Network Error' && console.log('[' + error.message + '] Not connect to the internet')
        error.message !== 'Network Error' && console.log('[' + error.message + ']')
    } else {
        switch (error.response.status) {
            case 400:
                console.log(`[Error: ${error.response.status}] Required parameters were not supplied.`)
                break;

            case 404:
                console.log(`[Error: ${error.response.status}] Parameter value undefined`)
                break;

            case 429:
                console.log(`[Error: ${error.response.data.status}] ${error.response.data.message}`)
                break;

            default:
                console.log(`[Error: ${error.response.status}] `, error.response.statusText);
                console.log(`[Error: ${error.response.status}] `, error.data)
                break;
        }
    }
}