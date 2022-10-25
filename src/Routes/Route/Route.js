import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import NotFound from "../../Pages/NotFound/NotFound";
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
        loader: ({ params }) => fetch(``),
        element: <CourseDetails />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
