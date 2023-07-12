import React, { FC } from "react";
import { Box, Input as MUIInput } from "@mui/material";
import { style } from "./input.styles";
import { inputTypes } from "./input.types";
import { Label } from "../label";

export const Input: FC<inputTypes> = ({
  type = "text",
  onChange,
  testId,
  label,
  register = () => {},
  required,
  id,
  validate,
  disabled = false,
}) => {
  return (
    <Box>
      {label && (
        <Box mt="35px" mb="15px">
          <Label type="subtitle">{label}</Label>
        </Box>
      )}
      <MUIInput
        required
        disabled={disabled}
        id={id}
        {...register(id, { required, validate: validate })}
        data-testid={testId}
        disableUnderline
        style={{ ...style }}
        type={type}
        onChange={onChange}
      />
    </Box>
  );
};
