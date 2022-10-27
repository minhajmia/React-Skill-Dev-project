import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import SingleCourse from "./../SingleCourse/SingleCourse";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <>
      <h2 className="text-center mt-6  md:text-3xl font-semibold text-orange-600">
        Explore Our Courses
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-5 py-5 md:py-8 mx-1 md:px-5">
        <div className="md:col-span-1   mr-5 mb-8 md:mb-0">
          <div>
            <h4 className="mb-5 font-semibold text-orange-600">Categories :</h4>
          </div>
          <ul className={`menu bg-base-500  rounded-box `}>
            {courses.map((course, ind) => (
              <NavLink key={course._id} to={`/course/${course._id}`}>
                {" "}
                <li className="bordered ">
                  ({ind + 1}) {course.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="col-span-2 mx-5 ">
          <div className="grid md:grid-cols-2 gap-5  ">
            {courses.map((course) => (
              <SingleCourse course={course} key={course._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
