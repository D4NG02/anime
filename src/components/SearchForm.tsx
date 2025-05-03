import axios from "axios";
import { useEffect, useState, ChangeEvent } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { ErrorGetAnimeSearch } from "../Utility/ApiErrorHandle";

export default function SearchForm() {
    const [{ page, itemPerPage }, dispatch] = useStateProvider()
    const [search, setSearch] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        dispatch({ type: reducerCases.SET_PAGE, token: 1 })
        const timeoutId = setTimeout(() => {
            axios.get('https://api.jikan.moe/v4/anime',
                {
                    params: {
                        q: search,
                        page: page,
                        limit: itemPerPage,
                        order_by: 'title',
                        sort: 'asc'
                    },
                }
            )
                .then(function (response) {
                    if (response.status === 200) {
                        dispatch({ type: reducerCases.SET_ANIME_LIST, token: response.data })
                        dispatch({ type: reducerCases.SET_SEARCH, token: search })
                    }
                })
                .catch(function (error) {
                    ErrorGetAnimeSearch(error)
                });
        }, 250);
        return () => clearTimeout(timeoutId);
    }, [search]);

    return (
        <Box sx={{ width: 300 }}>
            <TextField fullWidth variant="filled" label="Search"
                size="small" color="primary"
                sx={{
                    borderRadius: 1,
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
                }}
                value={search} onChange={onChange}
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
