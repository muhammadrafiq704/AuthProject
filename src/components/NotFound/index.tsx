import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#121212",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "8rem", fontWeight: "bold" }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "500px", mb: 3 }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/dashboard")}
        sx={{
          backgroundColor: "#61A0FC",
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "50px",
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;
