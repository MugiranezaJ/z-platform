import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verificationStatus: null,
  loading: false,
  error: null,
};

// Create the verification slice
const verificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    verifyAccountStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    verifyAccountSuccess: (state) => {
      state.loading = false;
      // state.verificationStatus = '';
      state.error = null;
    },
    verifyAccountFailure: (state, action) => {
      state.loading = false;
      state.verificationStatus = null;
      state.error = action.payload;
    },
  },
});

export const {
  verifyAccountStart,
  verifyAccountSuccess,
  verifyAccountFailure,
} = verificationSlice.actions;

export default verificationSlice.reducer;
