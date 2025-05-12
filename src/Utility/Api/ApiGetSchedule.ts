import axios from "axios";
import { ErrorJikanApi } from "./ApiErrorHandle";

export const ApiGetSchedules = (filter: string, setData: (data: any) => void) => {
    axios('https://api.jikan.moe/v4/schedules',
        {
            params: {
                filter: filter,
                sfw: true,
                page: 1,
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