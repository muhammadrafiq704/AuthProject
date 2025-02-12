import { styled } from "@mui/material";

export const LogoSection = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px",
  overflowX: "hidden",
  // [theme.breakpoints.between("mobile", "tablet")]: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width:'100%',
  // },
  "& h3": {
    fontSize: "48px",
    color: "white",
    [theme.breakpoints.between("mobile", "tablet")]: {
      fontSize: "24px",
    },
  },
  "& div": {
    display: "flex",
    alignItems: "center",
    "& img": {
      height: "82.2px",
      objectFit: "contain",
      mixBlendMode: "color-burn",
      [theme.breakpoints.between("mobile", "tablet")]: {
        height: "32px",
        objectFit: "contain",
      },
    },
  },
}));
