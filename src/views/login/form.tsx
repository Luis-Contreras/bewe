import React from "react";
import { Button, Input } from "../../components";
import Box from "@mui/material/Box";
import { validateEmail } from "../../tools/validatesFields";
import { Message } from "../../components/message";

export const Form = ({ handleSubmit, onSubmit, register, errors }: any) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Input
          label="Your Email"
          register={register}
          required
          id="email"
          validate={validateEmail}
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
        />
      </Box>
      <Box mt="50px">
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Box>
    </form>
  );
};
