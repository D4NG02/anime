import { Container } from "@mui/material";
import Header from "../containers/Header";
import TopAiring from "../containers/TopAiring";

export default function Home() {
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