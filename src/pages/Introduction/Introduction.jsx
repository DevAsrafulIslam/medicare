import { useEffect, useState } from 'react';

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 mb-32 overflow-hidden">
      <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Image Section with decorative elements */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg z-0 hidden md:block"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-lg z-0 hidden md:block"></div>
          <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl">
            <img 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
              src="/doctor/doctor.png" 
              alt="Doctor" 
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              INSPIRING BETTER HEALTH
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-blue-600">Great passion</span> <br />
              for healing
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Some up and coming trends are healthcare consolidation for
              independent healthcare centers that see a cut in unforeseen
              payouts. High deductible health plans are also expected to
              transpire along with a growth of independent practices.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <div className="text-right">
                <h3 className="text-xl font-bold text-blue-600">CHASE FRANKLIN</h3>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">PROFESSIONAL TEAM</h3>
              <p className="text-gray-600">
                Globally harness multimedia based collaboration and idea-sharing
                with backend products. Continually whiteboard superior
                opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">SERVICES AND TECHNOLOGY</h3>
              <p className="text-gray-600">
                Leverage agile frameworks to provide a robust synopsis for
                high level overviews. Iterative approaches to corporate
                strategy foster collaborative thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
