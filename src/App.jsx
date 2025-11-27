import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import About from './components/About'
import Products from './components/Products'
import Member from './components/Member'
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />  
      <Hero />
      <Showcase />
      <About />
      <Products />
      <Member />
      <Footer />
    </div>
  )
}

export default App
