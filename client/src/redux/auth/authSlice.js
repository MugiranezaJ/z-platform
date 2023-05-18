import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  isLoggedIn: false,
  user: null,
  isLoading: false,
  error: null,
  response: null,
};

// Define the async thunks
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await axios.post("/auth/login", { email, password });
    return response.data;
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ firstName, lastName, email, password }) => {
    const response = await axios.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await axios.post("/auth/logout");
  return response.data;
});

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ email }) => {
    const response = await axios.post("/auth/reset-password", { email });
    return response.data;
  }
);

export const verifyAccount = createAsyncThunk(
  "auth/verifyAccount",
  async ({ token }) => {
    const response = await axios.post("/auth/verify-account", { token });
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login actions
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload;
      state.error = null;
      state.response = payload;
    });
    builder.addCase(login.rejected, (state, { error, payload }) => {
      state.isLoading = false;
      state.error = error.message;
      state.response = error;
    });

    // Signup actions
    builder.addCase(signup.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload;
      state.error = null;
      state.response = payload;
    });
    builder.addCase(signup.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
      state.response = error;
    });

    // Logout actions
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    // Reset password actions
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(resetPassword.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    // Verify account actions
    builder.addCase(verifyAccount.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(verifyAccount.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(verifyAccount.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
