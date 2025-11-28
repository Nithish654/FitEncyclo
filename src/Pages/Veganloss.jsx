// src/Pages/VeganLoss.jsx
// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";

const tipsByMorph = {
  ecto: {
    dietTitle: "Vegan — Fat Loss (Ectomorph)",
    dietPoints: [
      "Maintain slight calorie deficit but don’t crash — eat protein-rich plant foods.",
      "Prioritise legumes, tofu, tempeh and high-protein grains (quinoa).",
      "Increase fibrous veggies for fullness (spinach, broccoli, kale).",
      "Prefer whole grains with controlled portions (oats, millet).",
      "Avoid sugary drinks and refined carbs (white bread, sweets).",
      "Use healthy fats in moderation (nuts, seeds, avocado).",
      "Time carbs around workouts for energy (pre/post).",
      "Drink plenty of water and include high-fiber snacks.",
    ],
    workoutTips: [
      "Mix moderate weights with higher reps (8–12) for metabolic effect.",
      "Add 2–3 HIIT sessions weekly (short & intense).",
      "Use compound movements to burn more calories.",
      "Focus on progressive overload while monitoring recovery.",
    ],
  },
  meso: {
    dietTitle: "Vegan — Fat Loss (Mesomorph)",
    dietPoints: [
      "Aim for moderate calorie deficit with high protein plant sources.",
      "Include legumes, tofu, tempeh and protein shakes if needed.",
      "Eat plenty of vegetables and control starchy carbs portions.",
      "Prefer cooking methods like grilling, steaming, baking.",
      "Avoid processed vegan junk food (vegan burgers/pastries).",
      "Use pulses and whole grains for satiety.",
      "Snack smart: hummus + veggies or a small handful of nuts.",
      "Monitor portions and track calories for 2–4 weeks to adjust.",
    ],
    workoutTips: [
      "Combine strength training with cardio (3–4x strength, 2 cardio).",
      "Use circuit formats to keep heart rate up.",
      "Include mobility and active recovery days.",
      "Progressively increase intensity to avoid plateaus.",
    ],
  },
  endo: {
    dietTitle: "Vegan — Fat Loss (Endomorph)",
    dietPoints: [
      "Priority: high-fibre veggies + lean plant protein (tofu, legumes).",
      "Limit high-glycemic carbs; prefer millet, oats, quinoa in controlled amounts.",
      "Use portion control and meal prep to avoid overeating.",
      "Avoid sugary drinks and high-calorie plant-based desserts.",
      "Use low-fat cooking methods and minimal added oils.",
      "Increase non-starchy vegetables for volume and satiety.",
      "Include a protein-rich breakfast to reduce cravings.",
      "Consider timed carbs: more around workouts, less in evening.",
    ],
    workoutTips: [
      "Higher emphasis on cardio (HIIT + steady-state) alongside weights.",
      "Use metabolic circuits combining weights + cardio.",
      "Aim for daily movement increase (walks, NEAT).",
      "Track calories & protein to ensure deficit without losing muscle.",
    ],
  },
};

export default function VeganLoss() {
  const { morph } = useParams();
  const key = morph === "endo" ? "endo" : morph === "meso" ? "meso" : "ecto";
  const data = tipsByMorph[key];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">{data.dietTitle}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-3">Diet Tips</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            {data.dietPoints.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-3">Workout Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            {data.workoutTips.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
