import { styled } from "@mui/material";

export const Typography = styled("h3")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "baseline",
  gap: "10px",
  width:'100dvh',
  fontSize: "25px",
  "& span": {
    fontSize: "25px",
    color: theme.palette.text.secondary,
  },
}));
