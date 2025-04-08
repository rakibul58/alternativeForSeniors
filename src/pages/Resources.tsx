import img1 from "../assets/1.jpg";
import DynamicHelmet from "../components/DynamicHelmet";

export default function Resources() {
  const resources = [
    {
      name: "Home Care Association of America",
      url: "http://www.hcaoa.org/",
    },
    {
      name: "National Institutes of Health",
      url: "http://health.nih.gov/",
    },
    {
      name: "Medicare",
      url: "http://www.medicare.gov/",
    },
    {
      name: "Everyday Health – Online Health Information",
      url: "http://www.everydayhealth.com/",
    },
    {
      name: "Health Finder",
      url: "http://www.healthfinder.gov/",
    },
    {
      name: "Mayo Clinic",
      url: "http://www.mayoclinic.com/",
    },
    {
      name: "WebMD",
      url: "http://www.webmd.com/",
    },
  ];
  return (
    <div>
      <DynamicHelmet title="Resources" />
      <div
        style={{
          background: `url(${img1}) center center/cover no-repeat`,
          position: "relative",
        }}
        className="h-64 flex items-center justify-center"
      >
        {/* Dark overlay with better opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center flex flex-col lg:flex-row items-center justify-center px-4">
          <h1 className="text-4xl font-bold text-[#fffe80] font-['Playfair_Display'] uppercase">
            Resources
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10 px-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="border border-primary border-b-2 mb-4 p-4 text-sm"
          >
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#c91a6c] hover:text-red-500 transition-all duration-300 hover:ml-1 ease-in"
            >
              {resource.name}
            </a>
            <span className="mt-1 block">
              {resource.url}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
