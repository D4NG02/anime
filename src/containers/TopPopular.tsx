import { useStateProvider } from "../Utility/Reducer/StateProvider";
import PresenterTopPopular from "../presenter/PresenterTopPopular";

export default function TopPopular() {
    const { state } = useStateProvider()

    return (
        <>
            {state.topPopular.data.length > 0 && <PresenterTopPopular />}
        </>
    );
}
