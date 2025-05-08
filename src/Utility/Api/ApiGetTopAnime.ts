import axios from "axios";
import { ErrorJikanApi } from "./ApiErrorHandle";

export const ApiGetTopAnime = (filter: "airing" | "upcoming" | "bypopularity" | "favorite", setData: (data: any) => void) => {
    axios(`https://api.jikan.moe/v4/top/anime`, {
            params: {
                page: 1,
                limit: 12,
                filter: filter
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