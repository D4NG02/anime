import { Container } from "@mui/material";
import Header from "../containers/Header";

export default function Home() {
    return (
        <Container sx={{ marginTop: { xs: 9.2, sm: 12 }, marginBottom: 4 }}>
            <Header />
        </Container>
    );
}