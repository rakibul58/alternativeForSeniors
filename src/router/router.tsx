import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Main from "../layout/Main";
import About from "../pages/About";
import Services from "../pages/Services";

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
      {
        path: "home-care-our-services",
        element: <Services />
      }
    ],
  },
]);
