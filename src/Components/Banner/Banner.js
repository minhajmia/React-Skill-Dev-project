import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../Assets/Images/banner2.jpg";

const Banner = () => {
  return (
    <div className="banner-container md:flex justify-evenly items-center mt-10 md:mt-20">
      <div className="text-center md:text-left banner-info col-span-1 md:mx-10 mb-5">
        <p className="mb-2">
          <small>Explore us</small>
        </p>
        <h2 className="font-semibold text-3xl mb-3">
          Learn New Skill With skill-dev
        </h2>
        <p className="mb-3 leading-7">
          Skill-dev is online based Course platform Where we can learn new
          skills any time. Buy your favorite course and grow up yourself for the
          next generation. Here are a lot of different types of tutorials so
          that a new learner can choose his/ her course easily and learn
          more.Our mission and vision is to create a skillful manpower community
          those will lead the next generation
        </p>
        <div>
          <Link to="/courses">
            {" "}
            <button className="btn bg-slate-400 border-0">All Course</button>
          </Link>
        </div>
      </div>
      <div className="banner-photo col-span-3 mx-1 md:mx-5">
        <img src={bannerImg} alt="" className="rounded" />
      </div>
    </div>
  );
};

export default Banner;
