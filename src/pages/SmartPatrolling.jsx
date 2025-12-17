import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import smartPatrollingImg from '../assets/services/smart-patrolling.png';

function SmartPatrolling() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  // Generate stable random positions for particles
  const particles = useMemo(() => 
    [...Array(25)].map((_, i) => ({
      id: i,
      left: `${(i * 4 + 3) % 100}%`,
      top: `${(i * 7 + 5) % 100}%`,
      delay: `${(i * 0.2) % 5}s`,
      duration: `${8 + (i % 8)}s`,
      color: i % 3 === 0 ? 'bg-orange-400/50' : i % 3 === 1 ? 'bg-red-400/50' : 'bg-yellow-400/50'
    })), []);

  const keyFeatures = [
    {
      title: 'GPS-Enabled Tracking',
      description: 'Real-time location tracking of all patrol officers with detailed route history and comprehensive movement analytics.',
      gradient: 'from-orange-600 to-red-600',
      details: [
        'Live location updates',
        'Route history logging',
        'Geofencing capabilities',
        'Offline mode support'
      ]
    },
    {
      title: 'Automated Route Planning',
      description: 'AI-powered route optimization ensures complete coverage while minimizing patrol time and maximizing efficiency.',
      gradient: 'from-red-600 to-pink-600',
      details: [
        'AI route optimization',
        'Dynamic rerouting',
        'Priority zone coverage',
        'Weather-aware planning'
      ]
    },
    {
      title: 'Checkpoint Verification',
      description: 'NFC/QR-based checkpoint scanning ensures patrol officers visit all designated locations with timestamp verification.',
      gradient: 'from-yellow-600 to-orange-600',
      details: [
        'NFC/QR scanning',
        'Photo verification',
        'Timestamp logging',
        'Missed checkpoint alerts'
      ]
    },
    {
      title: 'Incident Reporting',
      description: 'Instant incident documentation with photos, voice notes, and GPS coordinates for rapid response and follow-up.',
      gradient: 'from-pink-600 to-purple-600',
      details: [
        'Photo documentation',
        'Voice note capture',
        'GPS tagging',
        'Priority escalation'
      ]
    },
    {
      title: 'Real-Time Alerts',
      description: 'Instant notifications for emergencies, missed checkpoints, deviation from routes, and suspicious activities.',
      gradient: 'from-amber-600 to-orange-600',
      details: [
        'Emergency SOS button',
        'Deviation alerts',
        'Panic button',
        'Supervisor notifications'
      ]
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive reporting with patrol completion rates, response times, and performance metrics visualization.',
      gradient: 'from-rose-600 to-red-600',
      details: [
        'Performance metrics',
        'Completion reports',
        'Trend analysis',
        'Export capabilities'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can I try the product for free?',
      answer: 'Absolutely! Email us at info@herobots.net to get access to a 14-day free trial of our Smart Patrolling system with full features.'
    },
    {
      question: 'What devices are compatible with Smart Patrolling?',
      answer: 'Our Smart Patrolling app works on Android (5.0+) and iOS (12.0+) devices. We also support rugged devices commonly used in security operations. The web dashboard is accessible from any modern browser.'
    },
    {
      question: 'Does it work offline?',
      answer: 'Yes! The mobile app includes robust offline functionality. Patrol data, checkpoint scans, and incident reports are stored locally and automatically synced when connectivity is restored.'
    },
    {
      question: 'How accurate is the GPS tracking?',
      answer: 'Our GPS tracking achieves accuracy within 3-5 meters in optimal conditions. We use a combination of GPS, WiFi, and cellular triangulation for reliable positioning even in challenging environments.'
    },
    {
      question: 'Can we customize patrol routes?',
      answer: 'Yes! You can fully customize patrol routes, checkpoint locations, patrol schedules, and zone assignments. The system also supports multiple route templates for different shift patterns.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 customer support via email, phone, and live chat. Enterprise clients receive dedicated account managers, on-site training, and priority technical support.'
    }
  ];

  const benefits = [
    {
      title: 'Site Coverage',
      value: '100%',
      description: 'Complete coverage'
    },
    {
      title: 'Time Saved',
      value: '40%',
      description: 'Patrol efficiency'
    },
    {
      title: 'Response Time',
      value: '<2min',
      description: 'Incident response'
    },
    {
      title: 'GPS Accuracy',
      value: '3-5m',
      description: 'Location precision'
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
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 smartpatrol-grid" style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full smartpatrol-particle ${particle.color}`}
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
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

      {/* Rotating Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full blur-3xl smartpatrol-spin -z-10" style={{
        background: 'conic-gradient(from 0deg, rgba(249, 115, 22, 0.08), rgba(239, 68, 68, 0.08), rgba(234, 179, 8, 0.08), rgba(249, 115, 22, 0.08))'
      }}></div>

      {/* Hero Section */}
      <section className="relative pt-10 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Content - 2 Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left relative">
                {/* Decorative Element */}
                <div className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-orange-500 via-red-500 to-transparent rounded-full"></div>
                
                <div className="animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6 smartpatrol-glow-badge">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono text-orange-400 uppercase tracking-wider">Intelligent Security</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 smartpatrol-gradient-text">
                    <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                      Smart Patrolling
                    </span>
                    <br />
                    <span className="text-white">System</span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
                    Intelligent Routes, Complete Coverage
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  Revolutionize your security operations with GPS-enabled patrol tracking, automated route optimization, and real-time incident reporting for comprehensive site coverage.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  <Link 
                    to="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    to="/contact"
                    className="px-8 py-4 bg-white/5 border border-white/20 rounded-lg font-semibold text-white hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300"
                  >
                    Watch Demo
                  </Link>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="relative group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 hover:border-orange-500/30 transition-all duration-500 hover:scale-105 rounded-lg"
                      style={{
                        animation: `bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${0.5 + (index * 0.1)}s both`
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-lg"></div>
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                        {benefit.value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{benefit.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{benefit.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Image with HUD Design */}
              <div className="relative animate-fadeInUp flex justify-center lg:justify-end" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <div className="relative w-full" style={{ maxWidth: '560px' }}>
                  {/* Outer glow effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 via-red-600/20 to-yellow-600/20 rounded-3xl blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
                  
                  {/* Main Image */}
                  <div className="relative group">
                    {/* HUD Frame Container */}
                    <div className="relative">
                      {/* Corner Brackets - Top Left */}
                      <div className="absolute -top-2 -left-2 w-10 h-10 z-20">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
                        <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-orange-400 to-transparent"></div>
                      </div>
                      {/* Corner Brackets - Top Right */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 z-20">
                        <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-red-400 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-red-400 to-transparent"></div>
                      </div>
                      {/* Corner Brackets - Bottom Left */}
                      <div className="absolute -bottom-2 -left-2 w-10 h-10 z-20">
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-yellow-400 to-transparent"></div>
                      </div>
                      {/* Corner Brackets - Bottom Right */}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 z-20">
                        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-orange-400 to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-orange-400 to-transparent"></div>
                      </div>

                      {/* Main Image Container */}
                      <div className="relative overflow-hidden border border-orange-500/30 shadow-2xl shadow-orange-500/10 rounded-xl">
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent smartpatrol-scan-line"></div>
                        </div>
                        
                        {/* Grid Overlay */}
                        <div className="absolute inset-0 z-10 pointer-events-none opacity-20" style={{
                          backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)',
                          backgroundSize: '25px 25px'
                        }}></div>

                        <img 
                          src={smartPatrollingImg} 
                          alt="Smart Patrolling System" 
                          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Gradient overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-orange-500/5 pointer-events-none"></div>
                        
                        {/* Live Indicator */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-500/50 z-20">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-mono text-green-400 uppercase tracking-wider">Live Tracking</span>
                        </div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-orange-500/50 z-20">
                          <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">GPS Active</span>
                        </div>
                        
                        {/* Bottom HUD Panel */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 z-20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-xs font-mono text-orange-400">Route Optimization</p>
                                <p className="text-xs text-gray-400">AI-Powered Planning</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs font-mono text-green-400">98.5%</p>
                              <p className="text-xs text-gray-400">Coverage Rate</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Tech Elements */}
                      <div className="absolute -top-4 -right-4 w-3 h-3 bg-orange-400/50 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-red-400/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-1/2 -right-6 w-2 h-2 bg-yellow-400/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black"></div>
        
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6 smartpatrol-glow-badge">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono text-orange-400 uppercase tracking-wider">Process Flow</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How It <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="text-gray-400 text-lg">Streamlined patrol management in 4 simple steps</p>
            </div>

            {/* Process Steps */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 transform -translate-y-1/2"></div>
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 transform -translate-y-1/2 blur-sm"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Route Assignment', desc: 'AI optimizes and assigns patrol routes based on priorities', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', color: 'orange' },
                  { step: '02', title: 'Patrol Tracking', desc: 'Real-time GPS monitoring of all patrol officers', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', color: 'red' },
                  { step: '03', title: 'Checkpoint Scan', desc: 'Officers verify locations via NFC/QR scanning', icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z', color: 'yellow' },
                  { step: '04', title: 'Report & Analyze', desc: 'Comprehensive reports and performance analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'pink' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{
                      animation: visibleSections.has('how-it-works') ? `fadeInUp 0.6s ease-out ${0.2 + index * 0.15}s both` : 'none'
                    }}
                  >
                    {/* Step Card */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-orange-500/10">
                      {/* Step Number */}
                      <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r ${
                        item.color === 'orange' ? 'from-orange-500 to-orange-600' :
                        item.color === 'red' ? 'from-red-500 to-red-600' :
                        item.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                        'from-pink-500 to-pink-600'
                      } flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                        {item.step}
                      </div>
                      
                      <div className="pt-6 text-center relative z-10">
                        {/* Icon */}
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${
                          item.color === 'orange' ? 'from-orange-500/20 to-orange-600/10 border-orange-500/30' :
                          item.color === 'red' ? 'from-red-500/20 to-red-600/10 border-red-500/30' :
                          item.color === 'yellow' ? 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30' :
                          'from-pink-500/20 to-pink-600/10 border-pink-500/30'
                        } border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <svg className={`w-8 h-8 ${
                            item.color === 'orange' ? 'text-orange-400' :
                            item.color === 'red' ? 'text-red-400' :
                            item.color === 'yellow' ? 'text-yellow-400' :
                            'text-pink-400'
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

      {/* Efficiency Section */}
      <section className="relative py-20 border-y border-white/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(249, 115, 22, 0.5) 1px, transparent 0)`,
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
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Maximize security coverage with<br />
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  intelligent patrolling
                </span>
              </h2>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                  title: 'Real-Time Tracking',
                  description: 'Monitor all patrol officers in real-time with GPS accuracy within 3-5 meters. Get instant visibility into patrol status and location history.',
                  gradient: 'from-orange-500 to-orange-600',
                  delay: 0.2
                },
                {
                  icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
                  title: 'Optimized Routes',
                  description: 'AI-powered route optimization ensures complete site coverage while minimizing patrol time. Dynamic rerouting based on real-time conditions.',
                  gradient: 'from-red-500 to-red-600',
                  delay: 0.3
                },
                {
                  icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
                  title: 'Instant Alerts',
                  description: 'Receive immediate notifications for emergencies, missed checkpoints, and route deviations. Rapid response capabilities for critical incidents.',
                  gradient: 'from-yellow-500 to-yellow-600',
                  delay: 0.4
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-700 ${
                    visibleSections.has('efficiency-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: `${0.1 + index * 0.1}s`
                  }}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="absolute inset-[1px] bg-gray-900 rounded-2xl"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-transparent transition-all duration-500 group-hover:transform group-hover:scale-[1.02] group-hover:-translate-y-2">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 smartpatrol-glow-badge">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-mono text-red-400 uppercase tracking-wider">Features</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Powerful <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Key Features</span>
              </h2>
              <p className="text-gray-400 text-lg">Everything you need for comprehensive patrol management</p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={goToFeaturePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-110"
                aria-label="Previous feature"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToFeatureNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-110"
                aria-label="Next feature"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Progress Indicator */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2">
                  {keyFeatures.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToFeatureSlide(idx)}
                      className={`transition-all duration-300 ${
                        idx === activeFeatureIndex
                          ? 'w-3 h-3 bg-orange-500 rounded-full'
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
                          className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border transition-all duration-500 p-6 md:p-8 w-full rounded-xl ${
                            isActive 
                              ? 'border-orange-500/30 scale-100 shadow-2xl z-10 opacity-100' 
                              : isPrevious || isNext
                              ? 'border-white/10 scale-90 opacity-40 blur-sm'
                              : 'opacity-0 pointer-events-none'
                          }`}
                          style={{ minHeight: '450px' }}
                        >
                          {/* Gradient border */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl ${isActive ? 'opacity-10' : 'opacity-0'} transition-opacity duration-500`}></div>
                          <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${feature.gradient} rounded-l-xl`}></div>
                          
                          <div className="relative z-10">
                            <h3 className={`text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent text-center transition-all duration-700 ${
                              isActive ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
                            }`}>
                              {feature.title}
                            </h3>
                            <p className={`text-gray-300 text-sm md:text-base mb-4 leading-relaxed text-center transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
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
                                    <svg className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Smart Patrolling</span>
              </h2>
              <p className="text-gray-400 text-lg">Transform your security operations with intelligent automation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Complete Site Coverage', description: 'Ensure 100% coverage of all designated areas with AI-optimized patrol routes and checkpoint verification.', gradient: 'from-orange-600 to-red-600' },
                { title: 'Real-Time Visibility', description: 'Monitor all patrol activities in real-time with live GPS tracking, instant alerts, and comprehensive dashboards.', gradient: 'from-red-600 to-pink-600' },
                { title: 'Improved Accountability', description: 'Track patrol completion rates, response times, and checkpoint visits with detailed audit trails.', gradient: 'from-yellow-600 to-orange-600' },
                { title: 'Faster Incident Response', description: 'Reduce response time with instant incident reporting, automatic escalation, and GPS-based dispatch.', gradient: 'from-pink-600 to-purple-600' },
                { title: 'Cost Optimization', description: 'Reduce patrol time by up to 40% with optimized routes while maintaining comprehensive coverage.', gradient: 'from-amber-600 to-orange-600' },
                { title: 'Mobile-First Design', description: 'Empower patrol officers with intuitive mobile apps that work offline and sync automatically.', gradient: 'from-rose-600 to-red-600' }
              ].map((benefit, index) => {
                const isVisible = visibleSections.has('benefits-section');
                return (
                  <div
                    key={index}
                    className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-orange-500/30 overflow-hidden transition-all duration-700 p-8 rounded-xl ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${0.1 + (index * 0.1)}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                    <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${benefit.gradient} rounded-l-xl`}></div>
                    
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
                <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent mt-2">
                  Questions
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                Everything you need to know about Smart Patrolling
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
                            className={`w-6 h-6 text-orange-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/20 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
        
        {/* Outer Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-orange-600/20 via-red-600/20 to-yellow-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div
            data-section-id="cta-section"
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              visibleSections.has('cta-section')
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-12 md:p-16 overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
                <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-orange-400 to-transparent"></div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-red-400 to-transparent"></div>
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-red-400 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-yellow-400 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-20 h-20">
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-orange-400 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-orange-400 to-transparent"></div>
              </div>

              {/* Grid Overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>

              <div className="relative text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6 smartpatrol-glow-badge">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-mono text-orange-400 uppercase tracking-wider">Get Started Today</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-white">Ready to </span>
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">Revolutionize</span>
                  <br />
                  <span className="text-white">Your Security Operations?</span>
                </h2>
                
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Experience the power of intelligent patrol management. Schedule a demo or contact us to learn more.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Request a Demo
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300"
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
                <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500">
                  {['Free Trial', '24/7 Support', 'Easy Setup', 'Offline Mode'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        /* Grid Animation */
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .smartpatrol-grid {
          animation: gridMove 20s linear infinite;
        }

        /* Particle Animation */
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }

        .smartpatrol-particle {
          animation: particleFloat 15s linear infinite;
        }

        /* Slow Spin */
        @keyframes spinSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .smartpatrol-spin {
          animation: spinSlow 50s linear infinite;
        }

        /* Badge Glow */
        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 25px rgba(249, 115, 22, 0.5), 0 0 40px rgba(239, 68, 68, 0.3); }
        }

        .smartpatrol-glow-badge {
          animation: badgeGlow 3s ease-in-out infinite;
        }

        /* Gradient Text Glow */
        .smartpatrol-gradient-text {
          text-shadow: 0 0 40px rgba(249, 115, 22, 0.3), 0 0 80px rgba(239, 68, 68, 0.2);
        }

        /* Scan Line */
        @keyframes scanLine {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }

        .smartpatrol-scan-line {
          animation: scanLine 3s ease-in-out infinite;
        }

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

        .animate-fadeInDown {
          animation: fadeInDown 1s ease-out both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out both;
        }
      `}</style>
    </div>
  );
}

export default SmartPatrolling;
