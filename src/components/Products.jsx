import { useEffect, useRef, useState } from 'react';
import softwareDev from '../assets/services/software-development.webp';
import webApp from '../assets/services/web-app.jpg';
import mobileApp from '../assets/services/mobile-app.webp';
import aiIntegration from '../assets/services/ai-integration.jpg';

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

  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

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

  // Scroll hijacking - lock section until right column fully scrolled
  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current || !scrollContainerRef.current) return;

      const section = sectionRef.current;
      const scrollContainer = scrollContainerRef.current;
      const rect = section.getBoundingClientRect();
      
      // Check if section is in viewport
      const sectionIsActive = rect.top <= 50 && rect.bottom >= window.innerHeight * 0.3;
      
      if (sectionIsActive) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        const isAtTop = scrollTop <= 1;
        const isAtBottom = scrollTop >= scrollHeight - clientHeight - 1;
        
        // Hijack scroll when not at boundaries
        if (e.deltaY > 0 && !isAtBottom) {
          e.preventDefault();
          scrollContainer.scrollTop += e.deltaY;
        } else if (e.deltaY < 0 && !isAtTop) {
          e.preventDefault();
          scrollContainer.scrollTop += e.deltaY;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

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
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <section ref={sectionRef} className="relative bg-black text-white overflow-hidden pt-20 pb-2 min-h-screen">
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

          {/* Right Side - Scrollable Products */}
          <div 
            ref={scrollContainerRef}
            className="h-[600px] overflow-y-auto space-y-4 hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Animated border lines */}
                <div className={`absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r ${product.gradient} group-hover:w-full transition-all duration-700 ease-out`}></div>
                <div className={`absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b ${product.gradient} group-hover:h-full transition-all duration-700 ease-out delay-150`}></div>
                <div className={`absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l ${product.gradient} group-hover:w-full transition-all duration-700 ease-out delay-300`}></div>
                <div className={`absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t ${product.gradient} group-hover:h-full transition-all duration-700 ease-out delay-[450ms]`}></div>

                {/* Product Content - Always Visible */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {product.description}
                  </p>
                  
                  <button 
                    className={`px-8 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          data-section="stats"
          className={`pt-28 mb-32 transition-all duration-[900ms] ease-out ${
            isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Year Established */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {counts.years}
              </div>
              <div className="text-gray-400 text-lg">Year Established</div>
            </div>

            {/* Satisfied Clients */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {counts.clients}+
              </div>
              <div className="text-gray-400 text-lg">Satisfied Clients</div>
            </div>

            {/* Completed Projects */}
            <div className="bg-white/5 backdrop-blur-sm border border-gray-700/50 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                {counts.projects}+
              </div>
              <div className="text-gray-400 text-lg">Completed Projects</div>
            </div>
          </div>
        </div>

        {/* Solutions Grid Section */}
        <div className="relative mt-32 mb-16">
          {/* Background blur effects for Solutions Grid */}
          {/* <div className="absolute -top-20 left-32 w-96 h-96 bg-indigo-600/40 rounded-full blur-3xl"></div>*/}
          <div className="absolute top-0 right-10 w-80 h-80 bg-pink-600/40 rounded-full blur-3xl"></div>
          {/* <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-32 bg-gradient-to-r from-indigo-500/20 via-pink-500/30 to-purple-500/20 blur-2xl rotate-45"></div> */}
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {/* Software Development - Spans 2 columns on large screens */}
            <div className="lg:col-span-2 group relative overflow-hidden h-56 cursor-pointer">
              {/* Animated border lines */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
              <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-purple-600 to-pink-600 group-hover:h-full transition-all duration-700 ease-out delay-150 z-20"></div>
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-purple-600 to-pink-600 group-hover:w-full transition-all duration-700 ease-out delay-300 z-20"></div>
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-purple-600 to-pink-600 group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20"></div>
              
              <img 
                src={softwareDev} 
                alt="Software Development"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Software Development</h3>
                <p className="text-sm text-gray-200">Custom enterprise solutions and scalable applications</p>
              </div>
            </div>

            {/* Web App */}
            <div className="group relative overflow-hidden h-56 cursor-pointer">
              {/* Animated border lines */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
              <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-purple-600 to-pink-600 group-hover:h-full transition-all duration-700 ease-out delay-150 z-20"></div>
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-purple-600 to-pink-600 group-hover:w-full transition-all duration-700 ease-out delay-300 z-20"></div>
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-purple-600 to-pink-600 group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20"></div>
              
              <img 
                src={webApp} 
                alt="Web Applications"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Web Applications</h3>
                <p className="text-sm text-gray-200">Modern responsive web platforms</p>
              </div>
            </div>

            {/* Mobile App */}
            <div className="group relative overflow-hidden h-56 cursor-pointer">
              {/* Animated border lines */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-600 to-indigo-600 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
              <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-pink-600 to-indigo-600 group-hover:h-full transition-all duration-700 ease-out delay-150 z-20"></div>
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-pink-600 to-indigo-600 group-hover:w-full transition-all duration-700 ease-out delay-300 z-20"></div>
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-pink-600 to-indigo-600 group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20"></div>
              
              <img 
                src={mobileApp} 
                alt="Mobile Applications"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Mobile Applications</h3>
                <p className="text-sm text-gray-200">iOS and Android app development</p>
              </div>
            </div>

            {/* AI Integration - Spans 2 columns on large screens */}
            <div className="lg:col-span-2 group relative overflow-hidden h-56 cursor-pointer">
              {/* Animated border lines */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
              <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 group-hover:h-full transition-all duration-700 ease-out delay-150 z-20"></div>
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-600 group-hover:w-full transition-all duration-700 ease-out delay-300 z-20"></div>
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-indigo-600 via-purple-600 to-pink-600 group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20"></div>
              
              <img 
                src={aiIntegration} 
                alt="AI Integration"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">AI Integration</h3>
                <p className="text-sm text-gray-200">Intelligent automation and machine learning solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Products;

