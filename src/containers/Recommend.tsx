import { lazy, useEffect } from "react";
import { reducerCases } from "../Utility/Reducer/Constant";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { ApiGetRecommendById } from "../Utility/Api/ApiGetRecommendById";

const PresenterRecommend = lazy(() => {
    return Promise.all([
        import("../presenter/PresenterRecommend"),
        new Promise(resolve => setTimeout(resolve, 200))
    ])
        .then(([moduleExports]) => moduleExports);
});

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
