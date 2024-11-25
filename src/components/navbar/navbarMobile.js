import { IconButton, Zoom } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { useState, useEffect } from "react";

export default function NavbarMobile({ matches }) {
    const { setDrawerOpen } = useUIContext();
    const [ zoomIn, setZoomIn ] = useState(false);

     // Trigger the zoom effect after the component is mounted
    useEffect(() => {
        setZoomIn(true);
    }, []);

    return (
        <NavbarContainer sx={{ paddingTop: "16px" }}>
            <IconButton onClick={() => setDrawerOpen(true)}
                sx={{ position: "absolute", 
                    left: 16,
                    right: matches ? "auto" : 0, // Center align on tablet
                    marginLeft: matches ? "auto" : 0, // Center alignment
                    marginRight: matches ? "auto" : 0, // Center alignment
                    top: "50px",
                }}       
            >
                <MenuIcon />
            </IconButton>

            <Zoom in={zoomIn} timeout={1000}>
                <NavbarHeader variant="h4" sx={{ textAlign: "center" }}>
                    From Beauty To Tech
                </NavbarHeader>
            </Zoom>
            <Actions matches={matches} />
        </NavbarContainer>
    );
}
