import { useState, useEffect } from 'react';
import './Hero.css';
import logo from '../assets/logo/logo.png';
import prasarana from '../assets/logo/prasarana.png';
import pbjv from '../assets/logo/pbjv.png';
import baxtech from '../assets/logo/baxtech.webp';
import aiSecurity2 from '../assets/services/ai-security-serveillance-2.png';
import aiSecurity3 from '../assets/services/ai-security-serveillance-3.png';
import aiSecurity4 from '../assets/services/ai-security-serveillance-4.png';
import faceRecognition from '../assets/services/face-recognition.png';
import fireSmokeDetection from '../assets/services/Fire-Smoke-Detection.png';
import heroJaga from '../assets/services/HeroJaga.png';
import lpr from '../assets/services/LPR.png';

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Initialize with hero sections ALREADY visible (fixes mobile Safari issue)
  const [visibleSections, setVisibleSections] = useState(new Set(['hero-text', 'hero-showcase']));

  const clients = [
    { name: "HeroBots", logo: logo },
    { name: "Prasarana", logo: prasarana },
    { name: "PBJV", logo: pbjv },
    { name: "Baxtech", logo: baxtech }
  ];

  const services = [
    { name: "License Plate Recognition", image: lpr, description: "AI-powered vehicle tracking" },
    { name: "AI Security Surveillance", image: aiSecurity2, description: "Smart monitoring solutions" },
    { name: "PPE Detection", image: aiSecurity3, description: "Intelligent security systems" },
    { name: "People Counting", image: aiSecurity4, description: "Real-time detection" },
    { name: "Face Recognition", image: faceRecognition, description: "Biometric identification" },
    { name: "Fire & Smoke Detection", image: fireSmokeDetection, description: "Smart safety systems" },
    { name: "HeroJaga Mobile Security", image: heroJaga, description: "Next-gen mobile security app" },
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

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
        {/* Large circular glow - bottom area */}
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-600/40 rounded-full blur-3xl"></div>
        
        {/* Medium circular glow - top area */}
        <div className="absolute top-20 right-32 w-80 h-80 bg-pink-600/40 rounded-full blur-3xl"></div>
        
        {/* Small accent - middle left */}
        <div className="absolute top-1/3 left-32 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div>
        
        {/* Diagonal beam effect - center */}
        <div className="absolute top-1/4 right-1/4 w-96 h-32 bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-pink-500/20 blur-2xl rotate-45"></div>
        <div className="container mx-auto px-6 py-20">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Text Content */}
            <div 
              data-section-id="hero-text"
              className="text-center lg:text-left space-y-6 px-4 lg:px-0"
            >
              <h1 className="hero-gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                <span className="block mb-4 sm:mb-6 md:mb-8 lg:mb-10 animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  Accelerating
                </span>
                <span className="block mb-4 sm:mb-6 md:mb-8 lg:mb-10 animate-fadeInDown" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  The Future With
                </span>
                <span className="block mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fadeInDown" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                  Cutting-edge Solutions
                </span>
              </h1>            
              <p className="text-lg lg:text-xl text-gray-300 max-w-xl lg:mx-0 mx-auto animate-fadeInUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                From concept to product, we make it happen
              </p>
            </div>

            {/* Right Column - Modern Feature Showcase */}
            <div 
              data-section-id="hero-showcase"
              className={`relative w-full max-w-xl ml-auto space-y-6 transition-all duration-1000 ${
                visibleSections.has('hero-showcase')
                  ? 'opacity-100 translate-x-0 rotate-0 scale-100'
                  : 'opacity-0 translate-x-24 rotate-6 scale-90'
              }`}
              style={{ 
                transitionDelay: '0.3s',
                transformOrigin: 'right center',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Main Featured Image Display with HUD Design */}
              <div className={`relative transition-all duration-700 ${
                visibleSections.has('hero-showcase')
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: '0.5s' }}>
                {/* Outer Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-indigo-500/20 rounded-3xl blur-2xl animate-pulse-glow -z-10"></div>
                
                {/* HUD Corner Brackets */}
                <div className="absolute -top-3 -left-3 w-12 h-12 z-30">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-pink-500 to-transparent"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-pink-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="absolute -top-3 -right-3 w-12 h-12 z-30">
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                </div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 z-30">
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-indigo-500 to-transparent"></div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 z-30">
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-pink-500 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-pink-500 to-transparent"></div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 group">
                  {/* Scanning Line Effect */}
                  <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                    <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent hero-scan-line"></div>
                  </div>
                  
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}></div>

                  <div className="relative aspect-[4/3]">
                    <img 
                      src={services[activeIndex].image} 
                      alt={services[activeIndex].name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-purple-500/10"></div>
                    
                    {/* Now Viewing Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-pink-500/50 z-20">
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-pink-400 uppercase tracking-wider">Now Viewing</span>
                    </div>
                    
                    {/* Index Counter */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-20">
                      <span className="text-xs font-mono text-white">
                        <span className="text-pink-400">{String(activeIndex + 1).padStart(2, '0')}</span>
                        <span className="text-gray-500"> / </span>
                        <span className="text-gray-400">{String(services.length).padStart(2, '0')}</span>
                      </span>
                    </div>
                    
                    {/* Content Overlay - Enhanced */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-700 z-20 ${
                      visibleSections.has('hero-showcase')
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '0.8s' }}>                      
                      <div className="flex items-end justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white">
                              {services[activeIndex].name}
                            </h3>
                          </div>
                          <p className="text-gray-300 text-sm pl-10">
                            {services[activeIndex].description}
                          </p>
                        </div>
                        
                        {/* Tech Badge */}
                        <div className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                          <svg className="w-3 h-3 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-gray-300">AI Powered</span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Arrows - Enhanced */}
                    <button 
                      onClick={() => setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-pink-500/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-110 z-20 group/btn"
                    >
                      <svg className="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-pink-500/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-110 z-20 group/btn"
                    >
                      <svg className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Thumbnail Grid Navigation - Enhanced */}
              <div className="grid grid-cols-7 gap-2 px-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative overflow-hidden rounded-xl aspect-square transition-all duration-500 group/thumb ${
                      index === activeIndex 
                        ? 'ring-2 ring-pink-500 scale-110 shadow-lg shadow-pink-500/30' 
                        : 'ring-1 ring-white/10 hover:ring-pink-500/50 hover:scale-105 opacity-50 hover:opacity-100'
                    } ${
                      visibleSections.has('hero-showcase')
                        ? 'opacity-100 translate-y-0 rotate-0'
                        : 'opacity-0 translate-y-12 -rotate-12'
                    }`}
                    style={{ 
                      transitionDelay: `${0.7 + (index * 0.08)}s`,
                      transformOrigin: 'bottom center'
                    }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                    />
                    {/* Active indicator with animated border */}
                    {index === activeIndex && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
                      </>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-1">
                      <span className="text-[8px] font-mono text-white/80 truncate px-1">{service.name.split(' ')[0]}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Floating Tech Elements */}
              <div className="absolute -top-6 right-10 w-3 h-3 bg-pink-400/60 rounded-full animate-ping"></div>
              <div className="absolute top-20 -right-4 w-2 h-2 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute bottom-20 -left-4 w-2 h-2 bg-indigo-400/60 rounded-full animate-ping" style={{ animationDelay: '1.4s' }}></div>

              {/* Ambient Background Glow */}
              <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/15 via-purple-500/20 to-indigo-500/15 rounded-full blur-3xl animate-pulse-slow transition-all duration-1000 ${
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
            className={`relative overflow-hidden max-w-6xl mx-auto mt-16 transition-all duration-1000 ${
              visibleSections.has('client-logos')
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Infinite Scrolling Logos */}
            <div className="relative">
              {/* Gradient overlays for fade effect */}
              {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div> */}
              
              {/* Scrolling container */}
              <div className="flex items-center animate-scroll">
                {/* First set of logos */}
                {clients.map((client, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-12 h-24 flex items-center justify-center"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className={`${client.name === "HeroBots" ? "h-24" : "h-16"} w-auto object-contain filter grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 mx-12 h-24 flex items-center justify-center"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className={`${client.name === "HeroBots" ? "h-24" : "h-16"} w-auto object-contain filter grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300`}
                    />
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