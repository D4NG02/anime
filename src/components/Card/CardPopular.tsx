import { useNavigate } from "react-router";
import {
    Box, Card, CardActions, CardContent,
    CardHeader,
    CardMedia, IconButton, Typography
} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { animeType } from "../../Utility/type";
import { useStateProvider } from "../../Utility/Reducer/StateProvider";
import { reducerCases } from "../../Utility/Reducer/Constant";

export default function CardPopular({ data }: { data: animeType }) {
    let navigate = useNavigate();
    const { state, dispatch } = useStateProvider()

    const handleLearnMore = () => {
        dispatch({ type: reducerCases.SET_DETAIL, payload: data })
        navigate('/detail' + data.url.split(String(data.mal_id))[1]);
    }

    return (
        <Card component='button' onClick={handleLearnMore}
            sx={{
                color: 'white', position: 'relative',
                bgcolor: 'transparent', boxShadow: 'unset',
                padding: 'unset', border: 'unset', borderRadius: 'unset',
                display: { xs: 'block', sm: 'grid' }, alignItems: 'center',
                gridTemplateColumns: 'max-content auto', height: { xs: 210, sm: 250, md: 300 },
            }}>
            <CardHeader title={data.title} subheader={String(data.popularity).padStart(2, '0')}
                slotProps={{
                    title: { variant: 'h6', component: 'p' },
                    subheader: { component: 'p' }
                }}
                sx={(theme) => ({
                    padding: 'unset', display: 'block',
                    height: { sm: '100%' },
                    bottom: { xs: 0, sm: 'unset' },
                    position: { xs: 'absolute', sm: 'unset' },
                    '& .MuiCardHeader-content': {
                        height: 'inherit', gap: 1, justifyContent: 'flex-end',
                        display: 'flex', flexDirection: 'column'
                    },
                    '& .MuiTypography-h6': {
                        display: { xs: 'none', sm: '-webkit-box' },
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOrientation: 'upright',
                        writingMode: 'sideways-lr',
                    },
                    '& .MuiTypography-body1': {
                        textAlign: 'center',
                        paddingBlock: { xs: 0.8, sm: 'unset' },
                        paddingInline: { xs: 1.2, sm: 'unset' },
                        color: theme.palette.text.primary,
                        bgcolor: { xs: theme.palette.secondary.main, sm: 'transparent' }
                    }
                })} />
            <CardMedia component="img" image={data.images.webp.image_url} alt={data.title}
                sx={{ height: '100%', width: '100%', objectFit: 'fill' }} />
        </Card>
    );
}
