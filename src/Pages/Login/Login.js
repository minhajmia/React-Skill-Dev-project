import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="hero mt-5 ">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-50">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <div className="form-control">
              <label className="cursor-pointer label">
                <input type="checkbox" className="checkbox checkbox-dark" />
                Show Password
              </label>
            </div>
          </div>
          <p>
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-700">
                Register
              </Link>{" "}
            </small>
          </p>
          <div className="form-control mt-6">
            <button className=" rounded-md bg-slate-400 py-2">Login</button>
          </div>
          <p className="text-center">-------- Or --------</p>
          <div className="flex justify-center  gap-5">
            <button className="inline-block">
              <FaGoogle />
            </button>
            <button className="inline-block">
              <FaGithub />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
