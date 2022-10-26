import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";
import { Bars3Icon, MoonIcon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Header.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

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
    <div className="md:flex justify-between items-center gap-5 bg-slate-50 px-5 text-center  w-full shadow-xl">
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
          <ul className="md:flex justify-between items-center nav-items py-3 md:py-0">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link>
                {" "}
                <MoonIcon className="w-6 h-6 inline text-slate-400 mb-3 md:mb-0" />
              </Link>
            </li>
            {user?.uid ? (
              <>
                <li className="mb-3 md:mb-0">
                  <Link
                    className="py-1 px-4 rounded-md bg-slate-400 "
                    onClick={handleLogOut}
                  >
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
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                <li className="mb-4 md:mb-0">
                  <Link
                    className="py-1 px-4 rounded-md bg-slate-400 "
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-1 px-4 rounded-md bg-slate-400 "
                    to="/register"
                  >
                    Register
                  </Link>
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
