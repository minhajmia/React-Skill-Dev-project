import React from "react";

const SingleCourse = ({ course }) => {
  const { name, details, picture, price } = course;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div>
          <h3>
            <span className="font-bold">Price</span>: ${price}
          </h3>
        </div>
        <div className="card-actions">
          <button className="btn btn-info">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
