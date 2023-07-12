import { Box, CircularProgress } from "@mui/material";
import React from "react";

export const Loading = () => {
  return (
    <Box style={{ position: "absolute", width: '100%', height: '100vh', background: '#e5e0db6e'  }}>
      <Box style={{ position: "absolute", top: "50%", left: "40%" }}>
        <CircularProgress />
      </Box>
    </Box>
  );
};
