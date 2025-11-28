// src/Pages/BMIcalculator.jsx
// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateBMI, clearBMI } from "../Components/bmiSlice";

export default function BMIcalculator() {
  const dispatch = useDispatch();
  const bmiState = useSelector((s) => s.bmi);

  // local form state for instant typing
  const [weightKg, setWeightKg] = useState(bmiState.weightKg || "");
  const [heightCm, setHeightCm] = useState(bmiState.heightCm || "");

  useEffect(() => {
    // keep local inputs in sync if persisted state exists
    setWeightKg(bmiState.weightKg || "");
    setHeightCm(bmiState.heightCm || "");
  }, [bmiState.weightKg, bmiState.heightCm]);

  const onCalculate = (e) => {
    e.preventDefault();
    dispatch(
      calculateBMI({ weightKg: Number(weightKg), heightCm: Number(heightCm) })
    );
  };

  const onClear = () => {
    setWeightKg("");
    setHeightCm("");
    dispatch(clearBMI());
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">BMI Calculator</h2>

      <div className="bg-white rounded-xl shadow p-6">
        <form
          onSubmit={onCalculate}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
        >
          <div>
            <label className="block text-sm text-gray-600">Weight (kg)</label>
            <input
              type="number"
              min="1"
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded"
              placeholder="e.g., 70"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Height (cm)</label>
            <input
              type="number"
              min="1"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded"
              placeholder="e.g., 175"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:scale-105 transform transition"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={onClear}
              className="border px-4 py-2 rounded-md hover:bg-gray-50 transition"
            >
              Clear
            </button>
          </div>
        </form>

        <div className="mt-6">
          <h3 className="text-sm text-gray-600">Result</h3>
          <div className="mt-2 text-3xl font-bold">
            {bmiState.bmi ? `${bmiState.bmi} BMI` : "—"}
          </div>
          <div className="mt-1 text-sm text-gray-700">
            {bmiState.category ? (
              <span>
                Category: <strong>{bmiState.category}</strong>
              </span>
            ) : (
              <span>Enter values and press Calculate</span>
            )}
          </div>

          {/* helpful tips */}
          {bmiState.bmi ? (
            <div className="mt-4 p-4 bg-indigo-50 rounded">
              {bmiState.category === "Underweight" && (
                <p>
                  Tip: Add healthy calories — nuts, milk, protein-rich foods.
                </p>
              )}
              {bmiState.category === "Normal" && (
                <p>
                  Great — maintain weight with balanced diet & regular exercise.
                </p>
              )}
              {bmiState.category === "Overweight" && (
                <p>
                  Tip: Focus on cardio, calorie deficit & strength training.
                </p>
              )}
              {bmiState.category === "Obese" && (
                <p>Tip: Consult a professional and follow a supervised plan.</p>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
