import React, { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { NavLink, useLocation } from "react-router-dom";
import SidebarData from "./utils";

const SidebarDrawer: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(
    null
  );
  const isMobile = useMediaQuery("(max-width: 1024px)");

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

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const SidebarContent = (
    <Box
      sx={{
        backgroundColor: "#61A0FD",
        width: 300,
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
        <img
          src="/assets/SidebarIcons/sidebarlogo.png"
          alt="logo"
          height={40}
        />
        KnobExpress
      </Typography>
      <Box sx={{ overflowY: "auto", scrollbarWidth: "none" }}>
        {SidebarData.map((item) => {
          const isChildActive = item?.children?.some(
            (child) => child.href === location.pathname
          );
          // console.log('isChildActive', isChildActive);

          return item.accordion ? (
            <Accordion
              key={item.id}
              sx={{
                backgroundColor: isChildActive
                  ? "rgba(248, 248, 248, 0.18)"
                  : "transparent",
                boxShadow: "none",
                borderRadius: "20px",
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
                sx={{
                  display: "flex",
                  gap: "27px",
                }}
              >
                <img src={item.icon} alt="icon" height={24} />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginLeft: "8px",
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
                    alignItems: "center",
                    marginLeft: "20px",
                    width: "220px",
                    p: 1,
                    pl: 2,
                  }}
                >
                  <NavLink
                    to={child.href}
                    style={{
                      textDecoration: "none",
                      color:
                        location.pathname === child.href
                          ? "white"
                          : "rgba(248, 248, 248, 0.70)",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
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
              <img src={item.icon} alt="icon" height={24} />
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
  );

  return isMobile ? (
    <>
      <IconButton
        sx={{ position: "absolute", top: 16, left: 16, zIndex: 1200 }}
        onClick={toggleDrawer}
      >
        <MenuIcon sx={{ color: "#61A0FD", fontSize: "24px" }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "transparent" } }}
      >
        {SidebarContent}
      </Drawer>
    </>
  ) : (
    <Box sx={{ width: 300 }}>{SidebarContent}</Box>
  );
};

export default SidebarDrawer;
