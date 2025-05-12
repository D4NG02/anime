import { useEffect } from "react";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { ApiGetTopAnime } from "../Utility/Api/ApiGetTopAnime";
import { reducerCases } from "../Utility/Reducer/Constant";
import PresenterTopPopular from "../presenter/PresenterTopPopular";
import { useMediaQuery, useTheme } from "@mui/material";

export default function TopPopular() {
    const theme = useTheme()
    const { state, dispatch } = useStateProvider()
    const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
    const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const limit = mdBreakpoint ? 5 : smBreakpoint ? 4 : 3
            state.topPopular.data.length === 0 && ApiGetTopAnime(limit, 1, 'bypopularity', (data) => {
                dispatch({ type: reducerCases.SET_TOP_POPULOR, payload: data })
            })
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <>
            {state.topPopular.data.length > 0 && <PresenterTopPopular />}
        </>
    );
}
