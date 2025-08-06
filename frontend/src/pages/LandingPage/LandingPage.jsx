import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
     
      {/* Main Content */}
      <div className="flex-grow">
        <HeroSection />
        <Services />
        <About />
        <Contact />
      </div>

      {/* Footer pushed to bottom */}
      <Footer />
    </div>
  );
};

export default LandingPage;
