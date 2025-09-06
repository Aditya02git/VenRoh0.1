import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Users, TrendingUp, Lightbulb, DollarSign, Network, Shield, Zap, Target, Globe, Star } from "lucide-react";
import './HeroSection.css'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  // Counter animation hook

  const [counters, setCounters] = useState({});

useEffect(() => {
  const animateCounter = (target, duration, statIndex) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCounters(prev => ({ ...prev, [statIndex]: target }));
        clearInterval(timer);
      } else {
        setCounters(prev => ({ ...prev, [statIndex]: Math.floor(start) }));
      }
    }, 16);
  };

  // Trigger animations when component mounts
  stats.forEach((stat, index) => {
    setTimeout(() => {
      animateCounter(stat.numericValue, 2000, index);
    }, index * 200);
  });
}, []);


  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Idea Validation",
      description: "Transform your concepts into viable business opportunities with expert feedback and market insights."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Smart Matching",
      description: "AI-powered algorithms connect startups with the right investors based on industry, stage, and goals."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-500" />,
      title: "Funding Pipeline",
      description: "Streamlined investment process from initial pitch to final funding with transparent milestone tracking."
    },
    {
      icon: <Network className="h-8 w-8 text-purple-500" />,
      title: "Network Expansion",
      description: "Access a curated community of entrepreneurs, mentors, and industry leaders worldwide."
    }
  ];

const stats = [
  { number: "500+", numericValue: 500, label: "Startups Funded" },
  { number: "$50M+", numericValue: 50, prefix: "$", suffix: "M+", label: "Capital Deployed" },
  { number: "200+", numericValue: 200, suffix: "+", label: "Active Investors" },
  { number: "95%", numericValue: 95, suffix: "%", label: "Success Rate" }
];

const howItWorks = [
  {
    step: "1",
    title: "Idea",
    description: "• Conceptualize your innovative solution\n• Research market opportunities\n• Define your target audience\n• Validate your concept with potential users\n• Develop your minimum viable product (MVP)",
    lottieUrl: "https://lottie.host/08ca4c6e-a2e5-42bb-b6bf-2b4bc3de07f8/o7gP4Amd4x.lottie"
  },
  {
    step: "2",
    title: "Startup",
    description: "• Build your founding team\n• Develop your business model\n• Create financial projections\n• Build your product or service\n• Establish legal structure and IP protection",
    lottieUrl: "https://lottie.host/46015d5f-3935-4bbe-968d-a1f78d962375/qCgruy3jj1.lottie"
  },
  {
    step: "3",
    title: "Investor",
    description: "• Prepare compelling pitch deck\n• Network with angel investors\n• Present your business case\n• Negotiate investment terms\n• Close seed or Series A funding",
    lottieUrl: "https://lottie.host/78207611-f3d5-4ab6-9fe4-1a4223d70b7d/bjqEzTvWTb.lottie"
  },
  {
    step: "4",
    title: "Venture Firm",
    description: "• Scale your operations\n• Expand market presence\n• Pursue larger funding rounds\n• Strategic partnerships\n• Prepare for exit opportunities",
    lottieUrl: "https://lottie.host/f83d26e3-cd96-45aa-8729-cc8cf93a3880/PLOJUaMySh.lottie"
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    position: "CEO, TechStart",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "This platform transformed our startup journey. We connected with the right investors within weeks and secured our Series A funding faster than we ever imagined."
  },
  {
    name: "Marcus Johnson",
    position: "Founder, GreenTech Solutions",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The AI matching system is incredible. It paired us with investors who truly understood our vision and market potential. Game-changing platform!"
  },
  {
    name: "Emily Rodriguez",
    position: "Co-founder, HealthTech Pro",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "From idea validation to funding, this platform guided us every step. The mentorship network and investor connections are unparalleled in the industry."
  },
  {
    name: "David Kim",
    position: "Angel Investor",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    quote: "As an investor, I've found exceptional startups here. The quality of entrepreneurs and their vetted ideas make this my go-to platform for investments."
  },
  {
    name: "Lisa Thompson",
    position: "Venture Partner",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote: "The platform's data-driven approach helps us identify high-potential startups efficiently. It's revolutionized how we discover and evaluate investment opportunities."
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className="text-left"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Invest In</span>
              <br />
              <span className="gradient-header ">Future</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              The ultimate platform where innovative ideas meet smart capital. We bridge the gap between visionary entrepreneurs and strategic investors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer" onClick={() => navigate("/login")}>
                <span className="flex items-center justify-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </button>
              
              <button className="shimmer-text px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-50 cursor-pointer">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
  {stats.map((stat, index) => (
    <div key={index} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
        {stat.prefix || ''}{counters[index] || 0}{stat.suffix || ''}
      </div>
      <div className="text-sm text-gray-600">{stat.label}</div>
    </div>
  ))}
</div>
          </div>

          {/* Visual Diagram */}
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Network className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin-slow">
                {/* Ideas */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                
                {/* Startups */}
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center shadow-md">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                
                {/* Investors */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                
                {/* VCs */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="50%" y1="80%" x2="50%" y2="50%" stroke="url(#gradient3)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="url(#gradient4)" strokeWidth="2" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
                </line>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Labels */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">Ideas</span>
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">Startups</span>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">Investors</span>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">VCs</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to turn your innovative ideas into successful, funded ventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-6 p-3 bg-gray-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* How It Works Section */}
<section 
  id="how-it-works" 
  data-animate
  className={`py-20 bg-white transition-all duration-1000 ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        From Idea to Success
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Follow the complete journey from initial concept to venture capital funding.
      </p>
    </div>

    <div className="space-y-20">
      {howItWorks.map((step, index) => (
        <div 
          key={index} 
          data-animate
          className={`transition-all duration-1000 ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
          }`}>
            {/* Text Content */}
            <div className={`${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full flex items-center justify-center shadow-lg mr-4">
                  <span className="text-lg font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-2">
                {step.description.split('\n').map((line, lineIndex) => (
                  <div key={lineIndex} className="flex items-start">
                    <span className="text-lg">{line}</span>
                  </div>
                ))}
              </div>
            </div>
            
{/* Lottie Animation */}
<div className={`${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
  <div className="relative">
    <DotLottieReact
      src={step.lottieUrl}
      loop
      autoplay
    />
  </div>
</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials Section */}
<section 
  id="testimonials" 
  data-animate
  className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-4">
        Happy Clients & Success Stories
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Hear from entrepreneurs and investors who've achieved remarkable success through our platform.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index}
          data-animate
          className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          {/* Quote Icon */}
          <div className="absolute -top-4 left-8">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 10c0-2.828 0-4.243.879-5.121C4.757 4 6.172 4 9 4h2c2.828 0 4.243 0 5.121.879C17 5.757 17 7.172 17 10c0 2.828 0 4.243-.879 5.121C15.243 16 13.828 16 11 16H9c-2.828 0-4.243 0-5.121-.879C3 14.243 3 12.828 3 10z" />
                <path d="M7.5 10.5c0-.465.235-.847.5-1.061V8.5c0-.28.22-.5.5-.5s.5.22.5.5v.939c.265.214.5.596.5 1.061 0 .465-.235.847-.5 1.061V12.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.939c-.265-.214-.5-.596-.5-1.061zm4 0c0-.465.235-.847.5-1.061V8.5c0-.28.22-.5.5-.5s.5.22.5.5v.939c.265.214.5.596.5 1.061 0 .465-.235.847-.5 1.061V12.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-.939c-.265-.214-.5-.596-.5-1.061z" />
              </svg>
            </div>
          </div>

          <div className="flex items-start space-x-4 mb-6">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
            />
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
              <p className="text-blue-600 font-medium">{testimonial.position}</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed italic">
            "{testimonial.quote}"
          </p>

          {/* Star Rating */}
          <div className="flex mt-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Call to Action */}
    <div className="text-center mt-12">
      <p className="text-lg text-gray-600 mb-6">Ready to join our success stories? <span className="hover:text-purple-950 underline cursor-pointer" onClick={() => navigate("/login")}>Join Now</span></p>
    </div>
  </div>
</section>

    </div>
  );
};

// Custom CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;
document.head.appendChild(style);

export default LandingPage;