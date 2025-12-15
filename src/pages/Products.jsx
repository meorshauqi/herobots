import { useState, useEffect, useRef } from 'react'

// Word-by-word reveal component
const WordReveal = ({ text, delay = 0, isVisible }) => {
  const words = text.split(' ')
  
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
  )
}

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedProduct, setExpandedProduct] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [revealedText, setRevealedText] = useState(new Set())

  const products = [
    {
      id: 1,
      name: 'AI Security Surveillance',
      tagline: 'Intelligent Monitoring, Proactive Protection',
      description: 'AI-powered video analytics for real-time threat detection and intelligent monitoring. Enhance security with automated alerts and comprehensive coverage.',
      category: 'security',
      gradient: 'from-blue-600 to-cyan-600',
      features: [
        'Real-time threat detection with 99.9% accuracy',
        'Automated alert system with instant notifications',
        'Comprehensive 24/7 coverage and monitoring',
        'AI-powered behavioral analytics',
        'Multi-camera integration support',
        'Cloud-based storage and retrieval',
        'Face recognition & object tracking',
        'Advanced motion detection algorithms'
      ],
      benefits: [
        'Reduce security incidents by up to 75%',
        'Lower operational costs with automation',
        'Instant response to potential threats',
        'Comprehensive audit trail and reporting'
      ],
      useCases: [
        'Corporate offices and business parks',
        'Retail stores and shopping centers',
        'Manufacturing facilities',
        'Educational institutions'
      ]
    },
    {
      id: 2,
      name: 'Workforce Management System',
      tagline: 'Optimize Your Team, Maximize Productivity',
      description: 'Streamline attendance, scheduling, and productivity tracking with automation. Optimize workforce efficiency and reduce administrative overhead.',
      category: 'management',
      gradient: 'from-purple-600 to-pink-600',
      features: [
        'Automated attendance & time tracking',
        'Smart scheduling with AI optimization',
        'Real-time productivity analytics dashboard',
        'Reduced administrative overhead',
        'Mobile app for on-the-go access',
        'Payroll integration capabilities',
        'Leave management automation',
        'Shift swapping and notifications'
      ],
      benefits: [
        'Save up to 20 hours per week on admin tasks',
        'Improve workforce efficiency by 35%',
        'Reduce scheduling conflicts by 90%',
        'Real-time insights into team performance'
      ],
      useCases: [
        'Multi-location businesses',
        'Manufacturing & production facilities',
        'Healthcare & hospitals',
        'Retail chains and franchises'
      ]
    },
    {
      id: 3,
      name: 'Smart Patrolling',
      tagline: 'Intelligent Routes, Complete Coverage',
      description: 'Automated patrol routes with real-time reporting and incident detection. Ensure comprehensive site coverage with intelligent route optimization.',
      category: 'security',
      gradient: 'from-orange-600 to-red-600',
      features: [
        'Automated patrol route planning',
        'Real-time GPS tracking & reporting',
        'Incident detection and logging',
        'Route optimization algorithms',
        'Checkpoint verification system',
        'Emergency alert capabilities',
        'Historical patrol data analytics',
        'Integration with security cameras'
      ],
      benefits: [
        'Ensure 100% site coverage daily',
        'Reduce patrol time by up to 40%',
        'Instant incident reporting and response',
        'Complete accountability and transparency'
      ],
      useCases: [
        'Industrial complexes and warehouses',
        'Residential communities',
        'Commercial properties',
        'Construction sites'
      ]
    },
    {
      id: 4,
      name: 'License Plate Recognition',
      tagline: 'Seamless Access, Total Control',
      description: 'Fast, accurate vehicle identification for security and access control. Automated entry management with detailed vehicle tracking and reporting.',
      category: 'security',
      gradient: 'from-green-600 to-teal-600',
      features: [
        'Lightning-fast vehicle identification',
        'Access control system integration',
        'Automated entry/exit management',
        'Comprehensive vehicle tracking',
        'Whitelist and blacklist management',
        'Real-time alerts for unauthorized vehicles',
        'Detailed reporting and analytics',
        'Works in all weather conditions'
      ],
      benefits: [
        'Process vehicles 10x faster than manual checks',
        '99.8% recognition accuracy rate',
        'Eliminate manual gate management',
        'Enhanced security with automated logging'
      ],
      useCases: [
        'Parking facilities and garages',
        'Gated communities',
        'Corporate campuses',
        'Toll collection systems'
      ]
    },
    {
      id: 5,
      name: 'Visitor Management System',
      tagline: 'Professional First Impressions, Enhanced Security',
      description: 'Modern check-in solutions with digital registration and badge printing. Streamline visitor processing while maintaining security protocols.',
      category: 'management',
      gradient: 'from-indigo-600 to-purple-600',
      features: [
        'Touchless digital registration',
        'Instant badge printing with photos',
        'Pre-registration capabilities',
        'Host notification system',
        'Visitor tracking and analytics',
        'Compliance with security protocols',
        'Multi-language support',
        'Integration with access control'
      ],
      benefits: [
        'Reduce check-in time by 70%',
        'Professional and modern experience',
        'Complete visitor audit trail',
        'Contactless and hygienic process'
      ],
      useCases: [
        'Corporate headquarters',
        'Government buildings',
        'Healthcare facilities',
        'Event venues and conferences'
      ]
    },
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'security', name: 'Security Solutions' },
    { id: 'management', name: 'Management Systems' },
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  // Handle category change with transition effect
  const handleCategoryChange = (categoryId) => {
    if (categoryId !== selectedCategory) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedCategory(categoryId)
        setExpandedProduct(null)
        setVisibleSections(new Set()) // Reset visibility on category change
        setTimeout(() => setIsTransitioning(false), 50)
      }, 300)
    }
  }

  // Scroll-triggered animations using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id')
            if (sectionId) {
              setVisibleSections((prev) => new Set([...prev, sectionId]))
              
              // Trigger text reveal with delay
              setTimeout(() => {
                setRevealedText((prev) => new Set([...prev, sectionId]))
              }, 400)
            }
          }
        })
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully in view
      }
    )

    // Observe all product sections
    const sections = document.querySelectorAll('[data-section-id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [filteredProducts])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Centered Content */}
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Content */}
            <div className="text-center mb-16">
              {/* Main Heading */}
              <div className="animate-fadeInDown" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#FACC15] via-[#DB2777] to-[#4F46E5] bg-clip-text text-transparent">
                    Smart Solutions
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl text-white font-medium">
                  for Modern Challenges
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6 animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                Transform your biggest operational challenges into automated, intelligent solutions. From security threats to workforce inefficiencies, our AI-powered products deliver measurable results.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
                {[
                  { number: '75%', label: 'Reduced Incidents' },
                  { number: '10x', label: 'Faster Processing' },
                  { number: '99.9%', label: 'Accuracy Rate' },
                  { number: '24/7', label: 'Always Active' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/30 transition-all duration-500 hover:scale-105"
                    style={{
                      animation: `zoomIn 0.6s ease-out ${0.5 + (index * 0.1)}s both`
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#DB2777] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#FACC15] to-[#DB2777] bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Problems We Solve Section */}
            <div className="mt-20 animate-fadeInUp" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Problems We <span className="bg-gradient-to-r from-[#9333EA] to-[#DB2777] bg-clip-text text-transparent">Solve</span>
                </h3>
                <p className="text-gray-400 text-lg">Real challenges. Intelligent solutions.</p>
              </div>

              {/* Problem Cards - 2x3 Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    problem: 'Security Breaches & Threats',
                    solution: 'AI-powered surveillance with real-time threat detection and automated alerts',
                    gradient: 'from-blue-600 to-cyan-600'
                  },
                  {
                    problem: 'Workforce Management Chaos',
                    solution: 'Automated attendance, scheduling, and productivity tracking systems',
                    gradient: 'from-purple-600 to-pink-600'
                  },
                  {
                    problem: 'Inefficient Site Patrols',
                    solution: 'Smart patrolling with GPS tracking and optimized route planning',
                    gradient: 'from-orange-600 to-red-600'
                  },
                  {
                    problem: 'Manual Vehicle Access Control',
                    solution: 'Lightning-fast license plate recognition and automated entry management',
                    gradient: 'from-green-600 to-teal-600'
                  },
                  {
                    problem: 'Slow Visitor Check-in Process',
                    solution: 'Touchless digital registration with instant badge printing',
                    gradient: 'from-indigo-600 to-purple-600'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative group bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                    style={{
                      animation: `slideRotate 0.7s ease-out ${1.1 + (index * 0.1)}s both`
                    }}
                  >
                    {/* Left gradient bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient}`}></div>
                    
                    <div className="pl-4">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#FACC15] group-hover:to-[#DB2777] transition-all">
                          {item.problem}
                        </h4>
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-8 border-y border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-500 transform ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#DB2777] text-white shadow-2xl scale-110'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:scale-105'
                }`}
                style={{
                  animation: `slideInFromTop 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Display */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className={`space-y-12 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {filteredProducts.map((product, index) => {
              const sectionId = `product-${product.id}`
              const isVisible = visibleSections.has(sectionId)
              const textRevealed = revealedText.has(sectionId)
              
              // Alternate entrance styles for variety
              const entranceStyles = [
                'opacity-0 translate-x-24 rotate-2',
                'opacity-0 -translate-x-24 -rotate-2',
                'opacity-0 translate-y-20 scale-90',
                'opacity-0 translate-x-32 skew-x-3',
                'opacity-0 -translate-x-32 -skew-x-3'
              ]
              
              const exitStyle = entranceStyles[index % entranceStyles.length]
              
              return (
              <div
                key={product.id}
                data-section-id={sectionId}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100 skew-x-0' : exitStyle
                }`}
                style={{
                  transformOrigin: index % 2 === 0 ? 'left center' : 'right center',
                  perspective: '1000px'
                }}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${product.gradient}`}></div>
                
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent transition-all duration-700 ${
                          textRevealed ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-4'
                        }`}
                        style={{ transitionDelay: '0.3s' }}>
                          {product.name}
                        </h3>
                        <p className={`text-xl text-gray-400 italic transition-all duration-700 ${
                          textRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                        style={{ transitionDelay: '0.5s' }}>
                          {product.tagline}
                        </p>
                      </div>
                      <div className={`hidden md:block text-6xl font-bold text-white/5 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-45 scale-50'
                      }`}>
                        0{product.id}
                      </div>
                    </div>
                    <p className={`text-lg text-gray-300 leading-relaxed transition-all duration-700 ${
                      textRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: '0.7s' }}>
                      {product.description}
                    </p>
                  </div>

                  {/* Three Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Features Column */}
                    <div className="space-y-4">
                      <h4 className={`text-xl font-bold text-white mb-4 flex items-center transition-all duration-700 ${
                        textRevealed ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-8 -rotate-6'
                      }`}
                      style={{ transitionDelay: '1s' }}>
                        <svg className="w-6 h-6 mr-2 text-[#4F46E5]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className={`flex items-start group/item hover:translate-x-2 transition-all duration-500 ${
                              textRevealed ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-90'
                            }`}
                            style={{ 
                              transitionDelay: `${1.1 + (idx * 0.08)}s`,
                              transform: textRevealed ? 'none' : 'translateX(-3rem) scale(0.9)'
                            }}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mr-3 mt-2 flex-shrink-0 animate-ping`}
                              style={{ animationDuration: '2s', animationDelay: `${1.2 + (idx * 0.08)}s` }}></div>
                            <span className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits Column */}
                    <div className="space-y-4">
                      <h4 className={`text-xl font-bold text-white mb-4 flex items-center transition-all duration-700 ${
                        textRevealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-75'
                      }`}
                      style={{ transitionDelay: '1.2s' }}>
                        <svg className="w-6 h-6 mr-2 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        Key Benefits
                      </h4>
                      <div className="space-y-3">
                        {product.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className={`flex items-start p-3 bg-white/5 hover:bg-white/10 transition-all duration-600 group/benefit ${
                              textRevealed ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-3'
                            }`}
                            style={{ 
                              transitionDelay: `${1.3 + (idx * 0.12)}s`,
                              transformStyle: 'preserve-3d'
                            }}
                          >
                            <svg className={`w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0 group-hover/benefit:scale-110 transition-all duration-300 ${
                              textRevealed ? 'rotate-0' : 'rotate-180'
                            }`} 
                            style={{ transitionDelay: `${1.4 + (idx * 0.12)}s` }}
                            fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases Column */}
                    <div className="space-y-4">
                      <h4 className={`text-xl font-bold text-white mb-4 flex items-center transition-all duration-700 ${
                        textRevealed ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 rotate-6'
                      }`}
                      style={{ transitionDelay: '1.4s' }}>
                        <svg className="w-6 h-6 mr-2 text-[#DB2777]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                        </svg>
                        Ideal For
                      </h4>
                      <div className="space-y-2">
                        {product.useCases.map((useCase, idx) => (
                          <div
                            key={idx}
                            className={`p-3 bg-gradient-to-r ${product.gradient} bg-opacity-10 border border-white/10 hover:border-white/30 transition-all duration-600 transform hover:scale-105 ${
                              textRevealed ? 'opacity-100 translate-x-0 scale-100 rotate-0' : 'opacity-0 translate-x-16 scale-75 -rotate-12'
                            }`}
                            style={{ 
                              transitionDelay: `${1.5 + (idx * 0.1)}s`,
                              transformOrigin: 'right center'
                            }}
                          >
                            <p className="text-gray-300 text-sm font-medium">{useCase}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div 
            data-section-id="cta-section"
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              visibleSections.has('cta-section') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our products can help you achieve your goals
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#DB2777] text-white font-semibold text-lg hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* PowerPoint-style Animations */}
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

        /* Smooth perspective for 3D effects */
        [style*="preserve-3d"] {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  )
}

export default Products


