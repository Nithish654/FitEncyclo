// @ts-nocheck
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./pageparts/Navbar";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import WaterIntake from "./Pages/WaterIntake";
import WorkoutPlans from "./Pages/WorkoutPlans"; // placeholder
import Healthtips from "./Pages/Healthtips"; // placeholder
import Footer from "./pageparts/Footer";
// at top of App.jsx
import BMIcalculator from "./Pages/BMIcalculator";
import VeganGain from "./Pages/Vegangain";
import NonVeganGain from "./Pages/Nonvegangain";
import FitTrain from "./Pages/Fittrain";
import VeganLoss from "./Pages/VeganLoss";
import NonVeganLoss from "./Pages/NonVeganLoss";
import FoodType from "./Pages/FoodType";
import Fruits from "./Pages/Fruits";
import Veggies from "./Pages/Veggies";
import Millets from "./Pages/Millets";




export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/workouts" element={<WorkoutPlans />} />
          <Route path="/tips" element={<Healthtips />} />
          <Route path="/water" element={<WaterIntake />} />
          <Route path="/bmi" element={<BMIcalculator />} />
          <Route path="/workouts" element={<WorkoutPlans />} />
          <Route path="/food-type/:morph" element={<FoodType />} />
          <Route path="/vegangain/:morph" element={<VeganGain />} />
          <Route path="/nonvegangain/:morph" element={<NonVeganGain />} />
          <Route path="/fittrain" element={<FitTrain />} />
          <Route path="/veganloss/:morph" element={<VeganLoss />} />
          <Route path="/nonveganloss/:morph" element={<NonVeganLoss />} />
          <Route path="/health/Fruits" element={<Fruits />} />
          <Route path="/health/Veggies" element={<Veggies />} />
          <Route path="/health/Millets" element={<Millets />} />

          {/* add other pages as you build */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
