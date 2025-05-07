import { useNavigate } from "react-router";
import { Button, Card, CardActions, CardHeader, CardMedia } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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
                color: 'white',
                bgcolor: theme.palette.secondary.light,
                display: 'grid', alignItems: 'center',
                gridTemplateRows: 'auto 80px max-content max-content',
                border: '1px solid transparent',
                ':hover': { border: `1px solid ${theme.palette.primary.light}` }
            })}>
                <CardMedia component="img" image={entry.images.webp.image_url} alt={entry.title} />
                <CardHeader title={entry.title.slice(0, 30)}
                    sx={{
                        overflowY: 'clip', paddingInline: { xs: 1.2, sm: 2 },
                        '& .MuiTypography-root': {
                            fontSize: { xs: '1.15rem', sm: '1.3rem' },
                            lineHeight: 1.2, textOverflow: 'clip'
                        }
                    }} />
                <CardActions sx={{ paddingInline: { xs: 1.2, sm: 2 }, paddingBlock: { xs: 1.2, sm: 2 } }}>
                    <Button variant="contained" onClick={handleLearnMore}
                        loadingPosition="start" startIcon={<PlayArrowIcon />}
                        sx={{ fontFamily: 'Pixelify Sans', borderRadius: 4.4 }}>
                        Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
}
