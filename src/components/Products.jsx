import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
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
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                <div className="group cursor-pointer text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    SECURE
                  </div>
                  <p className="text-gray-400 text-xs sm:text-[10px] uppercase tracking-widest">Surveillance & Access</p>
                </div>

                <div className="group cursor-pointer text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    SMART
                  </div>
                  <p className="text-gray-400 text-xs sm:text-[10px] uppercase tracking-widest">AI-Powered</p>
                </div>

                <div className="group cursor-pointer text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    STREAM
                  </div>
                  <p className="text-gray-400 text-xs sm:text-[10px] uppercase tracking-widest">Workflow Management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Scrollable Products */}
          <div 
            className="h-[600px] overflow-y-auto space-y-4 hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ${
                  isVisible.products ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
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
                  
                  <Link 
                    to="/products"
                    className={`inline-block px-8 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl`}
                  >
                    Learn More
                  </Link>
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

        {/* Why Choose Us - Alternating Layout */}
        <div className="space-y-32 mb-32">
          {/* Section 1 - Innovation First */}
          <div className="group flex flex-col md:flex-row gap-12 items-center">
            {/* Content Block - Left */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-4">
                <span className="text-indigo-400 text-sm font-semibold">Innovation Driven</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                Cutting-Edge Technology
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                We leverage the latest in AI, robotics, and automation to deliver solutions that don't just meet today's needs—they anticipate tomorrow's challenges. Stay ahead of the curve with technology built for the future.
              </p>
              <ul className="space-y-3">
                {['AI-Powered Analytics', 'Real-time Monitoring', 'Cloud Integration', 'Scalable Architecture'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-6 h-6 text-indigo-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Block - Right */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-80 bg-gradient-to-br from-indigo-600 to-purple-600 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {/* Animated border lines */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
                <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-indigo-400 to-purple-400 group-hover:h-full transition-all duration-700 ease-out delay-150 z-20"></div>
                <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-700 ease-out delay-300 z-20"></div>
                <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-indigo-400 to-purple-400 group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20"></div>
                
                {/* Animated grid pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                  }}></div>
                </div>
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-purple-500/40 to-pink-500/40 mix-blend-overlay"></div>
                
                {/* Floating elements */}
                <div className="absolute top-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Animated particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
                
                {/* Main icon with animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="relative">
                      <svg className="w-32 h-32 text-white/40 mx-auto mb-4 group-hover:text-white/60 transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 7H7v6h6V7z" />
                        <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                      </svg>
                      {/* Rotating ring around icon */}
                      <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                    </div>
                    <span className="text-3xl font-bold text-white/70 group-hover:text-white transition-colors duration-500">AI & Innovation</span>
                  </div>
                </div>
                
                {/* Number badge */}
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="text-7xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-500">01</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - 24/7 Support */}
          <div className="group flex flex-col md:flex-row-reverse gap-12 items-center">
            {/* Content Block - Right */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
                <span className="text-purple-400 text-sm font-semibold">Always Available</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                Dedicated Support Team
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Your success is our priority. Our expert support team is available 24/7 to ensure your operations run smoothly. From implementation to ongoing maintenance, we're with you every step of the way.
              </p>
              <ul className="space-y-3">
                {['24/7 Technical Support', 'Rapid Response Time', 'Expert Consultation', 'Regular Updates'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-6 h-6 text-purple-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Block - Left */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-80 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {/* Animated border lines */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
                <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-purple-400 to-pink-400 group-hover:h-full transition-all duration-700 ease-out delay-150 z-20"></div>
                <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-purple-400 to-pink-400 group-hover:w-full transition-all duration-700 ease-out delay-300 z-20"></div>
                <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-purple-400 to-pink-400 group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20"></div>
                
                {/* Hexagon pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
                        <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                  </svg>
                </div>
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/40 via-pink-500/40 to-indigo-500/40 mix-blend-overlay"></div>
                
                {/* Floating orbs */}
                <div className="absolute top-8 right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Animated dots */}
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-bounce opacity-75"></div>
                <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce opacity-75" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-white rounded-full animate-bounce opacity-75" style={{ animationDelay: '0.6s' }}></div>
                
                {/* Main icon with pulse effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="relative">
                      {/* Pulsing rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 border-2 border-white/20 rounded-full animate-ping"></div>
                      </div>
                      <svg className="w-32 h-32 text-white/40 mx-auto mb-4 relative z-10 group-hover:text-white/60 transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-3xl font-bold text-white/70 group-hover:text-white transition-colors duration-500">24/7 Support</span>
                  </div>
                </div>
                
                {/* Number badge */}
                <div className="absolute bottom-6 right-6 z-10">
                  <span className="text-7xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-500">02</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Proven Track Record */}
          <div className="group flex flex-col md:flex-row gap-12 items-center">
            {/* Content Block - Left */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4">
                <span className="text-pink-400 text-sm font-semibold">Trusted by Leaders</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-500">
                Proven Excellence
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Join industry leaders who trust HeroBots to power their operations. Our proven track record speaks for itself—delivering results that matter and partnerships that last.
              </p>
              <ul className="space-y-3">
                {['Industry-Leading Solutions', '98% Client Satisfaction', 'Award-Winning Products', 'Certified Excellence'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-6 h-6 text-pink-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Block - Right */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-80 bg-gradient-to-br from-pink-600 to-red-600 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {/* Animated border lines */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-red-400 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
                <div className="absolute top-0 right-0 w-1 h-0 bg-gradient-to-b from-pink-400 to-red-400 group-hover:h-full transition-all duration-700 ease-out delay-150 z-20"></div>
                <div className="absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l from-pink-400 to-red-400 group-hover:w-full transition-all duration-700 ease-out delay-300 z-20"></div>
                <div className="absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t from-pink-400 to-red-400 group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20"></div>
                
                {/* Diamond pattern */}
                <div className="absolute inset-0 opacity-15">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="diamonds" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 20,0 L 40,20 L 20,40 L 0,20 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diamonds)" />
                  </svg>
                </div>
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-red-500/40 to-orange-500/40 mix-blend-overlay"></div>
                
                {/* Floating elements with different animations */}
                <div className="absolute top-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-8 right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Sparkle effects */}
                <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1.4s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '2.1s' }}></div>
                
                {/* Trophy/Star icon with glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                    <div className="relative">
                      {/* Glowing halo effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl group-hover:bg-yellow-400/30 transition-colors duration-500"></div>
                      </div>
                      <svg className="w-32 h-32 text-yellow-300/60 mx-auto mb-4 relative z-10 group-hover:text-yellow-200/80 transition-colors duration-500 drop-shadow-[0_0_15px_rgba(253,224,71,0.5)]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {/* Orbiting particles */}
                      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                        <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    </div>
                    <span className="text-3xl font-bold text-white/70 group-hover:text-white transition-colors duration-500">Excellence</span>
                  </div>
                </div>
                
                {/* Number badge */}
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="text-7xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-500">03</span>
                </div>
              </div>
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
            <Link to="/services" className="lg:col-span-2 group relative overflow-hidden h-56 cursor-pointer block">
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
            </Link>

            {/* Web App */}
            <Link to="/services" className="group relative overflow-hidden h-56 cursor-pointer block">
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
            </Link>

            {/* Mobile App */}
            <Link to="/services" className="group relative overflow-hidden h-56 cursor-pointer block">
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
            </Link>

            {/* AI Integration - Spans 2 columns on large screens */}
            <Link to="/services" className="lg:col-span-2 group relative overflow-hidden h-56 cursor-pointer block">
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
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Products;

