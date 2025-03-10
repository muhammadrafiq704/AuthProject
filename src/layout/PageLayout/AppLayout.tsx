import React from "react";
import { Box } from "@mui/material";
import AppContent from "./AppContent";
import SidebarDrawer from "./SidebarDrawer";

const AppLayout: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100dvh",
        p: 1,
        gap: "10px",
      }}
    >
      {/* sidebar drawer  */}
      <SidebarDrawer />
      {/* app content  */}
      <AppContent />
    </Box>
  );
};

export default AppLayout;
