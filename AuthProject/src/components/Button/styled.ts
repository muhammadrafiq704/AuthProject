import { styled } from "@mui/material";

export const Button = styled("button")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.primary.light,
  width: "25dvh",
  color: "white",
  borderRadius: theme.palette.button.radius,
  fontWeight: "bold",
  padding: "10px 20px",
  border: "none",
  cursor: "pointer",
  '&:hover':{
    transition: '0.5s ease',
    backgroundColor: theme.palette.button.hoverColor
  },
  [theme.breakpoints.between("mobile", "tablet")]: {
    width: "8dvh",
    borderRadius: "16px",
    cursor: "pointer",
    padding: "5px 8px",
  },
  [theme.breakpoints.between("tablet", "laptop")]: {
    width: "10dvh",
    borderRadius: "16px",
    cursor: "pointer",
    padding: "6px 10px",
  },
}));
