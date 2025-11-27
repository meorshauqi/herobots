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

  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleProduct = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

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
    <section className="relative bg-black text-white overflow-hidden pt-20 pb-2 min-h-screen">
      {/* Background effects */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-pink-500/20 blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rotate-45"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Two Column Layout */}
        <div
          ref={productsRef}
          data-section="products"
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-all duration-[900ms] ease-out delay-200 ${
            isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:sticky lg:top-9 ">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Our
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                Products & Solutions
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Transforming challenges into opportunities with cutting-edge AI, robotics, 
              and security solutions that drive efficiency, safety, and innovation across industries.
            </p>

            {/* Built for the Future Section */}
            <div className="pt-8">
              <div className="mb-8">
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Built for the Future
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    SECURE
                  </div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest">Surveillance & Access</p>
                </div>

                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    SMART
                  </div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest">AI-Powered</p>
                </div>

                <div className="group cursor-pointer">
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    STREAM
                  </div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest">Workflow Management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Products Accordion */}
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => toggleProduct(product.id)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                {/* Animated border lines */}
                <div className={`absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r ${product.gradient} group-hover:w-full transition-all duration-700 ease-out`}></div>
                <div className={`absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b ${product.gradient} group-hover:h-full transition-all duration-700 ease-out delay-150`}></div>
                <div className={`absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l ${product.gradient} group-hover:w-full transition-all duration-700 ease-out delay-300`}></div>
                <div className={`absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t ${product.gradient} group-hover:h-full transition-all duration-700 ease-out delay-[450ms]`}></div>

                {/* Product Header - Fully Clickable */}
                <div className="w-full p-6 flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {product.name}
                  </h3>
                  
                  {/* Plus/Minus Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300 ${expandedProduct === product.id ? 'rotate-45' : ''}`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedProduct === product.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 space-y-4">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {product.description}
                    </p>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add your learn more logic here
                      }}
                      className={`px-8 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl`}
                    >
                      Learn More
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

