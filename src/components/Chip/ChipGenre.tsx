import { Chip } from "@mui/material";
import { GenreType } from "../../Utility/GenreType";

interface props {
    text: string
}

export default function ChipGenre({ text }: props) {
    return (
        <Chip size="small" variant='filled'
            label={text ? text : 'N/A'}
            color={GenreType.nude.includes(text) ? 'error' : 'info'}
            sx={{ fontFamily: 'open sans' }}
        />
    );
}
