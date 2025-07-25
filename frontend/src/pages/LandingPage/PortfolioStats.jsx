import React from 'react';
import { BarChart3, Target, Award, Globe, TrendingUp, Users, Building, DollarSign } from 'lucide-react';

const PortfolioStats = () => {
  const portfolioStats = [
    { 
      label: 'Total Investment', 
      value: '$2.8B', 
      icon: DollarSign,
      description: 'Cumulative capital deployed across all funds'
    },
    { 
      label: 'Active Companies', 
      value: '150+', 
      icon: Building,
      description: 'Currently active portfolio companies'
    },
    { 
      label: 'Successful Exits', 
      value: '85', 
      icon: TrendingUp,
      description: 'Companies successfully exited with returns'
    },
    { 
      label: 'Investment Team', 
      value: '50+', 
      icon: Users,
      description: 'Expert investment professionals'
    },
    { 
      label: 'Years Experience', 
      value: '25+', 
      icon: Award,
      description: 'Combined team experience in VC/PE'
    },
    { 
      label: 'Global Presence', 
      value: '12', 
      icon: Globe,
      description: 'Countries with portfolio presence'
    },
    { 
      label: 'Average IRR', 
      value: '35%', 
      icon: BarChart3,
      description: 'Internal rate of return across funds'
    },
    { 
      label: 'Sectors Covered', 
      value: '8', 
      icon: Target,
      description: 'Key industry verticals'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black-900 mb-6">
            Our Track Record
          </h2>
          <p className="text-black-700 text-xl max-w-3xl mx-auto">
            Proven results and exceptional performance across all key metrics demonstrate our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioStats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-yellow-50 rounded-2xl border border-yellow-100 hover:border-yellow-300 transform hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-black-600 rounded-full flex items-center justify-center group-hover:bg-black-700 transition-colors">
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-black mb-2">
                {stat.value}
              </div>
              <div className="text-black font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Metrics Section */}
        <div className="mt-16 text-gradient-to-r rounded-3xl p-8 group px-8 py-4 font-bold">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">Investment Highlights</h3>
            <p className="text-gray-600 text-lg">
              Key achievements that set us apart in the investment landscape
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
  <div className="text-4xl font-bold mb-2 animate-bounce bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600 text-transparent bg-clip-text">
    $8.2B
  </div>


              <div className="text-black font-medium mb-2">Total Returns Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 animate-bounce bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600 text-transparent bg-clip-text">3.2x</div>
              <div className="text-black font-medium mb-2">Average Fund Multiple</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 animate-bounce bg-gradient-to-r from-yellow-300 via-amber-500 to-orange-600 text-transparent bg-clip-text">92%</div>
              <div className="text-black font-medium mb-2">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;