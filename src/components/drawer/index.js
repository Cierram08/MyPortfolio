import {
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/navbar";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../theme";

export default function NavDrawer() {
    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        className="testing"
                        sx={{
                            fontSize: "2.5rem",
                            color: Colors.white,
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
