import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import HeroWorks from './pages/HeroWorks'
import AISecurity from './pages/AISecurity'
import LPR from './pages/LPR'
import SmartPatrolling from './pages/SmartPatrolling'
import VMS from './pages/VMS'

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
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/heroworks" element={<HeroWorks />} />
        <Route path="/products/ai-security" element={<AISecurity />} />
        <Route path="/products/licence-plate-recognition" element={<LPR />} />
        <Route path="/products/smart-patrolling" element={<SmartPatrolling />} />
        <Route path="/products/visitor-management" element={<VMS />} />
        <Route path="/contact" element={<ContactUs />} />
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
