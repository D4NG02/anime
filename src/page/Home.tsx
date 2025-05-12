import { Container } from "@mui/material";
import TopAiring from "../containers/TopAiring";
import TopPopular from "../containers/TopPopular";

export default function Home() {
    return (
        <Container sx={{
            marginTop: { xs: 7, sm: 8 }, marginBottom: 4,
            paddingInline: { xs: 'unset', md: 2 },
            display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 }
        }}>
            <TopAiring />
            <TopPopular />
        </Container>
    );
}