import axios from "axios";
import { useEffect, useState, ChangeEvent } from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";

export default function SearchForm() {
    const [{}, dispatch] = useStateProvider()
    const [search, setSearch] = useState<string>('')
    const [debounceSearch, setDebounceSearch] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceSearch(search);
            axios.get('https://api.jikan.moe/v4/anime',
                {
                    params: {
                        q: search,
                        page: 1,
                        limit: 3
                    },
                }
            )
                .then(function (response) {
                    if (response.status === 200) {
                        dispatch({ type: reducerCases.SET_ANIME_LIST, token: response.data })
                    }
                })
                .catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        }, 250);
        return () => clearTimeout(timeoutId);
    }, [search]);

    return (
        <Box>
            <TextField fullWidth variant="outlined" label="Search"
                value={search}
                onChange={onChange}
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
