import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
