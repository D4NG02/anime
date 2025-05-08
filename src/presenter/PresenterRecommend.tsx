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
        <Box component='section' marginTop={{ xs: 4, md: 3 }}>
            <Typography variant="h5" component='h1' color="primary"
                sx={{ marginBottom: 1.4 }}>Recommended for you</Typography>
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