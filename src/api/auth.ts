import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH_API, REQUEST_TYPE } from "./constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginTypes, signUpTypes } from "../types";

export const fetchSignUp = createAsyncThunk(
  "signUpUser",
  async (body, thunkAPI) =>
    await fetch(`${AUTH_API}/singin`, {
      body: JSON.stringify(body),
      headers: {},
      method: REQUEST_TYPE.POST,
    }).then((response) => response.json())
);

export const fetchLogin = createAsyncThunk(
  "loginUser",
  async (body: loginTypes | any, thunkAPI) =>
    await fetch(`${AUTH_API}/login`, {
      body: JSON.stringify(body),
      method: REQUEST_TYPE.POST,
    }).then((response) => response.json())
);

interface UsersState {
  registerUserData: signUpTypes;
  loginUserData: loginTypes;
  loading: boolean;
  error: boolean;
  registerUser: boolean;
  token: string;
  message: string;
}

const initialState = {
  registerUserData: {},
  loginUserData: {},
  loading: false,
  error: false,
  registerUser: false,
  token: "",
  message: "",
} as UsersState;

const signUpUserSlice = createSlice({
  name: "signUpUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSignUp.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(fetchSignUp.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSignUp.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.error = true;
        state.message = action.payload.error;
        state.loading = false;
        return;
      }
      state.registerUserData = action.payload.data;
      state.registerUser = true;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      if (action.payload.message === "User not exist") {
        state.error = true;
        state.message = action.payload.message;
      } else {
        state.loginUserData = action.payload.data;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("userData", JSON.stringify(action.payload.data));
        state.token = action.payload.token;
      }
      state.loading = false;
    });
  },
});

export default signUpUserSlice.reducer;
