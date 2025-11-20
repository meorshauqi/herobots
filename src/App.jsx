import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Hero from './components/Hero'
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />  
      <Hero />
      <Footer />
    </div>
  )
}

export default App
