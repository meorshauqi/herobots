import { useState } from 'react';

function Showcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      id: 1,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to transform your business operations and unlock new possibilities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 2,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure designed to grow with your business and ensure seamless operations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Web Development",
      description: "Cutting-edge web applications built with modern frameworks and best practices for optimal performance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-pink-600 to-indigo-600"
    },
    {
      id: 4,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences on any device.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-indigo-600 via-purple-600 to-pink-600"
    },
    {
      id: 5,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: 6,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your digital assets and ensure data integrity.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-pink-600 to-purple-600"
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
    <section className="relative bg-black overflow-hidden py-20">
      {/* Background blur effects matching Hero */}
      {/* <div className="absolute bottom-0 left-0 w-80 h-36 bg-purple-600/30 blur-3xl"></div>
      <div className="absolute top-28 right-0 w-80 h-36 bg-pink-600/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-3xl"></div> */}
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering businesses with innovative technology solutions
          </p>
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
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="min-w-full px-4"
                  >
                    <div className="group relative">
                      {/* Card */}
                      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full transition-all duration-500 group-hover:border-transparent">
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
                {services.map((service, index) => (
                  <div
                    key={`img-${service.id}`}
                    className="min-w-full px-4"
                  >
                    {/* Image Container with Gradient Border */}
                    <div className="group relative">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} blur opacity-30 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      
                      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 aspect-square flex items-center justify-center overflow-hidden">
                        {/* Placeholder for images - you can replace with actual images */}
                        <div className={`w-full h-full bg-gradient-to-br ${service.gradient} opacity-20 flex items-center justify-center`}>
                          <div className="text-white text-6xl opacity-50">
                            {service.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls - Centered Below */}
        <div className="max-w-4xl mx-auto mt-8">
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

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3">
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
        </div>
      </div>
    </section>
  );
}

export default Showcase;

