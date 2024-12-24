import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[calc(100vh-4rem)] px-6 md:px-2 pt-6 sm:pt-20 md:pt-20 lg:pt-24 xl:pt-32 pb-14 body-background"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2 md:mb-4 montserrat">
            Your car problems solved in <br />
            <span className="text-4xl md:text-5xl lg:text-6xl base-color">
              One tab!
            </span>
          </h1>
          <div className="stroke-white border-l-4 pl-5">
            <p className="text-xs md:text-lg text-gray-300 mb-8 leading-relaxed montserrat">
              Your vehicle deserves instant care. With Swurvin, you’re always
              just a tap away from expert roadside assistance. Whether it's a
              flat tire or an unexpected breakdown, we've got you covered—
              faster and smarter.
            </p>
            <a
              href="#guide"
              className="inline-block bg-white text-black rounded-md px-5 py-3 font-medium hover:bg-gray-100 transition-colors w-fit montserrat text-sm md:text-md"
            >
              Get started
            </a>
          </div>
        </div>

        {/* Phone Image + Bubbles */}
        <div className="flex justify-center md:justify-end h-full place-content-center">
          <div className="relative top-0 bottom-0 m-auto h-full animate-customfloat">
            <div className="absolute top-[10%] right-[40%] md:right-[45%] inline-block base-color-background text-black px-2 py-2 rounded-br-lg rounded-tr-lg rounded-tl-lg w-[190px] lg:w-[243px]">
              <p className="m-0 montserrat text-[0.5rem] lg:text-xs text-white">
                My car broke down at [Location]! <br /> Can you help me out?
              </p>
              <svg
                className="absolute left-0 bottom-0 translate-x-[-11px]"
                width="11"
                height="22"
                viewBox="0 0 7 18"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0 V18 H0 C3 18 7 10 11 0 Z" fill="#4D5DFA" />
              </svg>
            </div>
            <div className="absolute top-1/4 right-[30%] inline-block secondary-color-background text-black px-2 py-2 rounded-bl-lg rounded-tr-lg rounded-tl-lg w-[80px] lg:w-[123px]">
              <p className="m-0 montserrat text-[0.5rem] lg:text-xs">
                Ready to Assist!
              </p>
              <svg
                className="absolute right-0 bottom-0 translate-x-[11px]"
                width="11"
                height="22"
                viewBox="0 0 7 18"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0 V18 H7 C4 18 0 10 0 0 Z" fill="#F5F5F5E5" />
              </svg>
            </div>
            <img
              src="/assets/images/phone.png"
              alt="Swurvin Phone App"
              className="max-w-[280px] md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center bottom-[2%] md:bottom-[5%] lg:bottom-[10%] left-0 right-0 mx-auto">
        <img src="/assets/images/scroll-down.png" alt="scroll down" className="animate-bounce"/>
      </div>
    </section>
  );
};

export default Hero;
