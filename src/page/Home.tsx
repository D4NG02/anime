import { Button, Container, Typography } from "@mui/material";
import Header from "../containers/Header";
import { useNavigate } from "react-router";

export default function Home() {
    let navigate = useNavigate();

    const navigateToSearch = () => {
        navigate('/search');
    }

    return (
        <>
            <Header />
            <Container sx={{
                marginTop: { xs: 9.2, sm: 12 }, marginBottom: 4,
                minHeight: { xs: 'calc(100vh - (9.2 * 8px) - (4 * 8px))', sm: 'calc(100vh - (13 * 8px) - (4 * 8px))' },
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}>
                <Typography variant="h5" component='h1' color="white">Sorry. This page in progress</Typography>
                <Typography variant="h5" component='p' color="white" marginBottom={2}>Please proceed to</Typography>
                <Button variant="contained" size="small" onClick={navigateToSearch}>
                    search Page
                </Button>
            </Container>
        </>
    );
}