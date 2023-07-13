import { Box } from "@mui/material";
import React from "react";
import { Avatar } from "../../components/avatar";
import { Label } from "../../components";
import { EditIcon } from "../../assets/icons/editIcon";
import { useNavigate } from "react-router-dom";

export const UserPanel = ({ name, email }: any) => {
  const navigate = useNavigate();

  return (
    <Box mt="40px" display="flex" width="100%" justifyContent="center">
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar />
        <Box mt="12px">
          <Label type="subtitle">{name}</Label>
        </Box>
        <Box mt="8px">
          <Label type="subtitle">{email}</Label>
        </Box>
      </Box>
      <Box onClick={() => navigate("/profile")}>
        <EditIcon />
      </Box>
    </Box>
  );
};
