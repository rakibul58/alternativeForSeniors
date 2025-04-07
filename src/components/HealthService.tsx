import btm2_img1 from "../assets/btm2_img1.png";
import btm2_img2 from "../assets/btm2_img2.png";

const HealthService = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center bg-white p-4 max-w-6xl mx-auto py-10 my-20">
      {/* Left Section - Mission Statement */}
      <div className="xl:w-1/2 p-4">
        <h2 className="text-2xl font-normal text-gray-800">
          Assisting You to Better Health
        </h2>
        <h1 className="text-4xl font-bold text-[#c91d6e] font-['Playfair_Display'] mb-4">
          Our Mission Statement
        </h1>

        <p className="text-gray-700 mb-6 font-normal">
          We are committed to delivering our broad range of care needs by
          providing exceptional services to our clients. Our caregivers are
          well-versed in addressing our client's everyday care requirements so
          you can rest assured that you are well-cared for.
        </p>

        <button className="bg-[#c91d6e] hover:bg-[#a9c732] text-white font-semibold py-3 px-12 rounded-full">
          ABOUT US
        </button>
      </div>

      {/* Right Section - Employees */}
      <div className="xl:w-2/3 w-full xl:relative">
        <div className="bg-white p-6 py-12 rounded-lg border border-gray-200 mx-6 xl:mr-32 xl:ml-0">
          <div className="xl:-ml-24 -ml-0">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">EMPLOYEES</h2>
              <h3 className="text-3xl font-bold font-['Playfair_Display'] text-[#c91d6e]">IN-SERVICE</h3>
            </div>

            <p className="text-center text-gray-700 mb-6 font-normal">
              Get to know our competent and <br /> professional employees.
            </p>

            <div className="flex justify-center">
              <button className="bg-[#c91d6e] hover:bg-[#a9c732] text-white font-semibold py-3 px-12 rounded-full">
                CLICK HERE
              </button>
            </div>
          </div>
        </div>

        {/* Circular Images - Adjusted size to better match screenshot */}
        <div className="absolute right-0 -top-4 mt-4 mr-4 xl:mt-0 xl:mr-0 hidden xl:block">
          <div className="relative size-72">
            <div className="absolute rounded-full overflow-hidden border-4 border-white w-full h-full">
              <img
                src={btm2_img1}
                alt="Caregiver with elderly client"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute rounded-full overflow-hidden border-4 border-white size-40 -bottom-4 -right-4">
              <img
                src={btm2_img2}
                alt="Senior woman"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthService;
