import { List, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import "@fontsource/spicy-rice";

//container section
export const NavbarContainer = styled(Box)(() => ({
    marginTop: 1,
    alignItems: "center",
    padding: "1px 8px",
    textAlign: "center",
}));

//header section

export const NavbarHeader = styled(Typography)(() => ({
    paddingTop: "10px",
    flexGrow: 1,
    fontSize: "4em",
    fontFamily: '"Spicy Rice", "cursive"',
    color: Colors.secondary,
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
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

export const ActionsIconsContainerDesktop = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
        paddingLeft: theme.spacing(2), // Example adjustment for tablet
        paddingRight: theme.spacing(2),
    },
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: "absolute",
    top: 10,
    left: "250px",
    zIndex: 1999,
}));
