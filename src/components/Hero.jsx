import logo from '../assets/logo/logo.png';
import prasarana from '../assets/logo/prasarana.png';
import pbjv from '../assets/logo/pbjv.png';
import baxtech from '../assets/logo/baxtech.webp';

function Hero() {
  const clients = [
    { name: "HeroBots", logo: logo },
    { name: "Prasarana", logo: prasarana },
    { name: "PBJV", logo: pbjv },
    { name: "Baxtech", logo: baxtech }
  ];

  
    return (
        <main className="relative flex-grow bg-black overflow-hidden">    
        {/* Large circular glow - bottom area */}
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-600/40 rounded-full blur-3xl"></div>
        
        {/* Medium circular glow - top area */}
        <div className="absolute top-20 right-32 w-80 h-80 bg-pink-600/40 rounded-full blur-3xl"></div>
        
        {/* Small accent - middle left */}
        <div className="absolute top-1/3 left-32 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl"></div>
        
        {/* Diagonal beam effect - center */}
        <div className="absolute top-1/4 right-1/4 w-96 h-32 bg-gradient-to-r from-indigo-500/20 via-purple-500/30 to-pink-500/20 blur-2xl rotate-45"></div>
        <div className="container mx-auto px-6 py-40">
          <div className="text-center mb-40">
            <h1 className="text-6xl font-medium mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent animate-slideInLeft">
            <span className="block pb-10">Accelerating</span>
            <span className="block pb-10">The Future With</span>
            <span className="block pb-10">Cutting-edge Solutions</span>
            </h1>            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slideInLeft">
            From concept to product, we make it happen
            </p>
          </div>

          {/* Client Logos Section */}
          <div className="relative overflow-hidden max-w-6xl mx-auto animate-slideInLeft delay-600">
            {/* Infinite Scrolling Logos */}
            <div className="relative">
              {/* Gradient overlays for fade effect */}
              {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div> */}
              
              {/* Scrolling container */}
              <div className="flex items-center animate-scroll">
                {/* First set of logos */}
                {clients.map((client, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 mx-12 h-24 flex items-center justify-center"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className={`${client.name === "HeroBots" ? "h-24" : "h-16"} w-auto object-contain filter grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 mx-12 h-24 flex items-center justify-center"
                  >
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className={`${client.name === "HeroBots" ? "h-24" : "h-16"} w-auto object-contain filter grayscale brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Hero;