import { useEffect } from 'react';
import { useNavigate } from 'react-router'
import { Box, Container } from "@mui/material";
import { useStateProvider } from "../Utility/Reducer/StateProvider";
import AnimeInfo from "../components/AnimeInfo";
import AnimeDetail from "../components/AnimeDetail";

export default function Detail() {
    let navigate = useNavigate();
    const [{ detail }] = useStateProvider()

    useEffect(() => {
        detail === null && navigate('/');
    }, []);

    return (
        <Container sx={{
            color: 'whitesmoke',
            paddingBlock: 6
        }}>
            {detail && <Box sx={{
                gap: { xs: 2, md: 3 }, display: 'grid',
                gridTemplateRows: { xs: 'auto auto', lg: 'auto' },
                gridTemplateColumns: { xs: 'auto', lg: 'auto 280px' }
            }}>
                <Box sx={{
                    display: 'grid',
                    gap: { xs: 2, md: 3 },
                    justifyItems: { xs: 'center', sm: 'unset' },
                    gridTemplateRows: { xs: '340px auto', sm: 'auto', md: 'auto' },
                    gridTemplateColumns: { xs: 'auto', sm: '180px auto', md: '210px auto' }
                }}>
                    <Box>
                        <img src={detail.images.webp.image_url} alt={detail.title}
                            style={{ width: '100%' }} />
                    </Box>

                    <AnimeDetail />
                </Box>

                <AnimeInfo />
            </Box>}
        </Container>
    );
}
