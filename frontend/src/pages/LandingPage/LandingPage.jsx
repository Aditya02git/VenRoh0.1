import React from 'react';
import HeroSection from './HeroSection';
import PortfolioStats from './PortfolioStats';
import Services from './Services';
import About from './About';
import Contact from './Contact';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className=" top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-black">
              MVP
            </div>
            {/* <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-black hover:text-blue-900 transition-colors duration-300 hover:scale-105 transform font-medium"
                >
                  {item}
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <HeroSection />
      <PortfolioStats />
      <Services />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="py-12 bg-yellow-50 rounded-xl border-yellow-100">
        <div className="max-w-7xl mx-auto px-6 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-black-600 mb-4 md:mb-0">
              StartupMVP
            </div>
            <div className="text-black-500">
              © 2025 StartupMVP. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;