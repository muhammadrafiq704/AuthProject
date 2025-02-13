import { styled } from "@mui/material";

const NavbarContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  gap: "16px",
  padding: "4px",
  "& img": {
    cursor: "pointer",
    [theme.breakpoints.between("mobile", "tablet")]: {
      height: "32px",
    },
  },
  "& div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    width: "38px",
    height: "38px",
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.between("mobile", "tablet")]: {
      width: "32px",
      height: "32px",
    },
    "& img": {
      height: "18px",
      [theme.breakpoints.between("mobile", "tablet")]: {
        height: "18px",
      },
    },
  },
  "& p": {
    fontSize: "16px",
    fontWeight: "700",
    color: theme.palette.text.primary,
  },
}));

const HeaderContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4px",
  "& p": {
    fontSize: "38px",
    fontWeight: "700",
    color: theme.palette.text.primary,
    [theme.breakpoints.between("mobile", "tablet")]: {
      fontSize: "28px",
      fontWeight: "600",
    },
  },
  "& span": {
    fontSize: "16px",
    fontWeight: "600",
    color: theme.palette.text.primary,
    [theme.breakpoints.between("mobile", "tablet")]: {
      fontSize: "10px",
      fontWeight: "400",
    },
  },
  "& strong": {
    fontSize: "16px",
    fontWeight: "800",
    color: theme.palette.primary.light,
    [theme.breakpoints.between("mobile", "tablet")]: {
      fontSize: "14px",
      fontWeight: "400",
    },
  },
}));

const CategoryContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100%",
  // border: "1px solid red",
  gap: "4px",
  padding: "4px",
  // marginBottom: "20px",
  [theme.breakpoints.between("mobile", "tablet")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    gap: "8px",
  },
  "& div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "150px",
    height: "125px",
    borderRadius: "10px",
    [theme.breakpoints.between("mobile", "tablet")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100px",
      height: "80px",
      borderRadius: "8px",
    },
    "& p": {
      fontSize: "12px",
      fontWeight: "600",
      [theme.breakpoints.between("mobile", "tablet")]: {
        fontSize: "8px",
        fontWeight: "500",
      },
    },
    "& span": {
      fontSize: "20px",
      fontWeight: "700",
      [theme.breakpoints.between("mobile", "tablet")]: {
        fontSize: "12px",
        fontWeight: "700",
      },
    },
    "& img": {
      height: "48px",
      [theme.breakpoints.between("mobile", "tablet")]: {
        height: "28px",
      },
    },
  },
}));

const AlertContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  justifyContent: "space-between",
});
const AlertHeader = styled("div")(({ theme }) => ({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "4px",
  "& p": {
    fontSize: "20px",
    fontWeight: "700",
    color: theme.palette.text.primary,
  },
}));
const AlertCardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "12px",
  [theme.breakpoints.between("mobile", "tablet")]: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const AlertCard = styled("div")(({ theme }) => ({
  width: "250",
  height: "150",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "baseline",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  padding: "10px 20px",
  borderRadius: "10px",
  [theme.breakpoints.between("mobile", "tablet")]: {},
  "& div": {
    display: "flex",
    flexDirection: "column",
  },
  "& p": {
    fontSize: "14px",
    fontWeight: "700",
    color: theme.palette.text.primary,
  },
  "& span": {
    fontSize: "14px",
    color: "#8898AA",
  },
}));

const TableContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "8px",
});

const TableHead = styled("div")(({ theme }) => ({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // border: "1px solid red",
  "& p": {
    fontSize: "20px",
    fontWeight: "700",
    color: theme.palette.text.primary,
  },
}));

export {
  NavbarContainer,
  HeaderContainer,
  CategoryContainer,
  AlertContainer,
  AlertHeader,
  AlertCard,
  AlertCardContainer,
  TableContainer,
  TableHead,
};
