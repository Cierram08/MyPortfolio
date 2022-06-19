import "./App.css";
import { Container, Stack } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import AppDrawer from "./components/drawer";
import { useEffect } from "react";
import theme from "./styles/theme";
import BootstrapCarousel from "./components/BoostrapCarousel";



function App() {
    useEffect(() => {
        document.title = "From Beauty to Tech - Home";
    }, []);
    return (
        
        <ThemeProvider theme={theme}>
            
            <Container>
                <Stack>
                    <Appbar />
                    <BootstrapCarousel />
                    <AppDrawer />
                </Stack>
            </Container>

        </ThemeProvider>
    );
}

export default App;
