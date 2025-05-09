import { Box, Typography } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import Genres from "./Genres";
import Studios from "./Studios";
import Producers from "./Producers";
import { useCallback } from "react";

export default function AnimeInfo() {
    const { state } = useStateProvider()

    const Parent = useCallback((props: { text: string, children: any }) => {
        return (
            <Box sx={{ marginBottom: '0.7em' }}>
                <Typography variant="body1" component='span'
                    sx={{ marginRight: '0.5em' }}>
                    {props.text + ':'}
                </Typography>
                {props.children}
            </Box>
        )
    }, [])

    return (
        <Box sx={(theme) => ({
            bgcolor: theme.palette.secondary.light,
            borderRadius: 1, padding: 2
        })}>
            <Typography variant="body1" component='p' gutterBottom
                sx={{
                    display: { xs: 'revert', sm: 'none' },
                    marginBottom: '0.7em', fontWeight: 400
                }}>Overview</Typography>
            <Typography variant='inherit' component='p' fontFamily='open sans' gutterBottom
                sx={{
                    display: { xs: 'revert', sm: 'none' }, opacity: 0.6,
                    marginBottom: '0.7em'
                }}>{state.detail.synopsis}</Typography>

            {state.detail.title_japanese && <Parent text="Japanese">
                <Typography variant='inherit' component='span' fontFamily='open sans'>
                    {state.detail.title_japanese}
                </Typography>
            </Parent>}

            {state.detail.title_synonyms.length > 0 && <Parent text="Synonyms">
                <Typography variant='inherit' component='span' fontFamily='open sans'>
                    {state.detail.title_synonyms.length > 0 ? state.detail.title_synonyms[0] : 'N/A'}
                </Typography>
            </Parent>}

            <Parent text="Score">
                <Typography variant='inherit' component='span' fontFamily='open sans'>
                    {state.detail.score ? state.detail.score : 'N/A'}</Typography>
            </Parent>

            <Parent text="Aired">
                <Typography variant='inherit' component='span' fontFamily='open sans'>
                    {state.detail.episodes === 1 ? (new Date(state.detail.aired.from)).toLocaleDateString() :
                        state.detail.status.includes('Currently Airing') ?
                            (new Date(state.detail.aired.from)).toLocaleDateString() + ' to ?' :
                            (new Date(state.detail.aired.from)).toLocaleDateString() + ' to ' +
                            (new Date(state.detail.aired.to)).toLocaleDateString()
                    }
                </Typography>
            </Parent>

            <Parent text="Status">
                <Typography variant='inherit' component='span' fontFamily='open sans'>
                    {state.detail.status ? state.detail.status : 'N/A'}</Typography>
            </Parent>

            <Parent text="Premiered">
                <Typography variant='inherit' component='span' fontFamily='open sans'>
                    {state.detail.season ?
                        String(state.detail.season).charAt(0).toUpperCase() +
                        String(state.detail.season).slice(1) + ' ' + state.detail.year
                        : 'N/A'}</Typography>
            </Parent>

            <Genres genres={state.detail.genres} />
            <Studios studio={state.detail.studios} />
            <Producers producer={state.detail.producers} />
        </Box>
    );
}
