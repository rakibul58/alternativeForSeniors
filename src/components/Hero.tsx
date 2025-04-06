/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ban_after from "../assets/ban_after.png";
import ban_before from "../assets/ban_before.png";
import icon_mid1 from "../assets/icon_mid1.png";
import icon_mid2 from "../assets/icon_mid2.png";
import icon_mid3 from "../assets/icon_mid3.png";
import icon_mid4 from "../assets/icon_mid4.png";
import icon_mid5 from "../assets/icon_mid5.png";
import { Link } from "react-router";

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images from the provided HTML
  const images = [
    "https://www.alternative4seniors.com/wp-content/themes/alternativehc/images/slider/1.jpg",
    "https://www.alternative4seniors.com/wp-content/themes/alternativehc/images/slider/2.jpg",
    "https://www.alternative4seniors.com/wp-content/themes/alternativehc/images/slider/3.jpg",
  ];

  const alts = [
    "caregiver assisting an old woman",
    "smiling caregiver and old man",
    "smiling old couple",
  ];

  const serviceButtons = [
    {
      name: "Personal",
      span: "HYGIENE",
      href: "home-care-personal-hygiene",
      class: "btn_mid1",
      icon: icon_mid1,
    },
    {
      name: "Bathing",
      span: "ASSISTANCE",
      href: "home-care-bathing-assistance",
      class: "btn_mid2",
      icon: icon_mid2,
    },
    {
      name: "Medication",
      span: "REMINDER",
      href: "home-care-medication-reminder",
      class: "btn_mid3",
      icon: icon_mid3,
    },
    {
      name: "Feeding &",
      span: "GROOMING",
      href: "home-care-feeding-grooming",
      class: "btn_mid4",
      icon: icon_mid4,
    },
    {
      name: "View More",
      span: "SERVICES",
      href: "home-care-our-services",
      class: "btn_mid5",
      icon: icon_mid5,
    },
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Banner Section */}
      <div className="relative h-[580px] overflow-hidden ">
        {/* Slider Images */}
        <div className="relative h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={alts[index]}
                className="object-cover w-full h-full"
              />
            </div>
          ))}

          {/* Mobile Banner (visible only on small screens) */}
          <img
            src={images[0]}
            alt={alts[0]}
            className="hidden sm:hidden object-cover w-full h-full"
          />
        </div>

        {/* Circular Overlay Info */}
        <div className="absolute top-[3rem] left-[22vw] md:block hidden">
          <div className="relative size-[465px] bg-white rounded-full shadow-[0_0_0_27px_rgba(255,255,255,0.3)] text-center pt-[86px]">
            <div className="px-10">
              <h2 className="text-[22px] text-[#1e1e1e]">
                <small className="block text-3xl text-[#67bd00] font-bold font-['Playfair_Display']">
                  Just think of us
                </small>
                as a personalized care package
                <span className="block text-5xl text-[#c91f6e] font-extrabold font-['Playfair_Display'] px-10">
                  delivered right to your door.
                </span>
              </h2>

              <div className="flex items-start mt-3 relative">
                <img className="size-10 object-fill" src={ban_before} alt="" />
                <p className="text-2xl ">
                  In Private Duty Home Care in Atlanta since 2002.
                </p>
                <img className="size-10 object-fill" src={ban_after} alt="" />
              </div>

              <a
                href="home-care-about-us"
                className="inline-block px-10 py-2 mt-5 bg-gradient-to-b bg-[#d4266f] text-lg font-semibold rounded-[30px] text-white hover:bg-primary"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Info (visible only on small screens) */}
      </div>

      <div className=" flex items-center justify-center md:hidden border-y-[18px] border-primary">
        <div className="bg-white bg-opacity-90 p-6 m-4 rounded-lg w-full text-center">
          <h2 className="text-xl font-normal">
            <small className="block text-2xl text-[#67bd00] font-bold mb-2">
              Just think of us
            </small>
            as a personalized care package
            <span className="block text-3xl text-[#c91f6e] font-bold mt-2">
              delivered right to your door.
            </span>
          </h2>

          <p className="text-lg mt-4 flex items-center justify-center">
            In Private Duty Home Care in Atlanta since 2002.
          </p>

          <a
            href="home-care-about-us"
            className="inline-block px-8 py-2 mt-4 bg-gradient-to-b from-[#d4266f] to-[#b01f5c] text-lg rounded-full text-white"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Middle Services Section */}
      <div className="bg-white py-4 sticky">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mt-10 md:-mt-10 relative">
            {serviceButtons.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="flex flex-col items-center"
              >
                <div className="bg-secondary hover:bg-primary rounded-full p-2 size-60 flex flex-col items-center justify-center mb-2 border-[12px] border-white gap-2">
                  <img src={service.icon} alt={service.name} className="" />

                  <div className="text-center font-['Playfair_Display'] flex flex-col gap-0">
                    <span className="text-[22px] font-normal text-white leading-none">
                      {service.name}
                    </span>
                    <span className="text-[#fffe84] text-[22px] font-bold uppercase leading-none">
                      {service.span}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
