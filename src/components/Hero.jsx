import { useState, useEffect } from 'react';
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
  const [visibleSections, setVisibleSections] = useState(new Set());

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
              className="text-center lg:text-left space-y-6"
            >
              <h1 className={`text-5xl lg:text-6xl font-medium bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent leading-tight transition-all duration-1000 ${
                visibleSections.has('hero-text')
                  ? 'opacity-100 translate-x-0 rotate-0'
                  : 'opacity-0 -translate-x-20 -rotate-3'
              }`}
              style={{ 
                transitionDelay: '0.1s',
                transformOrigin: 'left center'
              }}>
                <span className={`block mb-10 transition-all duration-700 ${
                  visibleSections.has('hero-text')
                    ? 'opacity-100 translate-y-0 blur-0'
                    : 'opacity-0 translate-y-8 blur-sm'
                }`}
                style={{ transitionDelay: '0.2s' }}>
                  Accelerating
                </span>
                <span className={`block mb-10 transition-all duration-700 ${
                  visibleSections.has('hero-text')
                    ? 'opacity-100 translate-y-0 blur-0'
                    : 'opacity-0 translate-y-8 blur-sm'
                }`}
                style={{ transitionDelay: '0.4s' }}>
                  The Future With
                </span>
                <span className={`block mb-16 transition-all duration-700 ${
                  visibleSections.has('hero-text')
                    ? 'opacity-100 translate-y-0 blur-0'
                    : 'opacity-0 translate-y-8 blur-sm'
                }`}
                style={{ transitionDelay: '0.6s' }}>
                  Cutting-edge Solutions
                </span>
              </h1>            
              <p className={`text-lg lg:text-xl text-gray-300 max-w-xl lg:mx-0 mx-auto transition-all duration-1000 ${
                visibleSections.has('hero-text')
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 -translate-x-12 scale-95'
              }`}
              style={{ transitionDelay: '0.8s' }}>
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
              {/* Main Featured Image Display */}
              <div className={`relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group transition-all duration-700 ${
                visibleSections.has('hero-showcase')
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-75'
              }`}
              style={{ transitionDelay: '0.5s' }}>
                <div className="relative aspect-[4/3]">
                  <img 
                    src={services[activeIndex].image} 
                    alt={services[activeIndex].name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-700 ${
                    visibleSections.has('hero-showcase')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '0.8s' }}>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">
                        {services[activeIndex].name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {services[activeIndex].description}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={() => setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  >
                    ‹
                  </button>
                  <button 
                    onClick={() => setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Thumbnail Grid Navigation */}
              <div className="grid grid-cols-7 gap-3">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative overflow-hidden rounded-lg aspect-square transition-all duration-500 ${
                      index === activeIndex 
                        ? 'ring-2 ring-pink-500 scale-110 shadow-lg shadow-pink-500/50 animate-pulse-ring' 
                        : 'ring-1 ring-white/20 hover:ring-white/40 hover:scale-105 opacity-60 hover:opacity-100'
                    } ${
                      visibleSections.has('hero-showcase')
                        ? 'opacity-100 translate-y-0 rotate-0'
                        : 'opacity-0 translate-y-12 -rotate-12'
                    }`}
                    style={{ 
                      transitionDelay: `${0.7 + (index * 0.1)}s`,
                      transformOrigin: 'bottom center'
                    }}
                  >
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Active indicator */}
                    {index === activeIndex && (
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Ambient Background Glow */}
              <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse-slow transition-all duration-1000 ${
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