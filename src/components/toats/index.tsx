import { Snackbar } from "@mui/material";
import React, { FC } from "react";
import Fade from "@mui/material/Fade";
interface types {
  open: boolean;
  messages: string;
}
export const Toast: FC<types> = ({ open, messages }) => {
  return <Snackbar open={open} TransitionComponent={Fade} message={messages} />;
};
