import React from "react";

export default function SignUp() {
  return (
    <div className="flex flex-col max-w-xl gap-4 mx-auto my-8">
      <h1 className="text-3xl font-semibold text-center p-3 text-slate-800">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4  p-3 ">
        <input
          type="text"
          placeholder="Username..."
          id="userName"
          className="border p-3 rounded-lg border-slate-500"
        />
        <input
          type="text"
          placeholder="Email..."
          id="email"
          className="border border-slate-500 p-3 rounded-lg "
        />
        <input
          type="text"
          placeholder="password..."
          id="password"
          className="border p-3 rounded-lg border-slate-500"
        />
        <button className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80 cursor-pointer transition-all duration-300">
          Submit
        </button>
      </form>
    </div>
  );
}
