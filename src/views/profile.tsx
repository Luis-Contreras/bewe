import React from "react";
import { Button, Input, Label, Layout } from "../components";
import { Box } from "@mui/material";
import { CompanyIcon } from "../assets/icons/companyIcon";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../components/avatar";

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Box display="flex" width="100%" justifyContent="space-between">
        <CompanyIcon complete={false} />
        <Box width="87px">
          <Button variant="outlined" onClick={() => navigate("/")}>
            LOGOUT
          </Button>
        </Box>
      </Box>
      <Box
        mt="40px"
        display="flex"
        width="100%"
        justifyContent="center"
        flexDirection="column"
        alignItems="center">
        <Box mb="40px">
          <Label type="title">Perfil</Label>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          width="204px"
          flexDirection="column"
          alignItems="center">
          <Avatar />
          <Box mt="12px">
            <Label type="subtitle">Jeff Brown</Label>
          </Box>
        </Box>
      </Box>
      <Box>
        <Input id="name" label="Name" />
        <Input id="email" label="Email" />
        <Input id="location" label="Location" />
      </Box>
      <Box  mt="40px">
        <Button variant="contained" onClick={() => console.log("object")}>
          SAVE
        </Button>
      </Box>
    </Layout>
  );
};
