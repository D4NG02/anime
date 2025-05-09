import { useNavigate } from "react-router";
import {
    Box, Card, CardActions, CardContent,
    CardMedia, IconButton, Typography
} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { animeType } from "../../Utility/type";
import { useStateProvider } from "../../Utility/Reducer/StateProvider";
import { reducerCases } from "../../Utility/Reducer/Constant";

interface props {
    data: animeType
}

export default function CardPopular({ data }: props) {
    let navigate = useNavigate();
    const { state, dispatch } = useStateProvider()

    const handleLearnMore = () => {
        dispatch({
            type: reducerCases.SET_HISTORY_ID,
            payload: state.historyID.length > 0 ?
                [...state.historyID, state.detail.mal_id] : [state.detail.mal_id]
        })
        dispatch({ type: reducerCases.SET_DETAIL, payload: data })
        navigate('/detail' + data.url.split(String(data.mal_id))[1]);
    }

    return (
        <Card sx={{
            color: 'white', paddingBlock: 2, paddingInline: 3,
            bgcolor: 'transparent', boxShadow: 'unset',
            display: 'grid', alignItems: 'center',
            gridTemplateColumns: '54px calc(100% - 54px - 36px) max-content'
        }}>
            <CardMedia component="img" image={data.images.webp.image_url} alt={data.title}
                sx={{ borderRadius: 2 }} />
            <CardContent sx={{ ':last-child': { paddingBottom: 2 } }}>
                <Typography variant="h6" component='h2'
                    sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {data.title}
                </Typography>
                <Box sx={{
                    display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center',
                    paddingTop: 0.4
                }}>
                    <Typography variant="subtitle2">
                        {data.type}
                    </Typography>
                    <Box sx={{ borderRadius: 0.75, height: 6, width: 6, color: 'transparent', bgcolor: 'gray' }}>dot</Box>
                    <Typography variant="subtitle2">
                        {data.duration !== 'Unknown' ? data.duration.split(' ')[0] + 'm' : 'N/A'}
                    </Typography>

                    {data.rating && data.rating.includes('R') && <>
                        <Box sx={{ borderRadius: 0.75, height: 6, width: 6, color: 'transparent', bgcolor: 'gray' }}>dot</Box>
                        <Typography variant="subtitle2"
                            sx={(theme) => ({
                                bgcolor: theme.palette.error.main,
                                padding: '0.08rem 0.4rem', borderRadius: 1.25
                            })}
                        >{data.rating.split(' - ')[0]}</Typography>
                    </>}
                </Box>
            </CardContent>
            <CardActions sx={{ padding: 'unset' }}>
                <IconButton onClick={handleLearnMore} size="small" color="primary"
                    sx={(theme) => ({ border: `1px solid ${theme.palette.primary.main}` })}>
                    <PlayArrowIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
