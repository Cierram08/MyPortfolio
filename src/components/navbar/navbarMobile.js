import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/navbar";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function NavbarMobile({ matches }) {
    const { setDrawerOpen } = useUIContext();

    return (
        <NavbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon /> 
            </IconButton>
            <NavbarHeader textAlign={"center"} variant="h4">
                From Beauty To Tech
            </NavbarHeader>
            <IconButton></IconButton>
            <Actions matches={matches} />
        </NavbarContainer>
    );
}
