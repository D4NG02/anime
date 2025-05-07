import { lazy, useEffect } from "react";
import { reducerCases } from "../Utility/Reducer/Constant";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { ApiGetRecommendById } from "../Utility/Api/ApiGetRecommendById";
import PresenterRecommend from "../presenter/PresenterRecommend";

export default function Recommend() {
    const { state, dispatch } = useStateProvider()

    useEffect(() => {
        ApiGetRecommendById(state.detail.mal_id, (data) => {
            dispatch({ type: reducerCases.SET_RECOMMEND, payload: data })
        })
    }, [])

    return (
        <>
            {state.recommend && state.recommend.length > 0 && <PresenterRecommend />}
        </>
    );
}
