// src/Pages/VeganGain.jsx
// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";

const tipsByMorph = {
  ecto: {
    dietTitle: "Vegan — Gain (Ectomorph)",
    dietPoints: [
      "Eat calorie-dense smoothies (banana + nut butter + oats).",
      "Use rice, quinoa and peanut butter for extra calories.",
      "Include cooked legumes (lentils, chickpeas) with oils.",
      "Have frequent meals & snacks (every 3 hours).",
      "Add healthy fats: avocado, nuts, seeds, coconut milk.",
      "Choose whole grains with beans for protein + carbs.",
      "Use protein powder (plant-based) after workouts.",
      "Include dried fruits & trail mixes as snacks.",
    ],
    workoutTips: [
      "Focus on heavy compound lifts (squats, deadlifts, bench).",
      "Train with lower rep ranges (5–8) for strength + size.",
      "Limit cardio to 1–2 short sessions weekly.",
      "Progressive overload — add small weight each week.",
    ],
  },
  endo: {
    dietTitle: "Vegan — Loss (Endomorph)",
    dietPoints: [
      "Prefer high-fibre vegetables and moderate carbs.",
      "Control portions of grains; favor millet & oats.",
      "Lean plant-proteins: tofu, tempeh, legumes (in moderation).",
      "Use healthy cooking methods (steaming, grilling).",
      "Avoid sugary drinks & processed snacks.",
      "Increase non-starchy veggies for satiety.",
      "Use small amounts of healthy fats (nuts, olive oil).",
      "Eat regular protein-rich breakfasts to reduce cravings.",
    ],
    workoutTips: [
      "Add HIIT & steady-state cardio for fat loss.",
      "Combine circuits with weights to boost metabolism.",
      "Increase daily NEAT (walks, standing breaks).",
      "Maintain caloric deficit while prioritizing protein.",
    ],
  },
};

export default function VeganGain() {
  const { morph } = useParams();
  const key = morph === "endo" ? "endo" : "ecto";
  const data = tipsByMorph[key];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">{data.dietTitle}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Gradient Diet Card */}
        <div className="rounded-xl p-6 shadow-xl bg-gradient-to-br from-purple-400 to-pink-600 text-white hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-3 text-lg">Diet Tips</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-white">
            {data.dietPoints.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
        </div>

        {/* Gradient Workout Card */}
        <div className="rounded-xl p-6 shadow-xl bg-gradient-to-br from-blue-500 to-cyan-800 text-white hover:scale-[1.02] transition-all duration-300">
          <h3 className="font-semibold mb-3 text-lg">Workout Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-white">
            {data.workoutTips.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
