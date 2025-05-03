import { lazy, Suspense } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { useStateProvider } from '../Utility/Reducer/StateProvider';
import { animeType } from '../Utility/type';
const AnimeLoading = lazy(() => import('../components/AnimeLoading'));
const AnimeComponent = lazy(() => import('../components/Anime'));

const Loader = () => {
    return (<AnimeLoading />)
};

export default function AnimeContainer() {
    const [{ anime }] = useStateProvider()

    return (
        <Box component='section' sx={{
            display: 'flex', flexWrap: 'wrap',
            gap: anime.length > 0 ? { xs: 1.5, sm: 3 } : 'unset',
            flexDirection: anime.length > 0 ? 'unset': 'column'
        }}>
            <Suspense fallback={<Loader />}>
                {anime.length > 0 && anime.map((data: animeType, idx: number) => {
                    return (
                        <AnimeComponent key={idx} data={data} />
                    )
                })}
                {anime.length === 0 && <>
                    <Typography variant='h5'>No result found</Typography>
                    <Skeleton variant='rectangular' height={6} />
                </>}
            </Suspense>
        </Box>
    );
}
