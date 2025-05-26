import { useStateProvider } from "../Utility/Reducer/StateProvider";
import PresenterRecommend from "../presenter/PresenterRecommend";

export default function Recommend() {
    const { state } = useStateProvider()

    return (
        <>
            {state.recommend && state.recommend.length > 0 && <PresenterRecommend />}
        </>
    );
}
