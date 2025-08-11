import logo from "/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-300 shadow-md">
      <div className="flex items-center justify-between pt-2 max-w-6xl mx-auto">
        <img className="w-32" src={logo} alt="Kech Estate Logo" />
        <div className="flex items-center justify-between bg-slate-100 p-3 rounded-lg mr-1 sm:mr-0">
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none"
          />
          <FaSearch className="text-slate-600" />
        </div>
        <ul className="flex gap-4 sm:gap-6 text-xl font-bold text-slate-700 pr-3">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/sign-up"}>
            {" "}
            <li className="hidden cursor-pointer sm:inline hover:underline">
              Register
            </li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover "
                src={currentUser.avatar}
                alt="Profile"
              />
            ) : (
              <li className="  cursor-pointer sm:inline hover:underline">
                Login
              </li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
