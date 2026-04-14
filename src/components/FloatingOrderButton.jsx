import { motion } from 'framer-motion'
import { ORDER_URL } from '../data/menuData'

function FloatingOrderButton() {
  return (
    <motion.a
      href={ORDER_URL}    
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-red to-primary-red-dark text-white px-6 py-4 rounded-full font-bold uppercase tracking-wide shadow-2xl flex items-center gap-2 hover:shadow-primary-red/50 transition-shadow"
    >
      <span>🍕</span>
      Order Online
    </motion.a>
  )
}

export default FloatingOrderButton
