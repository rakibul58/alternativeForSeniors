import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Main from "../layout/Main";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home-care-about-us",
        element: <About />,
      },
    ],
  },
]);
