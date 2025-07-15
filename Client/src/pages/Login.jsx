import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice.js";

export default function Login() {
  // const user = useSelector(state)=>state.user.);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto my-8 p-3">
      <h1 className="text-center text-slate-800 font-semibold text-3xl ">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col p-3 gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border rounded-lg p-3 border-slate-700"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border rounded-lg p-3 border-slate-700"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="text-white bg-slate-700 p-3 rounded-lg hover:opacity-95 disabled:opacity-80 cursor-pointer transition-all"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
