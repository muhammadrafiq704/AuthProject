import React, { useEffect, useState } from "react";
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

const AppLayout: React.FC = () => {
  const location = useLocation();
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(
    null
  );

  useEffect(() => {
    SidebarData.forEach((item) => {
      const isChildActive = item?.children?.some(
        (child) => child.href === location.pathname
      );
      if (isChildActive) {
        setExpandedAccordion(item.id);
      }
    });
  }, [location.pathname]);
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
          {SidebarData.map((item) => {
            const isChildActive = item?.children?.some(
              (item) => item.href === location.pathname
            );
            console.log("active", isChildActive);
            return item.accordion ? (
              <Accordion
                key={item.id}
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
                expanded={expandedAccordion === item.id || isChildActive}
                onChange={() =>
                  setExpandedAccordion(
                    expandedAccordion === item.id ? null : item.id
                  )
                }
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
                        ? "rgba(248, 248, 248, 0.27)"
                        : "",
                    borderRadius: location.pathname === item.href ? "20px" : "",
                  }}
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    style={{ paddingRight: "8px" }}
                    height={24}
                  />
                  <Typography
                    sx={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </Typography>
                </AccordionSummary>
                {item?.children?.map((child) => (
                  <AccordionDetails
                    key={child.id}
                    sx={{
                      display: "flex",
                      justifyContent: "baseline",
                      alignItems: "center",
                      marginLeft: "20px",
                      p: 0,
                      backgroundColor:
                        location.pathname === child.href
                          ? "rgba(248, 248, 248, 0.27)"
                          : "",
                      borderRadius:
                        location.pathname === child.href ? "20px" : "",
                      padding: location.pathname === child.href ? 2 : "",
                    }}
                  >
                    <img src={child.icon} alt="icon" />
                    <NavLink
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "600",
                        paddingLeft: "10px",
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
                key={item.id}
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
            );
          })}
        </Box>
      </Box>
      {/* app content holds   */}
      <AppContent />
    </Box>
  );
};

export default AppLayout;
