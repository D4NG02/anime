import { MouseEvent, Suspense, useState } from "react";
import { Box, Card, CardContent, CardHeader, CardMedia, Chip, Skeleton, Typography } from "@mui/material";
import DetailPopover from "./DetailPopover";
import { animeType } from "../Utility/type";

interface props {
    data: animeType
}

export default function Anime({ data }: props) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const Loading = () => {
        return (
            <Box>
                <Skeleton variant='rectangular' height={200} />
                <Skeleton variant='rectangular' height={30} />
                <Skeleton variant='rectangular' height={10} />
            </Box>
        )
    }

    return (
        <Suspense fallback={<Loading />}>
            <Card sx={{
                position: 'relative', width: { xs: 'calc(50% - 6px)', sm: 225 },
                display: 'grid', gridTemplateRows: 'auto 80px max-content',
                alignItems: 'center', opacity: open ? 0.3 : 'unset'
            }}
                onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose} >
                <CardMedia component="img" image={data.images.webp.image_url} alt={data.title} />
                <CardHeader title={data.title.slice(0, 30)} component='a' href={data.url.split(String(data.mal_id))[1]}
                    sx={{
                        overflowY: 'clip', paddingInline: { xs: 1.2, sm: 2 },
                        '& .MuiTypography-root': {
                            fontSize: { xs: '1.15rem', sm: '1.3rem' },
                            lineHeight: 1.2, textOverflow: 'clip'
                        }
                    }} />
                <CardContent sx={{
                    display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center',
                    paddingBlock: 'unset', paddingInline: { xs: 1.2, sm: 2 },
                    '&:last-child': {
                        paddingBottom: { xs: 1, sm: 2 }
                    }
                }}>
                    <Typography variant="subtitle2">
                        {data.type}
                    </Typography>
                    <Box sx={{ borderRadius: 0.75, height: 6, width: 6, color: 'transparent', bgcolor: 'gray' }}>dot</Box>
                    <Typography variant="subtitle2">
                        {data.duration.split(' ')[0] + 'm'}
                    </Typography>

                    {data.rating && data.rating.includes('R+') && <Typography variant="subtitle2"
                        sx={(theme) => ({
                            position: 'absolute', top: 16, left: 16, fontWeight: 700,
                            bgcolor: theme.palette.warning.dark, padding: '0.06rem 0.3rem', borderRadius: 1.25
                        })}
                    >18+</Typography>}
                </CardContent>
            </Card>

            <DetailPopover open={open} anchorEl={anchorEl} handleClose={handlePopoverClose} data={data} />
        </Suspense>
    );
}
