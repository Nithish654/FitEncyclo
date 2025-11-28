//@ts-nocheck
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import waterReducer from "./waterSlice";
import bmiReducer from "./bmislice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    water: waterReducer,
    bmi: bmiReducer,
  },
});

export default store;
