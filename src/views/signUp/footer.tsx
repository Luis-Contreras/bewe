import { Box } from "@mui/material";
import React from "react";
import { Label } from "../../components";

export const Footer = () => {
  return (
    <>
      <Box mt="15px" display="flex" justifyContent="center" textAlign="center">
        <Box width="246px">
          <Label type="normal">
            By Creating account You agree to the Terms of use and Privacy Polycy
          </Label>
        </Box>
      </Box>
    </>
  );
};
