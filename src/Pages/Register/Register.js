import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { googleSignIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero mt-5 ">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-50 ">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> PhotoURL</span>
            </label>
            <input
              type="text"
              placeholder="PhotoURL"
              className="input input-bordered"
              name="photoURL"
              required
            />
          </div>
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
              Already have a account?{" "}
              <Link to="/login" className="text-blue-700">
                Login
              </Link>{" "}
            </small>
          </p>
          <div className="form-control mt-6">
            <button className=" rounded-md bg-slate-400 py-2">Register</button>
          </div>
          <p className="text-center">-------- Or --------</p>
          <div className="flex justify-center  gap-5">
            <button onClick={handleGoogleSignIn} className="inline-block">
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

export default Register;
