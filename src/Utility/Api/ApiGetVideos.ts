import axios from "axios";
import { ErrorJikanApi } from "./ApiErrorHandle";

export const ApiGetVideos = (id: number, setData: (data: any) => void) => {
    axios(`https://api.jikan.moe/v4/anime/${id}/videos`)
        .then(function (response) {
            if (response.status === 200) {
                setData(response.data.data)
            }
        })
        .catch(function (error) {
            ErrorJikanApi(error)
        });
}