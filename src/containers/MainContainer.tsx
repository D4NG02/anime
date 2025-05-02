import { Container } from '@mui/material';
import SearchForm from '../components/SearchForm';
import AnimeContainer from './AnimeContainer';

export default function MainContainer() {
    return (
        <Container sx={{ marginBlock: 4 }}>
            <SearchForm />
            <AnimeContainer />
        </Container>
    );
}
