import { Box } from "@mui/material";
import React from "react";
import { Button, Input } from "../../components";
import { validateFullName, validateUrl } from "../../tools/validatesFields";
import { Message } from "../../components/message";

export const Form = ({ handleSubmit, onSubmit, register, errors }: any) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Input
          id="url"
          label="Url to save"
          register={register}
          validate={validateUrl}
          required
        />
        {errors.url?.message && (
          <Message type="error">{errors.url?.message}</Message>
        )}
        <Input
          id="name"
          validate={validateFullName}
          label="Name of url"
          required
          register={register}
        />
        {errors.name?.message && (
          <Message type="error">{errors.name?.message}</Message>
        )}
      </Box>
      <Box mt="30px">
        <Button variant="contained" type="submit">
          ADD
        </Button>
      </Box>
    </form>
  );
};
