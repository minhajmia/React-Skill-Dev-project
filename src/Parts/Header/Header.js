import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import { Bars3Icon, MoonIcon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <div className="md:flex justify-between items-center gap-5 bg-slate-50 px-5 text-center  w-full">
      <div className="md:hidden " onClick={() => handleClick(!toggle)}>
        {toggle ? (
          <XMarkIcon className="w-6 text-slate-500" />
        ) : (
          <Bars3Icon className="w-6 text-slate-400" />
        )}
      </div>
      <div>
        <Link to="/">
          <img
            style={{ height: "80px", display: "inline-block" }}
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div
        className={`md:flex  items-center absolute md:static duration-500 ease-out w-full bg-slate-50 px-[-5px] text-center  md:w-auto z-[100] ${
          toggle ? "top-21" : "top-[-250px]"
        }`}
      >
        <div>
          <ul className="md:flex justify-between items-center nav-items ">
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link>
                {" "}
                <MoonIcon className="w-6 h-6 inline text-slate-400" />
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <div className="user">
          <h3>User</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
