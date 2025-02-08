import { Alert } from "@mui/material";
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
  console.log('isOffline', isOffline)
  return (
    <>
      {isOffline && (
        <Alert
          severity="error"
          sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 , fontSize:'14px'}}
        >
          You are offline. Please check your internet connection.
        </Alert>
      )}
    </>
  );
};

export default OfflineAlert;
