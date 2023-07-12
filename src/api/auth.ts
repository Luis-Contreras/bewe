import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH_API, REQUEST_TYPE } from "./constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginTypes, signUpTypes } from "../types";

export const fetchSignUp = createAsyncThunk(
  "signUpUser",
  async (body: signUpTypes | any, thunkAPI) => {
    return {
      message: "success",
      data: {
        name: "string",
        email: "test@gmail.com",
        password: "b45cffe084dd3d20d928bee85e7b0f21",
        image: "string",
      },
    };
  }
  // await fetch(`${AUTH_API}/singin`, {
  //   body: body,
  // })
  //   .then((response) => response.json())
  //   .then((data) => data)
);

export const fetchLogin = createAsyncThunk(
  "loginUser",
  async (body: loginTypes | any, thunkAPI) => {
    return {
      message: "success",
      data: {
        id: 56,
        name: "string",
        email: "string",
        password: "b45cffe084dd3d20d928bee85e7b0f21",
        image: "string",
      },
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN0cmluZyIsIm5hbWUiOiJzdHJpbmciLCJpZCI6NTYsImlhdCI6MTY4OTE4NTI4Nn0.jEpGycTpb-HRbR4bpTC9l25Gz37nNxjlJBehqxnzVy8",
    };
  }
  // await fetch(`${AUTH_API}/login`, {
  //   body: body,
  // })
  //   .then((response) => response.json())
  //   .then((data) => data)
);

interface UsersState {
  registerUserData: signUpTypes;
  loginUserData: loginTypes;
  loading: boolean;
  error: boolean;
  registerUser: boolean;
  token: string;
}

const initialState = {
  registerUserData: {},
  loginUserData: {},
  loading: false,
  error: false,
  registerUser: false,
  token: ''
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
      state.registerUserData = action.payload.data;
      state.registerUser = true;
      state.loading = false;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loginUserData = action.payload.data;
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('userData', JSON.stringify(action.payload.data))
      state.token = action.payload.token;
      state.loading = false;
    });
  },
});

export default signUpUserSlice.reducer;
