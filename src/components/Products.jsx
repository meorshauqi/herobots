import { useEffect, useRef, useState } from 'react';

function Products() {
  const statsRef = useRef(null);
  const productsRef = useRef(null);
  
  const [isVisible, setIsVisible] = useState({
    stats: false,
    products: false,
  });
  
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    projects: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const targets = [statsRef.current, productsRef.current];
    targets.forEach(target => target && observer.observe(target));

    return () => observer.disconnect();
  }, []);

  // Animate numbers when stats become visible
  useEffect(() => {
    if (isVisible.stats) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      
      const targets = {
        years: 2023,
        clients: 30,
        projects: 100,
      };
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          years: Math.floor(targets.years * progress),
          clients: Math.floor(targets.clients * progress),
          projects: Math.floor(targets.projects * progress),
        });
        
        if (currentStep >= steps) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [isVisible.stats]);

  const products = [
    {
      id: 1,
      name: 'AI Security Surveillance',
      description: 'AI-powered video analytics for real-time threat detection and intelligent monitoring. Enhance security with automated alerts and comprehensive coverage.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      id: 2,
      name: 'Workforce Management System',
      description: 'Streamline attendance, scheduling, and productivity tracking with automation. Optimize workforce efficiency and reduce administrative overhead.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: 3,
      name: 'Smart Patrolling',
      description: 'Automated patrol routes with real-time reporting and incident detection. Ensure comprehensive site coverage with intelligent route optimization.',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      id: 4,
      name: 'License Plate Recognition',
      description: 'Fast, accurate vehicle identification for security and access control. Automated entry management with detailed vehicle tracking and reporting.',
      gradient: 'from-green-600 to-teal-600',
    },
    {
      id: 5,
      name: 'Visitor Management System',
      description: 'Modern check-in solutions with digital registration and badge printing. Streamline visitor processing while maintaining security protocols.',
      gradient: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden py-20 min-h-screen">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming challenges into opportunities with cutting-edge AI, robotics, 
            and security solutions that drive efficiency, safety, and innovation across industries.
          </p>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          data-section="stats"
          className={`mb-32 transition-all duration-[900ms] ease-out ${
            isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Year Established */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {counts.years}
              </div>
              <div className="text-gray-400 text-lg">Year Established</div>
            </div>

            {/* Satisfied Clients */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {counts.clients}+
              </div>
              <div className="text-gray-400 text-lg">Satisfied Clients</div>
            </div>

            {/* Completed Projects */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                {counts.projects}+
              </div>
              <div className="text-gray-400 text-lg">Completed Projects</div>
            </div>
          </div>
        </div>

        {/* Products Alternating Layout */}
        <div
          ref={productsRef}
          data-section="products"
          className={`transition-all duration-[900ms] ease-out delay-200 ${
            isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Gradient Visual Block */}
                <div className="w-full md:w-1/2 relative">
                  <div className={`relative h-80 bg-gradient-to-br ${product.gradient} overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-8 right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    
                    {/* Product Number */}
                    <div className="absolute bottom-8 left-8">
                      <span className="text-8xl font-bold text-white/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Animated border lines */}
                    <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-600 to-indigo-600 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
                    <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-pink-600 to-indigo-600 group-hover:h-full transition-all duration-700 ease-out delay-150 z-20"></div>
                    <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-pink-600 to-indigo-600 group-hover:w-full transition-all duration-700 ease-out delay-300 z-20"></div>
                    <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-pink-600 to-indigo-600 group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20"></div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 pt-4">
                    <button className={`px-8 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl`}>
                      Learn More
                    </button>
                    <button className="px-8 py-3 bg-white/5 border border-gray-700 text-white font-semibold hover:bg-white/10 hover:border-gray-600 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;

