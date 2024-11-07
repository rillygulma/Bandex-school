import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
    interface Theme {
        palette: {
            blue: { main: string; light: string; dark: string };
            basic: { main: string; light: string; dark: string };
            orange: { main: string };
            brown: { main: string };
        };
    }

    interface PaletteOptions {
        blue: PaletteOptions["primary"];
        basic: PaletteOptions["primary"];
        orange: PaletteOptions["primary"];
        brown: PaletteOptions["primary"];
    }
}
