import { ChangeEvent } from "react";
import { Box, Pagination } from "@mui/material";
import { useStateProvider } from "../../Utility/Reducer/StateProvider";
import { reducerCases } from "../../Utility/Reducer/Constant";
import { ApiGetAnimeSearch } from "../../Utility/Api/ApiGetAnimeSearch";

export default function PaginationSearch() {
    const { state, dispatch } = useStateProvider()

    const handleChangePage = async (_: ChangeEvent<unknown>, value: number) => {
        ApiGetAnimeSearch(state.search, state.search, value, 15, (data) => {
            dispatch({ type: reducerCases.SET_ANIME_LIST, payload: data })
        })
    };

    return (
        <Box component='section' sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
            <Pagination count={state.searchAnime.pagination.items.count}
                page={state.searchAnime.pagination.current_page} defaultPage={1}
                boundaryCount={1} showFirstButton showLastButton
                color='primary' variant='outlined'
                onChange={handleChangePage}
                sx={(theme) => ({
                    '& .MuiPaginationItem-root:not(.Mui-selected):not(.MuiPaginationItem-ellipsis)': {
                        color: theme.palette.secondary.contrastText,
                        border: `1px solid ${theme.palette.secondary.light}aa`,
                        backgroundColor: `${theme.palette.secondary.dark}50`,
                        ":hover": {
                            border: `1px solid ${theme.palette.primary.light}1f`,
                            backgroundColor: `${theme.palette.primary.dark}20`,
                        }
                    },
                    '& .MuiPaginationItem-root:is(.MuiPaginationItem-ellipsis)': {
                        color: theme.palette.secondary.contrastText
                    },
                    '& :is(.MuiPaginationItem-firstLast)': {
                        display: { xs: 'none', sm: 'revert' }
                    }
                })} />
        </Box>
    );
}
