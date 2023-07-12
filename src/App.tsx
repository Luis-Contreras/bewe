import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Login } from "./views/login/";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./views/signUp/";
import { Home } from "./views/home/home";
import { Profile } from "./views/profile";
import { Provider } from 'react-redux'
import store from './redux'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
