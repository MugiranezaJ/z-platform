import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import profileReducer from "./profile/profileSlice";
import verificationReducer from "./verification/verificationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    verification: verificationReducer,
  },
});

export default store;
