import { ScrollRestoration } from "react-router";
import { Box, Container } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import AnimeInfo from "../components/AnimeInfo";
import AnimeDetail from "../components/AnimeDetail";
import Recommend from '../containers/Recommend';
import TopFavorite from "../containers/TopFavorite";

export default function Detail() {
    const { state } = useStateProvider()

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
