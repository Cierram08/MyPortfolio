import { Zoom } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/navbar";
import Actions from "./actions";
import { useState, useEffect } from "react";



export default function NavbarDesktop({ matches }) {

    const [ zoomIn, setZoomIn ] = useState(false);
    
         // Trigger the zoom effect after the component is mounted
         useEffect(() => {
            setZoomIn(true);
         }, []);
    
    return (
        <NavbarContainer
        sx={{
            display: "flex",          // Use flexbox layout
            flexDirection: "column",  // Stack items vertically
            alignItems: "center",     // Center items horizontally
            justifyContent: "center", // Center items vertically
            width: "100%",            // Ensure full width
            }}
        >
            <Zoom in={zoomIn} timeout={1000}>
                <NavbarHeader variant="h4" sx={{ textAlign: "center" }}>
                    From Beauty To Tech
                </NavbarHeader>
            </Zoom>

            <Actions matches={matches} />
        </NavbarContainer>
    );
}
