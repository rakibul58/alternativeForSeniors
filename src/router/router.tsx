import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Main from "../layout/Main";
import About from "../pages/About";
import Services from "../pages/Services";
import Careers from "../pages/Careers";
import Resources from "../pages/Resources";
import Contact from "../pages/Contact";

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
        element: <Services />,
      },
      {
        path: "home-care-careers",
        element: <Careers />,
      },
      {
        path: "home-care-resources",
        element: <Resources />,
      },
      {
        path: "home-care-contact-us",
        element: <Contact />,
      },
    ],
  },
]);
