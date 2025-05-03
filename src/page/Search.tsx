import { lazy, Suspense } from "react";
import { Box, Container } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { animeType } from "../Utility/type";
const PaginationSearch = lazy(() => import('../components/PaginationSearch'));
const SkeletonCardAnime = lazy(() => import('../components/SkeletonCardAnime'));
const CardAnime = lazy(() => import('../components/CardAnime'));

export default function Search() {
    const [{ anime }] = useStateProvider()

    return (
        <Container maxWidth='lg' sx={{
            paddingTop: { xs: 9.2, sm: 12 }, paddingBottom: 3
        }}>
            <Box component='section' sx={{
                display: 'flex', flexWrap: 'wrap',
                gap: anime.length > 0 ? { xs: 1.5, sm: 3 } : 'unset',
                flexDirection: anime.length > 0 ? 'unset' : 'column'
            }}>
                <Suspense fallback={<SkeletonCardAnime />}>
                    {anime.length > 0 && anime.map((data: animeType, idx: number) => {
                        return (
                            <CardAnime key={idx} data={data} />
                        )
                    })}
                </Suspense>
            </Box>
            {anime.length > 0 && <PaginationSearch />}
        </Container>
    );
}
