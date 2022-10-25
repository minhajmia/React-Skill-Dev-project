import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

const CourseDetails = () => {
  const course = useLoaderData();
  const {
    name,
    picture,
    details,
    price,
    instructor,
    rating,
    total_views,
    publish_date,
  } = course;
  console.log(course);
  return (
    <div className="md:flex justify-between mt-10 text-center px-5">
      <div className="course-info md:text-left mx-5">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p>{details}</p>
        <p className="font-semibold mt-2">Requirement</p>
        <ul className="inline-block">
          <li className="flex items-center gap-4">
            <FaHandPointRight className="text-slate-400" /> Laptop
          </li>
          <li className="flex items-center gap-4">
            <FaHandPointRight className="text-slate-400" /> Computer
          </li>
          <li className="flex items-center gap-4">
            <FaHandPointRight className="text-slate-400" /> Mobile
          </li>
        </ul>
        <div>
          <p className className="font-semibold mt-2">
            Instructor
          </p>
          <div className="md:flex items-center gap-5">
            {" "}
            <div className=" mb-3 justify-center md:justify-start">
              <div className="avatar mt-5">
                <div className="w-20 rounded-full ring ring-slate-400 ring-offset-base-400 ring-offset-2">
                  <img src={instructor?.photo} />
                </div>
              </div>
            </div>
            <div>
              <p>{instructor?.name}</p>
              <p>{instructor?.publish_date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="course mx-5 mt-10 md:mt-0">
        <div className="card bg-slate-50 shadow-xl">
          <figure>
            <img
              src={picture}
              className="rounded-md inline-block px-5"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Total Views
              <div className="badge bg-slate-400">{total_views}</div>
            </h2>
            <p className="text-left">
              <span className="font-semibold">Rating : </span>
              {rating}
            </p>
            <p className="text-left">
              <span className="font-semibold">Price : </span>${price}
            </p>
            <div className="card-actions justify-end">
              <div className="badge bg-slate-400  ">
                <Link to="/checkout">Get to Premium</Link>{" "}
              </div>
              <div className="badge badge-outline">
                {" "}
                <Link>Download</Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
