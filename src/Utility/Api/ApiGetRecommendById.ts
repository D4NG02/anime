import axios from "axios";
import { ErrorJikanApi } from "./ApiErrorHandle";

export const ApiGetRecommendById = (id: number, setData: (data: any) => void) => {
    axios.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
        .then(function (response) {
            if (response.status === 200) {
                setData(response.data)
            }
        })
        .catch(function (error) {
            ErrorJikanApi(error)
        });
}