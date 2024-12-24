import React from "react";

const ThirdSection = () => {
  return (
    <section
      id="benefits"
      className="relative h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] px-2 md:px-2 pt-10 pb-10 md:pt-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 justify-center flex montserrat text-center">
          Make It Easy for You
        </h2>

        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center mb-1 md:mb-6 lg:mb-8">
          <div className="w-full md:w-1/3">
            <img
              src="/assets/images/tow-truck-1.png"
              alt="Car being towed"
              className="rounded shadow mx-auto md:mx-0 md:w-[350px] w-[250px]"
            />
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 mx-w-[350px] md:w-auto">
            <h3 className="text-md md:text-xl lg:text-2xl font-semibold mb-2 justify-center flex montserrat">
              Save Time with Swift Assistance
            </h3>
            <p className="text-gray-300 justify-center flex montserrat text-center text-sm md:text-lg">
              Stranded on the road? SWURVIN connects you instantly with nearby
              riders for quick vehicle repairs. No more waiting—get back on
              track in no time!
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 order-2 md:order-1 w-[350px] md:w-auto">
            <h3 className="text-md md:text-xl lg:text-2xl font-semibold mb-2 justify-center flex">
              No Surprises, Just Clarity
            </h3>
            <p className="text-gray-300 justify-center flex montserrat text-center text-sm md:text-lg">
              Know the cost upfront before you book. SWURVIN ensures fair and
              transparent pricing for every service—peace of mind guaranteed!
            </p>
          </div>
          <div className="w-full md:w-1/3 order-1 md:order-2">
            <img
              src="/assets/images/tow-truck-2.png"
              alt="Car wheel on a tow truck"
              className="rounded shadow mx-auto md:mx-0 md:w-[350px] w-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
