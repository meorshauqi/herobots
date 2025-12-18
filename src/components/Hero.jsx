import { useState, useEffect, useMemo, useRef } from 'react';
import './Hero.css';
import logo from '../assets/logo/logo.png';
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
    { name: "License Plate Recognition", image: lpr, description: "AI-powered vehicle tracking" },
    { name: "AI Security Surveillance", image: aiSecurity2, description: "Smart monitoring solutions" },
    { name: "PPE Detection", image: aiSecurity3, description: "Intelligent security systems" },
    { name: "People Counting", image: aiSecurity4, description: "Real-time detection" },
    { name: "Face Recognition", image: faceRecognition, description: "Biometric identification" },
    { name: "Fire & Smoke Detection", image: fireSmokeDetection, description: "Smart safety systems" },
    { name: "HeroJaga Mobile Security", image: heroJaga, description: "Next-gen mobile security app" },
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
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Medium circular glow - top area */}
        <div className="absolute top-20 right-32 w-80 h-80 bg-pink-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Small accent - middle left */}
        <div className="absolute top-1/3 left-32 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Rotating gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl hero-spin-slow" style={{
          background: 'conic-gradient(from 0deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1))'
        }}></div>
        
        {/* Diagonal beam effect - center */}
        <div className="absolute top-1/4 right-1/4 w-96 h-32 bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-pink-500/20 blur-2xl rotate-45 animate-pulse-slow"></div>
        <div className="container mx-auto px-6 py-20">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Text Content */}
            <div 
              data-section-id="hero-text"
              className="text-center space-y-6 px-4 relative"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-full animate-fadeInDown hero-glow-badge mb-2 sm:mb-3 md:mb-4" style={{ animationDelay: '0.05s', animationFillMode: 'both' }}>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono text-pink-400 uppercase tracking-wider">AI-Powered Solutions</span>
              </div>
              
              <h1 className="hero-gradient-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                <span className="block mb-4 sm:mb-5 md:mb-6 lg:mb-8 animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  Accelerating
                </span>
                <span className="block mb-3 sm:mb-4 md:mb-5 lg:mb-7 animate-fadeInDown" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  The Future With
                </span>
                <span className="block animate-fadeInDown" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                  Cutting-edge Solutions
                </span>
              </h1>            
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-fadeInUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                From concept to product, we make it happen
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
                <a 
                  href="/products"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Products
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Us
                </a>
              </div>
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
                    onClick={() => handleManualNavigation(activeIndex === 0 ? services.length - 1 : activeIndex - 1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-pink-500/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-110 z-20 group/btn"
                  >
                      <svg className="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                  </button>
                  <button 
                    onClick={() => handleManualNavigation(activeIndex === services.length - 1 ? 0 : activeIndex + 1)}
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
                    onClick={() => handleManualNavigation(index)}
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
            className={`relative overflow-hidden max-w-6xl mx-auto mt-20 transition-all duration-1000 ${
              visibleSections.has('client-logos')
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Section Title */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-pink-500"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Trusted By</span>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-500"></div>
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