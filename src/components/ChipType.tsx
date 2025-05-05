import { Chip } from "@mui/material";

interface props {
    text: string
}

export default function ChipType({ text }: props) {
    return (
        <Chip variant='outlined'
            label={text ? text : 'N/A'}
            color='info'
        />
    );
}
