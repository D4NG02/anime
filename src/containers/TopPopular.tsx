import { lazy, Suspense } from "react";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { Box, Skeleton, useMediaQuery, useTheme } from "@mui/material";
const PresenterTopPopular = lazy(() => import('../presenter/PresenterTopPopular'));

export default function TopPopular() {
    const theme = useTheme()
    const { state } = useStateProvider()

    const Loading = () => {
        const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
        const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'));
        const limit = mdBreakpoint ? 5 : smBreakpoint ? 4 : 3
        const CardPopular = Array.from(Array(limit).keys())

        return (
            <Box component='section' sx={{ paddingInline: { xs: 2, md: 'unset' } }}>
                <Box sx={{
                    marginBottom: 2, gap: 1, display: 'grid',
                    gridTemplateColumns: '64px auto 76px 10% 64px',
                    alignItems: 'flex-end'
                }}>
                    <Skeleton variant="rectangular" component='p' height={30}
                        sx={{ borderRadius: '4px / 6.7px', marginBlock: 'unset' }} />
                    <Skeleton variant="rectangular" component='p' height={4}
                        sx={{ borderRadius: '4px / 6.7px', marginBlock: 'unset' }} />
                    <Skeleton variant="rectangular" component='p' height={30}
                        sx={{ borderRadius: '4px / 6.7px', marginBlock: 'unset' }} />
                    <Skeleton variant="rectangular" component='p' height={4}
                        sx={{ borderRadius: '4px / 6.7px', marginBlock: 'unset' }} />
                    <Skeleton variant="rectangular" component='p' height={30}
                        sx={{ borderRadius: '4px / 6.7px', marginBlock: 'unset' }} />
                </Box>
                <Box sx={{
                    display: 'grid', gap: 1,
                    gridTemplateColumns: {
                        xs: 'repeat(3, 1fr)',
                        sm: 'repeat(4, 1fr)',
                        md: 'repeat(5, 1fr)'
                    }
                }}>
                    {CardPopular.map((cd) => {
                        return (
                            <Box key={cd} sx={{
                                display: 'grid', gap: 1, alignItems: 'center',
                                gridTemplateColumns: { sm: '36px auto' }, position: 'relative'
                            }}>
                                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    <Skeleton variant="rectangular" component='div' sx={{
                                        marginBlock: 'unset', marginBottom: 1,
                                        height: { sm: 162, md: 192 }
                                    }} />
                                    <Skeleton variant="rectangular" component='div' sx={{
                                        marginBlock: 'unset',
                                        height: { sm: 30, md: 30 }
                                    }} />
                                </Box>
                                <Box sx={{ display: { sm: 'none' }, position: 'absolute', bottom: 0 }}>
                                    <Skeleton variant="rectangular" component='div' sx={(theme) => ({
                                        marginBlock: 'unset', height: 36, width: 36,
                                        borderTop: `4px solid ${theme.palette.secondary.main}`,
                                        borderRight: `4px solid ${theme.palette.secondary.main}`
                                    })} />
                                </Box>
                                <Box>
                                    <Skeleton variant="rectangular" component='div' sx={{
                                        marginBlock: 'unset',
                                        height: { xs: 170, sm: 200, md: 230 }
                                    }} />
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        )
    }

    return (
        <Suspense fallback={<Loading />}>
            {state.topPopular.data.length > 0 && <PresenterTopPopular />}
        </Suspense>
    );
}
