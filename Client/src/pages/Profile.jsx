import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  console.log(file);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          onClick={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
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
