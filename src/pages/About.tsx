import img1 from "../assets/1.jpg";
import careGiver from "../assets/care_giver.jpg";
import DynamicHelmet from "../components/DynamicHelmet";

const AboutUsPage = () => {
  return (
    <div>
      <DynamicHelmet title="About Us" />
      <div 
        style={{
          background: `url(${img1}) center center/cover no-repeat`,
          position: 'relative'
        }} 
        className="h-64 flex items-center justify-center"
      >
        {/* Dark overlay with better opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 text-center flex flex-col lg:flex-row items-center justify-between gap-16 px-4">
          <h1 className="text-4xl font-bold text-[#fffe80] font-['Playfair_Display']">ABOUT US</h1>
          
          {/* Message box with solid background to ensure text visibility */}
          <div className="bg-[#00000034] bg-opacity-80 p-4 rounded">
            <p className="text-white font-medium italic">We are a company that is devoted to giving top-notch care to our valued clients.</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl w-full mx-auto px-4 py-8">
        {/* Mission Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-secondary font-['Playfair_Display'] mb-4">Mission</h2>
            <p className="mb-4">
              We are committed to delivering our broad range of care needs by providing exceptional services to our
              clients. Our caregivers are well-versed in addressing our client's everyday care requirements so you can rest
              assured that you are well-cared for.
            </p>
          </div>
          <div className="lg:block hidden">
            <img 
              src={careGiver} 
              alt="Caregiver serving meal to senior" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Our Company Section */}
        <div className="mb-12 lg:-mt-8">
          <h2 className="text-3xl font-bold text-secondary font-['Playfair_Display'] mb-4">Our Company</h2>
          <div className="flex items-start">
            <span className="text-6xl font-['Playfair_Display'] text-primary font-semibold mr-2">S</span>
            <div>
              <span>ince 2002, we've brought in-home care and peace of mind to hundreds of seniors and their families. </span>
              <span>
                As a privately owned agency, our management team has more than a combined 40 years of senior care industry experience. Our goal is to
                provide you with the right compassionate caregiver matched to your needs exactly. From meal preparation and personal
                hygiene to housekeeping, companionship, errands, and medication reminders, we're here for you. Our senior home care clients have come to expect:
              </span>
            </div>
          </div>

          <ul className="mt-6 space-y-2 ml-3">
            <li className="flex items-center">
              <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
              <span>SafetyNET™ – 24-hour emergency on-call service for in-home care. We ALWAYS answer the phone</span>
            </li>
            <li className="flex items-center">
              <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
              <span>Reliable, compatible, compassionate and experienced caregivers</span>
            </li>
            <li className="flex items-center">
              <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
              <span>Matching and placement of senior caregiver within 12-36 hours</span>
            </li>
            <li className="flex items-center">
              <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
              <span>Competitive rates and customizable care plans determined by senior's in-home care needs</span>
            </li>
          </ul>
        </div>

        {/* Who We Serve Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-secondary font-['Playfair_Display'] mb-4">Who We Serve</h2>
          <p className="mb-4">
            <span className="text-primary font-semibold">Alternative Home Care for Seniors</span> provides service to:
          </p>

          <ul className="mt-6 space-y-2 ml-3">
            <li className="flex items-center">
              <span className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></span>
              <span>Medicaid Waiver patients through SOURCE or CCSP</span>
            </li>
            <li className="flex items-center">
              <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
              <span>Veterans Administration</span>
            </li>
            <li className="flex items-center">
              <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
              <span>Private Pay clients, some with Long-Term Care Insurance</span>
            </li>
          </ul>

          <p className="mt-6">
            Our commitment to providing quality of life to seniors in their own home and the very best value has helped us maintain 99% customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;