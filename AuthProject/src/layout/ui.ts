import { styled } from "@mui/material";

export const LayoutContent = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
});

export const LogonSection = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  fontFamily: theme.typography.fontFamily,
  height: "95dvh",
  width: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems:'center',
  borderRadius:'32px',
}));

export const ChildContent = styled("div") ({
  display: "flex",
  flexDirection:'column',
  gap:'8px',
  // border: "1px solid black",
  // justifyContent: "center",
  // alignItems: "center",
  padding:'60px',
  // gap: "10px",
  height: "100dvh",
  width: "100dvh",
}); 
