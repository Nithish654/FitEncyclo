//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weightKg: 0,
  recommendedLitres: 0,
};

const waterSlice = createSlice({
  name: "water",
  initialState,
  reducers: {
    setWeight(state, action) {
      state.weightKg = action.payload;
      state.recommendedLitres = +(action.payload / 20).toFixed(2);
    },
    clearWater(state) {
      state.weightKg = 0;
      state.recommendedLitres = 0;
    },
  },
});

export const { setWeight, clearWater } = waterSlice.actions;
export default waterSlice.reducer;
