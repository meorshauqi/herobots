function Products() {
  const products = [
    {
      id: 1,
      title: "Smart Patrolling",
      description: "AI-powered patrol monitoring system with real-time tracking and automated reporting.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "License Plate Recognition",
      description: "Advanced OCR technology for instant vehicle identification and access control.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Visitor Management System",
      description: "Streamlined check-in/check-out process with digital badges and visitor analytics.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "AI Security Surveillance",
      description: "Intelligent video analytics with threat detection and automated alert systems.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      gradient: "from-pink-600 to-rose-600"
    },
    {
      id: 5,
      title: "HR System Software",
      description: "Comprehensive HR management with payroll, attendance, and performance tracking.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 6,
      title: "Software & Apps Development",
      description: "Custom software solutions and mobile applications tailored to your business needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-violet-600 to-indigo-600"
    }
  ];

  return (
    <section className="relative bg-black overflow-hidden py-20 min-h-screen">
      {/* Background blur effects matching other sections */}
      {/* <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-600/40 rounded-full blur-3xl"></div> */}
      <div className="absolute bottom-10 right-32 w-80 h-80 bg-pink-600/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      {/* OUR PRODUCTS Section - Full Width */}
      <div className="relative mb-32 md:mb-40 w-full pt-0 pb-0">
        {/* Large Background Text with Gradient - Full Width Edge to Edge */}
        <h2 className="text-[27vw] md:text-[17vw] lg:text-[12vw] font-bold bg-gradient-to-r from-yellow-600/30 via-purple-600/30 to-yellow-600/30 bg-clip-text text-transparent leading-none select-none text-center w-full">
          OUR PRODUCTS
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Products Bento Grid - Asymmetric Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Row 1 - 2 large cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {products.slice(0, 2).map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl h-[400px]"
              >
                {/* Diagonal split background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                
                {/* Diagonal accent line */}
                <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-b ${product.gradient} transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-150`}></div>
                
                {/* Content */}
                <div className="relative h-full p-10 flex flex-col justify-between backdrop-blur-sm border border-white/10">
                  <div>
                    {/* Number Badge */}
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${product.gradient} rounded-full mb-6`}>
                      <span className="text-white font-bold text-sm">0{product.id}</span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  {/* Icon at bottom */}
                  <div className="flex items-end justify-between">
                    <div className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <div className="text-white">
                        {product.icon}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - 3 medium cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {products.slice(2, 5).map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl h-[350px]"
              >
                {/* Background with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]"></div>
                <div className={`absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t ${product.gradient} opacity-30 group-hover:h-full transition-all duration-700`}></div>
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col backdrop-blur-sm border border-white/10">
                  {/* Icon at top */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-500`}>
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="mb-4">
                    <span className={`text-6xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent opacity-20`}>
                      0{product.id}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - 1 wide card */}
          <div className="grid grid-cols-1 gap-6">
            {products.slice(5, 6).map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl h-[300px]"
              >
                {/* Split background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/[0.02] to-white/5"></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                
                {/* Content in horizontal layout */}
                <div className="relative h-full p-10 flex items-center justify-between backdrop-blur-sm border border-white/10">
                  <div className="flex-1 max-w-2xl">
                    {/* Number Badge */}
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${product.gradient} rounded-full mb-6`}>
                      <span className="text-white font-bold text-sm">0{product.id}</span>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  {/* Large icon on the right */}
                  <div className={`hidden md:flex w-32 h-32 bg-gradient-to-br ${product.gradient} rounded-3xl items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ml-10`}>
                    <div className="text-white scale-150">
                      {product.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-6 text-lg">
            Interested in our products? Let's discuss how we can help your business.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
  
export default Products;
  
  