import { Box } from "@mui/material";
import React from "react";
import { Button, Label } from "../../components";
import { CompanyIcon } from "../../assets/icons/companyIcon";
import { useNavigate } from "react-router-dom";

export const Header = ({isLoading}: any) => {
  const navigate = useNavigate();
  return (
    <>
      <Box display="flex" width="100%" justifyContent="end">
        <Box width="87px">
          <Button disabled={isLoading} variant="outlined" onClick={() => navigate("/")}>
            LOGIN
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mt="40px">
        <CompanyIcon />
      </Box>
      <Box mt="50px">
        <Label type="title">SignUp</Label>
      </Box>
    </>
  );
};
