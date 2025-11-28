// @ts-nocheck
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../Components/authSlice";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector(
    (s) => s.auth ?? { isAuthenticated: false, user: {} }
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/workouts", label: "Workouts" },
    { to: "/tips", label: "Health Tips" },
    { to: "/water", label: "Water Intake" },
    { to: "/bmi", label: "BMI" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          {/* simple inline mark so no extra package required */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 64 64"
            className="rounded-full p-1 bg-white shadow-sm"
          >
            <defs>
              <linearGradient id="lg1" x1="0" x2="1">
                <stop offset="0%" stopColor="#6d28d9" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <path
              d="M40 12c-6 0-10 6-14 10s-10 10-6 18 16 8 24 2 12-22-4-30z"
              fill="url(#lg1)"
            />
          </svg>

          <div>
            <div className="text-lg font-extrabold text-indigo-600 leading-none">
              FitEncyclo
            </div>
            <div className="text-xs text-gray-500 -mt-0.5">
              Pocket fitness + health guide
            </div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-600"
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700">
                  Hi, {user?.name ?? "User"}
                </span>
                <button
                  onClick={() => dispatch(signout())}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm inline-flex items-center gap-2"
              >
                Sign in
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            {/* simple hamburger / close icon */}
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M18 6L6 18"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 6h18"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 12h18"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 18h18"
                  stroke="#374151"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu (slide down) */}
      <div
        className={`md:hidden transform-gpu transition-all duration-200 ease-out origin-top ${
          open
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="px-4 pb-4 pt-0 border-t bg-white/90 backdrop-blur-sm">
          <nav className="flex flex-col gap-1 py-3">
            {navItems.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {it.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-2 border-t pt-3">
            {isAuthenticated ? (
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-800">
                    {user?.name ?? "User"}
                  </div>
                  <div className="text-xs text-gray-500">Account</div>
                </div>
                <button
                  onClick={() => {
                    dispatch(signout());
                    setOpen(false);
                  }}
                  className="bg-red-500 text-white px-3 py-2 rounded-md text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/signin"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-sm"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
