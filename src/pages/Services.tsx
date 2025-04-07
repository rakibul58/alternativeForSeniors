
import servicesImage from "../assets/1.jpg";
import caregiverClient from "../assets/caregiver_client.png";
import DynamicHelmet from "../components/DynamicHelmet";

const ServicesPage = () => {
  return (
    <div>
      <DynamicHelmet title="Our Services" />
      
      {/* Hero Banner Section */}
      <div 
        style={{
          background: `url(${servicesImage}) center center/cover no-repeat`,
          position: 'relative'
        }} 
        className="h-64 flex items-center justify-center"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 text-center flex flex-col lg:flex-row items-center justify-between gap-16 px-4">
          <h1 className="text-3xl font-bold text-[#fffe80] font-['Playfair_Display']">OUR SERVICES</h1>
          
          {/* Message box with semi-transparent background */}
          <div className="bg-[#00000034] bg-opacity-80 p-4 rounded">
            <p className="text-white font-medium italic">We offer a broad range of services to cater to our clients' individual needs.</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl w-full mx-auto px-4 py-8">
        
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="md:w-2/3">
            <p className="mb-4">
              <span className="text-6xl font-['Playfair_Display'] text-primary font-semibold mr-2 float-left">D</span>
              <span>o you need a sitter for four hours a day, a few days a week? Or, would you prefer round-the-clock 
                eldercare companionship? We can customize a program and match you with the Certified Nursing 
                Aide (CNA) who's best for you. Whether it's running the vacuum or to the store, chopping veggies 
                for chicken soup, or helping you in and out of the shower – whatever the need, we will work with you to 
                create a plan that fits your needs.</span>
            </p>
          </div>
          <div className="lg:block hidden">
            <img 
              src={caregiverClient} 
              alt="Caregiver with client" 
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Services List Section */}
        <div className="mb-8">
          <p className="font-medium mb-4">We offer the following services:</p>
          
          <div className="bg-primary text-white p-6 rounded-lg shadow-md border-b-[4px] border-r-[4px] border-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div>
                <ul className="space-y-3 font-semibold">
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Personal Hygiene</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Bathing Assistance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Medication Reminder</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Feeding & Grooming</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Dressing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Meal Preparation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Laundry</span>
                  </li>
                </ul>
              </div>
              
              {/* Right Column */}
              <div>
                <ul className="space-y-3 font-semibold">
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Light Housekeeping</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Activities & Escorting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Errands & Shopping</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Respite Care</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Assisting with Ambulation & Transfer</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Live-Out Services</span>
                  </li>
                  <li className="flex items-center">
                    <div className="size-[12px] rounded-full bg-white border-[3px] border-secondary mr-2"></div>
                    <span>Live-In Services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <p className="mb-4">
            To begin with our services, you can immediately contact us at <span className="font-bold">770-736-7977</span>. You can also{" "}
            <a href="/contact" className="text-secondary font-bold hover:underline">set an appointment</a>{" "}
            so one of our care coordinators can review your care needs and create a care plan for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;