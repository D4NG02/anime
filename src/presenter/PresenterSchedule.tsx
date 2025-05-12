import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from '../Utility/Reducer/Constant';
import { ApiGetSchedules } from "../Utility/Api/ApiGetSchedule";
import CardSchedule from "../components/Card/CardSchedule";
import Week from "../components/Week";

export default function PresenterSchedule() {
    const { state, dispatch } = useStateProvider()
    const [filterDay, setFilterDay] = useState<string>('monday')

    const handleChangeDay = (day: string) => {
        filterDay !== day && ApiGetSchedules(day, (data) => {
            dispatch({ type: reducerCases.SET_SCHEDULE, payload: data })
        })
        setFilterDay(day)
    }

    return (
        <Box component='section' sx={{ paddingInline: { xs: 2, md: 'unset' } }}>
            <Typography variant='h5' component='h2' color='textPrimary'>Estimated Schedule</Typography>
            <Week selectedDay={filterDay} handleClick={handleChangeDay} />
            <Box sx={(theme) => ({
                '& .MuiBox-root': {
                    borderBottomWidth: 1, borderBottomStyle: 'solid',
                    borderBottomColor: theme.palette.text.secondary
                }
            })}>
                {state.schedules.data.map((schedule, idx: number) => {
                    return (
                        <CardSchedule key={idx} data={schedule} />
                    )
                })}
            </Box>
        </Box >
    );
}
