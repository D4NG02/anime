import { lazy, Suspense } from "react";
import { Box, Skeleton } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
const PresenterTopAiring = lazy(() => import('../presenter/PresenterTopAiring'));

export default function TopAiring() {
    const { state } = useStateProvider()

    const Loading = () => {
        return (
            <Box component='section' sx={(theme) => ({
                height: { xs: '58vh', md:'64vh'}, gap: 3, position: 'relative',
                display: { xs: 'flex', md: 'grid' }, alignItems: 'flex-end',
                gridTemplateColumns: { xs: 'auto', md: '1fr 1fr' },
                bgcolor: theme.palette.secondary.main
            })}>
                <Box sx={{
                    paddingLeft: 2, width: { xs: '80%', md: 'unset' },
                    marginBlock: { xs: 'auto 0', sm: 'unset' }, 
                }}>
                    <Skeleton variant="rectangular" height={30}
                        sx={{
                            borderRadius: '4px / 6.7px',
                            marginBottom: { xs: 1.6, sm: 2, md: 2.4 }
                        }} />
                    <Skeleton variant="rectangular" height={50}
                        sx={{
                            borderRadius: '4px / 6.7px',
                            marginBottom: { xs: 1.6, sm: 2, md: 2.4 }
                        }} />
                    <Skeleton variant="rectangular" height={30}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            marginBottom: { xs: 1.6, sm: 2, md: 2.4 },
                            borderRadius: '4px / 6.7px'
                        }} />
                    <Skeleton variant="rectangular" height={60}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            marginBottom: { xs: 1.6, sm: 2, md: 2.4 },
                            borderRadius: '4px / 6.7px'
                        }} />
                    <Skeleton variant="rectangular" width={120} height={38}
                        sx={{ borderRadius: 4.4 }} />
                </Box>
                <Box sx={{
                    margin: 'auto', position: { xs: 'absolute', md: 'unset' }, top: 30, right: 30,
                }}>
                    <Skeleton variant="rectangular" width={300} height={300}
                        sx={{ display: { xs: 'none', md: 'block' } }} />
                    <Skeleton variant="rectangular" width={200} height={200}
                        sx={{ display: { xs:'none', sm: 'block', md: 'none' } }} />
                    <Skeleton variant="rectangular" width={150} height={150}
                        sx={{ display: { xs: 'block', sm: 'none' } }} />
                </Box>
            </Box>
        )
    }

    return (
        <Suspense fallback={<Loading />}>
            {state.topAiring.data.length > 0 && <PresenterTopAiring />}
        </Suspense>
    );
}
