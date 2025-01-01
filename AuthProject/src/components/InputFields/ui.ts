import { styled } from "@mui/material";


export const InputContainer = styled("div")(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    flexDirection: "column"
  }));
export const LabelText = styled("label")(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary,
    fontSize:'12px',
    fontWeight:'bold',
    paddingLeft:'8px'
  }));