import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Products from './pages/Products'

function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  const handleLoadingComplete = () => {
    setFadeOut(true)
    // Wait for fade out animation before removing loading screen
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [loading])

  return (
    <>
      {/* Loading Screen with fade out animation */}
      {loading && (
        <div 
          className={`transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        </div>
      )}

      {/* Main Application */}
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
