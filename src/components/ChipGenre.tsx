import { Chip } from "@mui/material";

interface props {
    text: string
}

const nude = ['Erotica', 'Hentai']

export default function ChipGenre({ text }: props) {
    return (
        <Chip size="small" variant='filled'
            label={text ? text : 'N/A'}
            color={nude.includes(text) ? 'error' : 'info'}
            sx={{ fontFamily: 'open sans' }}
        />
    );
}
