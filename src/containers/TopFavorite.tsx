import { useEffect } from "react";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { ApiGetTopAnime } from "../Utility/Api/ApiGetTopAnime";
import { reducerCases } from "../Utility/Reducer/Constant";
import PresenterTopFavorite from "../presenter/PresenterTopFavorite";

export default function TopFavorite() {
    const { state, dispatch } = useStateProvider()

    useEffect(() => {
        state.topFavourite.length === 0 && ApiGetTopAnime(12, 1, "favorite", (data) => {
            dispatch({ type: reducerCases.SET_TOP_FAVOURITE, payload: data })
        })
    }, [])

    return (
        <>
            {state.topFavourite && state.topFavourite.length > 0 && <PresenterTopFavorite />}
        </>
    );
}
