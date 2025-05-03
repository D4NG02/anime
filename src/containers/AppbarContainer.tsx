import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchForm from "../components/SearchForm";

export default function AppbarContainer() {
    return (
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <Typography variant="h6" component="h6" sx={{ flexGrow: 1 }}>
                    Anime
                </Typography>
                <SearchForm />
            </Toolbar>
        </AppBar>
    );
}
