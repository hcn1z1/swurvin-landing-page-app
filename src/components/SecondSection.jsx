import React from "react";
import { useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SecondSection = ({ first_section_title, first_section, second_section_title, second_section, third_section_title, third_section, image = "/assets/images/", title = true, count = 1, first_section_color = "", third_section_color = "", second_section_color = "" }) => {
  const [imageState, imageStateSetter] = useState({
    first: false,
    second: false,
    third: false
  });

  const handleImageLoad = (key) => {
    imageStateSetter((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  return (
    <section
      id="guide"
      className={!title ? "relative h-[calc(300vh-4rem)] mx-h-[calc(300vh-4rem)] md:h-[calc(100vh-4rem)] px-2 md:px-2 pt-10 pb-10 md:pt-20" : "relative h-[calc(200vh-4rem)] mx-h-[calc(200vh-4rem)] md:h-[calc(100vh-4rem)] px-2 md:px-2 pt-10 pb-10 md:pt-20"}
    >
      <div className="container mx-auto px-4 h-[calc(100vh-6.5rem)] md:h-full">
        {title ? <h2 className="text-2xl md:text-3xl font-bold mb-6 justify-center flex montserrat text-center">
          How it works?
        </h2> : <p></p>}

        <div className="md:flex md:flex-col h-full md:justify-center md:mx-auto">
          {/* Request Assistance */}
          <div className="flex flex-col md:flex-row items-center mb-1 md:mb-8 lg:mb-14 h-full md:h-auto">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative max-w-[33vh] md:max-w-[220px] max-h-[33vh] md:max-h-[220px] m-8 md:m-0">
                <div className="absolute top-0 right-0 left-0 mx-0 md:translate-y-[-10%]">
                  {!imageState.first && (
                    <Skeleton
                      className="scale-[0.7] rounded-2xl"
                      width={220}
                      height={436}
                      borderRadius={30}
                      duration={1}
                    />
                  )}
                  <img
                    src={`${image}${count}-portrait.png`}
                    alt=""
                    onLoad={() => handleImageLoad("first")}
                    className="scale-[0.7]"
                  />
                </div>
                <div className={`absolute top-0 right-0 left-0 mx-auto md:mx-auto translate-y-[-45px] md:left-auto md:top-[30%] md:right-0 translate-x-0 md:translate-x-[45px] w-[90px] h-[90px] rounded-full circle-shadow flex justify-center items-center ${first_section_color} montserrat font-bold text-3xl text-black`}>
                  {count}.
                </div>
                <div className={`rounded-tl-xl rounded-br-xl rounded-tr-xl w-fit w-max min-w-[33vh] md:min-w-[220px] min-h-[33vh] md:min-h-[220px] ${first_section_color}`}></div>
                <svg
                  className="absolute left-0 bottom-0 translate-x-[-20px]"
                  width="20"
                  height="70"
                  viewBox="0 0 7 18"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* First Image Gradient */}
                    <linearGradient id="first-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#E0F7FA" }} />
                      <stop offset="100%" style={{ stopColor: "#B2EBF2" }} />
                    </linearGradient>

                    {/* Second Image Gradient */}
                    <linearGradient id="second-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#FFFFFF" }} />
                      <stop offset="100%" style={{ stopColor: "#F2F2F2" }} />
                    </linearGradient>

                    {/* Third Image Gradient */}
                    <linearGradient id="third-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#BBDEFB" }} />
                      <stop offset="100%" style={{ stopColor: "#D1C4E9" }} />
                    </linearGradient>

                    {/* Fourth Image Gradient */}
                    <linearGradient id="fourth-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#FFE0B2" }} />
                      <stop offset="100%" style={{ stopColor: "#FFF9C4" }} />
                    </linearGradient>

                    {/* Fifth Image Gradient */}
                    <linearGradient id="fifth-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#B2DFDB" }} />
                      <stop offset="100%" style={{ stopColor: "#C8E6C9" }} />
                    </linearGradient>

                    {/* Sixth Image Gradient */}
                    <linearGradient id="sixth-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#81D4FA" }} />
                      <stop offset="100%" style={{ stopColor: "#FFFFFF" }} />
                    </linearGradient>
                  </defs>
                  <path d="M7 0 V18 H0 C3 18 7 10 11 0 Z" fill={`url(#${first_section_color})`} />
                </svg>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center h-full md:h-auto md:pt-0 pt-[33%] justify-center">
              <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 w-[350px] md:w-auto">
                <h3 className="text-xl md:text-xl lg:text-2xl font-semibold mb-2 lg:ml-0 md:ml-4 ml-0">
                  {first_section_title}
                </h3>
                <p className="text-lg text-gray-300 montserrat text-sm md:text-lg lg:ml-0 md:ml-4 ml-0">
                  {first_section}
                </p>
              </div>
            </div>
          </div>

          {/* Match with a Rider */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-1 md:mb-6 lg:mb-8 h-full md:h-auto items-end">
            <div className="w-full md:w-1/3 flex justify-center order-2 md:order-1">
              <div className="relative max-w-[33vh] md:max-w-[220px] max-h-[33vh] md:max-h-[220px] m-8 md:m-0">
                <div className="absolute top-0 right-0 left-0 mx-0 md:translate-y-[-10%]">
                  {!imageState.second && (
                    <Skeleton
                      className="scale-[0.7] rounded-2xl"
                      width={220}
                      height={436}
                      borderRadius={30}
                      duration={1}
                    />
                  )}
                  <img
                    src={`${image}${count + 1}-portrait.png`}
                    alt=""
                    onLoad={() => handleImageLoad("second")}
                    className="scale-[0.7]"
                  />
                </div>
                <div className={`absolute top-0 right-0 left-0 mx-auto md:mx-auto translate-y-[-45px] md:left-auto md:top-[30%] md:right-0 translate-x-0 md:translate-x-[45px] w-[90px] h-[90px] rounded-full circle-shadow justify-center items-center flex ${second_section_color} montserrat font-bold text-3xl text-black`}>
                  .{count + 1}
                </div>
                <div className={`rounded-tl-xl rounded-bl-xl rounded-tr-xl w-fit w-max min-w-[33vh] md:min-w-[220px] min-h-[33vh] md:min-h-[220px] ${second_section_color}`}></div>
                <svg
                  className="absolute right-0 bottom-0 translate-x-[20px]"
                  width="20"
                  height="70"
                  viewBox="0 0 7 18"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* First Image Gradient */}
                    <linearGradient id="first-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#E0F7FA" }} />
                      <stop offset="100%" style={{ stopColor: "#B2EBF2" }} />
                    </linearGradient>

                    {/* Second Image Gradient */}
                    <linearGradient id="second-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#FFFFFF" }} />
                      <stop offset="100%" style={{ stopColor: "#F2F2F2" }} />
                    </linearGradient>

                    {/* Third Image Gradient */}
                    <linearGradient id="third-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#BBDEFB" }} />
                      <stop offset="100%" style={{ stopColor: "#D1C4E9" }} />
                    </linearGradient>

                    {/* Fourth Image Gradient */}
                    <linearGradient id="fourth-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#FFE0B2" }} />
                      <stop offset="100%" style={{ stopColor: "#FFF9C4" }} />
                    </linearGradient>

                    {/* Fifth Image Gradient */}
                    <linearGradient id="fifth-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#B2DFDB" }} />
                      <stop offset="100%" style={{ stopColor: "#C8E6C9" }} />
                    </linearGradient>

                    {/* Sixth Image Gradient */}
                    <linearGradient id="sixth-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#81D4FA" }} />
                      <stop offset="100%" style={{ stopColor: "#FFFFFF" }} />
                    </linearGradient>
                  </defs>
                  <path d="M0 0 V18 H7 C4 18 0 10 0 0 Z" fill={`url(#${second_section_color})`} />
                </svg>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center h-full md:h-auto md:pt-0 pt-[33%] justify-center order-2">
              <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 w-[350px] md:w-auto">
                <h3 className="text-xl md:text-xl lg:text-2xl font-semibold mb-2 md:text-right">
                  {second_section_title}
                </h3>
                <p className="text-lg text-gray-300 montserrat text-sm md:text-lg md:text-right">
                  {second_section}
                </p>
              </div>
            </div>
          </div>
        {!title ? <div className="flex flex-col md:flex-row items-center mb-1 md:mb-8 lg:mb-14 h-full md:h-auto gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative max-w-[33vh] md:max-w-[220px] max-h-[33vh] md:max-h-[220px] m-8 md:m-0">
              <div className="absolute top-0 right-0 left-0 mx-0 md:translate-y-[-10%]">
                {!imageState.third && (
                  <Skeleton
                    className="scale-[0.7] rounded-2xl"
                    width={220}
                    height={436}
                    enableAnimation={true}
                    borderRadius={30}
                    duration={1}
                  />
                )}
                <img
                  src={`${image}${count + 2}-portrait.png`}
                  alt=""
                  onLoad={() => handleImageLoad("third")}
                  className="scale-[0.7]"
                />
              </div>
              <div className={`absolute top-0 right-0 left-0 mx-auto md:mx-auto translate-y-[-45px] md:left-auto md:top-[30%] md:right-0 translate-x-0 md:translate-x-[45px] w-[90px] h-[90px] rounded-full circle-shadow flex justify-center items-center ${third_section_color} montserrat font-bold text-3xl text-black`}>
                {count + 2}.
              </div>
              <div className={`rounded-tl-xl rounded-br-xl rounded-tr-xl w-fit w-max min-w-[33vh] md:min-w-[220px] min-h-[33vh] md:min-h-[220px] ${third_section_color}`}></div>
              <svg
                className="absolute left-0 bottom-0 translate-x-[-20px]"
                width="20"
                height="70"
                viewBox="0 0 7 18"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* First Image Gradient */}
                  <linearGradient id="first-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#E0F7FA" }} />
                    <stop offset="100%" style={{ stopColor: "#B2EBF2" }} />
                  </linearGradient>

                  {/* Second Image Gradient */}
                  <linearGradient id="second-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FFFFFF" }} />
                    <stop offset="100%" style={{ stopColor: "#F2F2F2" }} />
                  </linearGradient>

                  {/* Third Image Gradient */}
                  <linearGradient id="third-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#BBDEFB" }} />
                    <stop offset="100%" style={{ stopColor: "#D1C4E9" }} />
                  </linearGradient>

                  {/* Fourth Image Gradient */}
                  <linearGradient id="fourth-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FFE0B2" }} />
                    <stop offset="100%" style={{ stopColor: "#FFF9C4" }} />
                  </linearGradient>

                  {/* Fifth Image Gradient */}
                  <linearGradient id="fifth-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#B2DFDB" }} />
                    <stop offset="100%" style={{ stopColor: "#C8E6C9" }} />
                  </linearGradient>

                  {/* Sixth Image Gradient */}
                  <linearGradient id="sixth-image-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#81D4FA" }} />
                    <stop offset="100%" style={{ stopColor: "#FFFFFF" }} />
                  </linearGradient>
                </defs>
                <path d="M7 0 V18 H0 C3 18 7 10 11 0 Z" fill={`url(#${third_section_color})`} />
              </svg>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center h-full md:h-auto md:pt-0 pt-[33%] justify-center">
            <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 w-[350px] md:w-auto">
              <h3 className="text-xl md:text-xl lg:text-2xl font-semibold mb-2 lg:ml-0 md:ml-4 ml-0">
                {third_section_title}
              </h3>
              <p className="text-lg text-gray-300 montserrat text-sm md:text-lg lg:ml-0 md:ml-4 ml-0">
                {third_section}
              </p>
            </div>
          </div>
        </div> : <></>}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
