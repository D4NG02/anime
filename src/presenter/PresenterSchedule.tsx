import { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from '../Utility/Reducer/Constant';
import { ApiGetSchedules } from "../Utility/Api/ApiGetSchedule";
import CardSchedule from "../components/Card/CardSchedule";
import Week from "../components/Week";

export default function PresenterSchedule({ todayDay }: { todayDay: string }) {
    const { state, dispatch } = useStateProvider()
    const [filterDay, setFilterDay] = useState<string>(todayDay)

    const handleChangeDay = (day: string) => {
        filterDay !== day && ApiGetSchedules(day, (data) => {
            dispatch({ type: reducerCases.SET_SCHEDULE, payload: data })
        })
        setFilterDay(day)
    }

    return (
        <Box component='section' sx={{ paddingInline: { xs: 2, md: 'unset' } }}>
            <Box sx={{
                gap: 1, display: 'grid',
                gridTemplateColumns: 'max-content auto'
            }}>
                <Typography variant='h5' component='h2' color='textPrimary'>Estimated Schedule</Typography>
                <Divider textAlign="right" orientation='horizontal'
                    sx={(theme) => ({ borderColor: theme.palette.primary.main })} />
            </Box>
            <Week selectedDay={filterDay} handleClick={handleChangeDay} />
            <Box sx={(theme) => ({
                paddingTop: 1.5,
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
        </Box>
    );
}
