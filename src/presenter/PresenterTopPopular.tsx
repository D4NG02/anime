import {
    Box, Button, ButtonGroup, Divider,
    Stack, Typography, useMediaQuery, useTheme
} from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from '../Utility/Reducer/Constant';
import { ApiGetTopAnime } from '../Utility/Api/ApiGetTopAnime';
import CardPopular from '../components/Card/CardPopular';

export default function PresenterTopPopular() {
    const theme = useTheme()
    const { state, dispatch } = useStateProvider()

    const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));
    const mdBreakpoint = useMediaQuery(theme.breakpoints.up('md'));
    const limit = mdBreakpoint ? 5 : smBreakpoint ? 4 : 3
    const currentPage = state.topPopular.pagination.current_page
    const prevPage = currentPage > 1 ? currentPage - 1 : currentPage
    const nextPage = state.topPopular.pagination.has_next_page ? currentPage + 1 : currentPage

    const handlePrev = () => {
        ApiGetTopAnime(limit, prevPage, 'bypopularity', (data) => {
            dispatch({ type: reducerCases.SET_TOP_POPULOR, payload: data })
        })
    }
    const handleNext = () => {
        ApiGetTopAnime(limit, nextPage, 'bypopularity', (data) => {
            dispatch({ type: reducerCases.SET_TOP_POPULOR, payload: data })
        })
    }

    return (
        <Box component='section' sx={{ paddingInline: { xs: 2, md: 'unset' } }}>
            <Box sx={{
                marginBottom: 2, gap: 1, display: 'grid',
                gridTemplateColumns: 'max-content auto max-content'
            }}>
                <Typography variant='h5' component='h2' color='textPrimary'>Popular</Typography>
                <Divider textAlign="right" orientation='horizontal'
                    sx={(theme) => ({
                        '& .MuiDivider-wrapper': { display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'flex-end' },
                        ':before': { alignSelf: 'flex-end', borderColor: theme.palette.primary.main },
                        ':after': { alignSelf: 'flex-end', borderColor: theme.palette.primary.main },
                    })}>
                    {[1, 2, 3].map((nm: number) => {
                        return (
                            <Typography key={nm} variant='subtitle1' component='p' fontFamily='Pixelify Sans'
                                sx={(theme) => ({
                                    borderBottomWidth: 1, borderBottomStyle: 'solid',
                                    lineHeight: state.topPopular.pagination.current_page === nm ? 1.75 : 1.4,
                                    borderBottomColor: state.topPopular.pagination.current_page === nm ?
                                        theme.palette.primary.main : theme.palette.secondary.main,
                                })}
                                color={state.topPopular.pagination.current_page === nm ? 'textPrimary' : 'textSecondary'}>{nm}</Typography>
                        )
                    })}
                </Divider>
                <ButtonGroup color='primary' variant='contained' size='small'
                    sx={(theme) => ({
                        '& .MuiButtonGroup-grouped': { minWidth: 'unset' },
                        '& .MuiButton-root': {
                            padding: 0.5,
                            '&.Mui-disabled': { bgcolor: theme.palette.secondary.light },
                        },
                    })}>
                    <Button onClick={handlePrev}
                        disabled={state.topPopular.pagination.current_page === 1 ? true : false}>
                        <NavigateBeforeIcon /></Button>
                    <Button onClick={handleNext}
                        disabled={state.topPopular.pagination.current_page === 3}>
                        <NavigateNextRoundedIcon /></Button>
                </ButtonGroup>
            </Box>
            <Box sx={{
                display: 'grid', gap: { xs: 'unset', md: 1 },
                gridTemplateColumns: {
                    xs: 'repeat(3, 1fr)',
                    sm: 'repeat(4, 1fr)',
                    md: 'repeat(5, 1fr)'
                }
            }}>
                {state.topPopular.data.map((popular, idx: number) => {
                    return (
                        <CardPopular key={idx} data={popular} />
                    )
                })}
            </Box>
        </Box >
    );
}
