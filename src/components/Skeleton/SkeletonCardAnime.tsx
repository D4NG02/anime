import { Box, Skeleton } from "@mui/material";
import { useStateProvider } from "../../Utility/Reducer/StateProvider";

export default function SkeletonCardAnime() {
    const { state } = useStateProvider()
    const loading = Array.from(Array(state.itemPerPage).keys())

    return (
        <>
            {loading.map((_, idx) => {
                return (
                    <Box key={idx} sx={(theme) => ({
                        gap: 1, display: 'flex',
                        flexDirection: 'column',
                        bgcolor: theme.palette.secondary.light + '40',
                        padding: 2
                    })}>
                        <Skeleton variant='rectangular' height={140}
                            sx={(theme) => ({
                                bgcolor: theme.palette.primary.light + '40'
                            })} />
                        <Skeleton variant='rectangular' height={30}
                            sx={(theme) => ({
                                bgcolor: theme.palette.primary.light + '40'
                            })} />
                        <Skeleton variant='rectangular' height={20}
                            sx={(theme) => ({
                                bgcolor: theme.palette.primary.light + '40'
                            })} />
                    </Box>
                )
            })}
        </>
    );
}
