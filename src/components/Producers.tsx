import { Stack, Typography } from "@mui/material";

interface props {
    producer: { name: string }[]
}

export default function Producers({ producer }: props) {
    return (
        <Stack direction='row' alignItems='flex-end'
                gap={0.6} flexWrap='wrap'>
            <Typography variant="body1" component='span'>
                Producers:&nbsp; {producer.length === 0 && 'N/A'}
            </Typography>
            {producer.length > 0 && producer.map(({ name }: { name: string }, idx: number) => {
                return (
                    <Typography key={idx} variant="inherit" component='a' fontFamily='open sans'
                        sx={{ overflowY: 'clip', maxHeight: 92, textOverflow: 'ellipsis' }}>
                        {name}
                        {idx !== producer.length - 1 && ', '}
                    </Typography>
                )
            })}
        </Stack>
    );
}
