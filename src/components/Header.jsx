import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import herobotsLogo from '../assets/logo/Herobots-Logo-2025.png';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsDropdownOpen, setIsMobileProductsDropdownOpen] = useState(false);

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
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <Link 
                to="/products" 
                className={`text-white/90 hover:text-white transition-all duration-300 font-medium relative ${location.pathname === '/products' || location.pathname.startsWith('/products/') ? 'text-white' : ''}`}
              >
              Products
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${location.pathname === '/products' || location.pathname.startsWith('/products/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-black border border-white/20 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  <Link 
                    to="/products/heroworks" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    HeroWorks
                  </Link>
                  <Link 
                    to="/products/ai-security" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    AI Security & Safety Surveillance
                  </Link>
                  <Link 
                    to="/products/smart-patrolling" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Smart Patrolling
                  </Link>
                  <Link 
                    to="/products/licence-plate-recognition" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Licence Plate Recognition
                  </Link>
                  <Link 
                    to="/products/visitor-management" 
                    className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Visitor Management System
            </Link>
                </div>
              </div>
            </div>
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
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-y-auto`}
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
            <div className="relative">
              <div className="flex items-center">
                <Link 
                  to="/products" 
                  onClick={closeMenu}
                  className={`flex-1 text-white/90 hover:text-white transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 ${
                    location.pathname === '/products' || location.pathname.startsWith('/products/') ? 'bg-white/10 text-white' : ''
                  }`}
                >
                  Products
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileProductsDropdownOpen(!isMobileProductsDropdownOpen);
                  }}
                  className="text-white/90 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                  aria-label="Toggle products menu"
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isMobileProductsDropdownOpen ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileProductsDropdownOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-6 pr-4 py-2 space-y-2">
                  <Link 
                    to="/products/heroworks" 
                    onClick={closeMenu}
                    className="block text-white/80 hover:text-white transition-all duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
                  >
                    HeroWorks
                  </Link>
                  <Link 
                    to="/products/ai-security" 
                    onClick={closeMenu}
                    className="block text-white/80 hover:text-white transition-all duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
                  >
                    AI Security & Safety Surveillance
                  </Link>
                  <Link 
                    to="/products/smart-patrolling" 
                    onClick={closeMenu}
                    className="block text-white/80 hover:text-white transition-all duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
                  >
                    Smart Patrolling
                  </Link>
                  <Link 
                    to="/products/licence-plate-recognition" 
                    onClick={closeMenu}
                    className="block text-white/80 hover:text-white transition-all duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
                  >
                    Licence Plate Recognition
                  </Link>
                  <Link 
                    to="/products/visitor-management" 
                    onClick={closeMenu}
                    className="block text-white/80 hover:text-white transition-all duration-200 py-2 px-4 rounded-lg hover:bg-white/10"
                  >
                    Visitor Management System
                  </Link>
                </div>
              </div>
            </div>
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

