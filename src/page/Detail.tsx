import { useEffect } from "react";
import { ScrollRestoration } from "react-router";
import { Box, Container } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { ErrorJikanApi } from "../Utility/Api/ApiErrorHandle";
import { reducerCases } from "../Utility/Reducer/Constant";
import { defaultPagination } from "../Utility/Reducer/reducer";
import AnimeInfo from "../components/AnimeInfo";
import AnimeDetail from "../components/AnimeDetail";
import Recommend from '../containers/Recommend';
import TopFavorite from "../containers/TopFavorite";

export default function Detail() {
    const { state, dispatch } = useStateProvider()


    useEffect(() => {
        SetDetailData()
    }, [])

    const SetDetailData = async () => {
        const apiEndpoint = [
            `https://api.jikan.moe/v4/anime/${state.detail.mal_id}/recommendations`,
            `https://api.jikan.moe/v4/top/anime?filter=favorite&page=1&limit=12&sfw=true`
        ]

        const results: any[] = [];
        for (const filter of apiEndpoint) {
            try {
                const response = await fetch(filter)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                filter.includes('recommendations') ? results.push(data.data)
                    : results.push(data)
            } catch (error: any) {
                filter.includes('recommendations') ? results.push({ data: [] })
                    : results.push({ data: [], pagination: defaultPagination })
                ErrorJikanApi(error)
            }
        }

        dispatch({
            type: reducerCases.SET_DETAIL_PAGE,
            payload: { recommend: results[0], topFavourite: results[1] }
        })
    }

    return (
        <Container maxWidth='lg' sx={{
            color: 'whitesmoke',
            paddingTop: { xs: 9.2, sm: 12 }, paddingBottom: 3
        }}>
            <ScrollRestoration
                getKey={(location) => {
                    return location.key;
                }}
            />
            {state.detail && <Box component='section' sx={(theme) => ({
                padding: 2, borderRadius: 3,
                bgcolor: theme.palette.secondary.light + '5f',
            })}>
                <Box sx={{
                    gap: { xs: 2, md: 3 }, display: 'grid',
                    gridTemplateRows: { xs: 'auto auto', lg: 'auto' },
                    gridTemplateColumns: { xs: 'auto', lg: 'auto 280px' }
                }}>
                    <Box sx={{
                        display: 'grid', gap: { xs: 2, md: 3 },
                        justifyItems: { xs: 'center', sm: 'unset' },
                        gridTemplateRows: { xs: '340px auto', sm: 'auto', md: 'auto' },
                        gridTemplateColumns: { xs: 'auto', sm: '180px auto', md: '210px auto' }
                    }}>
                        <Box>
                            <img src={state.detail.images.webp.image_url} alt={state.detail.title}
                                style={{ width: '100%' }} />
                        </Box>

                        <AnimeDetail />
                    </Box>

                    <AnimeInfo />
                </Box>
            </Box>}

            <Recommend />
            <TopFavorite />
        </Container>
    );
}
