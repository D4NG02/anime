import { Fragment } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import { animeType } from "../Utility/type";
import CardPopular from "../components/Card/CardPopular";

export default function PresenterPopular() {
    const { state } = useStateProvider()

    return (
        <Box component='section' marginTop={{ xs: 4, md: 3 }}>
            <Typography variant="h5" component='h1' color="primary"
                sx={{ marginBottom: 1.4 }}>Most Popular</Typography>
            <Box sx={(theme) => ({
                bgcolor: theme.palette.secondary.light, borderRadius: 1,
                display: { sm: 'grid' },
                gridTemplateColumns: { sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }
            })}>
                {state.popular.map((anime: animeType, idx: number) => {
                    return (
                        <Fragment key={idx}>
                            <CardPopular key={idx} data={anime} />
                            {state.popular.length - 1 !== idx &&
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
