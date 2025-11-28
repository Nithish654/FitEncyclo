//@ts-nocheck

import React from "react";

// FitEncycloLogo.jsx
// Usage: <FitEncycloLogo variant="wave" size={48} primary="#4f46e5" secondary="#06b6d4" />
// Variants: 'wave' | 'pulse' | 'badge'

export default function FitEncycloLogo({
  variant = "wave",
  size = 48,
  primary = "#4f46e5",
  secondary = "#06b6d4",
  className = "",
}) {
  const common = {
    width: size * 6, // rough container width relative to font size
    height: size,
  };

  if (variant === "wave") {
    return (
      <div
        className={`flex items-center gap-3 ${className}`}
        style={{ width: common.width }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rounded-full shadow-lg"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor={primary} stopOpacity="1" />
              <stop offset="100%" stopColor={secondary} stopOpacity="1" />
            </linearGradient>
            <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow
                dx="0"
                dy="6"
                stdDeviation="10"
                floodOpacity="0.12"
              />
            </filter>
          </defs>

          {/* stylized arm biceps icon with wave motion (animated via CSS) */}
          <g filter="url(#f1)" className="logo-wave-group">
            <path
              d="M44 10c-6 0-8 6-8 6s-4-2-8 0-6 8-6 12 4 8 8 8 12-2 18-8 6-18 0-18z"
              fill="url(#g1)"
            />
            <path
              d="M22 36c4-2 10-1 14-6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </g>
        </svg>

        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold" style={{ color: primary }}>
              FitEncyclo
            </h1>
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <circle cx="12" cy="12" r="10" fill={secondary} />
              <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-xs text-gray-500">Pocket fitness + health guide</p>
        </div>

        <style>{`
          /* small CSS animation for the wave group */
          .logo-wave-group { transform-origin: 50% 50%; animation: logoWave 2.2s ease-in-out infinite alternate; }
          @keyframes logoWave { from { transform: translateY(0) rotate(-2deg); } to { transform: translateY(-3px) rotate(2deg); } }
        `}</style>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div
        className={`flex items-center gap-3 ${className}`}
        style={{ width: common.width }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="r1">
              <stop offset="0%" stopColor={secondary} />
              <stop offset="100%" stopColor={primary} />
            </radialGradient>
            <filter id="shadow2">
              <feDropShadow
                dx="0"
                dy="10"
                stdDeviation="14"
                floodOpacity="0.12"
              />
            </filter>
          </defs>

          <g filter="url(#shadow2)">
            <circle cx="32" cy="32" r="20" fill="url(#r1)" />
            <path
              d="M20 36c4-3 10-6 14-12 4 6 10 9 14 12"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.95"
            />
          </g>
        </svg>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold" style={{ color: primary }}>
              FitEncyclo
            </h1>
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{
                background: secondary,
                boxShadow: `0 0 10px ${secondary}`,
              }}
            />
          </div>
          <p className="text-xs text-gray-500">
            Your pocket health encyclopedia
          </p>
        </div>

        <style>{`
          /* pulse effect */
          svg { animation: pulse 2s infinite; }
          @keyframes pulse { 0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0,0,0,0)); } 50% { transform: scale(1.04); } 100% { transform: scale(1); } }
        `}</style>
      </div>
    );
  }

  // badge (compact, circular mark + stacked text)
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      style={{ width: common.width }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0%" stopColor={primary} />
            <stop offset="100%" stopColor={secondary} />
          </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="30" fill="url(#g2)" />
        <path
          d="M20 34c6-6 12-7 18-14"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex flex-col leading-tight">
        <h1 className="text-2xl font-extrabold" style={{ color: primary }}>
          FitEncyclo
        </h1>
        <span className="text-xs text-gray-500">Pocket Health Guide</span>
      </div>
    </div>
  );
}

// --- Helper to export raw SVG (if user wants a downloadable file) ---
export function getSVGString(
  variant = "wave",
  size = 128,
  primary = "#4f46e5",
  secondary = "#06b6d4"
) {
  if (variant === "pulse") {
    return (
      `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" width=\"${size}\" height=\"${size}\">` +
      `<defs><radialGradient id=\"r1\"><stop offset=\"0%\" stop-color=\"${secondary}\"/><stop offset=\"100%\" stop-color=\"${primary}\"/></radialGradient></defs>` +
      `<g><circle cx=\"32\" cy=\"32\" r=\"20\" fill=\"url(#r1)\"/></g></svg>`
    );
  }
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" width=\"${size}\" height=\"${size}\">` +
    `<defs><linearGradient id=\"g1\"><stop offset=\"0%\" stop-color=\"${primary}\"/><stop offset=\"100%\" stop-color=\"${secondary}\"/></linearGradient></defs>` +
    `<g><path d=\"M44 10c-6 0-8 6-8 6s-4-2-8 0-6 8-6 12 4 8 8 8 12-2 18-8 6-18 0-18z\" fill=\"url(#g1)\"/></g></svg>`
  );
}
