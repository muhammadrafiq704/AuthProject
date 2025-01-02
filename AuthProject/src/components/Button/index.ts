import { styled } from "@mui/material";

export const Button = styled('button')(({theme})=>({
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.primary.light,
    width:'25dvh',
    color: 'white',
    borderRadius: "20px",
    fontWeight:'bold',
    padding:'10px 20px',
    border:'none',
    cursor:'pointer'
}))