import { NavbarContainer, NavbarHeader } from "../../styles/navbar";
import Actions from "./actions";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";



export default function NavbarDesktop({ matches }) {
    return (
        <NavbarContainer>
             <IconButton
                sx={{
                    position: "fixed",
                    top: "16px", // Adjust the top position as needed
                    left: "50px", // Fixed to the left of the page
                    zIndex: 1000, // Make sure it's on top of other elements
                }}
            ></IconButton>
            <MenuIcon />
            <NavbarHeader>From Beauty to Tech</NavbarHeader>

            <Actions matches={matches} />
        </NavbarContainer>
    );
}
