import React from "react";
import { Link } from "react-router-dom";
import "./SingleCourse.css";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const SingleCourse = ({ course }) => {
  const { name, details, picture, price } = course;
  return (
    <div className="card  bg-slate-50 shadow-xl rounded-md">
      <figure className="p-2">
        <img src={picture} alt="photo" className="rounded-md" />
      </figure>
      <div className="card-body py-0 px-2">
        <h2 className="card-title">{name}</h2>
        <p className="card-details">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <p className="p-0 m-0">
          <span className="font-semibold">Price :</span>${price}
        </p>
        <div className="card-actions pb-2 ">
          <Link to={`/course/${course._id}`}>
            <button className=" bg-slate-300  px-5 rounded-md flex ">
              See Details
              <ArrowLongRightIcon className="w-6 h-7 " />{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
