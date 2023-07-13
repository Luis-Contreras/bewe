import React from "react";
import { Button, Input } from "../../components";
import Box from "@mui/material/Box";
import {
  validateEmail,
  validateFullName,
  validatePwd,
} from "../../tools/validatesFields";
import { Message } from "../../components/message";

export const Form = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  isLoading,
}: any) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Full name"
        register={register}
        required
        id="name"
        validate={validateFullName}
        disabled={isLoading}
      />
      {errors.name?.message && (
        <Message type="error">{errors.name?.message}</Message>
      )}
      <Input
        id="email"
        label="Your Email"
        register={register}
        required
        validate={validateEmail}
        disabled={isLoading}
      />
      {errors.email?.message && (
        <Message type="error">{errors.email?.message}</Message>
      )}
      <Input
        type="password"
        id="password"
        label="Password"
        register={register}
        required
        disabled={isLoading}
        //validate={validatePwd}
      />
      {errors.password?.message && (
        <Message type="error">{errors.password?.message}</Message>
      )}
      <Box mt="50px">
        <Button disabled={isLoading} variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </form>
  );
};
