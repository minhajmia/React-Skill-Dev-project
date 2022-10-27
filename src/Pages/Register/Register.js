import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const [check, setCheck] = useState(false);
  const [accept, setAccept] = useState(false);
  const [error, setError] = useState("");
  const { googleSignIn, register, githubSignIn, updateUserProfile } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  // google signin
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
      });
  };
  // githubSignIn
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL);
    register(email, password)
      .then((result) => {
        const user = result.user;
        userUpdateProfileInfo(name, photoURL);
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
      });
  };
  //  update user
  const userUpdateProfileInfo = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL };
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => {
        const message = err.message;
        setError(message);
      });
  };
  // show password
  const handleShowPass = (e) => {
    setCheck(e.target.checked);
  };
  // terms and conditions
  const handleTermAndCondition = (e) => {
    setAccept(e.target.checked);
  };

  return (
    <div className="hero mt-5 px-5">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-50 ">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
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
                <small>Show Password</small>
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-dark"
                  onClick={handleTermAndCondition}
                />
                <small>
                  Accept{" "}
                  <Link to="/terms" className="underline">
                    {" "}
                    Terms and Conditions
                  </Link>
                </small>
              </label>
            </div>
          </div>
          <p>
            <small>
              Already have a account?{" "}
              <Link to="/login" className="text-green-600">
                Login
              </Link>{" "}
            </small>
          </p>
          <div className="form-control mt-6">
            {!accept ? (
              <>
                <button className=" rounded-md bg-slate-200 py-2" disabled>
                  Register
                </button>
              </>
            ) : (
              <>
                <button className=" rounded-md bg-slate-400 py-2">
                  Register
                </button>
              </>
            )}
          </div>
          <p className="text-center">-------- Or --------</p>
          <div className="flex justify-center  gap-5">
            <button onClick={handleGoogleSignIn} className="inline-block">
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

export default Register;
