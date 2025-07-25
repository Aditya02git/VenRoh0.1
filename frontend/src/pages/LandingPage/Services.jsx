import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Users, Lightbulb, Target, Building, ArrowRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: 'Growth Capital',
      description: 'Strategic investments in high-growth companies with proven business models and scalable operations.',
      features: ['Series A-C Funding', 'Growth Strategy', 'Market Expansion', 'Operational Excellence'],
      investmentRange: '$5M - $50M'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive portfolio risk assessment and mitigation strategies for optimal returns.',
      features: ['Due Diligence', 'Portfolio Analysis', 'Risk Assessment', 'Compliance Monitoring'],
      investmentRange: 'Advisory Services'
    },
    {
      icon: Users,
      title: 'Strategic Advisory',
      description: 'Expert guidance and mentorship to help portfolio companies achieve their full potential.',
      features: ['Board Representation', 'Strategic Planning', 'Network Access', 'Exit Planning'],
      investmentRange: 'Ongoing Support'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'Incubation and acceleration programs for early-stage startups with disruptive technologies.',
      features: ['Seed Funding', 'Mentorship', 'Product Development', 'Market Validation'],
      investmentRange: '$100K - $2M'
    },
    {
      icon: Target,
      title: 'Sector Focus',
      description: 'Specialized investment strategies across key high-growth sectors and emerging markets.',
      features: ['AI & Technology', 'Healthcare', 'Fintech', 'Clean Energy'],
      investmentRange: 'Sector Specific'
    },
    {
      icon: Building,
      title: 'Corporate Development',
      description: 'Strategic partnerships and M&A advisory for portfolio companies and corporate clients.',
      features: ['M&A Advisory', 'Strategic Partnerships', 'Corporate Ventures', 'Exit Strategies'],
      investmentRange: 'Transaction Based'
    }
  ];

  return (
    <section id="services" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Investment Services
          </h2>
          <p className="text-black text-xl max-w-3xl mx-auto">
            Comprehensive investment solutions tailored to drive exceptional growth and sustainable returns across all stages of business development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 bg-white rounded-2xl border border-yellow-100 hover:border-yellow-300 transform hover:scale-105 transition-all duration-500 hover:shadow-xl cursor-pointer ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center group-hover:bg-yellow-700 transition-colors duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-yellow-900 group-hover:text-yellow-700 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-sm text-yellow-600 font-medium">
                    {service.investmentRange}
                  </div>
                </div>
              </div>

              <p className="text-yellow-700 leading-relaxed mb-6 group-hover:text-yellow-800 transition-colors">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-yellow-600">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="group/btn flex items-center text-yellow-600 hover:text-yellow-800 font-semibold transition-colors">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Investment Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-yellow-900 mb-4">
              Our Investment Process
            </h3>
            <p className="text-yellow-700 text-lg">
              A systematic approach to identifying and nurturing exceptional opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Deal Sourcing', description: 'Identifying promising investment opportunities through our extensive network' },
              { step: '02', title: 'Due Diligence', description: 'Comprehensive analysis of business model, market, and management team' },
              { step: '03', title: 'Investment', description: 'Strategic capital deployment with clear value creation roadmap' },
              { step: '04', title: 'Value Creation', description: 'Active partnership to accelerate growth and achieve exceptional returns' }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-yellow-700 text-sm">
                  {process.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-yellow-200 -translate-x-1/2 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;