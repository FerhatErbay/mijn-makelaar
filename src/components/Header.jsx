import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white h-36 border-b">
      <div className="bg-white h-12 border-b"></div>
      <div className="flex justify-between items-center h-24 mx-auto p-3 max-w-6xl">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-orange-600 ">BDL</span>
          <span className="text-orange-400">makelaar</span>
        </h1>
        <form className="bg-stone-100  rounded-lg p-0 border  flex items-center">
          <input
            className="bg-transparent px-4 py-2  outline-amber-600  w-24 sm:w-64"
            type="text"
            placeholder="Zoeken..."
          />
          <FaSearch className="text-orange-600 mx-4" />
        </form>
        <ul className="flex gap-4 items-center">
          <Link to="/">
            <li className="hidden sm:inline text-stone-600 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/over-ons">
            <li className="hidden sm:inline text-stone-600 hover:underline">
              Over Ons
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-stone-600 hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
