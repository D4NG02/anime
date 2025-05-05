import { Stack, Typography } from "@mui/material";

interface props {
    studio: { name: string }[]
}

export default function Studios({ studio }: props) {
    return (
        <>
            <Stack direction='row' alignItems='flex-end' marginBottom='0.7em'
                gap={0.6} flexWrap='wrap'>
                <Typography variant="body1" component='span'>
                    Studios:&nbsp; {studio.length === 0 && 'N/A'}
                </Typography>
                {studio.length > 0 && studio.map(({ name }: { name: string }, idx: number) => {
                    return (
                        <Typography key={idx} variant="inherit" component='a' fontFamily='open sans'
                            sx={{ overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis' }}>
                            {name}
                            {idx !== studio.length - 1 && ', '}
                        </Typography>
                    )
                })}
            </Stack>
        </>
    );
}
