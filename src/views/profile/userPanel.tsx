import { Box } from "@mui/material";
import React from "react";
import { Label } from "../../components";
import { Avatar } from "../../components/avatar";

export const UserPanel = ({ name }: any) => {
  return (
    <Box
      mt="40px"
      display="flex"
      width="100%"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box mb="40px">
        <Box>
          <Label type="title">Perfil</Label>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        width="204px"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar />
        <Box mt="12px">
          <Label type="title">{name}</Label>
        </Box>
      </Box>
    </Box>
  );
};
