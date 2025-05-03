import { useLocation } from 'react-router'
import { Container } from "@mui/material";

export default function Detail() {
    let location = useLocation()
    console.log(location)

    return (
        <Container sx={{
            paddingTop: { xs: 9.2, sm: 12 }, paddingBottom: 3
        }}></Container>
    );
}
