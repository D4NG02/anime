import { lazy, Suspense } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { animeType } from "../Utility/type";
const PaginationSearch = lazy(() => import('../components/Pagination/PaginationSearch'));
const SkeletonCardAnime = lazy(() => import('../components/Skeleton/SkeletonCardAnime'));
const CardSearch = lazy(() => {
    return Promise.all([
        import("../components/Card/CardSearch"),
        new Promise(resolve => setTimeout(resolve, 250))
    ])
        .then(([moduleExports]) => moduleExports);
});

export default function Search() {
    const { state } = useStateProvider()

    return (
        <Container maxWidth='lg' sx={{
            paddingTop: { xs: 9.2, sm: 12 }, paddingBottom: 3
        }}>
            <Box component='section' sx={{
                gap: state.searchAnime.data.length > 0 ? { xs: 1.6, sm: 2, lg: 3 } : 'unset',
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                    lg: 'repeat(5, 1fr)'
                }
            }}>
                <Suspense fallback={<SkeletonCardAnime />}>
                    {state.search && state.searchAnime.data.length === 0 && <>
                        <Typography variant="h3" component='h1' color='primary' textAlign='center'>No Results found</Typography>
                        <Typography variant="h5" component='h2' color='primary' textAlign='center'>Search again</Typography>
                    </>}
                    {state.searchAnime.data.length > 0 && state.searchAnime.data.map((data: animeType, idx: number) => {
                        return (
                            <CardSearch key={idx} data={data} />
                        )
                    })}
                </Suspense>
            </Box>
            {state.searchAnime.data.length > 0 && <PaginationSearch />}
        </Container>
    );
}
