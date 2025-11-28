// src/Pages/Millets.jsx
// @ts-nocheck
import React from "react";
import Fingermilletimg from "../Millets/Fingermillet.jpg";
import Pearlmilletimg from "../Millets/Pearlmillet.jpg";
import Foxtailmilletimg from "../Millets/Foxtailmillet.jpg";
import Sorghummilletimg from "../Millets/Sorghum.jpg";
import Kodomilletimg from "../Millets/Kodo Millet.jpg";
import Littlemilletimg from "../Millets/Little Millet.jpg";

const millets = [
  {
    title: "Finger Millet (Ragi)",
    image: Fingermilletimg,
    organ: "Bones",
    benefit: "High in calcium and minerals that help bone health.",
    calories: "≈ 336 kcal / 100g (dry grain)",
    about: "Gluten-free, rich in calcium, fiber and slow-release carbs.",
  },
  {
    title: "Pearl Millet (Bajra)",
    image: Pearlmilletimg,
    organ: "Heart & Metabolism",
    benefit: "Whole-grain fiber supports cholesterol and metabolic health.",
    calories: "≈ 361 kcal / 100g (dry grain)",
    about: "Good source of magnesium, iron and B-vitamins.",
  },
  {
    title: "Foxtail Millet",
    image:
      Foxtailmilletimg,
    organ: "Blood Sugar Control",
    benefit: "Low glycemic index grain that aids in steady blood sugar.",
    calories: "≈ 351 kcal / 100g (dry grain)",
    about: "High in fiber and minerals; good for glycemic control.",
  },
  {
    title: "Sorghum (Jowar)",
    image: Sorghummilletimg,
    organ: "Liver & Detox",
    benefit: "Whole-grain antioxidants support liver and metabolic functions.",
    calories: "≈ 329 kcal / 100g (dry grain)",
    about: "Gluten-free cereal with protein and antioxidants.",
  },
  {
    title: "Kodo Millet",
    image: Kodomilletimg,
    organ: "Digestion",
    benefit: "High in fiber that helps bowel regularity and gut health.",
    calories: "≈ 330 kcal / 100g (dry grain)",
    about: "Small-grained millet rich in fiber and resistant starch.",
  },
  {
    title: "Little Millet",
    image: Littlemilletimg,
    organ: "Thyroid & Metabolism",
    benefit: "Mineral-rich grain that supports overall metabolic balance.",
    calories: "≈ 326 kcal / 100g (dry grain)",
    about: "Easily digestible whole grain; good for balanced diets.",
  },
];

export default function Millets() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">
        Millets — Benefits by Body Part
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {millets.map((m, i) => (
          <article
            key={i}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            <img
              src={m.image + "?auto=compress&cs=tinysrgb&dpr=2&h=300"}
              alt={m.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{m.title}</h3>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Benefit for:</strong> {m.organ}
              </div>
              <p className="text-sm text-gray-800 mb-2">{m.benefit}</p>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Calories:</strong> {m.calories}
              </div>
              <p className="text-sm text-gray-500">{m.about}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
