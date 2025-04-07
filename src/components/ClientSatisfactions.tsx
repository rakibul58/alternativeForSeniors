
import bg_bottom1 from "../assets/bg_bottom1.jpg";
import { motion } from "motion/react"; 
import icon_bot1 from "../assets/icon_bot1.png";
import icon_bot2 from "../assets/icon_bot2.png";  
import icon_bot3 from "../assets/icon_bot3.png";
import icon_bot4 from "../assets/icon_bot4.png";

const ClientSatisfactions = () => {
  // Button data
  const actionButtons = [
    { id: 1, topText: "SET AN", bottomText: "APPOINTMENT", icon: icon_bot1 },
    { id: 2, topText: "MEET OUR", bottomText: "CAREGIVERS", icon: icon_bot2 },
    { id: 3, topText: "ALTERNATIVE", bottomText: "TIMESHEET", icon: icon_bot4 },
    { id: 4, topText: "SEND YOUR", bottomText: "REFERRALS", icon: icon_bot3 },
  ];

  return (
    <div className="relative w-full 2xl:min-h-screen overflow-hidden p-5 bg-gray-100">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden 2xl:block"
        style={{
          backgroundImage: `url(${bg_bottom1})`,
        }}
      />

      {/* Left-side gradient overlay - responsive width */}
      <div className="absolute inset-y-0 left-0 w-full 2xl:w-3/5 bg-gradient-to-r from-white via-white to-transparent hidden 2xl:block" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col 2xl:flex-row w-full h-full 2xl:min-h-screen gap-10">
        {/* Text content - responsive positioning */}
        <div className="relative 2xl:absolute px-6 py-12 2xl:py-0  2xl:left-[250px] top-0 2xl:top-1/2 2xl:-translate-y-1/2 w-full 2xl:w-1/2 z-10 flex flex-row flex-wrap 2xl:flex-col gap-8 text-center 2xl:text-left justify-center items-start 2xl:items-start">
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-900">
              Clients Satisfaction
            </h2>
            <h1 className="text-3xl font-bold text-[#c91d6e] mb-2 2xl:mb-4 font-['Playfair_Display']">SURVEY</h1>
            <p className="text-gray-700 font-normal mb-4 2xl:mb-6 max-w-[340px]">
              We would love to hear from you. Your feedback about our services
              is highly appreciated.
            </p>
            <button className="bg-[#c91d6e] hover:bg-[#a9c732]  text-white font-bold py-2 px-6 2xl:py-3 2xl:px-10 rounded-full mb-4 2xl:mb-6">
              CLICK HERE
            </button>
          </div>

          <div>
            <h2 className="text-xl font-medium text-gray-900">Insurance</h2>
            <h1 className="text-3xl font-bold text-[#c91d6e] mb-2 2xl:mb-4 font-['Playfair_Display']">ACCEPTED</h1>
            <p className="text-gray-700 font-normal mb-4 2xl:mb-6 max-w-[340px]">
              Learn about the types of insurance that we accept.
            </p>
            <button className="bg-[#c91d6e] hover:bg-[#a9c732] text-white font-bold py-2 px-6 2xl:py-3 2xl:px-10 rounded-full">
              CLICK HERE
            </button>
          </div>
        </div>

        {/* Green buttons - responsive positioning */}
        <div className="relative 2xl:absolute flex flex-row flex-wrap 2xl:flex-nowrap 2xl:flex-col justify-center items-center 2xl:left-1/2 2xl:top-1/2 2xl:-translate-x-1/2 2xl:-translate-y-1/2 z-20 my-8 2xl:my-0 px-4 2xl:px-0 font-['Playfair_Display']">
          {actionButtons.map((button, index) => (
            <motion.div
              key={button.id}
              className="flex-shrink-0"
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 30,
                delay: 0.2 * index,
                duration: 0.5,
              }}
            >
              <div className="size-44 rounded-full bg-[#a9c732] text-white flex flex-col items-center justify-center cursor-pointer hover:bg-secondary transition-colors border-[9px]">
                <img src={button.icon} alt="" />
                <div className="text-[16px] mt-2 leading-none">{button.topText}</div>
                <div className="text-[16px] font-bold text-[#fffe84] font-['Playfair_Display'] leading-none">{button.bottomText}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSatisfactions;