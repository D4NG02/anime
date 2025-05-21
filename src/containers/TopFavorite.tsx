import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
const PresenterTopFavorite = lazy(() => import('../presenter/PresenterTopFavorite'));

export default function TopFavorite() {
    const { state } = useStateProvider()

    return (
        <Suspense fallback={<Box></Box>}>
            {state.topFavourite.data.length > 0 && <PresenterTopFavorite />}
        </Suspense>
    );
}
