import { Box } from "@mui/material";
import React from "react";
import { Button, Label } from "../../components";
import { useNavigate } from "react-router-dom";
import { CompanyIcon } from "../../assets/icons/companyIcon";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box display="flex" width="100%" justifyContent="end">
        <Box width="87px">
          <Button variant="outlined" onClick={() => navigate("/signup")}>
            SIGNUP
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mt="90px">
        <CompanyIcon />
      </Box>
      <Box mt="50px">
        <Label type="title">Login</Label>
      </Box>
    </>
  );
};
