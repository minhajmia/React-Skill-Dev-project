import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import TermsAndCondition from "../../Pages/TermsAndCondition/TermsAndCondition";
import Home from "./../../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "courses",
        element: <Courses />,
        loader: () => fetch(`http://localhost:5000/courses`),
      },
      {
        path: "course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
        element: <CourseDetails />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "checkout", element: <CheckOut /> },
      { path: "terms", element: <TermsAndCondition /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
