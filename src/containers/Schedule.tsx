import { lazy, Suspense } from "react";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { Box, Skeleton, Stack } from "@mui/material";
const PresenterSchedule = lazy(() => import('../presenter/PresenterSchedule'));

const today = new Date()
const day = today.getDay()
const week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const filterDay = week[day]

export default function Schedule() {
    const { state } = useStateProvider()

    const Loading = () => {
        const day = Array.from(Array(7).keys())

        return (
            <Box component='section' sx={{ paddingInline: { xs: 2, md: 'unset' } }}>
                <Skeleton variant="rectangular"
                    sx={{ width: { xs: 80, sm: 100 }, height: { xs: 30 }, borderRadius: 1 }} />
                <Stack direction="row" spacing={{ xs: 1, sm: 2 }} marginTop={2}>
                    {day.map((dy) => {
                        return (
                            <Skeleton key={dy} variant="rectangular" sx={{ width: 'calc(100% / 7)', height: { xs: 26 }, borderRadius: 1 }} />
                        )
                    })}
                </Stack>
                <Stack direction="column" spacing={1} marginTop={2}>
                    {day.map((dy) => {
                        return (
                            <Skeleton key={dy} variant="rectangular" sx={{ width: '100%', height: { xs: 28 } }} />
                        )
                    })}
                </Stack>
            </Box>
        )
    }

    return (
        <Suspense fallback={<Loading />}>
            {state.schedules.data.length > 0 && <PresenterSchedule todayDay={filterDay} />}
        </Suspense>
    );
}
