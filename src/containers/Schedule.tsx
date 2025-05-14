import { useStateProvider } from "../Utility/Reducer/StateProvider";
import PresenterSchedule from "../presenter/PresenterSchedule";

const today = new Date()
const day = today.getDay()
const week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const filterDay = week[day]

export default function Schedule() {
    const { state } = useStateProvider()

    return (
        <>
            {state.schedules.data.length > 0 && <PresenterSchedule todayDay={filterDay} />}
        </>
    );
}
