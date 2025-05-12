import { useEffect, useState } from "react";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { ApiGetSchedules } from "../Utility/Api/ApiGetSchedule";
import PresenterSchedule from "../presenter/PresenterSchedule";

export default function Schedule() {
    const [todayDay, setTodayDay] = useState<string>('monday')
    const { state, dispatch } = useStateProvider()

    useEffect(() => {
        const today = new Date()
        const day = today.getDay()
        const week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        const filterDay = week[day]
        const timeoutId = setTimeout(() => {
            setTodayDay(filterDay)
            state.schedules.data.length === 0 && ApiGetSchedules(filterDay, (data) => {
                dispatch({ type: reducerCases.SET_SCHEDULE, payload: data })
            })
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <>
            {state.schedules.data.length > 0 && <PresenterSchedule todayDay={todayDay} />}
        </>
    );
}
