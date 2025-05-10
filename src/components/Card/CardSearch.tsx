import { useNavigate } from "react-router";
import { lazy, MouseEvent, useState } from "react";
import {
    Box, Button, Card, CardActions, CardContent,
    CardHeader, CardMedia,
    Typography
} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { animeType } from "../../Utility/type";
import { useStateProvider } from "../../Utility/Reducer/StateProvider";
import { reducerCases } from "../../Utility/Reducer/Constant";
const PopoverAnimeDetail = lazy(() => import('../Popover/PopoverAnimeDetail'));

interface props {
    data: animeType
}

export default function CardSearch({ data }: props) {
    let navigate = useNavigate();
    const { dispatch } = useStateProvider()
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleLearnMore = () => {
        dispatch({ type: reducerCases.SET_DETAIL, payload: data })
        navigate('/detail' + data.url.split(String(data.mal_id))[1]);
    }

    return (
        <>
            <Card sx={(theme) => ({
                color: 'white', bgcolor: theme.palette.secondary.light,
                border: open ? `1px solid ${theme.palette.primary.light}` : '1px solid transparent'
            })}>
                <CardMedia component="img" image={data.images.webp.image_url} alt={data.title}
                    onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}
                    sx={{ height: { xs: 280, sm: 320 }, objectFit: 'contain' }} />
                <CardHeader title={data.title} slotProps={{title: {component: 'h2'}}}
                    sx={{
                        display: 'block', paddingInline: { xs: 1.2, sm: 2 },
                        '& .MuiTypography-root': {
                            fontSize: { xs: '1.15rem', sm: '1.3rem' },
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'
                        }
                    }} />
                <CardContent sx={{
                    display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center',
                    paddingBlock: 'unset', paddingInline: { xs: 1.2, sm: 2 }
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
                    </>
                    }
                </CardContent>
                <CardActions sx={{ paddingInline: { xs: 1.2, sm: 2 }, paddingBlock: { xs: 1.2, sm: 2 } }}>
                    <Button variant="contained" size="small" onClick={handleLearnMore}
                        startIcon={<PlayArrowIcon />}
                        sx={{ fontFamily: 'Pixelify Sans', borderRadius: 4 }}>
                        Learn More</Button>
                </CardActions>
            </Card>

            <PopoverAnimeDetail open={open} anchorEl={anchorEl} handleClose={handlePopoverClose} data={data} />
        </>
    );
}
