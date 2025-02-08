import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#F6F6F6", light: "#61A0FD", },
    button: {
      primary: "#61A0FD",
      radius: "20px",
      hoverColor: "#7BD3EA",
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
    customTextColor: {
      primary: "#FFFFFF",
      secondary: "",
    },
    categoryColor: {
      bgColor1: '#EDFFEF',
      textColor1: '#55A55E',
      bgColor2: '#ECFBFF',
      textColor2: '#3A7F92',
      bgColor3: '#F4F2FF',
      textColor3: '#5E5498',
      bgColor4: '#FFF2EC',
      textColor4: '#9B715D',
      bgColor5: '#FFF5E5',
      textColor5: '#845C1B',
      bgColor6: '#ECF4FF',
      textColor6: '#2C5FA6',
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
