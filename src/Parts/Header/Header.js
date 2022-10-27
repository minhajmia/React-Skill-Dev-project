import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import { Bars3Icon, MoonIcon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  // logOut
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="md:flex justify-between items-center gap-5 bg-slate-50 md:px-5 text-center  w-full shadow-xl ">
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
          toggle ? "top-21" : "top-[-285px]"
        }`}
      >
        <div>
          <ul
            className={`md:flex justify-between items-center nav-items py-3  md:py-0 ${(
              isActive
            ) => (isActive ? " active" : "undefined")}`}
          >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <label className="swap swap-rotate">
                <input type="checkbox" />
                <svg
                  className="swap-on fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </li>
            {user?.uid ? (
              <>
                <li className="mb-3 md:mb-0">
                  <Link className=" " onClick={handleLogOut}>
                    LogOut
                  </Link>
                </li>
                <div className={`user hover:${user?.displayName}`}>
                  <img
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                    }}
                    className={` inline-block  `}
                    src={user?.photoURL}
                    title={user?.displayName}
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                <li className="mb-4 md:mb-0">
                  <NavLink className=" " to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="" to="/register">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
