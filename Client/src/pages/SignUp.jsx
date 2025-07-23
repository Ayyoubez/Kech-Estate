import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import OAuth from "../Components/OAuth";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col max-w-xl gap-4 mx-auto my-8">
      <h1 className="text-3xl font-semibold text-center p-3 text-slate-800">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4  p-3 ">
        <input
          type="text"
          placeholder="Username..."
          id="userName"
          className="border p-3 rounded-lg border-slate-500"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email..."
          id="email"
          className="border border-slate-500 p-3 rounded-lg "
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password..."
          id="password"
          className="border p-3 rounded-lg border-slate-500"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-80 cursor-pointer transition-all duration-300"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
        <p>
          Already have an account ?{" "}
          <Link to={"/login"}>
            {" "}
            <span className="text-blue-500 pointer">Sign In</span>
          </Link>
        </p>
        {error && <p className="text-red-500">User already exist</p>}
      </form>
    </div>
  );
}
