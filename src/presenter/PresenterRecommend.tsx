import { Box, Divider, Typography } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import CardRecommend from "../components/Card/CardRecommend";

interface props {
    entry: {
        mal_id: number,
        title: string,
        url: string,
        images: { webp: { image_url: string } }
    }
}
export default function PresenterRecommend() {
    const { state } = useStateProvider()

    return (
        <Box component='section' marginTop={3}>
            <Typography variant="h5" component='h1' color="primary"
                sx={{ display: { xs: 'revert', sm: 'none' }, marginBottom: 1.4 }}>Recommended for you</Typography>
            <Divider textAlign="left" sx={(theme) => ({
                display: { xs: 'none', sm: 'flex' }, marginBottom: 1.4,
                ':before': { width: '6%', borderColor: theme.palette.primary.main },
                ':after': { borderColor: theme.palette.primary.main }
            })}>
                <Typography variant="h5" component='h1' color="primary">Recommended for you</Typography>
            </Divider>
            <Box sx={{
                gap: 2, display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                    lg: 'repeat(5, 1fr)'
                }
            }}>
                {state.recommend.map(({ entry }: props, idx: number) => {
                    return (
                        <CardRecommend key={idx} entry={entry} />
                    )
                })}
            </Box>
        </Box>
    );
}