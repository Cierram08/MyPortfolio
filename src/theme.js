import { createTheme } from "@material-ui/core";

export const Colors = {
    primary: "#5f2c3e",
    secondary: "#d1adcc",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    ///////
    //GRAYS//
    //////
    dim_grey: "#696969",
    dove_grey: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_grey: "#e8eaf6",
    dark_grey: "#616161",
    ///////
    //Solid Color//
    //////
    white: "#fff",
    black: "#000",
};

export const theme = createTheme({
    palette: {},

    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true,
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: 250,
                    background: Colors.dark_grey,
                    color: Colors.white,
                    borderRadius: "0px 100px 1px",
                    borderRight: "1px solid $(Colors.dark_grey)",
                },
            },
        },
    },
});
