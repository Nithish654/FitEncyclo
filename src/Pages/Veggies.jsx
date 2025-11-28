// src/Pages/Veggies.jsx
// @ts-nocheck
import React from "react";

import Carrotimg from "../Veggiesimg/Carrot.jpg";
import Spinachimg from "../Veggiesimg/Spinach.jpg";
import Broccoliimg from "../Veggiesimg/Brocolli.jpg"; // FIXED
import SweetPotatoimg from "../Veggiesimg/potato.jpg"; // FIXED
import Garlicimg from "../Veggiesimg/Garlic.jpg";
import Tomatoimg from "../Veggiesimg/Tomato.jpg";

const veggies = [
  {
    title: "Carrot",
    image: Carrotimg,
    organ: "Eyes",
    benefit:
      "Rich in beta-carotene (vitamin A precursor) that supports vision.",
    calories: "≈ 41 kcal / 100g",
    about: "Low-calorie root vegetable high in fiber and antioxidants.",
  },
  {
    title: "Spinach",
    image: Spinachimg,
    organ: "Blood (Iron)",
    benefit:
      "Contains iron and folate which support healthy blood and oxygen transport.",
    calories: "≈ 23 kcal / 100g",
    about: "Leafy green rich in vitamins K, A, C and minerals.",
  },
  {
    title: "Broccoli",
    image: Broccoliimg,
    organ: "Bones & Detox",
    benefit:
      "High in vitamin K and sulfur compounds which support bone & detox pathways.",
    calories: "≈ 34 kcal / 100g",
    about: "Cruciferous vegetable with fiber and sulforaphane.",
  },
  {
    title: "Sweet Potato",
    image: SweetPotatoimg,
    organ: "Gut & Digestion",
    benefit:
      "Fiber and resistant starch support healthy digestion and gut regularity.",
    calories: "≈ 86 kcal / 100g",
    about: "Starchy root with beta-carotene and complex carbs.",
  },
  {
    title: "Garlic",
    image: Garlicimg,
    organ: "Heart & Immunity",
    benefit:
      "Compounds like allicin may support circulatory and immune health.",
    calories: "≈ 149 kcal / 100g",
    about: "Used in small amounts; potent flavor and bioactive compounds.",
  },
  {
    title: "Tomato",
    image: Tomatoimg,
    organ: "Kidneys & Heart",
    benefit: "Lycopene and potassium support cardiovascular and renal health.",
    calories: "≈ 18 kcal / 100g",
    about: "Hydrating, low-calorie, and rich in vitamins A and C.",
  },
];

export default function Veggies() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">
        Vegetables — Benefits by Body Part
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {veggies.map((v, i) => (
          <article
            key={i}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            <img
              src={v.image}
              alt={v.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{v.title}</h3>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Benefit for:</strong> {v.organ}
              </div>
              <p className="text-sm text-gray-800 mb-2">{v.benefit}</p>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Calories:</strong> {v.calories}
              </div>
              <p className="text-sm text-gray-500">{v.about}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
