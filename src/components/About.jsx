function About() {
  return (
    <section className="relative bg-black overflow-hidden pt-0 pb-20 min-h-screen">
      {/* Background blur effects matching other sections */}
      {/* <div className="absolute bottom-0 left-0 w-80 h-36 bg-purple-600/30 blur-3xl"></div>
      <div className="absolute top-28 right-0 w-80 h-36 bg-pink-600/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-3xl"></div>
       */}

       {/* WE ARE HEROBOTS Section - Full Width Edge to Edge */}
      <div className="relative mb-32 md:mb-40 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
        {/* Large Background Text with Gradient - Full Width Edge to Edge */}
        <h2 className="text-[17vw] md:text-[7vw] lg:text-[10vw] font-bold bg-gradient-to-r from-yellow-600/30 via-purple-600/30 to-yellow-600/30 bg-clip-text text-transparent leading-none select-none text-center w-full">
          WE ARE HEROBOTS
        </h2>
      
        {/* Overlay Description Text - positioned lower */}
        <div className="absolute top-[100%] left-0 right-0 transform -translate-y-1/2 flex justify-center px-4 md:px-8">
          <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl text-center">
            HeroBots Sdn. Bhd. is a leading provider of Al, robotics, and
            security technology
            solutions, driving innovation that enhances efficiency, safety, and productivity across industries.
            <br />
            <br />
            We specialize in Al-Powered security systems, intelligent 
            management platforms, and robotics education, delivering
            solutions that safeguard assets, streamline 
            operations, and empower organizations for the future of industrial
            transformation.
          </p>
        </div>
      </div>
      {/* OUR VISION Section - Full Width */}
      <div className="relative mb-32 md:mb-40 w-full py-16">
        {/* Large Background Text with Gradient - Full Width Edge to Edge */}
        <h2 className="text-[30vw] md:text-[20vw] lg:text-[12vw] font-bold bg-gradient-to-r from-yellow-600/30 via-purple-600/30 to-yellow-600/30 bg-clip-text text-transparent leading-none select-none text-center w-full">
          OUR VISION
        </h2>
        
        {/* Overlay Description Text - positioned lower */}
        <div className="absolute top-[77%] left-0 right-0 transform -translate-y-1/2 flex justify-center px-4 md:px-8">
          <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl text-center">
            To empower organizations with intelligent, custom software solutions that transform ideas into impactful results. We strive to drive innovation, enhance efficiency, and unlock new possibilities across industries through technology tailored to every need.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* OUR MISSION Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Large Mission Text with Gradient on Left */}
            <div>
              <h2 className="text-[15vw] md:text-[8vw] lg:text-[6vw] font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                <span className="block">OUR</span>
                <span className="block">MISSION</span>
              </h2>
            </div>
            
            {/* Mission Description on Right */}
            <div>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                To leverage advanced technology to help businesses optimize processes, solve critical problems, and unlock new opportunities for growth, staying ahead in a competitive landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Discover Our Story Button */}
        <div className="flex justify-center mt-16">
          <button className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full text-white text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;

