import { useEffect, useRef, useState } from 'react';
import akmalImg from '../assets/members/akmal.png';
import nikhamdanImg from '../assets/members/ds-nikhamdan.png';
import syasyaImg from '../assets/members/syasya.png';

function About() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);

  const [isVisible, setIsVisible] = useState({
    hero: false,
    story: false,
    vision: false,
    mission: false,
    team: false,
  });

  const [displayedText, setDisplayedText] = useState('');
  
  const fullText = "Pioneering the future of ";
  const highlightedText = "AI, robotics, and security technology";

  const boardMembers = [
    {
      id: 1,
      name: "Dato Sri Nik Hamdan",
      position: "Chief Executive Officer",
      image: nikhamdanImg,
      gradient: "from-indigo-600 to-purple-600",
      imagePosition: "object-top",
      description: "As the CEO of HeroBots Sdn Bhd, Dato' Sri Nik's expertise and innovation drives our company's vision of revolutionizing the technology industry. He's passionate about creating advanced solutions that make a difference in people's life.\n\nDato' Sri Nik is poised to shape the company's future endeavor, paving the way groundbreaking solutions and advancements in the ever-evolving technology landscape."
    },
    {
      id: 2,
      name: "Nik Syasya Karmila",
      position: "Executive Director",
      image: syasyaImg,
      gradient: "from-purple-600 to-pink-600",
      description: "From designing intelligent embedded and AI-powered technologies, to cutting-edge, high-speed electronic systems at global semiconductor leader, AMD, Syasya has built a career defined by excellence and innovation.\n\nHer work blends hands-on engineering depth with strategic insight, enabling her to create advanced, purposeful electronic and smart-system solutions. Syasya brings not only technical strength, but a clear vision for shaping the next generation of intelligent technologies.\n\nHer leadership and collaborative approach empower teams to transform complex challenges into practical, forward-thinking solutions that drive real-world impact."
    },
    {
      id: 3,
      name: "Ahmad Akmal Yaakop",
      position: "Chief Technology Officer",
      image: akmalImg,
      gradient: "from-pink-600 to-indigo-600",
      imagePosition: "object-center",
      description: "A visionary tech leader passionate about blending innovation with real impact.\n\nAs CTO, Akmal drives smart, scalable security solutions while empowering teams to think bigger and move faster.\nWith experience across Southeast Asia from Malaysia to Indonesia, Philippines, Vietnam and Thailand, he builds bridges between technology, business, and people.\n\nFocused, adaptive, and future driven.\nAkmal leads with purpose, turning ideas into progress and vision into value."
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

    const targets = [heroRef.current, storyRef.current, visionRef.current, missionRef.current, teamRef.current];
    targets.forEach(target => target && observer.observe(target));

    return () => observer.disconnect();
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!isVisible.hero) {
      setDisplayedText('');
      return;
    }

    let currentIndex = 0;
    const typingSpeed = 40; // milliseconds per character
    const totalText = fullText + highlightedText;

    const typingInterval = setInterval(() => {
      if (currentIndex < totalText.length) {
        setDisplayedText(totalText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [isVisible.hero, fullText, highlightedText]);

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Background blur effects */}
      <div className="absolute bottom-0 left-0 w-80 h-36 bg-purple-600/30 blur-3xl"></div>
      <div className="absolute top-28 right-0 w-80 h-36 bg-pink-600/30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        {/* Hero Section */}
        <div
          ref={heroRef}
          data-section="hero"
          className={`relative mb-40 transition-all duration-[1500ms] ease-out ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center relative">
            {/* Decorative floating elements */}
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-purple-500 rounded-full blur-sm opacity-60 animate-pulse"></div>
            <div className="absolute top-10 right-1/4 w-3 h-3 bg-pink-500 rounded-full blur-sm opacity-60 animate-pulse delay-300"></div>
            <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-indigo-500 rounded-full blur-sm opacity-60 animate-pulse delay-700"></div>
            
            {/* Main heading with enhanced styling */}
            <div className="relative inline-block mb-12">
              {/* <h1 className="text-7xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative z-10">
                HeroBots
              </h1> */}
              {/* Glow effect behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-indigo-600/20 blur-3xl -z-10"></div>
            </div>
            
            {/* Tagline with decorative lines */}
            <div className="relative max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-600 to-purple-600"></div>
                {/* <div className="w-2 h-2 bg-purple-600 rounded-full"></div> */}
                <div className="flex-1 h-px bg-gradient-to-r from-purple-600 via-pink-600 to-transparent"></div>
              </div>
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light min-h-[1.5em]">
                {displayedText.length <= fullText.length ? (
                  <span className="text-gray-300">{displayedText}</span>
                ) : (
                  <>
                    <span className="text-gray-300">{fullText}</span>
                    <span className="text-white font-medium">
                      {displayedText.slice(fullText.length)}
                    </span>
                  </>
                )}
              </p>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-600 to-indigo-600"></div>
                {/* <div className="w-2 h-2 bg-indigo-600 rounded-full"></div> */}
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-600 via-purple-600 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40">
          {/* Vision */}
          <div
            ref={visionRef}
            data-section="vision"
            className={`group relative transition-all duration-[1500ms] ease-out ${
              isVisible.vision ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Animated border lines */}
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-700 ease-out"></div>
            <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-indigo-600 to-purple-600 group-hover:h-full transition-all duration-700 ease-out delay-150"></div>
            <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-700 ease-out delay-300"></div>
            <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t from-indigo-600 to-purple-600 group-hover:h-full transition-all duration-700 ease-out delay-[450ms]"></div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 h-full relative overflow-hidden">
              {/* Gradient background effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  To empower organizations with intelligent, custom software solutions that transform ideas into 
                  impactful results. We strive to drive innovation, enhance efficiency, and unlock new possibilities 
                  across industries through technology tailored to every need.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div
            ref={missionRef}
            data-section="mission"
            className={`group relative transition-all duration-[1500ms] ease-out delay-200 ${
              isVisible.mission ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Animated border lines */}
            <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 group-hover:w-full transition-all duration-700 ease-out"></div>
            <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-pink-600 to-purple-600 group-hover:h-full transition-all duration-700 ease-out delay-150"></div>
            <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-pink-600 to-purple-600 group-hover:w-full transition-all duration-700 ease-out delay-300"></div>
            <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t from-pink-600 to-purple-600 group-hover:h-full transition-all duration-700 ease-out delay-[450ms]"></div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 h-full relative overflow-hidden">
              {/* Gradient background effect */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  To leverage advanced technology to help businesses optimize processes, solve critical problems, 
                  and unlock new opportunities for growth, staying ahead in a competitive landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Story Section */}
        <div
          ref={storyRef}
          data-section="story"
          className={`mb-40 transition-all duration-[1500ms] ease-out ${
            isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              {/* Animated border lines */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-700 ease-out z-20"></div>
              <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-purple-600 to-pink-600 group-hover:h-full transition-all duration-700 ease-out delay-150 z-20"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-pink-600 to-indigo-600 group-hover:w-full transition-all duration-700 ease-out delay-300 z-20"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t from-indigo-600 to-purple-600 group-hover:h-full transition-all duration-700 ease-out delay-[450ms] z-20"></div>
              
              {/* Enhanced background gradient effects */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-3xl"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-pink-500 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-indigo-500 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16 space-y-10 relative z-10">
                <div className="space-y-8">
                  {/* First paragraph */}
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                    HeroBots Sdn. Bhd. is a leading provider of <span className="text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">AI, robotics, and security technology solutions</span>, 
                    driving innovation that enhances efficiency, safety, and productivity across industries.
                  </p>
                  
                  {/* Second paragraph */}
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                    We specialize in <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI-Powered security systems</span>, intelligent management platforms, and robotics 
                    education, delivering solutions that safeguard assets, streamline operations, and empower 
                    organizations for the future of industrial transformation.
                  </p>
                  
                  {/* Third paragraph */}
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                    Founded with a vision to bridge the gap between cutting-edge technology and real-world applications, 
                    we've grown into a <span className="text-white font-semibold bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">trusted partner</span> for businesses seeking to transform their operations through 
                    intelligent automation and advanced security solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div
          ref={teamRef}
          data-section="team"
          className={`mb-20 transition-all duration-[1500ms] ease-out ${
            isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries driving innovation and excellence
            </p>
          </div>

          <div className="space-y-24 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => (
              <div
                key={member.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12 md:gap-16`}
              >
                {/* Circular Profile Image */}
                <div className="relative group flex-shrink-0 w-56 h-56 md:w-72 md:h-72">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${member.gradient} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative w-full h-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className={`w-full h-full object-cover ${member.imagePosition || 'object-top'} grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110`}
                      />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex-1 text-left space-y-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xl text-gray-400 mb-6">
                      {member.position}
                    </p>
                  </div>
                  {member.description && (
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-white/20 transition-all duration-300 group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                Innovation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-white/20 transition-all duration-300 group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                Excellence
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Committed to delivering the highest quality solutions that exceed expectations and drive results.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-white/20 transition-all duration-300 group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                Partnership
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Building long-term relationships with clients, working together to achieve shared success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

