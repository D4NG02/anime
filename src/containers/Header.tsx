import { useNavigate } from "react-router";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchForm from "../components/SearchForm";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";

export default function Header() {
    let navigate = useNavigate();
    const { dispatch } = useStateProvider()

    const handleHome = () => {
        navigate('/');
        dispatch({ type: reducerCases.SET_SEARCH, payload: "" })
        dispatch({ type: reducerCases.SET_PAGE, payload: 1 })
        dispatch({ type: reducerCases.RESET_ANIME_LIST })
        dispatch({ type: reducerCases.RESET_RECOMMEND })
    }

    return (
        <AppBar position="fixed" color="secondary">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography color="primary" variant="h4" component="h1"
                    fontFamily='Pixelify Sans' onClick={handleHome}
                    sx={{ ":hover": { cursor: 'pointer' } }}>
                    Anime
                </Typography>
                <SearchForm />
            </Toolbar>
        </AppBar>
    );
}
