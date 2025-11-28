// src/Pages/Healthtips.jsx
// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import FruitsImg from "../assets/Fruits.jpg";
import VeggiesImg from "../assets/Veggies.jpg";
import MilletImg from "../assets/Millet.jpg";

export default function Healthtips() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Tips to be Healthy</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Fruits */}
        <Link
          to="/health/Fruits"
          className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition overflow-hidden"
        >
          <img
            src={FruitsImg}
            alt="Fruits"
            className="h-40 w-full object-cover"
          />
          <div className="p-5 text-lg font-medium">Fruits</div>
        </Link>

        {/* Veggies */}
        <Link
          to="/health/Veggies"
          className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition overflow-hidden"
        >
          <img
            src={VeggiesImg}
            alt="Veggies"
            className="h-40 w-full object-cover"
          />
          <div className="p-5 text-lg font-medium">Veggies</div>
        </Link>

        {/* Millets */}
        <Link
          to="/health/millets"
          className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition overflow-hidden"
        >
          <img
            src={MilletImg}
            alt="Millets"
            className="h-40 w-full object-cover"
          />
          <div className="p-5 text-lg font-medium">Millets</div>
        </Link>
      </div>
    </div>
  );
}
