import { useStateProvider } from "../Utility/Reducer/StateProvider";
import PresenterTopAiring from "../presenter/PresenterTopAiring";

export default function TopAiring() {
    const { state } = useStateProvider()

    return (
        <>
            {state.topAiring.data.length > 0 && <PresenterTopAiring />}
        </>
    );
}
