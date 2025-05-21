import { lazy, Suspense } from "react";
import { Box } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
const PresenterRecommend = lazy(() => import('../presenter/PresenterRecommend'));

export default function Recommend() {
    const { state } = useStateProvider()

    return (
        <Suspense fallback={<Box></Box>}>
            {state.recommend && state.recommend.length > 0 && <PresenterRecommend />}
        </Suspense>
    );
}
