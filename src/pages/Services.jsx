import { useEffect, useRef, useState } from 'react';

function Services() {
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  
  const [isVisible, setIsVisible] = useState({
    services: false,
    stats: false,
  });

  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
  });

  const services = [
    {
      id: 1,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. We build scalable, robust applications that drive efficiency and innovation.",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 2,
      title: "Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies. From single-page apps to complex enterprise solutions.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android. Delivering exceptional user experiences on any device.",
      gradient: "from-pink-600 to-indigo-600"
    },
    {
      id: 4,
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and transform your business operations.",
      gradient: "from-indigo-600 via-purple-600 to-pink-600"
    }
  ];

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

    const targets = [servicesRef.current, statsRef.current];
    targets.forEach(target => target && observer.observe(target));

    return () => observer.disconnect();
  }, []);

  // Animate numbers when stats become visible
  useEffect(() => {
    if (isVisible.stats) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      const targets = {
        projects: 500,
        clients: 150,
        satisfaction: 98,
      };
      
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
        });
        
        if (currentStep >= steps) {
          setCounts(targets);
          clearInterval(timer);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [isVisible.stats]);

  return (
    <section className="relative bg-black text-white overflow-hidden py-20 min-h-screen">
      {/* Background blur effects */}
      <div className="absolute bottom-0 left-0 w-80 h-36 bg-purple-600/30 blur-3xl"></div>
      <div className="absolute top-28 right-0 w-80 h-36 bg-pink-600/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Comprehensive technology solutions to transform your business
          </p>

          {/* Statistics Section */}
          <div
            ref={statsRef}
            data-section="stats"
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-[1500ms] ease-out ${
              isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">
                {counts.projects}+
              </div>
              <div className="text-gray-400 text-lg">Projects Delivered</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                {counts.clients}+
              </div>
              <div className="text-gray-400 text-lg">Satisfied Clients</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent mb-3">
                {counts.satisfaction}%
              </div>
              <div className="text-gray-400 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Services Alternating Layout */}
        <div
          ref={servicesRef}
          data-section="services"
          className={`transition-all duration-[1500ms] ease-out ${
            isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Content Block */}
                <div className="w-full md:w-1/2 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                    {service.description}
                  </p>
                  
                  <button className={`mt-6 px-8 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl`}>
                    Learn More
                  </button>
                </div>

                {/* Visual Block */}
                <div className="w-full md:w-1/2 relative">
                  <div className={`relative h-80 bg-gradient-to-br ${service.gradient} overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-8 right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    
                    {/* Service Number */}
                    <div className="absolute bottom-8 left-8">
                      <span className="text-8xl font-bold text-white/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Animated border lines */}
                    <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-700 ease-out z-20`}></div>
                    <div className={`absolute top-0 right-0 w-1 h-0 bg-gradient-to-b ${service.gradient} group-hover:h-full transition-all duration-700 ease-out delay-150 z-20`}></div>
                    <div className={`absolute bottom-0 right-0 w-0 h-1 bg-gradient-to-l ${service.gradient} group-hover:w-full transition-all duration-700 ease-out delay-300 z-20`}></div>
                    <div className={`absolute bottom-0 left-0 w-1 h-0 bg-gradient-to-t ${service.gradient} group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver results that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                Fast Delivery
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rapid development cycles without compromising quality. Get to market faster.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                Secure & Reliable
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enterprise-grade security and 99.9% uptime guarantee for peace of mind.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                Scalable Solutions
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Built to grow with your business. Scale seamlessly as your needs evolve.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                24/7 Support
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Round-the-clock technical support and maintenance when you need it most.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can drive innovation and growth for your organization.
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

