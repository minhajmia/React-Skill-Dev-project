import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import SingleCourse from "../SingleCourse/SingleCourse";

const Home = () => {
  const allCourse = useLoaderData();
  return (
    <div className=" px-2 md:px-5 ">
      <div className="banner">
        <Banner />
      </div>
      <div className="all-courses mx-2 md:mx-10">
        <h2 className="my-10 py-5 text-center text-3xl font-semibold  text-orange-600">
          Explore Featured Courses
        </h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allCourse?.map((course) => (
            <SingleCourse key={course._id} course={course}></SingleCourse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
