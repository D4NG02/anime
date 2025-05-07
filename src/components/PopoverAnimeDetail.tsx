import { Box, Popover, Stack, Typography } from "@mui/material";
import { searchAnimeType } from "../Utility/type";
import StarIcon from '@mui/icons-material/Star';

interface props {
    data: searchAnimeType,
    open: boolean,
    anchorEl: HTMLElement | null,
    handleClose: () => void
}

export default function PopoverAnimeDetail({ data, open, anchorEl, handleClose }: props) {
    return (
        <Popover sx={(theme) => ({
            pointerEvents: 'none',
            '& .MuiPopover-paper': {
                bgcolor: theme.palette.secondary.light,
                width: 280, padding: 2,
                display: 'flex', gap: 1.6, flexDirection: 'column'
            }
        })}
            open={open} anchorEl={anchorEl}
            onClose={handleClose} disableRestoreFocus
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}>
            <Typography variant="h6">{data.title}</Typography>
            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 0.4, alignItems: 'center' }}>
                    {data.rating && <Typography variant="caption"
                        sx={(theme) => ({
                            bgcolor: data.rating.includes('R') ? theme.palette.error.main : theme.palette.info.main,
                            padding: '0.06rem 0.4rem', borderRadius: 1
                        })}
                    >{data.rating.split(' - ')[0]}</Typography>}
                    <Typography variant="caption"
                        sx={{ bgcolor: 'lightgray', padding: '0.06rem 0.4rem', borderRadius: 1 }}
                    >{data.episodes ? data.episodes + ' epi' : 'N/A'}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                    <Typography variant="caption"
                        sx={(theme) => ({
                            bgcolor: theme.palette.info.main,
                            padding: '0.06rem 0.4rem', borderRadius: 1
                        })}>{data.type}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                    <StarIcon color='warning' sx={{ marginBottom: 0.5, fontSize: '1.2rem' }} />
                    <Typography variant="caption">{data.score ? data.score : 'N/A'}</Typography>
                </Box>
            </Stack>
            <Typography variant="body1" component='p'
                sx={{ overflowY: 'clip', maxHeight: 72, textOverflow: 'ellipsis' }}>{data.synopsis}</Typography>
            <Stack>
                {data.titles.length > 0 && data.titles.map(({ type, title }, idx) => {
                    if (type && type.includes('Japan')) {
                        return (
                            <Typography key={idx} variant="caption" component='p'
                                sx={{ overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis' }}>{type}: {title}</Typography>
                        )
                    }
                })}

                {data.aired && <Typography variant="caption" component='p'
                    sx={{ overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis' }}>Aired: {(new Date(data.aired.from)).toLocaleDateString()}</Typography>}

                {data.status && <Typography variant="caption" component='p'
                    sx={{ overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis' }}>Status: {data.status}</Typography>}

                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant="caption" component='p'
                        sx={{ overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis' }}>
                        Genres:&nbsp; {data.genres.length === 0 && 'N/A'}
                    </Typography>
                    {data.genres.length > 0 && data.genres.map(({ name }, idx) => {
                        return (
                            <Typography key={idx} variant="caption" component='p'
                                sx={{ overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis' }}>
                                {idx !== 0 && ', '}
                                {name}
                            </Typography>
                        )
                    })}
                </Box>
            </Stack>
        </Popover>
    );
}
