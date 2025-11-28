// src/Pages/FitTrain.jsx
// @ts-nocheck
import React from "react";

export default function FitTrain() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Mesomorph — Fit Training</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-3">Training Philosophy</h3>
          <p className="text-sm text-gray-700">
            Mesomorphs respond well to mixed training. Combine strength and
            hypertrophy work with moderate cardio.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3 text-sm">
            <li>4–5 days split: push / pull / legs / full-body</li>
            <li>Mix compound lifts + isolated hypertrophy</li>
            <li>Include mobility & active recovery</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="font-semibold mb-3">Sample Week</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Mon — Upper strength (4x6)</li>
            <li>Tue — Lower hypertrophy (3x10–12)</li>
            <li>Wed — Light cardio + mobility</li>
            <li>Thu — Push hypertrophy</li>
            <li>Fri — Pull strength + core</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
