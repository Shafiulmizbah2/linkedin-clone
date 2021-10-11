import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
