import { Container } from "@mui/material";
import TopAiring from "../containers/TopAiring";
import TopPopular from "../containers/TopPopular";
import Schedule from "../containers/Schedule";

export default function Home() {
    return (
        <Container sx={{
            marginBottom: 4,
            gap: { xs: 3, md: 5, lg: 8 },
            marginTop: { xs: 7, sm: 8 },
            paddingInline: { xs: 'unset', md: 2 },
            display: 'flex', flexDirection: 'column',
        }}>
            <TopAiring />
            <TopPopular />
            <Schedule />
        </Container>
    );
}