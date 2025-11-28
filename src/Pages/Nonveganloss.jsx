// src/Pages/NonVeganLoss.jsx
// @ts-nocheck
import React from "react";
import { useParams } from "react-router-dom";

const tipsByMorph = {
  ecto: {
    dietTitle: "Non-Vegan — Fat Loss (Ectomorph)",
    dietPoints: [
      "Slight calorie deficit with sufficient protein (eggs, dairy, lean meats).",
      "Prefer lean proteins like chicken breast and fish.",
      "Control starchy carbs and favor whole grains around workouts.",
      "Avoid sugary drinks & fried foods.",
      "Eat frequent balanced meals to maintain energy.",
      "Include vegetables in large portions for satiety.",
      "Limit alcohol and high-calorie sauces.",
      "Use portion control; small, caloric-dense snacks when needed.",
    ],
    workoutTips: [
      "Strength training 3–4x/week with moderate reps.",
      "Short HIIT sessions 2x/week for extra calorie burn.",
      "Focus on building lean muscle to improve metabolism.",
    ],
  },
  meso: {
    dietTitle: "Non-Vegan — Fat Loss (Mesomorph)",
    dietPoints: [
      "High-protein meals (eggs, chicken, fish) with controlled carbs.",
      "Prefer lean cuts and grilled/steamed cooking.",
      "Avoid processed meats and fatty cuts regularly.",
      "Use vegetables and salads for volume.",
      "Snack on Greek yogurt, boiled eggs, or cottage cheese.",
      "Track intake to ensure a modest calorie deficit.",
      "Time carbs around training to preserve performance.",
      "Reduce sugary desserts and drinks.",
    ],
    workoutTips: [
      "Alternate strength and cardio; circuits work well.",
      "Maintain muscle mass with resistance training.",
      "Use intervals to boost fat loss while keeping strength.",
    ],
  },
  endo: {
    dietTitle: "Non-Vegan — Fat Loss (Endomorph)",
    dietPoints: [
      "Prioritise lean protein (fish, chicken breast, eggs) every meal.",
      "Strict portion control on carbs; choose low-GI carbs like millet/oats.",
      "Avoid fried foods, sugary sauces, and processed snacks.",
      "Cook with minimal oil; favor baking/grilling/steaming.",
      "Use salads and non-starchy veggies to fill up first.",
      "Limit high-calorie dairy and fatty cuts.",
      "Prepare meals in advance to avoid overeating.",
      "Consider tracking macros to ensure deficit and protein target.",
    ],
    workoutTips: [
      "Frequent cardio + resistance training (4–6 sessions weekly).",
      "Circuit training and HIIT are effective for endomorphs.",
      "Increase daily non-exercise movement and avoid sedentary long periods.",
    ],
  },
};

export default function NonVeganLoss() {
  const { morph } = useParams();
  const key = morph === "endo" ? "endo" : morph === "meso" ? "meso" : "ecto";
  const data = tipsByMorph[key];

  return (
    <div className="rounded-xl p-6 shadow-xl ">
      <h2 className="text-2xl font-semibold mb-6">{data.dietTitle}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-pink-400 to-violet-600 text-white hover:scale-[1.02] transition-all duration-300 rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-3">Diet Tips</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            {data.dietPoints.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
        </div>

        <div className="bg-gradient-to-br from-red-800 to-black-100 text-white hover:scale-[1.02] transition-all duration-300  rounded-xl p-6 shadow">
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
