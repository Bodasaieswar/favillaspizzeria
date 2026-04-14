import { motion } from 'framer-motion'
import { ORDER_URL, RESTAURANT_INFO } from '../data/menuData'

function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-red to-primary-red-dark shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Michelangelo NY Pizza & Pasta"
            className="w-12 h-12 rounded-full border-[3px] border-gold object-cover"
          />
          <div>
            <h1 className="text-white text-2xl font-bold drop-shadow-lg">
              {RESTAURANT_INFO.name}
            </h1>
            <span className="text-gold text-sm">{RESTAURANT_INFO.tagline}</span>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-6">
          <a
            href="#menu"
            className="text-white font-medium hover:text-gold transition-colors"
          >
            Menu
          </a>
          <a
            href="#location"
            className="text-white font-medium hover:text-gold transition-colors"
          >
            Location
          </a>
          <a
            href="#hours"
            className="text-white font-medium hover:text-gold transition-colors"
          >
            Hours
          </a>
          <motion.a
            href={ORDER_URL}
            
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gold to-gold-dark text-dark-brown px-6 py-2 rounded-full font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transition-shadow"
          >
            Order Online
          </motion.a>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
