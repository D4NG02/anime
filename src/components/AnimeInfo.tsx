import { Box, Typography } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import Genres from "./Genres";
import Studios from "./Studios";
import Producers from "./Producers";

export default function AnimeInfo() {
    const [{ detail }] = useStateProvider()

    const Parent = (props: {text: string, children: any}) => {
        return (
            <Box sx={{ marginBottom: '0.7em' }}>
                <Typography variant="body1" component='span'
                    sx={{ marginRight: '0.5em' }}>
                    {props.text}
                </Typography>
                {props.children}
            </Box>
        )
    }

    return (
        <Box sx={(theme) => ({
            bgcolor: theme.palette.secondary.light, borderRadius: 1,
            padding: 2,
        })}>
            <Typography variant="body1" component='p' gutterBottom
                sx={{
                    display: { xs: 'revert', sm: 'none' },
                    marginBottom: '0.7em', fontWeight: 400
                }}>Overview</Typography>
            <Typography variant="body2" component='p' fontFamily='open sans' gutterBottom
                sx={{
                    display: { xs: 'revert', sm: 'none' }, opacity: 0.6,
                    marginBottom: '0.7em'
                }}>{detail.synopsis}</Typography>

            {detail.title_japanese && <Parent text="Japanese:">
                <Typography variant="body2" component='span' fontFamily='open sans'>
                    {detail.title_japanese}
                </Typography>
            </Parent>}

            {detail.title_synonyms.length > 0 && <Parent text="Synonyms:">
                <Typography variant="body2" component='span' fontFamily='open sans'>
                    {detail.title_synonyms.length > 0 ? detail.title_synonyms[0] : 'N/A'}
                </Typography>
            </Parent>}

            <Typography variant="body2" component='p' fontFamily='open sans'
                sx={{
                    overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis',
                    marginBottom: '0.7em'
                }}>
                Score: {detail.score ? detail.score : 'N/A'}</Typography>

            <Typography variant="body2" component='p' fontFamily='open sans'
                sx={{
                    overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis',
                    marginBottom: '0.7em'
                }}>
                {'Aired:  ' + (new Date(detail.aired.from)).toLocaleDateString() + ' to '}
                {detail.status.includes('Complete') ?
                    (new Date(detail.aired.to)).toLocaleDateString() : '?'}
            </Typography>

            <Typography variant="body2" component='p' fontFamily='open sans'
                sx={{
                    overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis',
                    marginBottom: '0.7em'
                }}>
                Status: {detail.status ? detail.status : 'N/A'}</Typography>

            <Typography variant="body2" component='p' fontFamily='open sans'
                sx={{
                    overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis',
                    marginBottom: '0.7em'
                }}>
                Premiered: {detail.season ?
                    String(detail.season).charAt(0).toUpperCase() + String(detail.season).slice(1) + ' ' + detail.year
                    : 'N/A'}</Typography>

            <Genres genres={detail.genres} />
            <Studios studio={detail.studios} />
            <Producers producer={detail.producers} />
        </Box>
    );
}
