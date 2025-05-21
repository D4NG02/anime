import { useNavigate } from "react-router";
import { Button, Card, CardActions, CardHeader, CardMedia } from "@mui/material";
import { useStateProvider } from "../../Utility/Reducer/StateProvider";
import { reducerCases } from "../../Utility/Reducer/Constant";
import { defaultState } from "../../Utility/Reducer/reducer";
import { ErrorJikanApi } from "../../Utility/Api/ApiErrorHandle";

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

    const handleLearnMore = async () => {
        navigate('/detail' + entry.url.split(String(entry.mal_id))[1], { preventScrollReset: false });

        const apiEndpoint = [
            `https://api.jikan.moe/v4/anime/${entry.mal_id}`,
            `https://api.jikan.moe/v4/anime/${entry.mal_id}/recommendations`
        ]

        const results: any[] = [];
        const defaultDetail = defaultState.detail
        for (const filter of apiEndpoint) {
            try {
                const response = await fetch(filter)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                results.push(data.data)
            } catch (error: any) {
                filter.includes('recommendations') ? results.push({ data: [] })
                    : results.push({ defaultDetail })
                ErrorJikanApi(error)
            }
        }

        dispatch({
            type: reducerCases.SET_DETAIL_PAGE,
            payload: {
                detail: results[0],
                recommend: results[1],
                historyID: state.historyID.length > 0 ?
                    [...state.historyID, state.detail.mal_id] : [state.detail.mal_id]
            }
        })
    }

    return (
        <>
            <Card sx={(theme) => ({
                color: 'white', bgcolor: theme.palette.secondary.light,
                border: `1px solid ${theme.palette.secondary.main}`,
                ':hover': { border: `1px solid ${theme.palette.primary.light}` }
            })}>
                <CardMedia component="img" image={entry.images.webp.image_url} alt={entry.title}
                    sx={{ height: { xs: 280, sm: 320 }, objectFit: 'contain' }} />
                <CardHeader slotProps={{ title: { component: 'h2' } }} title={entry.title}
                    sx={{
                        display: 'block', paddingInline: 1,
                        '& .MuiTypography-root': {
                            fontSize: { xs: '1.2rem', sm: '1.3rem' },
                            WebkitLineClamp: '1',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            display: '-webkit-box'
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
