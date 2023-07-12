import React from "react";
import { Button, Input, Label, Layout } from "../../components";
import { Box, Divider } from "@mui/material";
import { CompanyIcon } from "../../assets/icons/companyIcon";
import { useNavigate } from "react-router-dom";
import { Avatar } from "../../components/avatar";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Box width="100%">
      <Layout>
        <Box display="flex" width="100%" justifyContent="space-between">
          <CompanyIcon complete={false} />
          <Box width="87px">
            <Button variant="outlined" onClick={() => navigate("/")}>
              LOGOUT
            </Button>
          </Box>
        </Box>
        <Box mt="40px" display="flex" width="100%" justifyContent="center">
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
            <Box mt="8px">
              <Label type="subtitle">jeff.brown@example.com</Label>
            </Box>
          </Box>
        </Box>
        <Box>
          <Input id="url" label="Url to save" />
          <Input id="name" label="Name of url" />
        </Box>
        <Box mt="30px">
          <Button variant="contained" onClick={() => console.log("object")}>
            ADD
          </Button>
        </Box>
      </Layout>
      <Box >
        <Divider />
        <Box padding='34px 34px'>
          www.url.com
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Box>
      </Box>
    </Box>
  );
};
