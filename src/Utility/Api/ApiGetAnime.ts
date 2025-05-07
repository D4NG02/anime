import axios from "axios";
import { ErrorJikanApi } from "./ApiErrorHandle";

export const ApiGetAnime = (search: string, stateSearch: string, page: number, limit: number, setData: (data: any) => void) => {
    axios(`https://api.jikan.moe/v4/anime`,
        {
            params: {
                q: search,
                page: stateSearch !== search ? 1 : page,
                limit: limit,
                order_by: 'title',
                sort: 'asc'
            },
        })
        .then(function (response) {
            if (response.status === 200) {
                setData(response.data)
            }
        })
        .catch(function (error) {
            ErrorJikanApi(error)
        });
}