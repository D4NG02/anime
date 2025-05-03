import axios from "axios";


export const ApiGetAnime = async (search: string, page: number) => {
    const data = await axios.get('https://api.jikan.moe/v4/anime', {
        params: {
            q: search,
            page: page,
            limit: 10,
            order_by: 'title',
            sort: 'asc'
        }}
    )

    console.log(data)
    return data

    // .then(function (response) {
    //     if (response.status === 200) {
    //         return response.data
    //     }
    // })
    // .catch(function (error) {
    //     if (error.response) {
    //         // that falls out of the range of 2xx
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //     } else if (error.request) {
    //         // The request was made but no response was received
    //         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //         // http.ClientRequest in node.js
    //         console.log(error.request);
    //     } else {
    //         // Something happened in setting up the request that triggered an Error
    //         console.log('Error', error.message);
    //     }
    //     console.log(error.config);
    // });
}