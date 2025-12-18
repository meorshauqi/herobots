import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import aiSecurityHero from '../assets/services/ai-security-serveillance-2.png';
import aiSecurity3 from '../assets/services/ai-security-serveillance-3.png';
import aiSecurity4 from '../assets/services/ai-security-serveillance-4.png';
import fireSmokeDetection from '../assets/services/Fire-Smoke-Detection.png';
import faceRecognition from '../assets/services/face-recognition.png';

// Generate stable particle positions
const generateParticles = () => [...Array(25)].map((_, i) => ({
  id: i,
  left: `${(i * 4 + 3) % 100}%`,
  top: `${(i * 7 + 2) % 100}%`,
  delay: `${(i * 0.2) % 5}s`,
  duration: `${12 + (i % 6)}s`,
  color: i % 3 === 0 ? 'bg-cyan-400/40' : i % 3 === 1 ? 'bg-purple-400/40' : 'bg-pink-400/40'
}));

function AISecurity() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  // Memoize particles to prevent regeneration
  const particles = useMemo(() => generateParticles(), []);

  const benefits = [
    {
      title: 'Threat Detection',
      value: '99.9%',
      description: 'Accuracy rate'
    },
    {
      title: 'Response Time',
      value: '< 2s',
      description: 'Real-time alerts'
    },
    {
      title: 'Coverage',
      value: '24/7',
      description: 'Continuous monitoring'
    },
    {
      title: 'False Alarms',
      value: '< 1%',
      description: 'Reduced false positives'
    }
  ];

  const features = [
    {
      title: 'PPE Detection',
      description: 'Monitors safety gear compliance in real time. It automatically identifies missing protective equipment with instant alerts – ensuring a safer workplace and regulatory compliance.',
      image: aiSecurity3,
      gradient: 'from-blue-600 to-cyan-600',
      imagePosition: 'left'
    },
    {
      title: 'People Counting',
      description: 'Intelligent tracking system that monitors personnel movement, counts individuals in designated areas, and tracks objects across multiple camera feeds. Perfect for access control, crowd management, and asset monitoring in industrial and commercial environments.',
      image: aiSecurity4,
      gradient: 'from-purple-600 to-pink-600',
      imagePosition: 'right'
    },
    {
      title: 'Fire & Smoke Detection',
      description: 'Continuously analyzes video feeds to identify early signs of fire or smoke in real time. It enables rapid alerts and response, helping prevent damage, downtime, and safety risks.',
      image: fireSmokeDetection,
      gradient: 'from-orange-600 to-red-600',
      imagePosition: 'left'
    },
    {
      title: 'Facial Recognition & Access Control',
      description: 'Performs facial detection and event logging with age and gender estimation, supporting identity matching within a single camera stream and cross-camera environments.',
      image: faceRecognition,
      gradient: 'from-indigo-600 to-purple-600',
      imagePosition: 'right'
    }
  ];

  const keyFeatures = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Comprehensive monitoring dashboard with live video feeds, threat alerts, and security metrics all in one centralized interface.',
      gradient: 'from-blue-600 to-cyan-600',
      details: [
        'Live camera feed monitoring',
        'Real-time threat alerts',
        'Security metrics & analytics',
        'Customizable dashboard widgets'
      ]
    },
    {
      title: 'Multi-Camera Integration',
      description: 'Seamlessly integrate and manage multiple camera feeds from various locations with intelligent video analytics.',
      gradient: 'from-purple-600 to-pink-600',
      details: [
        'Unlimited camera support',
        'Cloud-based storage',
        'Remote access & monitoring',
        'Automatic backup & recovery'
      ]
    },
    {
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning algorithms that continuously improve threat detection accuracy and reduce false alarms.',
      gradient: 'from-orange-600 to-red-600',
      details: [
        'Deep learning models',
        'Behavioral analysis',
        'Anomaly detection',
        'Self-learning algorithms'
      ]
    },
    {
      title: 'Automated Alerts & Notifications',
      description: 'Instant notifications via SMS, email, or mobile app when security threats or incidents are detected.',
      gradient: 'from-green-600 to-teal-600',
      details: [
        'Multi-channel notifications',
        'Customizable alert rules',
        'Escalation workflows',
        'Mobile app push alerts'
      ]
    },
    {
      title: 'Advanced Reporting',
      description: 'Generate comprehensive security reports with detailed analytics, incident logs, and compliance documentation.',
      gradient: 'from-indigo-600 to-purple-600',
      details: [
        'Custom report builder',
        'Export to PDF/Excel',
        'Scheduled reports',
        'Compliance documentation'
      ]
    },
    {
      title: 'Cloud-Based Platform',
      description: 'Secure cloud infrastructure with enterprise-grade security, automatic updates, and scalable architecture.',
      gradient: 'from-pink-600 to-rose-600',
      details: [
        '99.9% uptime guarantee',
        'End-to-end encryption',
        'Automatic software updates',
        'Scalable infrastructure'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can I try the product for free?',
      answer: 'Of course! Email us at info@herobots.net to get access to a 3-day free trial of our AI Security & Surveillance system.'
    },
    {
      question: 'How accurate is the AI threat detection?',
      answer: 'Our AI-powered system achieves 99.9% accuracy in threat detection with less than 1% false alarm rate. The system continuously learns and improves from each detection to enhance accuracy over time.'
    },
    {
      question: 'Can I integrate with existing security cameras?',
      answer: 'Yes! Our system supports integration with most IP cameras, CCTV systems, and security equipment. Our team can help you connect your existing infrastructure with our AI analytics platform.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 customer support via email, phone, and live chat. Additionally, we provide comprehensive training sessions, documentation, and dedicated account managers for enterprise clients to ensure smooth implementation and ongoing support.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation time varies based on your facility size and requirements. Typically, small to medium facilities can be up and running within 1-2 weeks, while larger enterprises may take 3-4 weeks. Our team works closely with you to ensure a smooth transition.'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and follow industry-standard security protocols. Your data is stored in secure data centers with 99.9% uptime guarantee and automatic daily backups.'
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
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 aisecurity-grid-bg" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute w-1 h-1 rounded-full aisecurity-particle ${particle.color}`}
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
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

        {/* Rotating Gradient Orb */}
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full blur-3xl aisecurity-spin-slow -z-10" style={{
          background: 'conic-gradient(from 0deg, rgba(0, 255, 255, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(0, 255, 255, 0.1))'
        }}></div>

        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Content - 2 Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left relative">
                {/* Decorative Line */}
                <div className="hidden lg:block absolute -left-6 top-0 w-1 h-32 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full aisecurity-glow-badge"></div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 aisecurity-glow-badge animate-fadeInDown" style={{ animationDelay: '0.05s', animationFillMode: 'both' }}>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">AI-Powered Security</span>
                </div>

                <div className="animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent aisecurity-gradient-text">
                      AI Security
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-white font-medium mb-6">
                    Intelligent Surveillance Solutions
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                Next-generation solution designed to enhance safety, security, and operational efficiency across industries.
                </p>

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

              {/* Right Column - Image with HUD Design */}
              <div className="relative animate-fadeInUp flex justify-center lg:justify-end" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <div className="relative w-full" style={{ maxWidth: '560px' }}>
                  {/* Outer glow effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl -z-10 animate-pulse-slow"></div>
                  
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
                        src={aiSecurityHero} 
                        alt="AI Security Surveillance" 
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
                              <p className="text-xs font-mono text-cyan-400">AI Analysis</p>
                              <p className="text-xs text-gray-400">Real-time monitoring</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-mono text-green-400">99.9%</p>
                            <p className="text-xs text-gray-400">Accuracy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Tech Elements */}
                    <div className="absolute -top-4 -right-4 w-3 h-3 bg-cyan-400/50 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-purple-400/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 -right-6 w-2 h-2 bg-pink-400/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Alternating Text and Image */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Dot Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden lg:block"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">AI Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Powerful </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Detection Features</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Advanced AI-powered security solutions designed to protect what matters most</p>
          </div>

          <div className="max-w-7xl mx-auto space-y-32">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              const sectionId = `feature-${index}`;
              const isVisible = visibleSections.has(sectionId);
              
              return (
                <div
                  key={index}
                  data-section-id={sectionId}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } transition-all duration-1000`}
                  style={{
                    transitionDelay: `${index * 0.15}s`
                  }}
                >
                  {/* Timeline Node - Center */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-20">
                    <div className={`w-14 h-14 rounded-full bg-black border-2 border-cyan-500/50 flex items-center justify-center shadow-lg shadow-cyan-500/20 ${isVisible ? 'scale-100' : 'scale-0'} transition-transform duration-500`}
                      style={{ transitionDelay: `${0.3 + (index * 0.15)}s` }}>
                      <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Pulse ring */}
                    <div className={`absolute w-14 h-14 rounded-full border border-cyan-500/30 animate-ping`}></div>
                  </div>

                  {/* Image Column */}
                  <div className={isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                    <div className="relative group">
                      {/* Outer Glow */}
                      <div className={`absolute -inset-6 bg-gradient-to-r ${feature.gradient} opacity-20 rounded-3xl blur-3xl -z-10 group-hover:opacity-40 transition-all duration-700`}></div>
                      
                      {/* HUD Frame */}
                      <div className="relative" style={{ maxWidth: '450px', margin: '0 auto' }}>
                        {/* Corner Brackets */}
                        <div className="absolute -top-2 -left-2 w-10 h-10 z-20">
                          <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${feature.gradient}`}></div>
                          <div className={`absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b ${feature.gradient}`}></div>
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 z-20">
                          <div className={`absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l ${feature.gradient}`}></div>
                          <div className={`absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b ${feature.gradient}`}></div>
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-10 h-10 z-20">
                          <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${feature.gradient}`}></div>
                          <div className={`absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t ${feature.gradient}`}></div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 z-20">
                          <div className={`absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l ${feature.gradient}`}></div>
                          <div className={`absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t ${feature.gradient}`}></div>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                          {/* Scanning Line */}
                          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                            <div className={`absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent ${feature.gradient.replace('from-', 'via-').replace(' to-', ' ')} to-transparent animate-scan-line opacity-60`}></div>
                          </div>
                          
                          {/* Grid Overlay */}
                          <div className="absolute inset-0 z-10 pointer-events-none opacity-10" style={{
                            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)',
                            backgroundSize: '25px 25px'
                          }}></div>

                          <img 
                            src={feature.image} 
                            alt={feature.title}
                            className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105"
                          />
                          
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                          
                          {/* Feature Badge */}
                          <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-20">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse`}></div>
                            <span className="text-xs font-mono text-white/80 uppercase tracking-wider">Feature {String(index + 1).padStart(2, '0')}</span>
                          </div>
                          
                          {/* Status Indicator */}
                          <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-500/30 z-20">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs font-mono text-green-400">Active</span>
                          </div>
                          
                          {/* Bottom Info Bar */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 z-20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-xs font-mono text-gray-400">AI Verified</span>
                              </div>
                              <span className="text-xs font-mono text-cyan-400">99.9% Accuracy</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Floating dots */}
                        <div className={`absolute -top-4 ${isEven ? '-right-4' : '-left-4'} w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-ping`}></div>
                        <div className={`absolute -bottom-4 ${isEven ? '-left-4' : '-right-4'} w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-ping`} style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`${isEven ? 'order-1 lg:order-1 lg:text-left lg:pr-16' : 'order-1 lg:order-2 lg:text-right lg:pl-16'}`}>
                    <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : isEven ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8'}`}
                      style={{
                        transitionDelay: `${0.3 + (index * 0.15)}s`
                      }}
                    >
                      {/* Feature Number - Mobile */}
                      <div className={`lg:hidden inline-flex items-center gap-3 ${isEven ? '' : 'ml-auto'}`}>
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                          <span className="text-sm font-bold text-white font-mono">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                      
                      {/* Category Tag */}
                      <div className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 ${isEven ? '' : 'lg:ml-auto'}`}>
                        <svg className={`w-4 h-4 bg-gradient-to-r ${feature.gradient} rounded`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">AI Detection</span>
                      </div>
                      
                      <div className={`${isEven ? '' : 'lg:ml-auto'}`}>
                        <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent leading-tight`}>
                          {feature.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Feature highlights */}
                      <div className={`flex flex-wrap gap-3 ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}>
                        {['Real-time', 'AI-Powered', '24/7'].map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Gradient line */}
                      <div className={`flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-start`}>
                        <div className={`w-24 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features Carousel Section */}
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
              <p className="text-gray-400 text-lg animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Everything you need for comprehensive security surveillance</p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={goToFeaturePrevious}
                className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 md:bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Previous feature"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToFeatureNext}
                className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/70 md:bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Next feature"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Progress Indicator - Above carousel */}
              <div className="flex justify-center mb-6 md:mb-8">
                <div className="flex items-center gap-2">
                  {keyFeatures.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToFeatureSlide(idx)}
                      className={`transition-all duration-300 ${
                        idx === activeFeatureIndex
                          ? 'w-3 h-3 bg-blue-500 rounded-full'
                          : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                      }`}
                      aria-label={`Go to feature ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Carousel Track - Mobile: 1 card, Desktop: 3 cards */}
              <div className="overflow-hidden px-4 md:px-16">
                {/* Mobile View - Single Card */}
                <div className="md:hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${activeFeatureIndex * 100}%)`
                    }}
                  >
                    {keyFeatures.map((feature, index) => {
                      const isActive = index === activeFeatureIndex;
                      return (
                        <div
                          key={index}
                          className="w-full flex-shrink-0 px-2"
                        >
                          <div
                            className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/20 transition-all duration-500 p-6 w-full rounded-xl ${
                              isActive ? 'opacity-100' : 'opacity-50'
                            }`}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-10 rounded-xl`}></div>
                            <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${feature.gradient} rounded-l-xl`}></div>
                            
                            <div className="relative z-10">
                              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent text-center`}>
                                {feature.title}
                              </h3>
                              <p className="text-gray-300 text-sm mb-4 leading-relaxed text-center">
                                {feature.description}
                              </p>
                              <ul className="space-y-2">
                                {feature.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start text-xs text-gray-400">
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Desktop View - 3 Cards - All Visible */}
                <div className="hidden md:block">
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
                          className="w-1/3 flex-shrink-0 px-4 flex items-center"
                        >
                          <div
                            className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border transition-all duration-500 p-6 md:p-8 w-full rounded-xl ${
                              isActive 
                                ? 'border-white/30 scale-100 shadow-2xl z-10 opacity-100' 
                                : isPrevious || isNext
                                ? 'border-white/10 scale-95 opacity-70'
                                : 'border-white/5 scale-90 opacity-50'
                            }`}
                            style={{ minHeight: '450px' }}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl ${isActive ? 'opacity-10' : isPrevious || isNext ? 'opacity-5' : 'opacity-3'} transition-opacity duration-500`}></div>
                            <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${feature.gradient} rounded-l-xl ${isActive ? 'opacity-100' : 'opacity-50'}`}></div>
                            
                            <div className="relative z-10">
                              <h3 className={`${isActive ? 'text-2xl' : isPrevious || isNext ? 'text-xl' : 'text-lg'} font-bold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent text-center transition-all duration-300`}>
                                {feature.title}
                              </h3>
                              <p className={`text-gray-300 ${isActive ? 'text-base' : 'text-sm'} mb-4 leading-relaxed text-center transition-all duration-300`}>
                                {feature.description}
                              </p>
                              <ul className="space-y-2 max-w-xl mx-auto">
                                {feature.details.map((detail, idx) => (
                                  <li 
                                    key={idx} 
                                    className={`flex items-start ${isActive ? 'text-sm' : 'text-xs'} text-gray-400 transition-all duration-300`}
                                  >
                                    <svg className={`${isActive ? 'w-4 h-4' : 'w-3 h-3'} text-green-500 mr-2 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
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
                Everything you need to know about AI Security & Surveillance
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
                            className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
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
                backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-8">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">Get Started Today</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Ready to </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Secure</span>
                  <br />
                  <span className="text-white">Your Facility?</span>
                </h2>
                
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Experience the power of AI-driven security surveillance. Schedule a demo or contact us to learn more.
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                      <span>Free Trial</span>
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
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>99.9% Accuracy</span>
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
        /* Grid Animation */
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        .aisecurity-grid-bg {
          animation: gridMove 25s linear infinite;
        }

        /* Particle Animation */
        @keyframes particleFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) translateX(40px); opacity: 0; }
        }

        .aisecurity-particle {
          animation: particleFloat 15s linear infinite;
        }

        /* Slow Spin */
        @keyframes spinSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .aisecurity-spin-slow {
          animation: spinSlow 50s linear infinite;
        }

        /* Badge Glow */
        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.3); }
          50% { box-shadow: 0 0 25px rgba(0, 255, 255, 0.5), 0 0 40px rgba(147, 51, 234, 0.3); }
        }

        .aisecurity-glow-badge {
          animation: badgeGlow 3s ease-in-out infinite;
        }

        /* Gradient Text Glow */
        .aisecurity-gradient-text {
          text-shadow: 0 0 40px rgba(0, 255, 255, 0.4), 0 0 80px rgba(147, 51, 234, 0.2);
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
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
      `}</style>
    </div>
  );
}

export default AISecurity;
