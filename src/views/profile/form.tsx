import { Box } from "@mui/material";
import React from "react";
import { Button, Input } from "../../components";
import { Message } from "../../components/message";

export const Form = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  userData,
}: any) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Input
          id="name"
          register={register}
          required
          defaultValue={userData?.name}
          label="Name"
        />
        {errors.name?.message && (
          <Message type="error">{errors.name?.message}</Message>
        )}
        <Input
          register={register}
          required
          id="email"
          defaultValue={userData?.email}
          label="Email"
        />
        {errors.email?.message && (
          <Message type="error">{errors.email?.message}</Message>
        )}
        <Input
          id="location"
          register={register}
          defaultValue={userData?.location}
          required
          label="Location"
        />
        {errors.email?.message && (
          <Message type="error">{errors.email?.message}</Message>
        )}
      </Box>
      <Box mt="40px">
        <Button variant="contained" type="submit">
          SAVE
        </Button>
      </Box>
    </form>
  );
};
