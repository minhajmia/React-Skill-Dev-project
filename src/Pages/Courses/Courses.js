import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import SingleCourse from "./../SingleCourse/SingleCourse";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid md:grid-cols-3 mt-5 md:mt-10 py-5 md:py-8 mx-1 md:px-5">
      <div className="md:col-span-1 mr-5 mb-8 md:mb-0">
        <div>
          <h4 className="mb-5 font-semibold">Categories :</h4>
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
        <div className="grid md:grid-cols-2 gap-5">
          {courses.map((course) => (
            <SingleCourse course={course} key={course._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
