import { useState } from 'react';
import smartPatrolling from '../assets/services/smart-patrolling.png';
import licensePlate from '../assets/services/license-plate-recognition.png';
import visitorManagement from '../assets/services/visitor-management-system.png';
import aiSecurity from '../assets/services/ai-security-serveillance.png';
import onnsites from '../assets/services/onnsites.png';
import softwareDev from '../assets/services/software-development.webp';
import webApp from '../assets/services/web-app.jpg';
import mobileApp from '../assets/services/mobile-app.webp';
import aiIntegration from '../assets/services/ai-integration.jpg';

function Showcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      id: 1,
      title: "AI Security Surveillance",
      description: "Smart AI security monitoring real-time analytics, automated alerts, and seamless system integration.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-indigo-600 to-purple-600",
      image: aiSecurity
    },
    {
      id: 2,
      title: "Workforce Management System",
      description: "platform that helps companies manage their employees more efficiently by automating tasks such as attendance tracking, shift scheduling, leave management, and performance monitoring, while also providing real-time insights to improve overall productivity",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      gradient: "from-purple-600 to-pink-600",
      image: onnsites
    },
    {
      id: 3,
      title: "Smart Patrolling",
      description: "Intelligent patrolling with live monitoring, instant incident reporting, and seamless system integration.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-pink-600 to-indigo-600",
      image: smartPatrolling
    },
    {
      id: 4,
      title: "License Plate Recognition",
      description: "Streamline vehicle entry with intelligent plate recognition precise detection, instant verification, and unified system integration.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      image: licensePlate
    },
    {
      id: 5,
      title: "Visitor Management System",
      description: "Simplify visitor operations with our all-in-one web-based system secure, efficient, and fully integrated, from registration and reservations to visitor statistics and access control",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-purple-600 to-indigo-600",
      image: visitorManagement
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-black overflow-hidden pt-20 pb-10">
      {/* Background blur effects matching Hero */}
      {/* Large circular glow - top area */}
      <div className="absolute top-20 right-32 w-96 h-96 bg-pink-600/40 rounded-full blur-3xl"></div>
      
      {/* Small accent - middle right */}
      <div className="absolute top-1/2 right-32 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div>
      
      <div className="absolute top-3/4 left-36 w-64 h-64 bg-pink-600/30 rounded-full blur-3xl"></div>
      
      {/* Diagonal beam effect - center */}
      <div className="absolute top-1/3 left-1/4 w-96 h-32 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-indigo-500/20 blur-2xl -rotate-45"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}

        <div className="relative mb-16 pl-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Large Mission Text with Gradient on Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Transforming Businesses Through
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pt-12">
                  Innovation & Technology
                </span>
              </h2>
            </div>
            
            {/* Mission Description on Right */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            We deliver cutting-edge solutions tailored to your business needs. From AI-powered systems to cloud infrastructure, 
            our comprehensive services drive digital transformation and operational excellence.
          </p>
          </div>
        </div>

        <div className="text-center mb-16 max-w-4xl mx-auto">
          
        </div>

        {/* Two Column Layout - Carousel Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Service Information Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="min-w-full px-4"
                  >
                    <div className="group relative">
                      {/* Card */}
                      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-[320px] flex flex-col justify-center transition-all duration-500 group-hover:border-transparent">
                        {/* Animated border lines - Top */}
                        <div className={`absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-700 ease-out`}></div>
                        
                        {/* Animated border lines - Right */}
                        <div className={`absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b ${service.gradient} group-hover:h-full transition-all duration-700 ease-out delay-150`}></div>
                        
                        {/* Animated border lines - Bottom */}
                        <div className={`absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l ${service.gradient} group-hover:w-full transition-all duration-700 ease-out delay-300`}></div>
                        
                        {/* Animated border lines - Left */}
                        <div className={`absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t ${service.gradient} group-hover:h-full transition-all duration-700 ease-out delay-[450ms]`}></div>
                        
                        {/* Icon Container */}
                        <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
                          <div className="text-white">
                            {service.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                          {service.description}
                        </p>

                        {/* Hover Arrow Indicator */}
                        <div className="mt-6 flex items-center text-transparent group-hover:text-purple-400 transition-all duration-500">
                          <span className="text-sm font-semibold mr-2">Learn More</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service) => (
                  <div
                    key={`img-${service.id}`}
                    className="min-w-full px-4"
                  >
                    {/* Image Container with Gradient Border */}
                    <div className="group relative">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} blur opacity-30 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      
                      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 h-[320px] flex items-center justify-center overflow-hidden">
                        {/* Service Images */}
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Centered Below */}
        <div className="max-w-4xl mx-auto mt-12 mb-20">

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 pb-12">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-10 h-3 bg-gradient-to-r from-indigo-600 to-pink-600'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
  );
}

export default Showcase;

