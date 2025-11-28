// src/Pages/WorkoutPlans.jsx
// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import EctoImg from "../assets/ecto1.jpg";
import MesoImg from "../assets/meso1.jpg";
import EndoImg from "../assets/endo1.jpg";

export default function WorkoutPlans() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Workout Plans</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Ectomorph -> FoodType (ecto) */}
        <Link
          to="/food-type/ecto"
          className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition overflow-hidden"
        >
          <img
            src={EctoImg}
            alt="Ectomorph"
            className="h-65 w-full object-cover"
          />
          <div className="p-5 text-lg font-medium">Ectomorph</div>
        </Link>

        {/* Mesomorph -> FitTrain (if you want FoodType instead, change to "/food-type/meso") */}
        <Link
          to="/fittrain"
          className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition overflow-hidden"
        >
          <img
            src={MesoImg}
            alt="Mesomorph"
            className="h-65 w-full object-cover"
          />
          <div className="p-5 text-lg font-medium">Mesomorph</div>
        </Link>

        {/* Endomorph -> FoodType (endo) */}
        <Link
          to="/food-type/endo"
          className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition overflow-hidden"
        >
          <img
            src={EndoImg}
            alt="Endomorph"
            className="h-65 w-full object-cover"
          />
          <div className="p-5 text-lg font-medium">Endomorph</div>
        </Link>
      </div>
    </div>
  );
}
