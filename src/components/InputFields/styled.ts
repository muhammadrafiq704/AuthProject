import { styled } from "@mui/material";

export const InputContainer = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2px",
  // border: "1px solid red",
  // [theme.breakpoints.between("mobile", "tablet")]: {
  //   width: "35dvh",
  // },
  // [theme.breakpoints.between("tablet", "laptop")]: {
  //   width: "55dvh",
  // },
  "& input": {
    // "&:focus": {
    //   boxShadow: `0 0 4px ${theme.palette.primary.light}`,
    // },
    // [theme.breakpoints.between("mobile", "tablet")]: {
    //   padding: "8px 4px",
    //   width: "auto",
    //   outline: "none",
    //   borderRadius: "8px",
    //   backgroundColor: "white",
    //   color: "black",
    //   border: "none",
    // },
    // [theme.breakpoints.between("tablet", "laptop")]: {
    //   padding: "12px 10px",
    //   width: "auto",
    //   outline: "none",
    //   borderRadius: "19px",
    //   backgroundColor: "white",
    //   color: "black",
    //   border: "none",
    // },
  },
  "& span": {
    paddingLeft: "12px",
  },
}));
export const LabelText = styled("label")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
  fontSize: "12px",
  fontWeight: "bold",
  paddingLeft: "12px",
}));
