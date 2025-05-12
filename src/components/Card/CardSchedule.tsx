import { Box, Typography } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { animeType } from "../../Utility/type";

interface props {
    data: animeType
}

export default function CardSchedule({ data }: props) {
    return (
        <>
            {data.broadcast.time && <Box sx={(theme) => ({
                display: 'grid', gridTemplateColumns: 'max-content auto', alignItems: 'center', gap: 2,
                '&:hover': {
                    '& p': {
                        color: theme.palette.text.primary
                    },
                    '& h3': {
                        color: theme.palette.text.primary,
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        display: '-webkit-box'
                    }
                },
                '& h3': {
                    WebkitLineClamp: '1',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    display: '-webkit-box'
                }
            })}>
                <Typography color='textSecondary' component='p' fontFamily='open sans'>{data.broadcast.time}</Typography>
                <Typography color='white' variant="h6" component='h3'>{data.title}</Typography>
                {/* <Button></Button> */}
            </Box>}
        </>
    );
}
