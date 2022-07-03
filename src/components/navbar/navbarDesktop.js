import { NavbarContainer, NavbarHeader } from "../../styles/navbar";
import Actions from "./actions";

export default function NavbarDesktop({ matches }) {
    return (
        <NavbarContainer>
            <NavbarHeader>From Beauty to Tech</NavbarHeader>

            <Actions matches={matches} />
        </NavbarContainer>
    );
}
