import { useEffect } from "react";
import { Container, useMediaQuery, useTheme } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { ErrorJikanApi } from "../Utility/Api/ApiErrorHandle";
import { defaultPagination } from "../Utility/Reducer/reducer";
import TopAiring from "../containers/TopAiring";
import TopPopular from "../containers/TopPopular";
import Schedule from "../containers/Schedule";

const today = new Date()
const day = today.getDay()
const week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
const filterDay = week[day]
const Sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Home() {
    const { dispatch } = useStateProvider()
    const theme = useTheme()
    const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
    const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        const limit = mdBreakpoint ? 5 : smBreakpoint ? 4 : 3
        SetHomeData({ limit: 10, page: 1 }, { limit: limit, page: 1 })
    }, [])

    const SetHomeData = async (airing: { limit: number, page: number },
        popular: { limit: number, page: number }) => {
        const topAnimeFilter = [
            `https://api.jikan.moe/v4/top/anime?filter=airing&page=${airing.page}&limit=${airing.limit}&sfw=true`,
            `https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=${popular.page}&limit=${popular.limit}&sfw=true`,
            `https://api.jikan.moe/v4/schedules?filter=${filterDay}&page=1&sfw=true`
        ]

        const results: any[] = [];
        for (const filter of topAnimeFilter) {
            try {
                const response = await fetch(filter)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                results.push(data);
                await Sleep(200);
            } catch (error: any) {
                results.push({ data: [], pagination: defaultPagination });
                ErrorJikanApi(error)
            }
        }

        dispatch({
            type: reducerCases.SET_FIRST_LOAD_HOME,
            payload: { topAiring: results[0], topPopular: results[1], schedules: results[2] }
        })
    }

    return (
        <Container sx={{
            marginBottom: 4,
            gap: { xs: 4, md: 5, lg: 8 },
            marginTop: { xs: 7, sm: 8 },
            paddingInline: { xs: 'unset', md: 2 },
            display: 'flex', flexDirection: 'column',
        }}>
            <TopAiring />
            <TopPopular />
            <Schedule />
        </Container>
    );
}