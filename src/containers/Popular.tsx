import { useEffect } from "react";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { ApiGetTopAnime } from "../Utility/Api/ApiGetTopAnime";
import { reducerCases } from "../Utility/Reducer/Constant";
import PresenterPopular from "../presenter/PresenterPopular";

export default function Popular() {
    const { state, dispatch } = useStateProvider()

    useEffect(() => {
        ApiGetTopAnime("favorite", (data) => {
            dispatch({ type: reducerCases.SET_POPULAR, payload: data })
        })
    }, [])

    return (
        <>
            {state.popular && state.popular.length > 0 && <PresenterPopular />}
        </>
    );
}
