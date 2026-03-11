import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import logo from '../assets/logo/logo.png';
import pbjv from '../assets/logo/pbjv.png';
import baxtech from '../assets/logo/baxtech.webp';
import newImage1 from '../assets/services/newImage-1.png';
import newImage2 from '../assets/services/newImage-2.png';
import newImage3 from '../assets/services/newImage-3.png';
import newImage4 from '../assets/services/newImage-4.png';
import newImage5 from '../assets/services/newImage-5.png';
import newImage6 from '../assets/services/newImage-6.png';
import newImage7 from '../assets/services/newImage-7.png';

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Initialize with hero sections ALREADY visible (fixes mobile Safari issue)
  const [visibleSections, setVisibleSections] = useState(new Set(['hero-text', 'hero-showcase']));
  const autoRotateIntervalRef = useRef(null);
  const isInitialMount = useRef(true);

  // Generate stable random positions for particles
  const particles = useMemo(() => 
    [...Array(25)].map((_, i) => ({
      id: i,
      left: `${(i * 4 + 2) % 100}%`,
      top: `${(i * 7 + 5) % 100}%`,
      delay: `${(i * 0.2) % 5}s`,
      duration: `${8 + (i % 8)}s`,
      size: i % 3 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1'
    })), []);

  const clients = [
    { name: "HeroBots", logo: logo },
    { name: "PBJV", logo: pbjv },
    { name: "Baxtech", logo: baxtech }
  ];

  const services = [
    { name: "AI Security Solutions", image: newImage1, description: "Advanced security technology" },
    { name: "Smart Surveillance", image: newImage2, description: "Intelligent monitoring systems" },
    { name: "AI-Powered Detection", image: newImage3, description: "Real-time threat detection" },
    { name: "Biometric Recognition", image: newImage4, description: "Secure identification" },
    { name: "Visitor Management", image: newImage5, description: "Smart access control" },
    { name: "Security Monitoring", image: newImage6, description: "24/7 surveillance" },
    { name: "Mobile Security", image: newImage7, description: "Advanced mobile solutions" },
  ];

  // Auto-rotate images every 3 seconds - start after initial delay
  useEffect(() => {
    // On initial mount, ensure first dot is active
    if (isInitialMount.current) {
      setActiveIndex(0);
      isInitialMount.current = false;
    }
    
    // Clear any existing intervals first
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
      autoRotateIntervalRef.current = null;
    }
    
    // Start auto-rotate after 3 seconds delay (so first service shows for 3 seconds)
    const startDelay = setTimeout(() => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
      autoRotateIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      }, 3000);
    }, 3000);

    return () => {
      clearTimeout(startDelay);
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
    };
  }, [services.length]);

  // Handle manual navigation - pause auto-rotate and restart after delay
  const handleManualNavigation = (index) => {
    // Clear auto-rotate
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
      autoRotateIntervalRef.current = null;
    }
    
    // Set the active index
    setActiveIndex(index);
    
    // Restart auto-rotate after 5 seconds
    setTimeout(() => {
      autoRotateIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
      }, 3000);
    }, 5000);
  };

  // No longer needed - hero sections are visible by default!

  // Scroll-triggered animations using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              setVisibleSections((prev) => new Set([...prev, sectionId]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  
    return (
        <main className="relative flex-grow bg-black overflow-hidden">    
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 hero-grid-animation" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute ${particle.size} rounded-full hero-particle ${
                particle.id % 3 === 0 ? 'bg-pink-400/60' : 
                particle.id % 3 === 1 ? 'bg-purple-400/60' : 'bg-indigo-400/60'
              }`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        {/* Tech Lines */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-transparent via-pink-500/30 to-transparent"></div>

        {/* Large circular glow - bottom area */}
        <div className="absolute bottom-10 left-4 md:left-20 w-48 md:w-96 h-48 md:h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Medium circular glow - top area */}
        <div className="absolute top-20 right-4 md:right-32 w-40 md:w-80 h-40 md:h-80 bg-pink-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Small accent - middle left */}
        <div className="absolute top-1/3 left-4 md:left-32 w-32 md:w-64 h-32 md:h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Rotating gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full blur-3xl hero-spin-slow" style={{
          background: 'conic-gradient(from 0deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))'
        }}></div>
        
        {/* Diagonal beam effect - center */}
        <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-16 md:h-32 bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-pink-500/20 blur-2xl rotate-45 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Left Column - Text Content */}
            <div 
              data-section-id="hero-text"
              className="text-center sm:text-left space-y-4 sm:space-y-6 px-2 sm:px-4 relative"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-full animate-fadeInDown hero-glow-badge mb-2 sm:mb-3 md:mb-4" style={{ animationDelay: '0.05s', animationFillMode: 'both' }}>
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-pink-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-mono text-pink-400 uppercase tracking-wider">AI-Powered Solutions</span>
              </div>
              
              <h1 className="hero-gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-center sm:text-left">
                <span className="block mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  Accelerating
                </span>
                <span className="block mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-7 animate-fadeInDown" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  The Future With
                </span>
                <span className="block mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-7 animate-fadeInDown" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  Cutting-edge
                </span>
                <span className="block animate-fadeInDown" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                  Solutions
                </span>
              </h1>            
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-fadeInUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                From concept to product, we make it happen
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-4 justify-start animate-fadeInUp" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
                <Link 
                  to="/products"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Products
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  to="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Column - Modern Feature Showcase */}
            <div 
              data-section-id="hero-showcase"
              className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:ml-auto space-y-4 sm:space-y-6 transition-all duration-1000 ${
                visibleSections.has('hero-showcase')
                  ? 'opacity-100 translate-x-0 rotate-0 scale-100'
                  : 'opacity-0 translate-x-12 sm:translate-x-24 rotate-3 sm:rotate-6 scale-90'
              }`}
              style={{ 
                transitionDelay: '0.3s',
                transformOrigin: 'center',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Main Featured Image Display - Clean Image Only */}
              <div className={`relative transition-all duration-700 ${
                visibleSections.has('hero-showcase')
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: '0.5s' }}>
                {/* Outer Glow Effect */}
                {/* <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-indigo-500/20 rounded-3xl blur-2xl animate-pulse-glow -z-10"></div> */}

                {/* Main Image Container - Image Only, No Text, No Borders */}
                <div className="relative group flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                  <div className="relative w-full flex items-center justify-center">
                    <img 
                      src={services[activeIndex].image} 
                      alt={services[activeIndex].name}
                      className="w-auto h-auto max-w-full sm:max-w-sm md:max-w-md max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain transition-all duration-500 group-hover:scale-105"
                      style={{ imageRendering: 'high-quality' }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Tech Elements */}
              <div className="absolute -top-4 sm:-top-6 right-4 sm:right-10 w-2 sm:w-3 h-2 sm:h-3 bg-pink-400/60 rounded-full animate-ping"></div>
              <div className="absolute top-16 sm:top-20 -right-2 sm:-right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute bottom-16 sm:bottom-20 -left-2 sm:-left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-indigo-400/60 rounded-full animate-ping" style={{ animationDelay: '1.4s' }}></div>

              {/* Ambient Background Glow */}
              <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-r from-pink-500/15 via-purple-500/20 to-indigo-500/15 rounded-full blur-3xl animate-pulse-slow transition-all duration-1000 ${
                visibleSections.has('hero-showcase')
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: '1s' }}></div>
            </div>
          </div>

          {/* Client Logos Section */}
          <div 
            data-section-id="client-logos"
            className={`relative overflow-hidden max-w-6xl mx-auto mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 ${
              visibleSections.has('client-logos')
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Section Title */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full">
                <div className="w-4 sm:w-8 h-0.5 bg-gradient-to-r from-transparent to-pink-500"></div>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-medium">Trusted By</span>
                <div className="w-4 sm:w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
              </div>
            </div>

            {/* Infinite Scrolling Logos */}
            <div className="relative">
              {/* Gradient overlays for fade effect - Narrower on mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
              
              {/* Scrolling container */}
              <div className="flex items-center animate-scroll">
                {/* First set of logos */}
                {clients.map((client, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-4 md:mx-12 h-16 md:h-24 flex items-center justify-center group"
                  >
                    <div className="relative">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                        className={`${client.name === "HeroBots" ? "h-16 md:h-24" : "h-12 md:h-16"} w-auto object-contain filter grayscale brightness-0 invert opacity-70 md:opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`}
                    />
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 mx-4 md:mx-12 h-16 md:h-24 flex items-center justify-center group"
                  >
                    <div className="relative">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                        className={`${client.name === "HeroBots" ? "h-16 md:h-24" : "h-12 md:h-16"} w-auto object-contain filter grayscale brightness-0 invert opacity-70 md:opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`}
                    />
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Hero;