import { useNavigate } from "react-router";
import { Container } from "@mui/material";
import Header from "../containers/Header";
import TopAiring from "../containers/TopAiring";

export default function Home() {
    let navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/search');
    }

    return (
        <>
            <Header />
            <Container sx={{
                marginTop: { xs: 7, sm: 8 }, marginBottom: 4,
                paddingInline: {xs: 'unset', md: 2}
            }}>
                <TopAiring />
            </Container>
        </>
    );
}