import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const LoginContent = styled('div')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    fontFamily: theme.typography.fontFamily,
    gap: '60px'
}))
export const FormContent = styled('div')(({theme})=>({

    display:'flex',
    flexDirection:'column',
    fontFamily: theme.typography.fontFamily,
    gap: '60px'
}))
export const InputContent = styled('div')(({theme})=>({

    display:'flex',
    flexDirection:'column',
    fontFamily: theme.typography.fontFamily,
    gap: '10px'
}))
export const Navlink = styled(NavLink)(({theme})=>({
    color: theme.palette.primary.light,
    display:'flex',
    justifyContent:'flex-end',
    fontSize: '12px',
    textDecoration:'none',

}))

