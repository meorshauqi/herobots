import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import lprHero from '../assets/services/LPR-2.png';
import lprImage from '../assets/services/LPR.png';

function LPR() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  // Generate stable random positions for particles
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${(i * 5 + 3) % 100}%`,
      top: `${(i * 7 + 11) % 100}%`,
      delay: `${(i * 0.25) % 5}s`,
      duration: `${5 + (i % 10)}s`
    })), []);

  const keyFeatures = [
    {
      title: 'Real-Time Recognition',
      description: 'Advanced AI-powered license plate recognition with sub-second processing for instant vehicle identification and access control.',
      gradient: 'from-cyan-600 to-blue-600',
      details: [
        '99.8% accuracy rate',
        'Sub-0.5 second processing',
        'Multi-angle detection',
        'Low-light optimization'
      ]
    },
    {
      title: 'Automated Access Control',
      description: 'Seamlessly integrate with barrier gates, boom gates, and access control systems for fully automated vehicle entry and exit.',
      gradient: 'from-purple-600 to-pink-600',
      details: [
        'Barrier integration',
        'Whitelist/blacklist management',
        'Visitor pre-registration',
        'Emergency override'
      ]
    },
    {
      title: 'Comprehensive Logging',
      description: 'Track every vehicle entry and exit with detailed logs, timestamps, images, and generate comprehensive reports for security audits.',
      gradient: 'from-orange-600 to-red-600',
      details: [
        'Complete audit trail',
        'Image capture & storage',
        'Export to Excel/PDF',
        'Search & filter capabilities'
      ]
    },
    {
      title: 'Multi-Camera Support',
      description: 'Monitor multiple entry and exit points simultaneously with support for unlimited cameras and centralized management.',
      gradient: 'from-green-600 to-teal-600',
      details: [
        'Unlimited camera support',
        'Centralized dashboard',
        'Real-time monitoring',
        'Camera health status'
      ]
    },
    {
      title: 'Cloud-Based Platform',
      description: 'Access your LPR system from anywhere with secure cloud infrastructure, automatic backups, and remote management capabilities.',
      gradient: 'from-indigo-600 to-purple-600',
      details: [
        'Remote access',
        'Automatic backups',
        'Scalable infrastructure',
        'Enterprise security'
      ]
    },
    {
      title: 'Mobile Application',
      description: 'Manage your LPR system on-the-go with our mobile app for iOS and Android, featuring real-time alerts and notifications.',
      gradient: 'from-pink-600 to-rose-600',
      details: [
        'Real-time alerts',
        'Remote monitoring',
        'Access control management',
        'Push notifications'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can I try the product for free?',
      answer: 'Of course! Email us at info@herobots.net to get access to a 3-day free trial of our License Plate Recognition system.'
    },
    {
      question: 'What types of vehicles can be recognized?',
      answer: 'Our LPR system can recognize all types of vehicles including cars, trucks, motorcycles, buses, and commercial vehicles. It supports various license plate formats from different countries and regions.'
    },
    {
      question: 'How accurate is the license plate recognition?',
      answer: 'Our system achieves a 99.8% accuracy rate under optimal conditions. The accuracy may vary slightly based on lighting conditions, camera angle, and plate condition, but we continuously improve our AI algorithms for better performance.'
    },
    {
      question: 'Can it work in low-light conditions?',
      answer: 'Yes! Our LPR system is optimized for various lighting conditions including low-light, night vision, and infrared cameras. The system automatically adjusts to ensure reliable recognition even in challenging environments.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation time varies based on your setup requirements. Typically, a single entry/exit point can be set up within 1-2 weeks, while multi-location deployments may take 3-4 weeks. Our team works closely with you to ensure a smooth installation and configuration process.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 customer support via email, phone, and live chat. Additionally, we provide comprehensive training sessions, documentation, and dedicated technical support for enterprise clients to ensure smooth operation and ongoing maintenance.'
    }
  ];

  const benefits = [
    {
      title: 'Recognition Rate',
      value: '99.8%',
      description: 'Accuracy rate'
    },
    {
      title: 'Processing Speed',
      value: '< 0.5s',
      description: 'Real-time detection'
    },
    {
      title: 'Coverage',
      value: '24/7',
      description: 'Continuous monitoring'
    },
    {
      title: 'Vehicle Types',
      value: 'All',
      description: 'Cars, trucks, motorcycles'
    }
  ];

  // Scroll-triggered animations
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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Auto-advance features carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev === keyFeatures.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [keyFeatures.length]);

  // Feature navigation functions
  const goToFeatureNext = () => {
    setActiveFeatureIndex((prev) => (prev === keyFeatures.length - 1 ? 0 : prev + 1));
  };

  const goToFeaturePrevious = () => {
    setActiveFeatureIndex((prev) => (prev === 0 ? keyFeatures.length - 1 : prev - 1));
  };

  const goToFeatureSlide = (index) => {
    setActiveFeatureIndex(index);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-10 pb-24 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-particle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Tech Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Content - 2 Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left relative">
                {/* Decorative Element */}
                <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent rounded-full"></div>
                
                <div className="animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 animate-glow">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">AI-Powered Technology</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                      License Plate
                    </span>
                    <br />
                    <span className="text-white">Recognition</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
                    Intelligent Vehicle Access Control
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  Advanced AI-powered license plate recognition system for automated vehicle access control, parking management, and security monitoring.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  <Link 
                    to="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    to="/contact"
                    className="px-8 py-4 bg-white/5 border border-white/20 rounded-lg font-semibold text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    Watch Demo
                  </Link>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="relative group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 hover:border-white/30 transition-all duration-500 hover:scale-105"
                      style={{
                        animation: `bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${0.5 + (index * 0.1)}s both`
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#DB2777] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FACC15] to-[#DB2777] bg-clip-text text-transparent mb-2">
                        {benefit.value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{benefit.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{benefit.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Images with HUD Design */}
              <div className="relative animate-fadeInUp flex justify-center lg:justify-end" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <div className="relative w-full space-y-6" style={{ maxWidth: '560px' }}>
                  {/* Outer glow effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl -z-10 animate-pulse-slow"></div>
                  
                  {/* First Image - LPR-2.png */}
                  <div className="relative group">
                    {/* HUD Frame Container */}
                    <div className="relative">
                      {/* Corner Brackets - Top Left */}
                      <div className="absolute -top-2 -left-2 w-8 h-8 z-20">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
                      </div>
                      {/* Corner Brackets - Top Right */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 z-20">
                        <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
                      </div>
                      {/* Corner Brackets - Bottom Left */}
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 z-20">
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-cyan-400 to-transparent"></div>
                      </div>
                      {/* Corner Brackets - Bottom Right */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 z-20">
                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-cyan-400 to-transparent"></div>
                      </div>

                      {/* Main Image Container */}
                      <div className="relative overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 rounded-lg">
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-scan-line"></div>
                        </div>
                        
                        {/* Grid Overlay */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{
                          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
                          backgroundSize: '20px 20px'
                        }}></div>

                        <img 
                          src={lprHero} 
                          alt="License Plate Recognition System" 
                          className="w-full h-auto object-contain"
                        />
                        
                        {/* Gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-cyan-500/5 pointer-events-none"></div>
                        
                        {/* Live Indicator */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-500/50 z-20">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-mono text-red-400 uppercase tracking-wider">Live</span>
                        </div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-500/50 z-20">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-mono text-green-400 uppercase tracking-wider">Active</span>
                        </div>
                        
                        {/* Bottom HUD Panel */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 z-20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center">
                                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-xs font-mono text-cyan-400">LPR Analysis</p>
                                <p className="text-xs text-gray-400">Real-time detection</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-mono text-green-400">99.8%</p>
                              <p className="text-xs text-gray-400">Accuracy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Image - LPR.png */}
                  <div className="relative group">
                    {/* HUD Frame Container */}
                    <div className="relative">
                      {/* Corner Brackets */}
                      <div className="absolute -top-2 -left-2 w-8 h-8 z-20">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
                        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-purple-400 to-transparent"></div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 z-20">
                        <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-pink-400 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-pink-400 to-transparent"></div>
                      </div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 z-20">
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-cyan-400 to-transparent"></div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 z-20">
                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-400 to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-purple-400 to-transparent"></div>
                      </div>

                      {/* Main Image Container */}
                      <div className="relative overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/10 rounded-lg">
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-scan-line" style={{ animationDelay: '1.5s' }}></div>
                        </div>
                        
                        {/* Grid Overlay */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{
                          backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)',
                          backgroundSize: '20px 20px'
                        }}></div>

                        <img 
                          src={lprImage} 
                          alt="License Plate Recognition System in Action" 
                          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-purple-500/5 pointer-events-none"></div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-500/50 z-20">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-mono text-green-400 uppercase tracking-wider">Active</span>
                        </div>
                        
                        {/* Recognition Badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cyan-500/50 z-20">
                          <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Detected</span>
                        </div>
                        
                        {/* Bottom Info Panel */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 z-20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
                                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-xs font-mono text-purple-400">Plate: HD 69 CNZ</p>
                                <p className="text-xs text-gray-400">Real-time recognition</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-mono text-green-400">Verified</p>
                              <p className="text-xs text-gray-400">Access Granted</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Tech Elements */}
                      <div className="absolute -top-4 -right-4 w-2 h-2 bg-purple-400/50 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-pink-400/50 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div 
            data-section-id="how-it-works"
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              visibleSections.has('how-it-works')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How It <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-gray-400 text-lg">Simple, fast, and fully automated process</p>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform -translate-y-1/2"></div>
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform -translate-y-1/2 blur-sm"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Vehicle Approaches', desc: 'Camera detects incoming vehicle automatically', icon: 'M8 9l4-4 4 4m0 6l-4 4-4-4', color: 'cyan' },
                  { step: '02', title: 'Plate Captured', desc: 'High-resolution image captured in milliseconds', icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z', color: 'purple' },
                  { step: '03', title: 'AI Processing', desc: 'Neural network extracts and validates plate data', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'pink' },
                  { step: '04', title: 'Access Granted', desc: 'Barrier opens automatically for verified vehicles', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'green' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{
                      animation: visibleSections.has('how-it-works') ? `fadeInUp 0.6s ease-out ${0.2 + index * 0.15}s both` : 'none'
                    }}
                  >
                    {/* Step Card */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                      {/* Step Number */}
                      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${
                        item.color === 'cyan' ? 'from-cyan-500 to-cyan-600' :
                        item.color === 'purple' ? 'from-purple-500 to-purple-600' :
                        item.color === 'pink' ? 'from-pink-500 to-pink-600' :
                        'from-green-500 to-green-600'
                      } flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                        {item.step}
                      </div>
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                        item.color === 'cyan' ? 'from-cyan-500/20' :
                        item.color === 'purple' ? 'from-purple-500/20' :
                        item.color === 'pink' ? 'from-pink-500/20' :
                        'from-green-500/20'
                      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                      
                      <div className="pt-6 text-center relative z-10">
                        {/* Icon */}
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${
                          item.color === 'cyan' ? 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30' :
                          item.color === 'purple' ? 'from-purple-500/20 to-purple-600/10 border-purple-500/30' :
                          item.color === 'pink' ? 'from-pink-500/20 to-pink-600/10 border-pink-500/30' :
                          'from-green-500/20 to-green-600/10 border-green-500/30'
                        } border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <svg className={`w-8 h-8 ${
                            item.color === 'cyan' ? 'text-cyan-400' :
                            item.color === 'purple' ? 'text-purple-400' :
                            item.color === 'pink' ? 'text-pink-400' :
                            'text-green-400'
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Simulation */}
      <section className="relative py-20 border-y border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-purple-950/20 to-pink-950/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div 
            data-section-id="live-demo"
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              visibleSections.has('live-demo')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                See It In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Action</span>
              </h2>
              <p className="text-gray-400 text-lg">Real-time license plate recognition simulation</p>
            </div>

            {/* Demo Display */}
            <div className="relative">
              {/* Outer Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl animate-pulse-slow"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black border border-cyan-500/30 rounded-2xl overflow-hidden">
                {/* Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-mono text-gray-400">LPR Terminal v2.0</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono text-green-400">SYSTEM ONLINE</span>
                    </div>
                    <div className="text-xs font-mono text-cyan-400">CAM-01 | ENTRY GATE</div>
                  </div>
                </div>
                
                {/* Main Display */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                  {/* Camera Feed */}
                  <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-cyan-500/20">
                    {/* Scan Lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-30" style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 2px, rgba(0,255,255,0.03) 4px)'
                    }}></div>
                    
                    {/* Scanning Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line"></div>
                    </div>
                    
                    {/* Detection Box */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-16 border-2 border-cyan-400 rounded animate-pulse-border">
                      <div className="absolute -top-6 left-0 text-xs font-mono text-cyan-400">PLATE DETECTED</div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold font-mono text-cyan-400 tracking-wider animate-typewriter">HD 69 CNZ</span>
                      </div>
                    </div>
                    
                    {/* Corner Markers */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
                    
                    {/* Timestamp */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-mono text-cyan-400/60">
                      {new Date().toLocaleTimeString()} | RECORDING
                    </div>
                  </div>
                  
                  {/* Data Panel */}
                  <div className="space-y-4">
                    {/* Recognition Result */}
                    <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl p-4">
                      <div className="text-xs font-mono text-gray-400 mb-2">RECOGNITION RESULT</div>
                      <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold font-mono text-white tracking-wider">HD 69 CNZ</div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/50 rounded-full">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs font-mono text-green-400">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="text-xs font-mono text-gray-400 mb-1">CONFIDENCE</div>
                        <div className="text-2xl font-bold text-cyan-400">99.8%</div>
                        <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full w-[99.8%] bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <div className="text-xs font-mono text-gray-400 mb-1">PROCESS TIME</div>
                        <div className="text-2xl font-bold text-purple-400">0.23s</div>
                        <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full w-[23%] bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Vehicle Info */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-xs font-mono text-gray-400 mb-3">VEHICLE DATABASE</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Owner:</span>
                          <span className="text-white font-mono">John Smith</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Access Level:</span>
                          <span className="text-green-400 font-mono">AUTHORIZED</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Entry Count:</span>
                          <span className="text-cyan-400 font-mono">127</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Last Visit:</span>
                          <span className="text-gray-300 font-mono">Today, 08:45</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action */}
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">ACCESS GRANTED</div>
                          <div className="text-xs text-gray-400">Barrier opening...</div>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-green-400 animate-pulse">● GATE OPEN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="relative py-20 border-y border-white/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div 
            data-section-id="efficiency-section"
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              visibleSections.has('efficiency-section')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Title */}
            <div className="text-center mb-16 relative">
              {/* Floating Icons */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Icon 1 - Top Left */}
                <div className="absolute top-0 left-[10%] w-12 h-12 text-cyan-500/60 animate-float-slow">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                {/* Icon 2 - Top Right */}
                <div className="absolute top-0 right-[10%] w-10 h-10 text-purple-500/60 animate-float-medium" style={{ animationDelay: '0.5s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                {/* Icon 3 - Bottom Left */}
                <div className="absolute bottom-0 left-[15%] w-8 h-8 text-pink-500/60 animate-float-fast" style={{ animationDelay: '1s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                {/* Icon 4 - Bottom Right */}
                <div className="absolute bottom-0 right-[15%] w-11 h-11 text-cyan-500/60 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                {/* Icon 5 - Center Left */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-9 h-9 text-purple-500/50 animate-float-medium" style={{ animationDelay: '0.3s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {/* Icon 6 - Center Right */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 text-pink-500/50 animate-float-fast" style={{ animationDelay: '0.8s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 relative z-10">
                Transform your access control with<br />
                <span className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">
                  intelligent automation
                </span>
              </h2>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                  title: 'Instant Recognition',
                  description: 'License plates are detected and processed in less than 0.5 seconds, enabling seamless vehicle access without delays or manual intervention.',
                  gradient: 'from-cyan-500 to-cyan-600',
                  borderColor: 'cyan',
                  delay: 0.2
                },
                {
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  title: 'Automated Access',
                  description: 'Barriers automatically raise for authorized vehicles while maintaining strict security protocols. No need for security personnel to manually verify each entry.',
                  gradient: 'from-purple-500 to-purple-600',
                  borderColor: 'purple',
                  delay: 0.3
                },
                {
                  icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
                  title: 'Comprehensive Monitoring',
                  description: 'Track all vehicle entries and exits with detailed logs, timestamps, and images. Generate comprehensive reports for security audits and compliance.',
                  gradient: 'from-pink-500 to-pink-600',
                  borderColor: 'pink',
                  delay: 0.4
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-700 ${
                    visibleSections.has('efficiency-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${0.1 + index * 0.1}s`,
                    animation: visibleSections.has('efficiency-section') ? `slideRotate 0.7s ease-out ${item.delay}s both` : 'none'
                  }}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="absolute inset-[1px] bg-gray-900 rounded-2xl"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-transparent transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:-translate-y-2">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-px bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                    
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon with Hexagon Background */}
                      <div className="relative w-20 h-20 mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl rotate-45 group-hover:rotate-[60deg] transition-transform duration-500`}></div>
                        <div className="absolute inset-[2px] bg-gray-900 rounded-2xl rotate-45 group-hover:rotate-[60deg] transition-transform duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Learn More Link */}
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>Learn More</span>
                        <svg className={`w-4 h-4 ${item.borderColor === 'cyan' ? 'text-cyan-400' : item.borderColor === 'purple' ? 'text-purple-400' : 'text-pink-400'} transform group-hover:translate-x-1 transition-transform duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-20 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div 
            data-section-id="features-section"
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              visibleSections.has('features-section')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                Powerful <span className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">Key Features</span>
              </h2>
              <p className="text-gray-400 text-lg animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Everything you need for intelligent vehicle access control</p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={goToFeaturePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Previous feature"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToFeatureNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Next feature"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Progress Indicator - Above carousel */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2">
                  {keyFeatures.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToFeatureSlide(idx)}
                      className={`transition-all duration-300 ${
                        idx === activeFeatureIndex
                          ? 'w-3 h-3 bg-cyan-500 rounded-full'
                          : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                      }`}
                      aria-label={`Go to feature ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Carousel Track */}
              <div className="overflow-hidden px-8 md:px-16">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(calc(33.333% - ${activeFeatureIndex * 33.333}%))`,
                    minHeight: '500px'
                  }}
                >
                  {keyFeatures.map((feature, index) => {
                    const isActive = index === activeFeatureIndex;
                    const prevIndex = activeFeatureIndex === 0 ? keyFeatures.length - 1 : activeFeatureIndex - 1;
                    const nextIndex = activeFeatureIndex === keyFeatures.length - 1 ? 0 : activeFeatureIndex + 1;
                    const isPrevious = index === prevIndex;
                    const isNext = index === nextIndex;
                    
                    return (
                      <div
                        key={index}
                        className="w-1/3 flex-shrink-0 px-2 md:px-4 flex items-center"
                      >
                        <div
                          className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border transition-all duration-500 p-6 md:p-8 w-full ${
                            isActive 
                              ? 'border-white/30 scale-100 shadow-2xl z-10 opacity-100' 
                              : isPrevious
                              ? 'border-white/10 scale-90 opacity-40 blur-sm'
                              : isNext
                              ? 'border-white/10 scale-90 opacity-40 blur-sm'
                              : 'opacity-0 pointer-events-none'
                          }`}
                          style={{ minHeight: '450px' }}
                        >
                          {/* Gradient border */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} ${isActive ? 'opacity-10' : 'opacity-0'} transition-opacity duration-500`}></div>
                          <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${feature.gradient}`}></div>
                          
                          <div className="relative z-10">
                            <h3 className={`text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent text-center transition-all duration-700 ${
                              isActive ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
                            }`}
                            style={{ transitionDelay: '0.3s' }}>
                              {feature.title}
                            </h3>
                            <p className={`text-gray-300 text-sm md:text-base mb-4 leading-relaxed text-center transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${isActive ? '' : 'line-clamp-3'}`}
                            style={{ transitionDelay: '0.5s' }}>
                              {feature.description}
                            </p>
                            {isActive && (
                              <ul className="space-y-2 max-w-xl mx-auto">
                                {feature.details.map((detail, idx) => (
                                  <li 
                                    key={idx} 
                                    className="flex items-start text-xs md:text-sm text-gray-400 transition-all duration-500"
                                    style={{
                                      animation: `fadeInLeft 0.5s ease-out ${0.7 + (idx * 0.1)}s both`
                                    }}
                                  >
                                    <svg className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div 
            data-section-id="benefits-section"
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              visibleSections.has('benefits-section')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                Why Choose <span className="bg-gradient-to-r from-[#DB2777] to-[#8244ff] bg-clip-text text-transparent">License Plate Recognition</span>
              </h2>
              <p className="text-gray-400 text-lg animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Transform your access control with intelligent automation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
              {
                title: 'High Accuracy Recognition',
                description: 'Advanced AI algorithms ensure 99.8% accuracy in license plate detection, even in challenging conditions.',
                gradient: 'from-cyan-600 to-blue-600'
              },
              {
                title: 'Real-Time Processing',
                description: 'Sub-second recognition enables instant vehicle identification and seamless access control without delays.',
                gradient: 'from-purple-600 to-pink-600'
              },
              {
                title: '24/7 Monitoring',
                description: 'Continuous surveillance and logging ensure complete security coverage around the clock.',
                gradient: 'from-orange-600 to-red-600'
              },
              {
                title: 'Seamless Integration',
                description: 'Easily integrate with existing access control systems, barriers, and security infrastructure.',
                gradient: 'from-green-600 to-teal-600'
              },
              {
                title: 'Comprehensive Reporting',
                description: 'Generate detailed audit trails, vehicle logs, and security reports for compliance and analysis.',
                gradient: 'from-indigo-600 to-purple-600'
              },
              {
                title: 'Scalable Solution',
                description: 'From single entry points to multi-location deployments, scale your system as your needs grow.',
                gradient: 'from-pink-600 to-rose-600'
              }
              ].map((benefit, index) => {
                const isVisible = visibleSections.has('benefits-section');
                const entranceStyles = [
                  'opacity-0 translate-x-24 rotate-2',
                  'opacity-0 -translate-x-24 -rotate-2',
                  'opacity-0 translate-y-20 scale-90',
                  'opacity-0 translate-x-32 skew-x-3',
                  'opacity-0 -translate-x-32 -skew-x-3',
                  'opacity-0 translate-y-24 rotate-3'
                ];
                const exitStyle = entranceStyles[index % entranceStyles.length];
                
                return (
                  <div
                    key={index}
                    className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-1000 ease-out p-8 ${
                      isVisible ? 'opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100 skew-x-0' : exitStyle
                    }`}
                    style={{
                      transformOrigin: index % 2 === 0 ? 'left center' : 'right center',
                      perspective: '1000px',
                      transitionDelay: `${0.1 + (index * 0.1)}s`
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                    <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${benefit.gradient}`}></div>
                    
                    <div className="relative z-10">
                      <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div 
            data-section-id="faq-section"
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              visibleSections.has('faq-section')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                Frequently Asked
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                  Questions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                Everything you need to know about License Plate Recognition
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  const isVisible = visibleSections.has('faq-section');
                  return (
                    <div
                      key={index}
                      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-300"
                      style={{
                        animation: isVisible ? `fadeInUp 0.6s ease-out ${0.5 + (index * 0.1)}s both` : 'none'
                      }}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                        className="w-full p-6 md:p-8 text-left flex items-center justify-between group-hover:bg-white/5 transition-all duration-300"
                      >
                        <h3 className="text-lg md:text-xl font-bold text-white pr-8 flex-1">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          <svg
                            className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8">
                          <div className="border-t border-white/10 pt-6">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div
            data-section-id="cta-section"
            className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
              visibleSections.has('cta-section')
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black border border-cyan-500/20 rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
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
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-cyan-400 to-transparent"></div>
              </div>
              
              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
              
              {/* Grid Overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8 animate-glow">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Get Started Today</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Ready to </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Transform</span>
                  <br />
                  <span className="text-white">Your Access Control?</span>
                </h2>
                
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Experience the power of intelligent License Plate Recognition. Schedule a demo or contact us to learn more.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Request a Demo
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      Contact Sales
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Free Demo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Easy Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>Custom Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-10deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) rotate(5deg);
          }
          70% {
            transform: scale(0.9) rotate(-2deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes scan-line {
          0% {
            top: -10%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 110%;
            opacity: 0;
          }
        }

        @keyframes slideRotate {
          from {
            opacity: 0;
            transform: translateX(-50px) rotate(-15deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg) scale(1);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-15px) translateX(10px) rotate(5deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) translateX(-5px) rotate(-5deg);
            opacity: 0.7;
          }
          75% {
            transform: translateY(-10px) translateX(15px) rotate(3deg);
            opacity: 0.9;
          }
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.5;
          }
          33% {
            transform: translateY(-20px) translateX(-10px) rotate(-8deg);
            opacity: 0.7;
          }
          66% {
            transform: translateY(-25px) translateX(10px) rotate(8deg);
            opacity: 0.6;
          }
        }

        @keyframes float-fast {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-18px) translateX(12px) rotate(10deg);
            opacity: 0.7;
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(6, 182, 212, 0.3), 0 0 10px rgba(6, 182, 212, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.5), 0 0 30px rgba(6, 182, 212, 0.3);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes pulse-border {
          0%, 100% {
            border-color: rgba(6, 182, 212, 0.5);
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
          }
          50% {
            border-color: rgba(6, 182, 212, 1);
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
          }
        }

        @keyframes typewriter {
          0% {
            opacity: 0;
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) both;
        }

        .animate-scan-line {
          animation: scan-line 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle 15s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }

        .animate-typewriter {
          animation: typewriter 0.5s ease-out both;
        }
      `}</style>
    </div>
  );
}

export default LPR;
