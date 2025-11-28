//@ts-nocheck
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../Components/authSlice";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // dummy "signin"
    dispatch(signinSuccess({ name: data.name || "User", email: data.email }));
    navigate("/");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm">Name</label>
            <input
              {...register("name")}
              className="w-full mt-1 px-3 py-2 border rounded"
              placeholder="Your name (optional)"
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              {...register("email", { required: true })}
              className="w-full mt-1 px-3 py-2 border rounded"
              placeholder="you@domain.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full mt-1 px-3 py-2 border rounded"
              placeholder="password"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">Password required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
