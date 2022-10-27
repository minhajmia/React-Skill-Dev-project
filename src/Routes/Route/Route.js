import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import TermsAndCondition from "../../Pages/TermsAndCondition/TermsAndCondition";
import Blog from "../../Parts/Others/Blog/Blog";
import FAQ from "../../Parts/Others/FAQ/FAQ";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "./../../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`https://server-side-eight.vercel.app/courses`),
      },
      {
        path: "home",
        element: <Home />,
        loader: () => fetch(`https://server-side-eight.vercel.app/courses`),
      },
      {
        path: "courses",
        element: <Courses />,
        loader: () => fetch(`https://server-side-eight.vercel.app/courses`),
      },
      {
        path: "course/:id",
        loader: ({ params }) =>
          fetch(`https://server-side-eight.vercel.app/courses/${params.id}`),
        element: <CourseDetails />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-side-eight.vercel.app/courses/${params.id}`),
      },
      { path: "terms", element: <TermsAndCondition /> },
      { path: "blog", element: <Blog /> },
      { path: "faq", element: <FAQ /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
