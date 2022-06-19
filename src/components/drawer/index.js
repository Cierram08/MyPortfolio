import {
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";

export default function AppDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: "2.5rem",
                            color: lighten(0.09, Colors.secondary),
                        }}
                    />
                </DrawerCloseButton>
            )}
            <Drawer open={drawerOpen}>
                <List className="MyList">
                    <ListItemButton>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                    <Divider variant="middle" />

                    <ListItemButton>
                        <ListItemText>Resume</ListItemText>
                    </ListItemButton>
                    <Divider variant="middle" />

                    <ListItemButton>
                        <ListItemText>About</ListItemText>
                    </ListItemButton>
                    <Divider variant="middle" />

                    <ListItemButton>
                        <ListItemText>Contact</ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
}
