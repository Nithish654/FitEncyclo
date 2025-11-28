//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signinSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signinSuccess, signout } = authSlice.actions;
export default authSlice.reducer;
