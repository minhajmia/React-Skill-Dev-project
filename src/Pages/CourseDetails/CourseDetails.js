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
    <div className="md:flex justify-around mt-10 text-center px-5">
      <div className="course-info md:text-left">
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
          <div className="flex">
            {" "}
            <div className="flex items-center gap-5 mb-3 justify-center md:justify-start">
              <div className="avatar mt-5">
                <div className="w-20 rounded-full ring ring-slate-400 ring-offset-base-400 ring-offset-2">
                  <img src={instructor?.photo} />
                </div>
              </div>
              <div>
                {" "}
                <p>{instructor?.name}</p>
                <p>{instructor?.publish_date}</p>
              </div>
              <div>
                <p>Total Views : {total_views}</p>
              </div>
              <div>
                <p>Ratings : {rating}</p>
              </div>
              <div>
                <p>Price : {price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-image  ">
        <img
          className="rounded-md inline-block px-5"
          style={{ maxHeight: "500px" }}
          src={picture}
          alt=""
        />
      </div>
    </div>
  );
};

export default CourseDetails;
