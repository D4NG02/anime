import { useNavigate } from "react-router";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { ApiGetAnimeById } from "../Utility/Api/ApiGetAnimeById";
import { ApiGetRecommendById } from "../Utility/Api/ApiGetRecommendById";
import ChipRating from "./ChipRating";
import ChipType from "./ChipType";
import ChipEpisode from "./ChipEpisode";

export default function AnimeDetail() {
    let navigate = useNavigate();
    const { state, dispatch } = useStateProvider()

    const handleBack = () => {
        const historyID = state.historyID.pop()
        navigate(-1);
        if (historyID) {
            dispatch({ type: reducerCases.SET_HISTORY_ID, payload: state.historyID })
            ApiGetAnimeById(historyID, (data)=>{
                dispatch({ type: reducerCases.SET_DETAIL, payload: data })
            })
            ApiGetRecommendById(historyID, (data)=>{
                dispatch({ type: reducerCases.SET_RECOMMEND, payload: data })
            })
        } else {
            dispatch({ type: reducerCases.RESET_DETAIL })
            dispatch({ type: reducerCases.RESET_RECOMMEND })
        }
    }

    return (
        <Box>
            <Typography variant="h4" component='h2'
                sx={{
                    textAlign: { xs: 'center', sm: 'unset' },
                    maxWidth: { xs: 400, sm: 'unset' },
                    margin: { xs: '0 auto 1em', sm: '0 0 0.6em' }
                }}>{state.detail.title}</Typography>
            <Stack direction='row' spacing={1}
                justifyContent={{ xs: 'center', sm: 'unset' }}
                sx={{ margin: { xs: '0 auto 1em' } }}>
                <ChipRating text={state.detail.rating} />
                <ChipType text={state.detail.type} />
                <ChipEpisode text={state.detail.episodes} />
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
                }}>{state.detail.synopsis}</Typography>
        </Box>
    );
}
