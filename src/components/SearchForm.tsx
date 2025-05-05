import axios from "axios";
import { useEffect, useState, ChangeEvent } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { ErrorGetAnimeSearch } from "../Utility/ApiErrorHandle";

export default function SearchForm() {
    const [{ search, itemPerPage }, dispatch] = useStateProvider()
    const [find, setFind] = useState<string>(search)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFind(e.target.value)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch({ type: reducerCases.SET_PAGE, token: 1 })
            axios.get('https://api.jikan.moe/v4/anime',
                {
                    params: {
                        q: find,
                        page: 1,
                        limit: itemPerPage,
                        order_by: 'title',
                        sort: 'asc'
                    },
                }
            )
                .then(function (response) {
                    if (response.status === 200) {
                        dispatch({ type: reducerCases.SET_ANIME_LIST, token: response.data })
                        dispatch({ type: reducerCases.SET_SEARCH, token: find })
                    }
                })
                .catch(function (error) {
                    ErrorGetAnimeSearch(error)
                });
        }, 250);
        return () => clearTimeout(timeoutId);
    }, [find]);

    return (
        <Box sx={{ width: 300 }}>
            <TextField fullWidth variant="filled" label="Search"
                size="small" color="primary"
                sx={(theme)=>({
                    borderRadius: 1,
                    '&.MuiTextField-root': {
                        bgcolor: theme.palette.secondary.light
                    },
                    '& .MuiFilledInput-root::before': {
                        borderBottom: '1px solid transparent',
                    },
                    '& .MuiFilledInput-input': {
                        height: '1.3em',
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
