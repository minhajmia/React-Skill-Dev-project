import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const course = useLoaderData();
  const { details, name } = course;
  const handleThanks = () => {
    Swal.fire("Thanks for Purchase");
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{details}</p>
          <button onClick={handleThanks} className="btn bg-slate-500 border-0">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
