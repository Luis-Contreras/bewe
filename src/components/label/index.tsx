import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import { styles } from './label.styles';
import { labelTypes } from "./label.types";
export const Label:FC<labelTypes> = ({ children, type, testId }) => {
  return (
    <Typography data-testid={testId} style={{...styles[type]}}>
      {children}
    </Typography>
  );
};
