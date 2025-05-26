import { useLocation, useNavigate } from "react-router";
import { useEffect, useState, ChangeEvent } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { ApiGetAnimeSearch } from "../Utility/Api/ApiGetAnimeSearch";

export default function SearchForm() {
    let { pathname } = useLocation()
    let navigate = useNavigate();
    const { state, dispatch } = useStateProvider()
    const [find, setFind] = useState<string>(state.search)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFind(e.target.value)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            pathname !== '/search' && state.search !== find && ApiGetAnimeSearch(find, state.search, 1, 15, (data) => {
                dispatch({ type: reducerCases.SET_ANIME_LIST, payload: data })
            })
            dispatch({ type: reducerCases.SET_SEARCH, payload: find })
            pathname !== '/search' && state.search !== find && navigate('/search');

        }, 250);
        return () => clearTimeout(timeoutId);
    }, [find]);

    return (
        <Box sx={{ width: { xs: 200, sm: 300 } }}>
            <TextField fullWidth variant="filled" label="Search"
                size="small" color="primary"
                sx={(theme) => ({
                    borderRadius: 1,
                    '&.MuiTextField-root': {
                        bgcolor: theme.palette.secondary.light
                    },
                    '& .MuiInputLabel-root': {
                        color: theme.palette.primary.light,
                    },
                    '& .MuiSvgIcon-root': {
                        fill: theme.palette.primary.light,
                    },
                    '& .MuiFilledInput-root::before': {
                        borderBottom: '1px solid transparent',
                    },
                    '& .MuiFilledInput-input': {
                        height: '1.3em',
                        color: theme.palette.primary.light,
                        padding: { xs: '18px 8px 0px', sm: '20px 12px 4px' }
                    },
                    '& .MuiFormLabel-root': {
                        transform: { xs: 'translate(8px, 4px) scale(0.65)', sm: 'translate(12px, 4px) scale(0.65)' }
                    }
                })}
                value={find} onChange={onChange}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position='end'>
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Box>
    );
}
