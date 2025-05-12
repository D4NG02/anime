import { useState } from "react";
import {
    Box, Typography, useMediaQuery, useTheme
} from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from '../Utility/Reducer/Constant';
import { ApiGetSchedules } from "../Utility/Api/ApiGetSchedule";
import CardSchedule from "../components/Card/CardSchedule";
import Week from "../components/Week";

export default function PresenterSchedule() {
    const theme = useTheme()
    const { state, dispatch } = useStateProvider()
    const [filterDay, setFilterDay] = useState<string>('monday')

    const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
    const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'));
    const limit = mdBreakpoint ? 5 : smBreakpoint ? 4 : 3
    const currentPage = state.topPopular.pagination.current_page
    const prevPage = currentPage > 1 ? currentPage - 1 : currentPage
    const nextPage = state.topPopular.pagination.has_next_page ? currentPage + 1 : currentPage

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
