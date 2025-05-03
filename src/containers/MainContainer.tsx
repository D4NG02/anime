import { Container } from '@mui/material';
import AnimeContainer from './AnimeContainer';
import Paginate from '../components/Pagination';
import { useStateProvider } from '../Utility/Reducer/StateProvider';

export default function MainContainer() {
    const [{ anime }] = useStateProvider()

    return (
        <Container sx={{ marginTop: {xs: 9.2, sm: 12}, marginBottom: 4 }}>
            <AnimeContainer />
            {anime.length > 0 && <Paginate />}
        </Container>
    );
}
