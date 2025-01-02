import { styled } from "@mui/material";

export const LogoSection = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
 
  gap: "10px",
  // paddingTop: "16px",
  overflowX: "hidden",

  "& h3": {
    fontSize: "48px",
    color: "white",
  },
  "& div": {
    display: "flex",
    alignItems: "center",
    "& img": {
      height: "82.2px",
      objectFit: "contain",
      mixBlendMode: "color-burn",
    },
  },
}));
