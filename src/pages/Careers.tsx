import img1 from "../assets/1.jpg";
import DynamicHelmet from "../components/DynamicHelmet";

export default function Careers() {
  return (
    <div>
      <DynamicHelmet title="Careers" />
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
          <h1 className="text-5xl font-bold text-[#fffe80] font-['Playfair_Display']">
            Careers
          </h1>
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto px-4 py-8">
        <p className="text-lg">
          <span className="text-primary font-bold">
            Alternative Home Care for Seniors
          </span>{" "}
          is looking for Certified Nursing Aides who are knowledgeable and
          experienced in caring for individuals who need assistance with their
          basic self-care activities. If you have the qualifications that we are
          looking for, we encourage you to become a part of our team.
        </p>
        <p className="mt-3 mb-2">Fill out the form below to send your online application.</p>
        <iframe src="https://www.alternative4seniors.com/wp-content/themes/alternativehc/forms/applicationForm.php" className="w-full" height={653}></iframe>
      </div>
    </div>
  );
}
