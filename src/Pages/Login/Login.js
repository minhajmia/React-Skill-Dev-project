import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const { login, googleSignIn, githubSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // githubSignIn
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  // show password
  const handleShowPass = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div className="hero mt-5 ">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-50">
        <form onSubmit={handleSubmit} className="card-body">
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
              type={check ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <p className="text-red-500">
              <small>{error}</small>
            </p>
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-dark"
                  onClick={handleShowPass}
                />
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
            <button className="inline-block" onClick={handleGoogleSignIn}>
              <FaGoogle />
            </button>
            <button className="inline-block" onClick={handleGithubSignIn}>
              <FaGithub />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
