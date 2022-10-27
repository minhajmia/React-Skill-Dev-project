import React from "react";
import img from "../../Assets/Images/notFound.png";
const NotFound = () => {
  return (
    <div className="text-center ">
      <img className="inline-block max-h-80 mt-20" src={img} alt="" />
      <h1 className="align-middle md:text-3xl text-orange-600 mt-3">
        Page Not Found
      </h1>
    </div>
  );
};

export default NotFound;
