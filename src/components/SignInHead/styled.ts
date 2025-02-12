import { styled } from "@mui/material";

export const Head = styled("div")(({theme})=>({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  [theme.breakpoints.between('mobile', 'tablet')]:{

  },
  "& span": {
    fontSize: "16px",
    
  },
}));
