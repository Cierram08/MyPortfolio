import "./App.css";
import { Container, Stack } from "@mui/material";
import Navbar from "./components/navbar";
import { ThemeProvider } from "@mui/system";
import NavDrawer from "./components/drawer";
import { useEffect } from "react";
import theme from "./styles/theme";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import Banner from "./components/banner";


function App() {
    useEffect(() => {
        document.title = "From Beauty to Tech - Home";
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ paddingTop: '20px' }}>
                <UIProvider>
                    <Stack>
                        <Navbar />
                        <Banner />
                        <NavDrawer />
                    </Stack>
                </UIProvider>
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
