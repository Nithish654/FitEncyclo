// src/Pages/NonVeganGain.jsx
// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";

const tipsByMorph = {
  ecto: {
    dietTitle: "Non-Vegan — Gain (Ectomorph)",
    dietPoints: [
      "Full-fat dairy (milk, cheese) to increase calories.",
      "Eggs with rice and avocado for calorie + protein boost.",
      "Fatty fish (salmon), chicken thighs for dense calories.",
      "Add sauces with healthy oils to meals for extra kcal.",
      "Eat 4–6 meals/day, include snacks (nuts, yogurt).",
      "Use weight-gainer style shakes (milk + banana + peanut butter).",
      "Include potatoes, pasta and whole grain breads.",
      "Post-workout meal: carbs + protein (rice + chicken).",
    ],
    workoutTips: [
      "Focus on compound strength lifts, low-rep sets.",
      "Keep cardio minimal, prioritize weights.",
      "Ensure good sleep & recovery for muscle growth.",
    ],
  },
  endo: {
    dietTitle: "Non-Vegan — Loss (Endomorph)",
    dietPoints: [
      "Prioritise lean proteins: fish, chicken breast, eggs.",
      "Limit heavy grains; use controlled portions of rice/pasta.",
      "Cook with minimal oil; favor grilling and steaming.",
      "Avoid sugary sauces and fried foods.",
      "Add protein shakes with low sugar, to hit protein targets.",
      "Eat fibrous veggies to increase fullness.",
      "Reduce alcohol & processed snacks.",
      "Use portion control and meal prepping.",
    ],
    workoutTips: [
      "Combine cardio + resistance training (3–5x week).",
      "Use circuits to keep heart rate elevated.",
      "Track calories to maintain a moderate deficit.",
    ],
  },
};

export default function NonVeganGain() {
  const { morph } = useParams();
  const key = morph === "endo" ? "endo" : "ecto";
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
