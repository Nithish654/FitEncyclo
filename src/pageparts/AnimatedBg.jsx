//@ts-nocheck
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* gentle moving gradient circle */}
      <motion.div
        initial={{ x: -200, y: -50, opacity: 0.45 }}
        animate={{ x: 100, y: 40 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 blur-3xl opacity-60"
        style={{ left: "-10%", top: "-5%" }}
      />
      <motion.div
        initial={{ x: 200, y: 100, opacity: 0.3 }}
        animate={{ x: -120, y: -30 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-300 via-cyan-300 to-indigo-300 blur-2xl opacity-50"
        style={{ right: "-5%", bottom: "-10%" }}
      />
    </div>
  );
}
