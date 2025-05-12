import { Fragment } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { animeType } from "../Utility/type";
import CardFavourite from "../components/Card/CardFavourite";

export default function PresenterTopFavorite() {
    const { state } = useStateProvider()

    return (
        <Box component='section' marginTop={{ xs: 4, md: 3 }}>
            <Typography variant="h5" component='h1' color="primary"
                sx={{ marginBottom: 1.4 }}>Most Favorite</Typography>
            <Box sx={(theme) => ({
                bgcolor: theme.palette.secondary.light, borderRadius: 1,
                display: { sm: 'grid' },
                gridTemplateColumns: { sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }
            })}>
                {state.topFavourite.map((fav: animeType, idx: number) => {
                    return (
                        <Fragment key={idx}>
                            <CardFavourite key={idx} data={fav} />
                            {state.topFavourite.length - 1 !== idx &&
                                <Divider orientation='horizontal' variant="middle"
                                    sx={(theme) => ({
                                        borderColor: theme.palette.primary.light,
                                        display: { sm: 'none' }
                                    })} />}
                        </Fragment>
                    )
                })}
            </Box>
        </Box>
    );
}
