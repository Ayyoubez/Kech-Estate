import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="mt-2 self-center rounded-full h-24 w-24 object-cover hover:cursor-pointer"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          type="text"
          id="username"
          placeholder="username"
          className="border rounded-lg p-3 border-slate-700"
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          className="border rounded-lg p-3 border-slate-700"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="border rounded-lg p-3 border-slate-700"
        />
        <button className="rounded-lg bg-slate-700 text-white p-3 uppercase hover:opacity-95 disabled:open:80 hover:cursor-pointer">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-slate-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
