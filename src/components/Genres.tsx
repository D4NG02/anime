import { Divider, Stack, Typography } from "@mui/material";
import ChipGenre from "./ChipGenre";

interface props {
    genres: { name: string }[]
}

export default function Genres({ genres }: props) {
    return (
        <>
            {genres.length > 0 && <Divider orientation="horizontal" flexItem
                sx={{ display: { xs: 'none', sm: 'revert-layer' } }} />}
            <Stack direction='row' alignItems='center' marginBlock={1}
                gap={0.6} flexWrap='wrap'>
                <Typography variant="body2" component='p'
                    sx={{ overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis' }}>
                    Genres:&nbsp; {genres.length === 0 && 'N/A'}
                </Typography>
                {genres.length > 0 && genres.map(({ name }: { name: string }, idx: number) => {
                    return (
                        <ChipGenre key={idx} text={name} />
                    )
                })}
            </Stack>
            {genres.length > 0 && <Divider orientation="horizontal" flexItem
                sx={{ display: { xs: 'none', sm: 'revert-layer' } }} />}
        </>
    );
}
