import React, { lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LazyLoadSection from "./components/LazyLoadSection";
import Footer from "./components/Footer";

// Lazy imports for big sections
const SecondSection = lazy(() => import("./components/SecondSection"));
const ThirdSection = lazy(() => import("./components/ThirdSection"));

function App() {
  return (
    <div className="text-white font-sans antialiased body-background">
      <Navbar />
      <Hero />

      {/* 1) Wrap your second section in LazyLoadSection */}
      <LazyLoadSection fallback={<section id="guide" className="relative h-[calc(200vh-4rem)] mx-h-[calc(200vh-4rem)] md:h-[calc(100vh-4rem)] px-2 md:px-2 pt-10 pb-10 md:pt-20"></section>}>
        <SecondSection first_section_title = "Request Assistance" first_section_color="first-image-gradient" second_section_color="second-image-gradient" second_section_title = "Match with a Rider" first_section = {<>Open the <a href="https://swurvin.com/#download" className="base-color">Swurvin app</a>, describe your issue, and share your location. It’s that simple!</>} second_section = {<>Our intelligent system connects you with the <a href="https://swurvin.com/#benifits" className="base-color">nearest expert</a></>} />
      </LazyLoadSection>
      <LazyLoadSection fallback={<section id="guide" className="relative h-[calc(200vh-4rem)] mx-h-[calc(200vh-4rem)] md:h-[calc(100vh-4rem)] px-2 md:px-2 pt-10 pb-10 md:pt-20"></section>}>
        <SecondSection first_section_title = "Real-Time Updates" first_section_color="third-image-gradient" second_section_color="fourth-image-gradient" third_section_color="fifth-image-gradient" second_section_title = "Problem Solved!" first_section = "Track your rider’s location live on the app and receive updates until they arrive." second_section = "Sit back as the rider takes care of your vehicle. Rate your experience after the service." count={3} title={false} third_section_title="Pay" third_section={<>Easily secure your service with our trusted payment system. Choose your <a href="https://swurvin.com/#benifits" className="base-color">preferred method</a>, confirm the amount, and you're all set!</>} />
      </LazyLoadSection>

      {/* 2) Wrap your third section in LazyLoadSection */}
      <LazyLoadSection fallback={<section id="benefits"className="relative h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] px-2 md:px-2 pt-10 pb-10 md:pt-20"></section>}>
        <ThirdSection />
      </LazyLoadSection>

      {/* "About" section or other sections... */}
      <LazyLoadSection fallback={<div id="about" className="relative h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] px-2 md:px-2 pt-10 pb-10 md:pt-20"><section id="download"></section></div>}>
        <Footer/>
      </LazyLoadSection>
    </div>
  );
}

export default App;
