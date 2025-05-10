import { Divider, Stack, Typography } from "@mui/material";
import ChipGenre from "./Chip/ChipGenre";

interface props {
    genres: { name: string }[]
}

export default function Genres({ genres }: props) {
    return (
        <>
            {genres.length > 0 && <Divider orientation="horizontal" flexItem
                sx={(theme) => ({
                    display: { xs: 'none', sm: 'revert-layer' },
                    borderColor: theme.palette.primary.light +'2f'
                })} />}
            <Stack direction='row' alignItems='center' gap={0.6} flexWrap='wrap'
                marginTop={{ sm: '0.4em' }} marginBottom={{ xs: '0.7em', sm: '0.4em' }}>
                <Typography variant="body1" component='span'>
                    Genres:&nbsp; {genres.length === 0 && 'N/A'}
                </Typography>
                {genres.length > 0 && genres.map(({ name }: { name: string }, idx: number) => {
                    return (
                        <ChipGenre key={idx} text={name} />
                    )
                })}
            </Stack>
            {genres.length > 0 && <Divider orientation="horizontal" flexItem
                sx={(theme) => ({
                    borderColor: theme.palette.primary.light +'2f',
                    display: { xs: 'none', sm: 'revert-layer' },
                    marginBottom: { xs: 'unset', sm: '0.7em' }
                })} />}
        </>
    );
}
