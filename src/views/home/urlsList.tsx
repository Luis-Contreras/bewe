import { Box, Divider } from "@mui/material";
import React from "react";
import { Link } from "../../components/link";
import { Label } from "../../components";
import { DeleteIcon } from "../../assets/icons/deleteIcon";
import { urlsTypes } from "../../types";

export const UrlsList = ({ urls = [], deleteUrl }: any) => {
  return (
    <Box>
      {urls.map((item: urlsTypes) => {
        return (
          <>
            <Divider />
            <Box padding="34px 34px">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb="16px"
                onClick={() => deleteUrl(item)}
              >
                <Link href={item.url}></Link>
                <DeleteIcon />
              </Box>
              <Label type="normal">{item.name}</Label>
            </Box>
          </>
        );
      })}
    </Box>
  );
};
