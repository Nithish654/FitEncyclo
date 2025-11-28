// src/Pages/FoodType.jsx
// @ts-nocheck
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function FoodType() {
  const { morph } = useParams(); // "ecto" or "endo" etc.
  const slug = morph || "ecto";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">
        Food Type — <span className="capitalize">{slug}</span>
      </h2>

      <p className="text-gray-600 mb-6">
        Choose Vegan or Non-Vegan, then pick Gain or Loss.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* VEGAN */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-3">Vegan</h3>
          <div className="flex gap-3">
            <Link
              to={`/vegangain/${slug}`}
              className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-center hover:opacity-95 transition"
            >
              Gain
            </Link>
            <Link
              to={`/veganloss/${slug}`}
              className="flex-1 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md text-center hover:bg-indigo-50 transition"
            >
              Loss
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Plant-focused tips and meal patterns for your body type.
          </p>
        </div>

        {/* NON-VEGAN */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-3">Non-Vegan</h3>
          <div className="flex gap-3">
            <Link
              to={`/nonvegangain/${slug}`}
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-center hover:opacity-95 transition"
            >
              Gain
            </Link>
            <Link
              to={`/nonveganloss/${slug}`}
              className="flex-1 border border-green-600 text-green-600 px-4 py-2 rounded-md text-center hover:bg-green-50 transition"
            >
              Loss
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Animal-protein focused tips and meal patterns.
          </p>
        </div>
      </div>
    </div>
  );
}
