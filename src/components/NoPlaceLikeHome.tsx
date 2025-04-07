import React from 'react';
import img_main1 from '../assets/img_main1.png';
import img_main2 from '../assets/img_main2.png';
import img_main3 from '../assets/img_main3.png';

const HomeCareComponent = () => {
  return (
    <div className="w-full bg-white relative z-20 px-4 mt-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-16 lg:gap-0">
          {/* Left side - Images with overlapping layout */}
          <div className="w-full lg:w-1/2 xl:w-2/5 relative px-10" style={{ minHeight: '350px' }}>
            <div className="relative w-full h-full mx-10 lg:mx-0">
              {/* Main large image */}
              <div className="relative z-10 w-full max-w-md mx-auto">
                <img 
                  src={img_main1}
                  alt="caregiver assisting an older woman" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Top smaller image */}
              <div className="absolute top-10 left-8 z-0 transform -translate-x-1/4 -translate-y-1/4 lg:-translate-x-1/3">
                <img 
                  src={img_main2}
                  alt="kitchen" 
                  className="w-full h-auto rounded-full border-4 border-white object-cover"
                />
              </div>
              
              {/* Bottom smaller image */}
              <div className="absolute bottom-40 -left-10 z-5 transform -translate-x-1/4 translate-y-1/4 lg:-translate-x-1/3">
                <img 
                  src={img_main3} 
                  alt="older woman with plants" 
                  className="w-full h-auto rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h1 className="text-pink-600 text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display']">There's No Place Like Home</h1>
            
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              Choosing the right agency to provide care in your home is a big decision. 
              You'll want to make sure whoever you choose is professional and 
              compatible with your loved one. With more than 16 years of experience in 
              home care, we've grown a network of reliable caregivers ready to provide 
              quality care at a moment's notice. Like a caring family member, we listen to 
              your needs in order to provide the ideal care provider in your home. We help 
              you set reasonable expectations so that it will be a pleasant experience for 
              everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCareComponent;