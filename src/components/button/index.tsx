import React, { FC } from "react";
import { Button as MUIButton } from "@mui/material";
import { buttonTypes } from "./button.types";
import { style } from "./button.styles";

export const Button: FC<buttonTypes> = ({
  testId,
  children,
  onClick,
  variant="contained",
  disabled,
  type,
}) => {
  const stylesButton = style[variant];
  return (
    <MUIButton
      type={type}
      size="large"
      disabled={disabled}
      sx={{ textTransform: "none" }}
      style={{ ...stylesButton }}
      data-testid={testId}
      variant={variant}
      onClick={onClick}>
      {children}
    </MUIButton>
  );
};
