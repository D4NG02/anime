import { ChangeEvent } from "react";
import { Box, Pagination } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import axios from "axios";

export default function Paginate() {
    const [{ search, page, itemPerPage, pagination }, dispatch] = useStateProvider()

    const handleChangePage = async (event: ChangeEvent<unknown>, value: number) => {
        axios.get('https://api.jikan.moe/v4/anime',
            {
                params: {
                    q: search,
                    page: value,
                    limit: itemPerPage,
                    order_by: 'title',
                    sort: 'asc'
                },
            }
        )
            .then(function (response) {
                if (response.status === 200) {
                    dispatch({ type: reducerCases.SET_ANIME_LIST, token: response.data })
                    dispatch({ type: reducerCases.SET_PAGE, token: value })
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
    };

    return (
        <Box component='section' sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Pagination count={pagination.items.count} page={page} onChange={handleChangePage}
                siblingCount={1} boundaryCount={0} showFirstButton showLastButton />
        </Box>
    );
}
