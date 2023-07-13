import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import auth from "../api/auth";
import urls from "../api/url";

const reducer = combineReducers({
  auth,
  urls,
});

const store = configureStore({
  reducer,
});

export default store;
