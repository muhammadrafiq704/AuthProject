import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

const OfflineAlert: React.FC = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  return (
    <>
      <Snackbar
        open={isOffline}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="error"
          variant="filled"
          sx={{
            width: "100%",
            maxWidth: "500px",
            fontSize: "14px",
            justifyContent: "center",
          }}
        >
          You are offline. Please check your internet connection.
        </Alert>
      </Snackbar>
    </>
  );
};

export default OfflineAlert;
