import { useEffect } from "react";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { ApiGetTopAnime } from "../Utility/Api/ApiGetTopAnime";
import { reducerCases } from "../Utility/Reducer/Constant";
import PresenterTopAiring from "../presenter/PresenterTopAiring";

export default function TopAiring() {
    const { state, dispatch } = useStateProvider()

    useEffect(() => {
        state.popular.length === 0 && ApiGetTopAnime('airing', (data) => {
            dispatch({ type: reducerCases.SET_TOP_AIRING, payload: data })
        })
    }, [])

    return (
        <>
            <PresenterTopAiring />
        </>
    );
}
