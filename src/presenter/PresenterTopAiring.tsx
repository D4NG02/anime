import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from '../Utility/Reducer/Constant';
import { animeType } from '../Utility/type';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, EffectCreative, Autoplay } from 'swiper/modules';

export default function PresenterTopAiring() {
    let navigate = useNavigate();
    const { state, dispatch } = useStateProvider()

    const handleLearnMore = (data: animeType) => {
        dispatch({ type: reducerCases.SET_DETAIL, payload: data })
        navigate('/detail' + data.url.split(String(data.mal_id))[1]);
    }

    return (
        <Box component='section'
            sx={(theme) => ({
                color: 'white',
                '& .swiper-button-prev': {
                    borderRadius: 1, display: { xs: 'none', md: 'flex' },
                    top: 'unset', bottom: 20, left: 'unset', right: 20,
                    width: 'max-content', height: 'max-content',
                    color: theme.palette.secondary.contrastText,
                    bgcolor: theme.palette.secondary.light,
                    ':hover': {
                        color: theme.palette.primary.contrastText,
                        bgcolor: theme.palette.primary.main,
                    },
                    '::after': { fontSize: '1rem', fontWeight: 700, padding: 1.4 }
                },
                '& .swiper-button-next': {
                    borderRadius: 1, display: { xs: 'none', md: 'flex' },
                    top: 'unset', bottom: 62, left: 'unset', right: 20,
                    width: 'max-content', height: 'max-content',
                    color: theme.palette.secondary.contrastText,
                    bgcolor: theme.palette.secondary.light,
                    ':hover': {
                        color: theme.palette.primary.contrastText,
                        bgcolor: theme.palette.primary.main,
                    },
                    '::after': { fontSize: '1rem', fontWeight: 700, padding: 1.4 }
                },
                '& .swiper-pagination': {
                    width: 'max-content', height: '100%',
                    gap: 1, display: { xs: 'flex', md: 'none' },
                    flexDirection: 'column', justifyContent: 'center',
                    top: 0, bottom: 'unset', left: 'unset', right: { xs: 10, sm: 20 },
                    '& .swiper-pagination-bullet': {
                        height: 16, width: 4, borderRadius: 2,
                        background: theme.palette.primary.light
                    },
                    '& .swiper-pagination-bullet-active': {
                        background: theme.palette.primary.main
                    }
                }
            })}>
            <Swiper spaceBetween={100} slidesPerView={1} slidesPerGroup={1} pagination={true} loop={true} navigation={true} effect={'creative'}
                creativeEffect={{ prev: { translate: [0, 0, -1000] }, next: { translate: ['100%', 0, 0] } }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Navigation, EffectCreative, Autoplay]}>
                {state.topAiring.map((airing, idx: number) => {
                    return (
                        <SwiperSlide key={idx}>
                            <Box sx={{
                                height: '64vh', zIndex: 0,
                                width: { xs: '100%', md: '66%' },
                                position: 'absolute', top: 0, right: 1, backgroundRepeat: 'no-repeat',
                                backgroundPositionX: '100%', backgroundPositionY: '10%',
                                backgroundSize: { xs: 'calc(54% * 2)', md: 'calc(50% * 2)' },
                                backgroundImage: `url(${airing.images.webp.large_image_url})`,
                                maskImage: {
                                    xs: 'linear-gradient(180deg, transparent 0, rgb(32,31,49) 20%, rgb(32,31,49) 26%, transparent)',
                                    md: 'linear-gradient(270deg, transparent 0, rgb(32,31,49) 30%, rgb(32,31,49) 44%, transparent)'
                                }
                            }}></Box>
                            <Box sx={(theme) => ({
                                height: '64vh', display: 'flex', alignItems: 'flex-end',
                                paddingLeft: 2, bgcolor: theme.palette.secondary.main
                            })}>
                                <Box sx={{ width: { xs: '100%', md: '50%' }, marginBottom: 4 }}>
                                    <Typography gutterBottom variant="h6" component='h6' color="textPrimary"
                                        fontFamily='Pixelify Sans'
                                        sx={{
                                            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.25rem' },
                                            marginBottom: { xs: '1em', sm: '0.6em', md: '0.35em' }
                                        }}>{`#${idx + 1} Airing`}</Typography>
                                    <Typography gutterBottom variant="h2" component='h2'
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: { xs: '1.25rem', sm: '2.2rem', md: '2.6rem' },
                                            marginBottom: { xs: '1.2em', sm: '0.7em', md: '0.35em' }
                                        }}>{airing.title}</Typography>
                                    <Stack direction='row' marginBottom={{ sm: 2 }} spacing={1}
                                        sx={{
                                            display: { xs: 'none', sm: 'block' },
                                            '& .MuiChip-avatarColorDefault': { bgcolor: 'unset', fill: 'white' },
                                            '& .MuiChip-label': { fontWeight: 400, fontSize: '0.9rem', fontFamily: 'open sans', color: 'white' }
                                        }}>
                                        <Chip color="default" avatar={<PlayArrowRoundedIcon />} label={airing.type} />
                                        <Chip color="default" avatar={<AccessTimeRoundedIcon />} label={airing.duration.split(' ')[0] + 'm'} />
                                        <Chip color="default" avatar={<CalendarMonthRoundedIcon />} label={(new Date(airing.aired.from)).toDateString()} />
                                        {airing.episodes && <Chip color="default" label={airing.episodes} />}
                                    </Stack>
                                    <Typography variant="body1" fontFamily='open sans' sx={{
                                        WebkitLineClamp: '4',
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        marginBottom: 2, textAlign: 'justify',
                                        display: { xs: 'none', md: '-webkit-box' }
                                    }}>{airing.synopsis}</Typography>
                                    <Button variant="contained" endIcon={<NavigateNextRoundedIcon />}
                                        sx={{ borderRadius: 4.4, textTransform: 'capitalize' }}
                                        onClick={() => handleLearnMore(airing)}>Detail</Button>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>
    );
}
