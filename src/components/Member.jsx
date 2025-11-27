import { useEffect, useRef, useState } from 'react';
import akmalImg from '../assets/members/akmal.png';
import nikhamdanImg from '../assets/members/ds-nikhamdan.png';
import syasyaImg from '../assets/members/syasya.png';

function Member() {
    const memberRef = useRef(null);
    
    const [isVisible, setIsVisible] = useState({
      member: false,
    });

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
        description: "From designing intelligent embedded and AI-powered technologies, to cutting-edge, high-speed electronic systems at global semiconductor leader, AMD, Syasya has built a career defined by excellence and innovation. \n\nHer work blends hands-on engineering depth with strategic insight, enabling her to create advanced, purposeful electronic and smart-system solutions. Syasya brings not only technical strength, but a clear vision for shaping the next generation of intelligent technologies. \n\nHer leadership and collaborative approach empower teams to transform complex challenges into practical, forward-thinking solutions that drive real-world impact."
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
        { threshold: 0.35 }
      );
  
      const targets = [memberRef.current];
      targets.forEach(target => target && observer.observe(target));
  
      return () => observer.disconnect();
    }, []);

    

    return (
      <section className="relative bg-black overflow-hidden pt-0 pb-60 min-h-screen ">
        {/* Background blur effects */}
        {/* <div className="absolute bottom-0 left-0 w-80 h-36 bg-purple-600/30 blur-3xl"></div> */}
        <div className="absolute top-28 right-0 w-80 h-36 bg-pink-600/30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 blur-3xl"></div>
        
        <div
          ref={memberRef}
          data-section="member"
          className={isVisible.member ? 'animate-slideInLeft' : 'opacity-0'}
        >
          <div className="container mx-auto px-6 relative z-10">
            {/* Title Section */}
            <div className="relative mb-20 w-full pt-0 pb-16">
              <h2 className="text-[30vw] md:text-[20vw] lg:text-[9vw] font-bold bg-gradient-to-r from-yellow-600/30 via-pink-600/50 to-indigo-600/30 bg-clip-text text-transparent leading-none select-none text-center w-full">
                MEET THE HEROES
              </h2>
            </div>

            {/* Board Members Alternating Layout */}
            <div className="space-y-32 max-w-7xl mx-auto">
              {boardMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-12 md:gap-16`}
                >
                  {/* Circular Profile Image */}
                  <div className="relative group flex-shrink-0 w-64 h-64 md:w-80 md:h-80">
                    {/* Gradient glow effect behind */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${member.gradient} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Main container with gradient background */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-1">
                      {/* Inner circle that clips the image */}
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
                  <div className="flex-1 text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {member.name}
                    </h3>
                    <p className="text-xl text-gray-400 mb-6">
                      {member.position}
                    </p>
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
        </div>
      </section>
    );
}

export default Member;