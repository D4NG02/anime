import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchForm from "../components/SearchForm";

export default function Header() {
    return (
        <AppBar position="fixed" color="secondary">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography color="primary" variant="h6" component="h6"
                    fontFamily='Pixelify Sans'>
                    Anime
                </Typography>
                <SearchForm />
            </Toolbar>
        </AppBar>
    );
}
