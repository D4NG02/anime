import axios from "axios";
import { ErrorJikanApi } from "./ApiErrorHandle";

export const ApiGetTopAnime = (
    limit: number,
    page: number,
    filter: "airing" | "upcoming" | "bypopularity" | "favorite",
    setData: (data: any) => void) => {

    axios(`https://api.jikan.moe/v4/top/anime`, {
        params: {
            filter: filter,
            page: page,
            limit: limit,
            sfw: true
        },
    })
        .then(function (response) {
            response.status === 200 && setData(response.data)
        })
        .catch(function (error) {
            ErrorJikanApi(error)
        });
}