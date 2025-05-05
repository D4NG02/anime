import { Chip } from "@mui/material";

interface props {
    text: string
}

export default function ChipRating({ text }: props) {
    return (
        <Chip
            label={text ? text.split(' - ')[0] : 'N/A'}
            color={text.includes('R') ? 'error' : 'info'}
        />
    );
}
