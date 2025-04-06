import { NavLink } from "react-router";
import map from "../assets/map.jpeg";
import mainLogo from "../assets/main_logo.png";
import icon_areas from "../assets/icon_areas.png";
import icon_footer1 from "../assets/icon_footer1.png";
import icon_footer2 from "../assets/icon_footer2.png";
import icon_footer3 from "../assets/icon_footer3.png";
import icon_fb from "../assets/icon_fb.png";
import icon_twitter from "../assets/icon_twitter.png";

const Footer = () => {
  const navItems = [
    {
      id: 18,
      text: "Home",
      link: "/",
      exact: true,
    },
    {
      id: 19,
      text: "About Us",
      link: "/home-care-about-us",
      exact: false,
    },
    {
      id: 20,
      text: "Our Services",
      link: "/home-care-our-services",
      exact: false,
    },
    {
      id: 21,
      text: "Careers",
      link: "/home-care-careers",
      exact: false,
    },
    {
      id: 22,
      text: "Resources",
      link: "/home-care-resources",
      exact: false,
    },
    {
      id: 23,
      text: "Contact Us",
      link: "/home-care-contact-us",
      exact: false,
    },
  ];

  return (
    <footer className="w-full">
      {/* Contact Section with Map - Magenta Background */}
      <div className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Map and Service Areas */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="relative">
              <div className="rounded-full size-96 overflow-hidden border-[16px] border-white">
                {/* Map placeholder - would use Google Maps in production */}
                <img
                  src={map}
                  alt="Map showing Snellville location"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute hover:bg-secondary transition-all ease-in-out end-1.5 bottom-0 right-0 bg-[#b2d235] border-[10px] rounded-full size-44 flex flex-col items-center justify-center text-white text-center p-2">
                <img className="w-1/3" src={icon_areas} alt="" />
                <div className="font-bold">SERVICE AREAS</div>
                <div className="font-bold text-[#fffe84]">COVERED</div>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 md:text-left pl-0 md:pl-12 md:block flex flex-col items-center justify-center text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-normal">
                We will Give You the Answers
              </h2>
              <h1 className="text-3xl font-bold text-[#fffe80]">
                Contact Information
              </h1>
            </div>

            <div className="mb-6">
              <p className="font-semibold">Service Areas Covered:</p>
              <p>All of the Metro Atlanta area and surrounding counties.</p>
            </div>

            <div className="">
              <div className="flex flex-col space-y-4 text-left">
                {/* Address with icon */}
                <div className="flex items-center">
                  <div className="p-2 rounded-md mr-4 size-16">
                    <img src={icon_footer1} alt="" />
                  </div>
                  <div>
                    <p>2386 Clower St., Building D-202</p>
                    <p>Snellville, Georgia 30078</p>
                  </div>
                </div>

                {/* Phone with icon */}
                <div className="flex items-start">
                  <div className="p-2 rounded-md mr-4 size-16">
                    <img src={icon_footer2} alt="" />
                  </div>
                  <div>
                    <p>Phone Number: 770-736-7977</p>
                    <p>Fax Number: 770-736-7760</p>
                  </div>
                </div>

                {/* Email with icon */}
                <div className="flex items-start">
                  <div className="p-2 rounded-md mr-4 size-16">
                    <img src={icon_footer3} alt="" />
                  </div>
                  <div>
                    <p>Email Address:</p>
                    <a
                      className="hover:underline hover:text-[#fffe80]"
                      href="mailto:derrick@alternative4seniors.com"
                    >
                      derrick@alternative4seniors.com
                    </a>
                  </div>
                  <div className="md:flex space-x-4 mt-4 ml-6 hidden">
                    <a href="#" className="text-white">
                      <img src={icon_fb} alt="" />
                    </a>
                    <a href="#" className="text-white">
                      <img src={icon_twitter} alt="" />
                    </a>
                  </div>
                </div>

                {/* Social Media Icons */}
              </div>
              <div className="flex space-x-4 mt-4 ml-2 md:hidden justify-center">
                <a href="#" className="text-white">
                  <img src={icon_fb} alt="" />
                </a>
                <a href="#" className="text-white">
                  <img src={icon_twitter} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      {/* Navigation and Copyright - Green Background */}
      <div className="flex flex-col md:flex-row bg-primary justify-center items-center">
        <div className="md:ml-auto px-4 flex flex-col text-white py-4">
          {/* Navigation Links */}
          <div className="md:mb-2">
            <ul className="flex gap-2 flex-wrap md:gap-0 justify-center md:justify-start md:flex-grow md:items-center w-full">
              {navItems.map((item, index) => (
                <li
                  key={item.id}
                  className="block md:flex items-center p-2 text-center md:text-left md:p-0 relative border-2 border[#a7c227] md:border-none"
                >
                  <NavLink
                    to={item.link}
                    // end={index === 0 ? true : false}
                    className={({ isActive }) =>
                      `block text-[17px] font-medium hover:text-[#9b0048] hover:underline transition-colors ${
                        isActive ? "text-[#9b0048] underline" : "text-white"
                      }`
                    }
                  >
                    {item.text}
                  </NavLink>
                  {index < navItems.length - 1 && (
                    <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-[#859f04] mx-3"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white md:block hidden">
            © Copyright 2025 • Designed by Proweaver
          </div>
        </div>
        <div className="bg-white py-4 px-4 flex justify-center w-full md:w-2/5">
          <div className="max-w-xs w-full">
            <img
              src={mainLogo}
              alt="Alternative Home Care for Seniors Logo"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="text-sm text-white md:hidden block bg-primary py-4 text-center">
        © Copyright 2025 • Designed by Proweaver
      </div>
    </footer>
  );
};

export default Footer;
