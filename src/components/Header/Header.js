import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-tranparent">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Register</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-2xl text-white font-bold">
            Login App
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link  className="text-white font-bold ">Login</Link>
            </li>
            <li>
              <Link  className="text-white font-bold ">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;