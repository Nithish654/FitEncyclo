// src/Pages/Fruits.jsx
// @ts-nocheck
import React from "react";

// import images (use exact filenames & casing)
import AppleImg from "../fruitsimage/Apple.jpg";
import BananaImg from "../fruitsimage/banana.jpg";
import BlueberryImg from "../fruitsimage/blueberry.jpg";
import OrangeImg from "../fruitsimage/orange.jpg";
import PomegranateImg from "../fruitsimage/pomegranate.jpg";
import AvacadoImg from "../fruitsimage/avacado.jpg"; // note: file in your tree is 'avacado.jpg'

const fruits = [
  {
    title: "Apple",
    image: AppleImg,
    organ: "Heart",
    benefit: "Supports heart health with soluble fiber and antioxidants.",
    calories: "≈ 52 kcal / 100g",
    about: "Good source of fiber (pectin). Low fat; helps cholesterol control.",
  },
  {
    title: "Banana",
    image: BananaImg,
    organ: "Muscles & Electrolytes",
    benefit:
      "Rich in potassium which helps muscle function and electrolyte balance.",
    calories: "≈ 89 kcal / 100g",
    about: "Natural simple carbohydrates — good pre/post-workout energy.",
  },
  {
    title: "Blueberries",
    image: BlueberryImg,
    organ: "Brain",
    benefit:
      "High in antioxidants that support cognitive health and aging brain function.",
    calories: "≈ 57 kcal / 100g",
    about: "Low calorie, rich in anthocyanins and flavonoids.",
  },
  {
    title: "Orange",
    image: OrangeImg,
    organ: "Immune System",
    benefit:
      "Vitamin C helps support immune defenses and skin collagen production.",
    calories: "≈ 47 kcal / 100g",
    about: "Hydrating fruit with vitamin C and flavonoids.",
  },
  {
    title: "Pomegranate",
    image: PomegranateImg,
    organ: "Blood & Circulation",
    benefit: "Contains polyphenols that may support healthy circulation.",
    calories: "≈ 83 kcal / 100g",
    about: "Antioxidant-rich; seeds and juice used for heart-friendly diets.",
  },
  {
    title: "Avocado",
    image: AvacadoImg,
    organ: "Skin & Liver",
    benefit:
      "Healthy monounsaturated fats support skin health and nutrient absorption.",
    calories: "≈ 160 kcal / 100g",
    about: "High in healthy fat, fiber, and vitamin E — calorie dense.",
  },
];

export default function Fruits() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">
        Fruits — Benefits by Body Part
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fruits.map((f, i) => (
          <article
            key={i}
            className="bg-white rounded-xl shadow p-0 overflow-hidden"
          >
            {/* use imported image variable directly */}
            <img
              src={f.image}
              alt={f.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-1">{f.title}</h3>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Benefit for:</strong> {f.organ}
              </div>
              <p className="text-sm text-gray-800 mb-2">{f.benefit}</p>
              <div className="text-sm text-gray-600 mb-2">
                <strong>Calories:</strong> {f.calories}
              </div>
              <p className="text-sm text-gray-500">{f.about}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
