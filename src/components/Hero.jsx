function Hero() {
    return (
        <main className="relative flex-grow bg-black overflow-hidden">

        <div className="absolute botto-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            <span className="block">Accelerating</span>
            <span className="block">The Future With</span>
            <span className="block">Cutting-edge Solutions</span>
            </h1>            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to product, we make it happen
            </p>
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Performance</h3>
              <p className="text-gray-600">Lightning-fast solutions optimized for speed and efficiency</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security to protect your data</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Customizable</h3>
              <p className="text-gray-600">Tailored solutions to fit your unique needs</p>
            </div>
          </div> */}
        </div>
      </main>
    );
}

export default Hero;