import React from 'react';

const Footer = () => {
  return (
    <section
        className="relative h-[calc(100vh-4rem)] mx-h-[calc(100vh-4rem)] px-0 md:px-0 pt-6 sm:pt-20 md:pt-20 lg:pt-24 xl:pt-32 pb-0 body-background place-content-end">
        <div id="download"
            className="mx-6 bg-indigo-500 text-white text-center py-6 md:max-w-[80%] md:mx-auto z-5 md:max-h-[15vh] md:min-h-[15vh] md:translate-y-[7.5vh] md:flex justify-between  md:rows-2 relative px-4 rounded-xl">
            <div className="md:w-[50%] text-left flex justify-center flex-col">
                <h2 className="text-md md:text-xl font-semibold roboto text-center md:text-left">Get back on the road faster with SWURVIN</h2>
                <div className="flex space-x-4 mt-2">
                    <p className="flex items-center space-x-2 text-sm md:text-base font-normal roboto">
                        <img src="assets/images/check.png" className="h-3"/>
                        <span>Fast Response</span>
                    </p>
                    <p className="flex items-center space-x-2 md:text-sm md:text-base">
                        <img src="assets/images/check.png" className="h-3"/>
                        <span>24/7 Availability</span>
                    </p>
                    <p className="flex items-center space-x-2 text-sm md:text-base">
                        <img src="assets/images/check.png" className="h-3"/>
                        <span>Affordable Pricing</span>
                    </p>
                </div>
            </div>
            <div className="flex md:flex-row md:rows-2 justify-center m-4 space-x-2">
                <button href="#" className="bg-white text-black px-4 py-2 rounded-lg shadow-sm">
                    <img src="assets/images/play-store.png" alt="Google Play" className="h-10 md:h-9"/>
                </button>
                <button href="#" className="bg-white text-black px-4 py-2 rounded-lg shadow-sm">
                    <img src="assets/images/app-store.png" alt="App Store" className="h-10 md:h-9"/>
                </button>
            </div>
        </div>

        <footer className="bg-gray-50 text-gray-700 py-8 border-t border-gray-300 mt-8 md:mt-0" id='about'>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-6 md:pt-[7.5vh]">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="assets/images/logo.png" alt="SWURVIN Logo" className="h-8"/>
                        <span className="font-semibold text-lg">SWURVIN</span>
                    </div>
                    <div>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">+1 (438) 462-2620</a></li>
                            <li><a href="#" className="hover:underline">1395 Fleury Est, Suite 102.2</a></li>
                            <li><a href="#" className="hover:underline">Montréal, Québec H2C 1R7</a></li>
                            <li><a href="#" className="hover:underline">customer_support@swurvin.com</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                </div>

                <div>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Company</h3>
                    <ul className="space-y-1">
                        <li><a href="#guide" className="hover:underline">Guide</a></li>
                        <li><a href="#benefits" className="hover:underline">Benefits</a></li>
                        <li><a href="#about" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">Let's do it!</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <img src="assets/images/facebook.png" alt="Facebook" className="h-7"/>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <img src="assets/images/instagram.png" alt="Instagram" className="h-7"/>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900">
                            <img src="assets/images/tiktok.png" alt="TikTok" className="h-7"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
                <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Use</a>
                    <a href="#" className="hover:underline">Sales and Refunds</a>
                    <a href="#" className="hover:underline">Legal</a>
                    <a href="#" className="hover:underline">Site Map</a>
                </div>
                <p className="mt-4">© 2024 SWURVIN. All Rights Reserved.</p>
            </div>
        </footer>
    </section>
  );
};

export default Footer;
