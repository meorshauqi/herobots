import { useEffect, useState } from 'react'
import logo from '../assets/logo/Herobots-Logo-2025.png'

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Trigger PowerPoint-style exit animation
          setTimeout(() => {
            setIsExiting(true)
            // Complete loading after animation finishes
            setTimeout(() => {
              onLoadingComplete()
            }, 1000) // Match the CSS animation duration
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden ${isExiting ? 'animate-slide-zoom-out' : ''}`}>
      {/* Animated grid background */}
      <div className={`absolute inset-0 opacity-20 ${isExiting ? 'animate-slide-up-fast' : ''}`}>
        <div className="absolute inset-0 bg-grid-pattern animate-grid-flow"></div>
      </div>

      {/* Hexagonal frame decoration */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${isExiting ? 'animate-spin-zoom-out' : ''}`}>
        <div className="relative">
          <div className="hexagon-frame animate-spin-slow"></div>
          <div className="hexagon-frame-2 animate-spin-reverse"></div>
        </div>
      </div>

      {/* Particle effects */}
      <div className={`absolute inset-0 ${isExiting ? 'animate-fade-out-fast' : ''}`}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-4 ${isExiting ? 'animate-slide-up-zoom' : ''}`}>
        {/* Logo container with holographic effect */}
        <div className="relative mb-8 group">
          
          {/* Logo with glow effect */}
          <div className="relative animate-float">
            <img 
              src={logo} 
              alt="Herobots Logo" 
              className="w-48 h-48 mx-auto object-contain relative z-10"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(79, 70, 229, 0.6)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.4))'
              }}
            />
          </div>
        </div>

        {/* Futuristic progress bar */}
        <div className="w-80 mx-auto">
          {/* Progress bar container */}
          <div className="relative h-3 bg-gray-900 rounded-full overflow-hidden border border-[#4F46E5]/30 shadow-inner">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4F46E5]/10 to-transparent animate-shimmer"></div>
            
            {/* Progress fill with gradient */}
            <div 
              className="h-full bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#DB2777] relative transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Glowing edge */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            </div>
          </div>
          
          {/* Progress percentage with digital font style */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-[#4F46E5] text-xs font-mono tracking-wider">LOADING...</span>
            <span className="text-white text-lg font-bold font-mono tabular-nums tracking-wider">
              {progress}<span className="text-[#9333EA]">%</span>
            </span>
          </div>
        </div>

        {/* Tech-style loading indicator */}
        <div className="flex justify-center items-center space-x-1 mt-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-[#4F46E5] to-[#DB2777] rounded-full animate-wave"
              style={{
                height: '20px',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        {/* Bottom tech decoration */}
        <div className="mt-12 flex justify-center space-x-4 opacity-30">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent animate-pulse"></div>
          <div className="w-2 h-2 border border-[#9333EA] rotate-45 animate-spin-slow"></div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#DB2777] to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

