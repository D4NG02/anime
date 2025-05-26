import { useStateProvider } from "../Utility/Reducer/StateProvider";
import PresenterTopFavorite from "../presenter/PresenterTopFavorite";

export default function TopFavorite() {
    const { state } = useStateProvider()

    return (
        <>
            {state.topFavourite.data.length > 0 && <PresenterTopFavorite />}
        </>
    );
}
