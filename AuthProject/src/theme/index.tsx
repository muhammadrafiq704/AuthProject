import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#F6F6F6", light: "#61A0FD" },
      button: {
        primary: "#61A0FD",
        radius: "20px",
        hoverColor: '#7BD3EA'
      },
    text: {
      primary: "#252B5C",
      secondary: "#53587A",
    },
    heading: {
      primary: "#FFFFFF",
    },
    border: {
      primary: "#131010",
    },
    radius: {
      shape: "32px",
      inputRadius: "15px",
    },
  },
  typography: {
    fontSize: 8,
    fontFamily: "Raleway",
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1440,
    },
  },
});

export default theme;
