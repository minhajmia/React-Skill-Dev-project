import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const course = useLoaderData();
  const { details, name } = course;
  const navigate = useNavigate();
  const handleThanks = () => {
    Swal.fire({
      title: "Do you want to Checkout this Course?",
      showCancelButton: true,
      confirmButtonColor: "rgb(255, 106, 0)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Thanks for the purchase");
        navigate("/");
      }
    });
  };
  return (
    <div className="hero min-h-screen bg-base-500">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-orange-600">{name}</h1>
          <p className="py-6">{details}</p>
          <button onClick={handleThanks} className="btn bg-slate-600  border-0">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
