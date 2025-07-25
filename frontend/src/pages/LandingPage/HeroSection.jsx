import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Import

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate(); // ✅ Hook for navigation

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-white mb-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-black-200 rounded-full animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black leading-tight">
          Invest in the
          <span className="block text-black">Future</span>
        </h1>
        <p className="text-xl md:text-2xl text-black mb-12 leading-relaxed max-w-3xl mx-auto">
          Transforming visionary ideas into market-leading companies through strategic capital and expert guidance.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* ✅ Navigate to home on click */}
<button
  onClick={() => navigate("/login")}
  className="group px-8 py-4 font-bold bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600 
             hover:from-black hover:via-black hover:to-black 
             text-black hover:text-white rounded-full text-lg font-semibold 
             hover:scale-105 transform transition-all duration-300 
             shadow-lg hover:shadow-xl"
>
  <span className="flex items-center justify-center cursor-pointer">
    Start Your Journey
    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
  </span>
</button>

          <button className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer">
            View Portfolio
          </button>
        </div>

        {/* Key Value Propositions */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2 animate-bounce">$2.8B</div>
            <div className="text-black">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black0 mb-2 ">150+</div>
            <div className="text-black">Portfolio Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2 ">25+</div>
            <div className="text-black">Years Experience</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-black" />
      </div>
    </section>
  );
};

export default HeroSection;
