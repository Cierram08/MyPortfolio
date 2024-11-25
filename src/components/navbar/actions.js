import { ListItemIcon, ListItemButton } from "@mui/material";
import {
    MyList,
    ActionsIconsContainerMobile,
    ActionsIconsContainerDesktop,
} from "../../styles/navbar";

export default function Actions({ matches }) {
    const Component = matches
        ? ActionsIconsContainerMobile
        : ActionsIconsContainerDesktop;

    return (
        <Component>
            <MyList>
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
                    />
                </ListItemButton>
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
                    />
                </ListItemButton>
                <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                            sx={{display: "flex",
                            justifyContent: "center",
                        }}
                    />

                </ListItemButton>
            </MyList>
        </Component>
    );
}