import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowheight = window.innerHeight - 100;
      if (scrollY < windowheight) setActiveSection("Home");
      else if (scrollY >= windowheight && scrollY < windowheight*3) setActiveSection("Guide");
      else if (scrollY >= windowheight*3 && scrollY < windowheight*4) setActiveSection("Benefits");
      else setActiveSection("About");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 flex items-center justify-between py-4 px-6 md:px-10 shadow-custom z-20 body-background">
      {/* Logo + Title */}
      <div className="flex items-center">
        <a href="#home">
          <img
            src="/assets/images/logo.png"
            alt="Swurvin Logo"
            className="h-8 w-auto"
          />
        </a>
        <p className="montserrat text-lg font-semibold ml-8">SWURVIN</p>
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex items-center space-x-6">
        <li>
          <div
            className={`w-14 flex justify-center h-8 ${
              activeSection === "Home"
                ? "border-b-2 base-color-border base-color"
                : ""
            }`}
          >
            <a href="#home" className="hover:text-blue-500 montserrat font-medium">
              Home
            </a>
          </div>
        </li>
        <li>
          <div
            className={`w-14 flex justify-center h-8 ${
              activeSection === "Guide" ? "border-b-2 base-color-border base-color" : ""
            }`}
          >
            <a href="#guide" className="hover:text-blue-500 montserrat font-medium">
              Guide
            </a>
          </div>
        </li>
        <li>
          <div
            className={`w-14 flex justify-center h-8 ${
              activeSection === "Benefits"
                ? "border-b-2 base-color-border base-color"
                : ""
            }`}
          >
            <a
              href="#benefits"
              className="hover:text-blue-500 montserrat font-medium"
            >
              Benefits
            </a>
          </div>
        </li>
        <li>
          <div
            className={`w-14 flex justify-center h-8 ${
              activeSection === "About" ? "border-b-2 base-color-border base-color" : ""
            }`}
          >
            <a href="#about" className="hover:text-blue-500 montserrat font-medium">
              About
            </a>
          </div>
        </li>
      </ul>

      {/* Download button */}
      <button className="space-x-4 border-[#4D5DFA] hover:bg-black  hover:text-[#4D5DFA] base-color-background transition-colors text-white px-4 py-2 rounded-md text-sm montserrat font-medium border-solid border-2">
        <a
          href="#download"
          className=""
        >
          Download
        </a>
      </button>
    </nav>
  );
};

export default Navbar;
