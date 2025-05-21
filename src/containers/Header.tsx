import { useNavigate } from "react-router";
import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchForm from "../components/SearchForm";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { defaultPagination } from "../Utility/Reducer/reducer";

export default function Header() {
    let navigate = useNavigate();
    const { dispatch } = useStateProvider()

    const handleHome = () => {
        dispatch({
            type: reducerCases.RESET_ALL,
            payload: {
                search: "",
                recommend: [],
                searchAnime: { data: [], pagination: defaultPagination },
                topFavourite: { data: [], pagination: defaultPagination }
            }
        })
        navigate('/');
    }

    return (
        <AppBar position="fixed" color="secondary">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography color="textPrimary" variant="h4" component="h1"
                    fontFamily='Pixelify Sans' onClick={handleHome}
                    sx={{ ":hover": { cursor: 'pointer' } }}>
                    Anime
                </Typography>
                <SearchForm />
            </Toolbar>
        </AppBar>
    );
}
