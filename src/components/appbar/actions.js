import { Divider, ListItemIcon, ListItemButton } from "@mui/material";
import {
    MyList,
    ActionsIconsContainerMobile,
    ActionsIconsContainerDesktop,
} from "../../styles/appbar";

export default function Actions({ matches }) {
    const Component = matches
        ? ActionsIconsContainerMobile
        : ActionsIconsContainerDesktop;

    return (
        <Component>
        <MyList type="row">
            <ListItemButton
                sx={{
                    justifyContent: "center",
                }}
            >
                <ListItemIcon
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
            <ListItemButton
                sx={{
                    justifyContent: "center",
                }}
            >
                <ListItemIcon
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}               
                >
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
            <ListItemButton
                sx={{
                    justifyContent: "center",
                }}
            >
            </ListItemButton>
        </MyList>
        </Component>
    );
}
