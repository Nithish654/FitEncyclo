// src/Components/bmiSlice.js
// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const saved = (() => {
  try {
    const raw = localStorage.getItem("bmi_data");
    return raw
      ? JSON.parse(raw)
      : { heightCm: 0, weightKg: 0, bmi: 0, category: null };
  } catch {
    return { heightCm: 0, weightKg: 0, bmi: 0, category: null };
  }
})();

const initialState = {
  heightCm: saved.heightCm || 0,
  weightKg: saved.weightKg || 0,
  bmi: saved.bmi || 0,
  category: saved.category || null,
};

function getCategory(bmi) {
  if (!bmi || bmi === 0) return null;
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    calculateBMI(state, action) {
      const { weightKg, heightCm } = action.payload;
      state.weightKg = Number(weightKg) || 0;
      state.heightCm = Number(heightCm) || 0;

      const h = state.heightCm / 100;
      if (h > 0) {
        const bmiValue = state.weightKg / (h * h);
        state.bmi = Number(bmiValue.toFixed(2));
        state.category = getCategory(state.bmi);
      } else {
        state.bmi = 0;
        state.category = null;
      }

      // persist
      try {
        localStorage.setItem(
          "bmi_data",
          JSON.stringify({
            heightCm: state.heightCm,
            weightKg: state.weightKg,
            bmi: state.bmi,
            category: state.category,
          })
        );
      } catch (e) {
        /* ignore */
      }
    },
    clearBMI(state) {
      state.heightCm = 0;
      state.weightKg = 0;
      state.bmi = 0;
      state.category = null;
      try {
        localStorage.removeItem("bmi_data");
      } catch {}
    },
    setFromStorage(state, action) {
      const { heightCm, weightKg, bmi, category } = action.payload;
      state.heightCm = heightCm;
      state.weightKg = weightKg;
      state.bmi = bmi;
      state.category = category;
    },
  },
});

export const { calculateBMI, clearBMI, setFromStorage } = bmiSlice.actions;
export default bmiSlice.reducer;
