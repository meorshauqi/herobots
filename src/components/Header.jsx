import { Link, useLocation } from 'react-router-dom'
import herobotsLogo from '../assets/logo/Herobots-Logo-2025.png';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-black">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={herobotsLogo} 
              alt="HeroBots Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-medium text-white tracking-tight">
              HeroBots
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-white/90 hover:text-white transition-all duration-300 font-medium relative group ${location.pathname === '/' ? 'text-white' : ''}`}>
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/about" className={`text-white/90 hover:text-white transition-all duration-300 font-medium relative group ${location.pathname === '/about' ? 'text-white' : ''}`}>
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/products" className={`text-white/90 hover:text-white transition-all duration-300 font-medium relative group ${location.pathname === '/products' ? 'text-white' : ''}`}>
              Products
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${location.pathname === '/products' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <Link to="/services" className={`text-white/90 hover:text-white transition-all duration-300 font-medium relative group ${location.pathname === '/services' ? 'text-white' : ''}`}>
              Services
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${location.pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            <a href="#contact" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <button className="ml-auto bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Enquire With Us
            </button>
          
          <button className="md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

