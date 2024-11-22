import { List, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/montez";

//container section
export const NavbarContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between", // Aligns IconButton to the left and Actions to the right
    alignItems: "center",
    height: "20vh",
    marginTop: 20,
    padding: "8px 16px",
    textAlign: "center",
    // Add padding to the left for mobile to avoid overlap with the fixed icon
    paddingLeft: "60px", // Push content to the right on mobile
    '@media (max-width: 600px)': {
        flexDirection: "row", // Adjust padding for small screens (mobile)
    },
}));

//header section


export const NavbarHeader = styled(Typography)(() => ({
    paddingTop: "10px",
    fontSize: "4em",
    justifyContent: "center", 
    fontFamily: '"Montez", "cursive"',
    color: Colors.secondary,
    textAlign: "center",
}));

export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "black",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
}));

export const ActionsIconsContainerMobile = styled(Box)(() => ({
    display: "flex",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
    zIndex: 99,
    borderTop: `1px solid $(Colors.border)`,
}));

export const ActionsIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0,
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: "absolute",
    top: 10,
    left: "250px",
    zIndex: 1999,
}));
