import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleCourse from "./../SingleCourse/SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid md:grid-cols-3 mt-5">
      <div className="md:col-span-1">
        <h3 className=" font-bold text-2xl mb-5">Category</h3>
        <ul className="menu bg-base-500  rounded-box">
          {courses.map((course) => (
            <Link key={course._id}>
              {" "}
              <li className="bordered ">{course.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="col-span-2 ">
        <h3 className="text-center font-bold text-2xl">All Courses</h3>
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
