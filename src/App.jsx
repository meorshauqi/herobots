import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Products from './pages/Products'

function AppContent() {
  const [loading, setLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    // Show loading screen only on initial mount if we're on home page
    if (isInitialLoad && isHomePage) {
      setLoading(true)
      setIsInitialLoad(false)
    } else if (!isHomePage) {
      document.body.classList.add('loaded')
    }
  }, [isHomePage, isInitialLoad])

  const handleLoadingComplete = () => {
    setLoading(false)
    document.body.classList.add('loaded')
  }

  // Show loading screen on home page initial load
  if (loading && isHomePage) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
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
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
