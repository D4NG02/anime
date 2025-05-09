import { useNavigate } from "react-router";
import { Button, Card, CardActions, CardHeader, CardMedia } from "@mui/material";
import { useStateProvider } from "../../Utility/Reducer/StateProvider";
import { reducerCases } from "../../Utility/Reducer/Constant";
import { ApiGetAnimeById } from "../../Utility/Api/ApiGetAnimeById";
import { ApiGetRecommendById } from "../../Utility/Api/ApiGetRecommendById";

interface props {
    entry: {
        mal_id: number,
        title: string,
        url: string,
        images: { webp: { image_url: string } }
    }
}

export default function CardRecommend({ entry }: props) {
    let navigate = useNavigate();
    const { state, dispatch } = useStateProvider()

    const handleLearnMore = () => {
        navigate('/detail' + entry.url.split(String(entry.mal_id))[1], { preventScrollReset: false });

        dispatch({
            type: reducerCases.SET_HISTORY_ID,
            payload: state.historyID.length > 0 ?
                [...state.historyID, state.detail.mal_id] : [state.detail.mal_id]
        })

        ApiGetAnimeById(entry.mal_id, (data) => {
            dispatch({ type: reducerCases.SET_DETAIL, payload: data })
        })
        ApiGetRecommendById(entry.mal_id, (data) => {
            dispatch({ type: reducerCases.SET_RECOMMEND, payload: data })
        })
    }

    return (
        <>
            <Card sx={(theme) => ({
                color: 'white', bgcolor: theme.palette.secondary.light,
                border: '1px solid transparent',
                ':hover': { border: `1px solid ${theme.palette.primary.light}` }
            })}>
                <CardMedia component="img" image={entry.images.webp.image_url} alt={entry.title}
                    sx={{ height: { xs: 280, sm: 320 }, objectFit: 'contain' }} />
                <CardHeader slotProps={{ title: { component: 'h2' } }} title={entry.title}
                    sx={{
                        display: 'block', paddingInline: 1,
                        '& .MuiTypography-root': {
                            fontSize: { xs: '1.2rem', sm: '1.3rem' },
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'
                        }
                    }} />
                <CardActions sx={{ paddingInline: 1, paddingTop: 0 }}>
                    <Button variant="contained" onClick={handleLearnMore}
                        loadingPosition="start" size="small"
                        sx={{ fontFamily: 'Pixelify Sans', borderRadius: 4 }}>
                        Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
}
