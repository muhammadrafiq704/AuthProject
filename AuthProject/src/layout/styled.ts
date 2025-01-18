import { styled } from "@mui/material";

export const LayoutContent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  overflowX: "hidden",
  overflowY: "hidden",
  [theme.breakpoints.between("mobile", "tablet")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    paddingTop: "20px",
    paddingLeft: "10px",
    width: "40dvh",
  },
  [theme.breakpoints.between("tablet", "laptop")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    paddingLeft: "10px",
  },
}));

export const LogonSection = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  fontFamily: theme.typography.fontFamily,
  height: "95dvh",
  width: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "32px",
  backgroundImage: `url('public/assets/images/pngwing.png')`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0px 10px",
  overflowX: "hidden",
  [theme.breakpoints.between("mobile", "tablet")]: {
    width: "40dvh",
    height: "45dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.between("tablet", "laptop")]: {
    width: "60dvh",
    height: "45dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const ChildContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "60px",
  height: "100dvh",
  width: "100dvh",
  [theme.breakpoints.between("mobile", "tablet")]: {
    padding: "20px",
    height: "40dvh",
    width: "40dvh",
  },
  [theme.breakpoints.between("tablet", "laptop")]: {
    padding: "20px",
    height: "40dvh",
    width: "60dvh",
  },
}));
