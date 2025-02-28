import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../pages/Dashboard/components/Navbar";
import Header from "../../pages/Dashboard/components/Header";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Laoding from "../../components/Loading/Loading";

const AppContent: React.FC = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const name = location.pathname.slice(1);
  const title = name.charAt(0).toUpperCase() + name.slice(1);
  // console.log('title', title)
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          overflowX: "auto",
        }}
      >
        <Box sx={{ height: "100px" }}>
          <Navbar />
          <Header title={title} />
        </Box>
        <Box
          sx={{
            padding: 2,
            overflowY: "auto",
          }}
        >
          {/* use outlet for rendering the content of the app */}
          {navigation.state === "loading" ? <Laoding /> : <Outlet />}
        </Box>
      </Box>
    </>
  );
};

export default AppContent;
