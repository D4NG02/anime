import { Skeleton } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";

export default function AnimeLoading() {
    const [{ itemPerPage }] = useStateProvider()
    const loading = Array.from(Array(itemPerPage).keys())
    return (
        <>
            {loading.map((_, idx) => {
                return (
                    <Skeleton key={idx} variant="rectangular" sx={{ width: { xs: 'calc(50% - 6px)', sm: 225 } }} height={300} />
                )
            })}
        </>
    );
}
