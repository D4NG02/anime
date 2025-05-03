import axios from "axios";
import { ChangeEvent } from "react";
import { Box, Pagination } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { reducerCases } from "../Utility/Reducer/Constant";
import { ErrorGetAnimeSearch } from "../Utility/ApiErrorHandle";

export default function PaginationSearch() {
    const [{ search, page, itemPerPage, pagination }, dispatch] = useStateProvider()

    const handleChangePage = async (event: ChangeEvent<unknown>, value: number) => {
        axios.get('https://api.jikan.moe/v4/anime', {
            params: {
                q: search,
                page: value,
                limit: itemPerPage,
                order_by: 'title',
                sort: 'asc'
            },
        }).then(function (response) {
            if (response.status === 200) {
                dispatch({ type: reducerCases.SET_ANIME_LIST, token: response.data })
                dispatch({ type: reducerCases.SET_PAGE, token: value })
            }
        }).catch(function (error) {
            ErrorGetAnimeSearch(error)
        });
    };

    return (
        <Box component='section' sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Pagination count={pagination.items.count} page={page} onChange={handleChangePage}
                siblingCount={0} boundaryCount={1} showFirstButton showLastButton
                color='primary' variant='outlined' />
        </Box>
    );
}
