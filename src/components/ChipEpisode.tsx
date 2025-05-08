import { Chip } from "@mui/material";

interface props {
    text: number
}

export default function ChipEpisode({ text }: props) {
    return (
        <Chip variant='outlined'
            label={text ? text + ' epi' : 'N/A'}
            sx={(theme) => ({ color: theme.palette.secondary.contrastText })}
        // color='info'
        />
    );
}
