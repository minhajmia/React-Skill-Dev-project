import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-500">
        <div className="flex-1 ">
          <Link to="/">
            <img style={{ height: "80px" }} src={logo} alt="" />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
