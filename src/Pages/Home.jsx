// @ts-nocheck
import React from "react";
import AnimatedBackground from "../pageparts/AnimatedBg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />

      <header className="min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-8 items-center">
          {/* Left column */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
            >
              Push harder than yesterday —{" "}
              <span className="text-indigo-600">start today</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-gray-700 max-w-lg"
            >
              FitBuddy gives simple workout plans, diet guides and daily tools
              to help you build consistent habits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-3"
            >
              <Link
                to="/signin"
                className="bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:scale-105 transform transition"
              >
                Get Started
              </Link>
              <Link
                to="/workouts"
                className="border border-indigo-600 text-indigo-600 px-5 py-3 rounded-lg hover:bg-indigo-50 transition"
              >
                Browse Plans
              </Link>
            </motion.div>

            <div className="mt-6 text-xs text-gray-500">
              <h1>Pro tip: Consistency {">"} intensity</h1>
            </div>
          </div>

          {/* Right column - Challenge card */}
          <div className="relative">
            <div className="bg-white/60 border rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-xl text-indigo-600">
                Challenge
              </h3>

              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">10 Pushups</span>
                  <span className="text-xs text-gray-600">Upper Body</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">20 Crunches</span>
                  <span className="text-xs text-gray-600">Core</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">30 Squats</span>
                  <span className="text-xs text-gray-600">Legs</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">40 Lunges</span>
                  <span className="text-xs text-gray-600">Full Legs</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">50 Jumping Jacks</span>
                  <span className="text-xs text-gray-600">Cardio</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">60 Sec Wall Sit</span>
                  <span className="text-xs text-gray-600">Endurance</span>
                </div>

                <div className="mt-5">
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                    Hit the first rep. The rest will follow.
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow hover:scale-[1.02] transition">
            <h4 className="font-semibold text-lg">Workout Plans</h4>
            <p className="text-sm mt-2 text-gray-600">
              Lean / Medium / Fat loss plans—you can view full routine for each.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:scale-[1.02] transition">
            <h4 className="font-semibold text-lg">Diet Plans</h4>
            <p className="text-sm mt-2 text-gray-600">
              Vegan & Non-Vegan tracks for gain or loss.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:scale-[1.02] transition">
            <h4 className="font-semibold text-lg">Water Calculator</h4>
            <p className="text-sm mt-2 text-gray-600">
              Calculate your daily drinking target quickly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
