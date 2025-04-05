import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import main_logo from "../assets/main_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState<number | null>(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(isOpen ? menuRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  // Fix: Add md:flex to ensure desktop display works
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuHeight(null); // Remove height restriction on desktop
      } else if (!isOpen) {
        setMenuHeight(0);
      } else if (menuRef.current) {
        setMenuHeight(menuRef.current.scrollHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const menuItems = [
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
    <nav className="flex flex-col md:flex-row w-full justify-center md:gap-10 items-center">
      <div className="w-full md:w-3/5  bg-white flex md:justify-end justify-center p-4 md:p-0">
        <img
          className="max-h-[74px] max-w-[320px] object-cover w-full"
          src={main_logo}
          alt=""
        />
      </div>
      <div className="bg-[#8eaa04] relative z-10 text-center h-auto w-full">
        <div className="w-full mx-auto">
          <div className="flex justify-between md:hidden px-4">
            <div className="flex items-center py-4">
              <span className="text-white font-bold">MENU</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={isOpen ? 7 : 4}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={menuRef}
            style={{
              maxHeight: menuHeight !== null ? menuHeight : "none",
              overflow: menuHeight !== null ? "hidden" : "visible",
              transition: "max-height 0.3s ease-in-out",
            }}
            className={`${
              isOpen ? "bg-[#a7c227] md:bg-transparent" : ""
            } md:flex md:justify-center md:items-center w-full`}
          >
            <ul className="md:flex md:justify-start md:ml-10 md:flex-grow md:items-center w-full">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  className="block md:flex items-center py-1 md:py-0 relative border-t-[1.5px] border-primary md:border-none"
                >
                  <NavLink
                    to={item.link}
                    end={item.exact}
                    className={({ isActive }) =>
                      `block px-4 py-2 md:py-8 text-[17px] font-medium hover:bg-[#a7c227] transition-colors ${
                        isActive ? "text-[#9b0048] underline" : "text-white"
                      }`
                    }
                  >
                    {item.text}
                  </NavLink>
                  {index < menuItems.length - 1 && (
                    <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-[#859f04]"></div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
