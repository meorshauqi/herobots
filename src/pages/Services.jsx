import { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import softwareDev from '../assets/services/software-development.webp';
import webApp from '../assets/services/web-app.jpg';
import mobileApp from '../assets/services/mobile-app.webp';
import aiIntegration from '../assets/services/ai-integration.jpg';

// Generate stable particle positions
const generateParticles = () => [...Array(25)].map((_, i) => ({
  id: i,
  left: `${(i * 4 + 2) % 100}%`,
  top: `${(i * 7 + 3) % 100}%`,
  delay: `${(i * 0.2) % 5}s`,
  duration: `${12 + (i % 6)}s`,
  color: i % 3 === 0 ? 'bg-indigo-400/40' : i % 3 === 1 ? 'bg-purple-400/40' : 'bg-pink-400/40'
}));

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

  // Memoize particles to prevent regeneration
  const particles = useMemo(() => generateParticles(), []);

  const services = [
    {
      id: 1,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. We build scalable, robust applications that drive efficiency and innovation.",
      gradient: "from-indigo-600 to-purple-600",
      image: softwareDev
    },
    {
      id: 2,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies. From single-page apps to complex enterprise solutions.",
      gradient: "from-purple-600 to-pink-600",
      image: webApp
    },
    {
      id: 3,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android. Delivering exceptional user experiences on any device.",
      gradient: "from-pink-600 to-indigo-600",
      image: mobileApp
    },
    {
      id: 4,
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and transform your business operations.",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      image: aiIntegration
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
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 services-grid-bg" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full services-particle ${particle.color}`}
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
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>

      {/* Rotating Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full blur-3xl services-spin-slow -z-10" style={{
        background: 'conic-gradient(from 0deg, rgba(99, 102, 241, 0.08), rgba(147, 51, 234, 0.08), rgba(236, 72, 153, 0.08), rgba(99, 102, 241, 0.08))'
      }}></div>

      {/* Background blur effects */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-28 right-0 w-80 h-80 bg-pink-600/20 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-6 services-glow-badge">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-indigo-400 uppercase tracking-wider">What We Offer</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent services-gradient-text">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
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
            {[
              { value: `${counts.projects}+`, label: 'Projects Delivered', gradient: 'from-indigo-400 to-purple-400', borderColor: 'border-indigo-500/30', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { value: `${counts.clients}+`, label: 'Satisfied Clients', gradient: 'from-purple-400 to-pink-400', borderColor: 'border-purple-500/30', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
              { value: `${counts.satisfaction}%`, label: 'Client Satisfaction', gradient: 'from-pink-400 to-indigo-400', borderColor: 'border-pink-500/30', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border ${stat.borderColor} p-8 text-center hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-xl overflow-hidden`}
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-px bg-gradient-to-r ${stat.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
            </div>

                <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                  {stat.value}
              </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
            ))}
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
                </div>

                {/* Visual Block */}
                <div className="w-full md:w-1/2 relative">
                  <div className={`relative h-80 overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-2xl`}>
                    {/* Service Image */}
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Animated gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`}></div>
                    
                    {/* Gradient accent overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30 mix-blend-overlay`}></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-8 right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    
                    {/* Service Number */}
                    <div className="absolute bottom-8 left-8 z-10">
                      <span className="text-8xl font-bold text-white/30">
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
        <div className="mt-32 max-w-6xl mx-auto relative">
          {/* Section Background Effects */}
          <div className="absolute -top-20 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl"></div>

          <div className="text-center mb-16 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6 services-glow-badge">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-purple-400 uppercase tracking-wider">Why Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Our Services?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver results that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { title: 'Fast Delivery', desc: 'Rapid development cycles without compromising quality. Get to market faster.', gradient: 'from-indigo-600 to-purple-600', borderColor: 'border-indigo-500/20', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Secure & Reliable', desc: 'Enterprise-grade security and 99.9% uptime guarantee for peace of mind.', gradient: 'from-purple-600 to-pink-600', borderColor: 'border-purple-500/20', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'Scalable Solutions', desc: 'Built to grow with your business. Scale seamlessly as your needs evolve.', gradient: 'from-pink-600 to-indigo-600', borderColor: 'border-pink-500/20', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
              { title: '24/7 Support', desc: 'Round-the-clock technical support and maintenance when you need it most.', gradient: 'from-indigo-600 via-purple-600 to-pink-600', borderColor: 'border-indigo-500/20', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border ${item.borderColor} p-6 hover:border-white/30 transition-all duration-500 rounded-xl overflow-hidden hover:scale-105 hover:-translate-y-2`}
              >
                {/* Animated Border Lines */}
                <div className={`absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-700 ease-out`}></div>
                <div className={`absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b ${item.gradient} group-hover:h-full transition-all duration-700 ease-out delay-150`}></div>
                <div className={`absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l ${item.gradient} group-hover:w-full transition-all duration-700 ease-out delay-300`}></div>
                <div className={`absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t ${item.gradient} group-hover:h-full transition-all duration-700 ease-out delay-[450ms]`}></div>

                {/* Glow Effect */}
                <div className={`absolute -inset-px bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>

                {/* Icon with Rotating Background */}
                <div className="relative w-14 h-14 mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center`}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
            </div>

                <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${item.gradient} group-hover:bg-clip-text transition-all duration-300`}>
                  {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
              </p>
            </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center max-w-5xl mx-auto relative">
          {/* Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          
          <div className="relative bg-gradient-to-br from-gray-900/90 to-black border border-indigo-500/20 p-12 md:p-16 rounded-3xl overflow-hidden">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-transparent"></div>
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-indigo-400 to-transparent"></div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20">
              <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-400 to-transparent"></div>
              <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-purple-400 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20">
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-pink-400 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-20 h-20">
              <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-indigo-400 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-indigo-400 to-transparent"></div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}></div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full mb-8 services-glow-badge">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-mono text-indigo-400 uppercase tracking-wider">Get Started Today</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Ready to </span>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Transform</span>
                <br />
                <span className="text-white">Your Business?</span>
            </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can drive innovation and growth for your organization.
            </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Contact Us
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
            </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                  {['Free Consultation', 'Custom Solutions', '24/7 Support', 'Fast Turnaround'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        /* Grid Animation */
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        .services-grid-bg {
          animation: gridMove 25s linear infinite;
        }

        /* Particle Animation */
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) translateX(40px); opacity: 0; }
        }

        .services-particle {
          animation: particleFloat 15s linear infinite;
        }

        /* Slow Spin */
        @keyframes spinSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .services-spin-slow {
          animation: spinSlow 50s linear infinite;
        }

        /* Badge Glow */
        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 25px rgba(99, 102, 241, 0.5), 0 0 40px rgba(147, 51, 234, 0.3); }
        }

        .services-glow-badge {
          animation: badgeGlow 3s ease-in-out infinite;
        }

        /* Gradient Text Glow */
        .services-gradient-text {
          text-shadow: 0 0 40px rgba(99, 102, 241, 0.3), 0 0 80px rgba(236, 72, 153, 0.2);
        }
      `}</style>
    </section>
  );
}

export default Services;

