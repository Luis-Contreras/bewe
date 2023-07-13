import { Box } from "@mui/material";
import React from "react";
import { CompanyIcon } from "../../assets/icons/companyIcon";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" width="100%" justifyContent="space-between">
      <CompanyIcon complete={false} />
      <Box width="87px">
        <Button
          variant="outlined"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          LOGOUT
        </Button>
      </Box>
    </Box>
  );
};
