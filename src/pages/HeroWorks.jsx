import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroWorksImage from '../assets/services/HeroWorks.png';

// Word-by-word reveal component
const WordReveal = ({ text, delay = 0, isVisible }) => {
  const words = text.split(' ');
  
  return (
    <span>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: isVisible ? `fadeInWord 0.5s ease-out ${delay + (index * 0.1)}s both` : 'none',
            opacity: isVisible ? 1 : 0
          }}
        >
          {word}{index < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  );
};

function HeroWorks() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const modules = [
    {
      title: 'Employee Management',
      description: 'Comprehensive employee profiles with complete lifecycle management from onboarding to offboarding.',
      gradient: 'from-blue-600 to-cyan-600',
      details: [
        'Centralized employee database',
        'Document management system',
        'Employee self-service portal',
        'Organizational chart visualization'
      ]
    },
    {
      title: 'Attendance & Time Tracking',
      description: 'Automated attendance tracking with biometric integration, shift management, and real-time monitoring.',
      gradient: 'from-purple-600 to-pink-600',
      details: [
        'Biometric & RFID integration',
        'GPS-based location tracking',
        'Shift scheduling & swapping',
        'Overtime & break management'
      ]
    },
    {
      title: 'Payroll Management',
      description: 'Streamlined payroll processing with automated calculations, tax compliance, and payslip generation.',
      gradient: 'from-orange-600 to-red-600',
      details: [
        'Automated salary calculations',
        'Tax & EPF/SOCSO deductions',
        'Multiple payment methods',
        'Comprehensive payroll reports'
      ]
    },
    {
      title: 'Leave Management',
      description: 'Intelligent leave management system with approval workflows, balance tracking, and calendar integration.',
      gradient: 'from-green-600 to-teal-600',
      details: [
        'Leave balance tracking',
        'Multi-level approval workflows',
        'Calendar integration',
        'Leave policy automation'
      ]
    },
    {
      title: 'Performance Management',
      description: '360-degree performance reviews with goal setting, KPI tracking, and continuous feedback mechanisms.',
      gradient: 'from-indigo-600 to-purple-600',
      details: [
        'Goal & KPI tracking',
        '360-degree reviews',
        'Performance analytics',
        'Career development planning'
      ]
    },
    {
      title: 'Recruitment & Onboarding',
      description: 'End-to-end recruitment process from job posting to candidate onboarding with automated workflows.',
      gradient: 'from-pink-600 to-rose-600',
      details: [
        'Job posting & applicant tracking',
        'Interview scheduling',
        'Background verification',
        'Digital onboarding workflows'
      ]
    }
  ];

  const keyFeatures = [
    {
      title: 'Real-Time Dashboard',
      description: 'Get instant insights into your workforce with comprehensive analytics, key metrics, and visual reports all in one place.',
      gradient: 'from-blue-600 to-cyan-600',
      details: [
        'Live employee statistics',
        'Attendance monitoring',
        'Performance metrics',
        'Customizable widgets'
      ]
    },
    {
      title: 'Mobile Application',
      description: 'Access all HR functions on-the-go with our fully-featured mobile app for iOS and Android devices.',
      gradient: 'from-purple-600 to-pink-600',
      details: [
        'Check-in/check-out',
        'Leave requests',
        'Payroll access',
        'Push notifications'
      ]
    },
    {
      title: 'Biometric Integration',
      description: 'Seamless integration with fingerprint, facial recognition, and RFID systems for secure attendance tracking.',
      gradient: 'from-orange-600 to-red-600',
      details: [
        'Multiple device support',
        'Real-time synchronization',
        'Anti-spoofing technology',
        'Cloud-based storage'
      ]
    },
    {
      title: 'Automated Payroll',
      description: 'Streamline payroll processing with automated calculations, tax compliance, and direct bank transfers.',
      gradient: 'from-green-600 to-teal-600',
      details: [
        'Auto calculations',
        'Tax compliance',
        'Bank integration',
        'Digital payslips'
      ]
    },
    {
      title: 'Advanced Reporting',
      description: 'Generate comprehensive reports and analytics to make data-driven decisions for your organization.',
      gradient: 'from-indigo-600 to-purple-600',
      details: [
        'Custom report builder',
        'Export to Excel/PDF',
        'Scheduled reports',
        'Data visualization'
      ]
    },
    {
      title: 'Cloud-Based Platform',
      description: 'Access your HRMS from anywhere with secure cloud infrastructure and automatic backups.',
      gradient: 'from-pink-600 to-rose-600',
      details: [
        '99.9% uptime guarantee',
        'Automatic backups',
        'Scalable infrastructure',
        'Enterprise security'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Can i try the product for free?',
      answer: 'Of course! Email us at info@herobots.net to get access to 3-day free trial.'
    },
    {
      question: 'Will i be able to customize and add onto existing modules?',
      answer: 'Certainly! Our solutions are flexible to customer requirements. Contact us at info@herobots.net to book an online/in-person meeting for us to understand provide suitable solutions based on your needs.'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Absolutely! HeroWorks provides fully-featured mobile applications for both iOS and Android devices. Employees and managers can check in, request leave, view payslips, and access all HR functions on-the-go.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 customer support via email, phone, and live chat. Additionally, we provide comprehensive training sessions, documentation, and dedicated account managers for enterprise clients to ensure smooth implementation and ongoing support.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation time varies based on your organization size and requirements. Typically, small to medium businesses can be up and running within 2-4 weeks, while larger enterprises may take 6-8 weeks. Our team works closely with you to ensure a smooth transition.'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      value: '75%',
      description: 'Reduction in administrative time'
    },
    {
      title: 'Cost Savings',
      value: '40%',
      description: 'Lower HR operational costs'
    },
    {
      title: 'Accuracy',
      value: '99.9%',
      description: 'Payroll calculation accuracy'
    },
    {
      title: 'Employee Satisfaction',
      value: '85%',
      description: 'Improved employee experience'
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

  // Auto-advance modules carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModuleIndex((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [modules.length]);

  // Auto-advance features carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) => (prev === keyFeatures.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [keyFeatures.length]);

  // Module navigation functions
  const goToModuleNext = () => {
    setActiveModuleIndex((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
  };

  const goToModulePrevious = () => {
    setActiveModuleIndex((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
  };

  const goToModuleSlide = (index) => {
    setActiveModuleIndex(index);
  };

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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-10 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Content - 2 Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left">
                <div className="animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-[#943cff] via-[#3d43f0] to-[#9406cc] bg-clip-text text-transparent">
                      HeroWorks
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-white font-medium mb-6">
                    Complete HRMS Solution
                  </h2>
                </div>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                No more paperwork hassles, submit and approve everything instantly.
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

              {/* Right Column - Image */}
              <div className="relative animate-fadeInUp flex justify-center lg:justify-end" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <div className="relative w-full" style={{ maxWidth: '260px' }}>
                  {/* Image with gradient border effect */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={heroWorksImage} 
                      alt="HeroWorks HRMS Dashboard" 
                      className="w-full h-auto object-contain"
                    />
                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  {/* Decorative glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-2xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efficiency Section */}
      <section className="relative py-20 border-y border-white/10">
        <div className="container mx-auto px-6">
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
                <div className="absolute top-0 left-[10%] w-12 h-12 text-purple-500/60 animate-float-slow">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                {/* Icon 2 - Top Right */}
                <div className="absolute top-0 right-[10%] w-10 h-10 text-pink-500/60 animate-float-medium" style={{ animationDelay: '0.5s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                {/* Icon 3 - Bottom Left */}
                <div className="absolute bottom-0 left-[15%] w-8 h-8 text-indigo-500/60 animate-float-fast" style={{ animationDelay: '1s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                {/* Icon 4 - Bottom Right */}
                <div className="absolute bottom-0 right-[15%] w-11 h-11 text-purple-500/60 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                {/* Icon 5 - Center Left */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-9 h-9 text-pink-500/50 animate-float-medium" style={{ animationDelay: '0.3s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {/* Icon 6 - Center Right */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 text-indigo-500/50 animate-float-fast" style={{ animationDelay: '0.8s' }}>
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 relative z-10">
                Dominate your industry through<br />
                <span className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">
                  exceptional efficiency
                </span>
              </h2>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Simplify Operations */}
              <div
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-700 p-8 ${
                  visibleSections.has('efficiency-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: '0.1s',
                  animation: visibleSections.has('efficiency-section') ? `slideRotate 0.7s ease-out 0.2s both` : 'none'
                }}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Simplify Operations</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Centralize workforce management from attendance tracking to task monitoring all in one platform. Say goodbye to scattered spreadsheets and manual processes.
                  </p>
                </div>
              </div>

              {/* Column 2: Boost Productivity */}
              <div
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-700 p-8 ${
                  visibleSections.has('efficiency-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: '0.2s',
                  animation: visibleSections.has('efficiency-section') ? `slideRotate 0.7s ease-out 0.3s both` : 'none'
                }}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {/* Bar Chart */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Boost Productivity</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Empower your teams with real-time updates, automated reports, and smart tools designed to increase output and reduce downtime.
                  </p>
                </div>
              </div>

              {/* Column 3: Drive Results */}
              <div
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-700 p-8 ${
                  visibleSections.has('efficiency-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: '0.3s',
                  animation: visibleSections.has('efficiency-section') ? `slideRotate 0.7s ease-out 0.4s both` : 'none'
                }}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 6l1.5 1.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Drive Results</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Improve efficiency, cut unnecessary costs, and make data-driven decisions that directly impact your bottom line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HRMS Modules Showcase - Carousel */}
      <section className="relative py-20 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div 
            data-section-id="modules-section"
            className={`max-w-6xl mx-auto transition-all duration-1000 ${
              visibleSections.has('modules-section')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                Comprehensive <span className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">HRMS Modules</span>
              </h2>
              <p className="text-gray-400 text-lg animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Integrated solutions for every HR need</p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={goToModulePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Previous module"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToModuleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Next module"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Progress Indicator - Above carousel */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-2">
                  {modules.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToModuleSlide(idx)}
                      className={`transition-all duration-300 ${
                        idx === activeModuleIndex
                          ? 'w-3 h-3 bg-blue-500 rounded-full'
                          : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                      }`}
                      aria-label={`Go to module ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Carousel Track */}
              <div className="overflow-hidden px-8 md:px-16">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(calc(33.333% - ${activeModuleIndex * 33.333}%))`,
                    minHeight: '500px'
                  }}
                >
                  {modules.map((module, index) => {
                    const isActive = index === activeModuleIndex;
                    const prevIndex = activeModuleIndex === 0 ? modules.length - 1 : activeModuleIndex - 1;
                    const nextIndex = activeModuleIndex === modules.length - 1 ? 0 : activeModuleIndex + 1;
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
                          <div className={`absolute inset-0 bg-gradient-to-r ${module.gradient} ${isActive ? 'opacity-10' : 'opacity-0'} transition-opacity duration-500`}></div>
                          <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${module.gradient}`}></div>
                          
                          <div className="relative z-10">
                            <h3 className={`text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r ${module.gradient} bg-clip-text text-transparent text-center transition-all duration-700 ${
                              isActive ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
                            }`}
                            style={{ transitionDelay: '0.3s' }}>
                              {module.title}
                            </h3>
                            <p className={`text-gray-300 text-sm md:text-base mb-4 leading-relaxed text-center transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${isActive ? '' : 'line-clamp-3'}`}
                            style={{ transitionDelay: '0.5s' }}>
                              {module.description}
                            </p>
                            {isActive && (
                              <ul className="space-y-2 max-w-xl mx-auto">
                                {module.details.map((detail, idx) => (
                                  <li 
                                    key={idx} 
                                    className="flex items-start text-xs md:text-sm text-gray-400 transition-all duration-500"
                                    style={{
                                      animation: `fadeInLeft 0.5s ease-out ${0.7 + (idx * 0.1)}s both`
                                    }}
                                  >
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* Key Features Showcase - Carousel */}
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
              <p className="text-gray-400 text-lg animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Everything you need to manage your workforce effectively</p>
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
                          ? 'w-3 h-3 bg-blue-500 rounded-full'
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
                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                Why Choose <span className="bg-gradient-to-r from-[#DB2777] to-[#8244ff] bg-clip-text text-transparent">HeroWorks</span>
              </h2>
              <p className="text-gray-400 text-lg animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>Transform your HR operations with intelligent automation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
              {
                title: 'Cloud-Based & Scalable',
                description: 'Access your HRMS from anywhere, anytime. Scale seamlessly as your organization grows.',
                gradient: 'from-blue-600 to-cyan-600'
              },
              {
                title: 'Mobile-First Design',
                description: 'Full-featured mobile app for employees and managers to access HR functions on the go.',
                gradient: 'from-purple-600 to-pink-600'
              },
              {
                title: 'AI-Powered Analytics',
                description: 'Get intelligent insights and predictions to make data-driven HR decisions.',
                gradient: 'from-orange-600 to-red-600'
              },
              {
                title: 'Seamless Integration',
                description: 'Connect with your existing systems including accounting, ERP, and other business tools.',
                gradient: 'from-green-600 to-teal-600'
              },
              {
                title: 'Compliance Ready',
                description: 'Stay compliant with local labor laws, tax regulations, and industry standards automatically.',
                gradient: 'from-indigo-600 to-purple-600'
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock customer support to ensure your HR operations run smoothly.',
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
                Everything you need to know about HeroWorks HRMS
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
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div 
            data-section-id="cta-section"
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              visibleSections.has('cta-section')
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInDown" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  Ready to Transform Your HR Operations?
                </h2>
                <p className="text-xl text-gray-300 mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                  Experience the power of HeroWorks HRMS. Schedule a demo or contact us to learn more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-block px-8 py-4 bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#DB2777] text-white font-semibold text-lg hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl rounded-lg animate-bounceIn"
                    style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
                  >
                    Request a Demo
                  </Link>
                  <Link 
                    to="/contact" 
                    className="inline-block px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 rounded-lg animate-bounceIn"
                    style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px) rotate(5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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

        @keyframes fadeInWord {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.8);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }

        /* Smooth perspective for 3D effects */
        [style*="preserve-3d"] {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}

export default HeroWorks;
