"use client";
import { Noto_Sans_JP } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const noto = Noto_Sans_JP({
  weight: "variable",
  preload: false,
  variable: "--font-noto-jp",
});

import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3f4bb5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: noto.style.fontFamily,
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontsize: "2rem",
    },
    h3: {
      fontSize: "1.75rem",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
