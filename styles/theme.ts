import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#eff1f3",
        },
        blue: { 
            main: "#eff1f3",
            light: "#7cc1e3", 
            dark: "#1892ce", 
        },
        basic: { 
            main: "lightgray",
            light: "#fff", 
            dark: "#000", 
        },
        orange: { main: "#fec817" },
        brown: { main: "#4e360c" },
    },
});

export default theme;
