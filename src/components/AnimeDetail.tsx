import { useNavigate } from "react-router";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import ChipRating from "./ChipRating";
import ChipType from "./ChipType";
import ChipEpisode from "./ChipEpisode";

export default function AnimeDetail() {
    let navigate = useNavigate();
    const [{ detail }] = useStateProvider()

    const handleBack = () => {
        navigate('/search');
    }

    return (
        <Box>
            <Typography variant="h4" component='h1'
                sx={{
                    textAlign: { xs: 'center', sm: 'unset' },
                    maxWidth: { xs: 400, sm: 'unset' },
                    margin: { xs: '0 auto 1em', sm: '0 0 0.6em' }
                }}>{detail.title}</Typography>
            <Stack direction='row' spacing={1}
                justifyContent={{ xs: 'center', sm: 'unset' }}
                sx={{ margin: { xs: '0 auto 1em' } }}>
                <ChipRating text={detail.rating} />
                <ChipType text={detail.type} />
                <ChipEpisode text={detail.episodes} />
            </Stack>
            <Stack direction='row' spacing={1}
                justifyContent={{ xs: 'center', sm: 'unset' }}>
                <Button variant="contained" size="small"
                    startIcon={<ArrowBackIosNewRoundedIcon />}
                    onClick={handleBack}>Back</Button>
            </Stack>
            <Typography variant="body1" component='p' fontFamily='open sans'
                sx={{
                    textAlign: 'justify',
                    margin: { sm: '1em 0 0' },
                    display: { xs: 'none', sm: 'revert' }
                }}>{detail.synopsis}</Typography>
        </Box>
    );
}
