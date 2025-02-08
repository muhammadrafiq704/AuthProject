import { styled } from "@mui/material";

export const SidebarContent = styled("div")({
  // border:'1px solid red',
  backgroundImage: `url('assets/SidebarIcons/shape1.png')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0px 10px",
  overflowX: "hidden",
});
export const SidebarHead = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  padding: "10px",
  "& span": {
    fontSize: "24px",
    fontWeight: "700",
    color: theme.palette.customTextColor.primary,
  },
}));
export const SidebarText = styled("div")(({ theme }) => ({
    // border: "1px solid red",
    display: "flex",
    alignItems: "center",
    justifyContent:'space-between',
    padding:'0px 14px 0px 10px',
  "& div": {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  "& img": {
    // width:'20px',
    objecFit: "contain",
  },

  "& p": {
    fontSize: "14px",
    fontWeight: "600",
    color: theme.palette.customTextColor.primary,
  },
}));
