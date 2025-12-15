import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import herobotsLogo from '../assets/logo/Herobots-Logo-2025.png';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black relative z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img 
              src={herobotsLogo} 
              alt="HeroBots Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-medium text-white tracking-tight">
              HeroBots
            </span>
          </Link>
          
          {/* Desktop Navigation */}
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
            <Link to="/contact" className={`text-white/90 hover:text-white transition-all duration-300 font-medium relative group ${location.pathname === '/contact' ? 'text-white' : ''}`}>
              Contact
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-6 pb-4">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`text-white/90 hover:text-white transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 ${
                location.pathname === '/' ? 'bg-white/10 text-white' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className={`text-white/90 hover:text-white transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 ${
                location.pathname === '/about' ? 'bg-white/10 text-white' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/products" 
              onClick={closeMenu}
              className={`text-white/90 hover:text-white transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 ${
                location.pathname === '/products' ? 'bg-white/10 text-white' : ''
              }`}
            >
              Products
            </Link>
            <Link 
              to="/services" 
              onClick={closeMenu}
              className={`text-white/90 hover:text-white transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 ${
                location.pathname === '/services' ? 'bg-white/10 text-white' : ''
              }`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className={`text-white/90 hover:text-white transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 ${
                location.pathname === '/contact' ? 'bg-white/10 text-white' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

