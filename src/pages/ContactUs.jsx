import { useState, useEffect } from 'react';

function ContactUs() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

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
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you for your message! We will get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
      // Only log in development
      if (import.meta.env.DEV) {
        console.error('Error sending email:', error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div 
            data-section-id="hero"
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              visibleSections.has('hero')
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#FACC15] via-[#DB2777] to-[#4F46E5] bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Have a question or want to work together? We'd love to hear from you.
              <br />
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Additional Info */}
            <div 
              data-section-id="info-section"
              className={`space-y-8 transition-all duration-1000 ${
                visibleSections.has('info-section')
                  ? 'opacity-100 translate-x-0 rotate-0'
                  : 'opacity-0 -translate-x-12 -rotate-3'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Build Something
                  <span className="block bg-gradient-to-r from-[#FACC15] to-[#DB2777] bg-clip-text text-transparent">
                    Amazing Together
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Whether you have a project in mind, need a quote, or just want to say hello, 
                  we're here to help. Our team is ready to turn your vision into reality.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Why Choose Us?</h3>
                
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ),
                    title: 'Expert Team',
                    description: 'Experienced professionals dedicated to your success'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    ),
                    title: 'Fast Response',
                    description: 'Quick turnaround times on all inquiries'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    ),
                    title: 'Proven Results',
                    description: 'Track record of successful projects'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-700 ${
                      visibleSections.has('info-section')
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${0.5 + (index * 0.1)}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div 
                className={`pt-6 transition-all duration-700 ${
                  visibleSections.has('info-section')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '0.9s' }}
              >
                <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div 
              data-section-id="contact-form"
              className={`transition-all duration-1000 ${
                visibleSections.has('contact-form')
                  ? 'opacity-100 translate-x-0 rotate-0'
                  : 'opacity-0 translate-x-12 rotate-3'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                
                {/* Status Message */}
                {submitStatus.message && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/50 text-green-300' 
                      : 'bg-red-500/20 border border-red-500/50 text-red-300'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={20}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
                      placeholder="+60 123456789"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
                      placeholder="How can we help?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      maxLength={5000}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#DB2777] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional placeholder) */}
      <section className="relative py-20 border-t border-white/10">
        <div 
          data-section-id="map-section"
          className={`container mx-auto px-6 transition-all duration-1000 ${
            visibleSections.has('map-section')
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Find Us On The <span className="bg-gradient-to-r from-[#FACC15] to-[#DB2777] bg-clip-text text-transparent">Map</span>
              </h2>
              <p className="text-gray-400">Located in the heart of Kuala Lumpur</p>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-center p-12">
                <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-lg">Map integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
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
      `}</style>
    </div>
  );
}

export default ContactUs;

