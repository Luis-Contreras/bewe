import React, { FC } from "react";
import { Link as MUILink } from "@mui/material";

export const Link: FC<any> = ({ href }) => {
  return (
    <MUILink
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      underline="none"
      style={{
        color: "#007AFF",
        fontSize: "18px",
        fontFamily: `sans-serif`,
      }}
    >
      {href}
    </MUILink>
  );
};
