import { styled } from "@mui/material";

const PageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100vh",
  //   backgroundColor: theme.palette.primary.light,
  //   border: "1px solid red",
  padding: "20px",
  fontFamily:'Raleway',
  backgroundColor:theme.palette.primary.main,
}));

// side bar content under this styled component
const SideBarContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: "400px",
  height:'900px',
  padding: "35px",
  borderRadius: "32px",
  overflow:'hidden',
  // border: "1px solid green",
}));

// layput pages content under this styled component
const LayoutContainer = styled("div")({
  width: "100%",
  padding: "10px",
});

export { PageContainer, SideBarContainer, LayoutContainer };
