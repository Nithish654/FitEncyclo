//@ts-nocheck
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeight, clearWater } from "../Components/WaterSlice";
import { motion } from "framer-motion";

export default function WaterIntake() {
  const dispatch = useDispatch();
  const water = useSelector((s) => s.water);
  const [input, setInput] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();
    const kg = Number(input);
    if (!kg || kg <= 0) return;
    dispatch(setWeight(kg));
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-4">Water Intake Calculator</h2>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        <form
          onSubmit={handleCalculate}
          className="bg-white p-6 rounded-xl shadow"
        >
          <label className="text-sm">Enter your weight (kg)</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="number"
            min="1"
            className="w-full mt-2 px-3 py-2 border rounded"
            placeholder="e.g., 60"
          />
          <div className="flex gap-3 mt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={() => {
                setInput("");
                dispatch(clearWater());
              }}
              className="border px-4 py-2 rounded"
            >
              Clear
            </button>
          </div>
        </form>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-medium">Result</h3>

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-4"
          >
            <p className="text-sm text-gray-600">
              Weight: <b>{water.weightKg || "-"}</b> kg
            </p>
            <p className="text-2xl font-bold mt-2">
              {water.recommendedLitres || "–"} L
            </p>

            <div className="mt-6">
              <div className="w-full h-40 bg-slate-100 rounded-lg relative overflow-hidden">
                {/* Water fill animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-indigo-400/60"
                  style={{
                    height: `${Math.min(
                      ((water.recommendedLitres || 0) / 5) * 100,
                      100
                    )}%`,
                    transition: "height 0.6s ease",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/80 font-semibold">
                  {water.recommendedLitres
                    ? `${water.recommendedLitres} L / day`
                    : "No data yet"}
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Note: Formula = 1 litre per 20 kg body weight (approximation).
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
