import { useNavigate } from "react-router";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { defaultPagination, defaultState } from "../Utility/Reducer/reducer";
import { ErrorJikanApi } from "../Utility/Api/ApiErrorHandle";
import ChipRating from "./Chip/ChipRating";
import ChipType from "./Chip/ChipType";
import ChipEpisode from "./Chip/ChipEpisode";

export default function AnimeDetail() {
    let navigate = useNavigate();
    const { state, dispatch } = useStateProvider()

    const handleBack = () => {
        const historyID = state.historyID.pop()
        navigate(-1);
        if (historyID) {
            SetDetailData(historyID)
        } else {
            dispatch({
                type: reducerCases.RESET_ALL,
                payload: {
                    detail: defaultState.detail,
                    recommend: [],
                    topFavourite: { data: [], pagination: defaultPagination }
                }
            })
        }
    }

    const SetDetailData = async (id: number) => {
        const apiEndpoint = [
            `https://api.jikan.moe/v4/anime/${id}`,
            `https://api.jikan.moe/v4/anime/${id}/recommendations`
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
                historyID: state.historyID
            }
        })
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
