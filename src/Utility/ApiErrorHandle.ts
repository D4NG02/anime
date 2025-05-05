interface errorType {
    data: any,
    status: any,
    header: any,
    response: any,
    request: any,
    message: any,
    config: any,
}

export const ErrorGetAnimeSearch = (error: errorType) => {
    if (error.response.status === 400) {
        console.log('[Error: Bad request] Required parameters were not supplied.')
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
}