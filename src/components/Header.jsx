function Header() {
  return (
    <header className="bg-black">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-10">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                H
              </span>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              HeroBots
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
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

