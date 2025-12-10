import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/Menu/MenuSection'
import LocationHours from './components/LocationHours'
import Footer from './components/Footer'
import FloatingOrderButton from './components/FloatingOrderButton'

function App() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Header />
      <Hero />
      <MenuSection />
      <LocationHours />
      <Footer />
      <FloatingOrderButton />
    </div>
  )
}

export default App
