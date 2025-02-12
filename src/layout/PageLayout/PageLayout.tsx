import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import SidebarData from "./utils";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import AppContent from "./AppContent";

const PageLayout: React.FC = () => {
  const location = useLocation();
  return (
    // over all app box
    <Box
      sx={{
        display: "flex",
        p: 2,
        gap: "20px",
        height: "100dvh",
      }}
    >
      {/* sidebar box  */}
      <Box
        sx={{
          backgroundColor: "#61A0FD",
          width: 400,
          borderRadius: 6,
          p: 2,
          fontSize: "16px",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Typography
          variant="h3"
          color="white"
          sx={{
            fontWeight: "700",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            p: 2,
          }}
        >
          <span>
            <img src="/assets/SidebarIcons/sidebarlogo.png" alt="" />
          </span>{" "}
          KnobExpress
        </Typography>
        <Box
          sx={{
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {SidebarData.map((item) =>
            item.accordion ? (
              <Accordion
                key={item.id}
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <GridExpandMoreIcon
                      sx={{ fontSize: "24px", color: "white" }}
                    />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    display: "flex",
                    gap: "27px",
                    backgroundColor:
                      location.pathname === item.href
                        ? "rgba(248, 248, 248, 0.2)"
                        : "",
                    borderRadius: location.pathname === item.href ? "20px" : "",
                  }}
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    style={{ paddingRight: "8px" }}
                  />
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    to={item.href}
                  >
                    {item.title}
                  </NavLink>
                </AccordionSummary>
                {item?.children?.map((child) => (
                  <AccordionDetails
                    sx={{
                      marginLeft: "30px",
                      p: 0,
                      backgroundColor:
                        location.pathname === item.href
                          ? "rgba(248, 248, 248, 0.2)"
                          : "",
                      borderRadius:
                        location.pathname === item.href ? "20px" : "",
                    }}
                    key={child.id}
                  >
                    <img src={child.icon} alt="icon" />
                    <NavLink
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "600",
                        paddingLeft: "20px",
                      }}
                      to={child.href}
                    >
                      {child.title}
                    </NavLink>
                  </AccordionDetails>
                ))}
              </Accordion>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  p: 2,
                  backgroundColor:
                    location.pathname === item.href
                      ? "rgba(248, 248, 248, 0.2)"
                      : "",
                  borderRadius: location.pathname === item.href ? "20px" : "",
                }}
              >
                <img src={item.icon} alt="icon" />
                <NavLink
                  to={item.href}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </NavLink>
              </Box>
            )
          )}
        </Box>
      </Box>
      {/* app content holds   */}
      <AppContent />
    </Box>
  );
};

export default PageLayout;
