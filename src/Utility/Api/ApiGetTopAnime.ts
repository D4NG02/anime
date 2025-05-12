import axios from "axios";
import { ErrorJikanApi } from "./ApiErrorHandle";

export const ApiGetTopAnime = (
    limit: number,
    page: number,
    filter: "airing" | "upcoming" | "bypopularity" | "favorite",
    setData: (data: any) => void) => {

    axios(`https://api.jikan.moe/v4/top/anime`, {
        params: {
            page: page,
            limit: limit,
            filter: filter,
            sfw: true
        },
    })
        .then(function (response) {
            if (response.status === 200) {
                filter === 'bypopularity' ? setData(response) : setData(response.data)
            }
        })
        .catch(function (error) {
            ErrorJikanApi(error)
        });
}