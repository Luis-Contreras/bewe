import React, { FC } from "react";
import { layoutTypes } from "./layout.types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const Layout: FC<layoutTypes> = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: '40px 30px' }}>
        {children}
      </Box>
    </Container>
  );
};
