import { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { ApiGetSchedules } from "../Utility/Api/ApiGetSchedule";
import PresenterSchedule from "../presenter/PresenterSchedule";

interface type {
    filter: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"
}

export default function Schedule() {
    const theme = useTheme()
    const [filterDay, setFilterDay] = useState<type['filter']>('monday')
    const { state, dispatch } = useStateProvider()
    const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
    const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const limit = mdBreakpoint ? 5 : smBreakpoint ? 4 : 3
            state.schedules.data.length === 0 && ApiGetSchedules(filterDay, (data) => {
                dispatch({ type: reducerCases.SET_SCHEDULE, payload: data })
            })
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <>
            {state.schedules.data.length > 0 && <PresenterSchedule />}
        </>
    );
}
