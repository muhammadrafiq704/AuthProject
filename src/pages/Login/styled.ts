import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const LoginContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.typography.fontFamily,
  gap: "60px",
  padding: "10px",
  [theme.breakpoints.between("mobile", "tablet")]: {
    gap: "30px",
  },
}));
export const FormContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.typography.fontFamily,
  gap: "60px",
  [theme.breakpoints.between("mobile", "tablet")]: {
    gap: "30px",
  },
  [theme.breakpoints.between("tablet", "laptop")]: {
    gap: "20px",
  },
}));
export const InputContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.typography.fontFamily,
  gap: "12px",
}));

export const Navlink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "12px",
  textDecoration: "none",
}));
