import { motion } from 'framer-motion'
import MenuItem from './MenuItem'
import {
  menuData,
  categoryIcons,
  categoryNames,
} from '../../data/menuData'

function MenuSection() {
  return (
    <section
      id="menu"
      className="py-20 px-4 bg-gradient-to-b from-warm-white to-cream"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-primary-red mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold via-primary-red to-gold mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6">
            Fresh ingredients, authentic recipes, made with love
          </p>
        </motion.div>

        {Object.entries(menuData).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-[3px] border-primary-green">
              <span className="text-4xl">{categoryIcons[category]}</span>
              <h3 className="text-3xl font-bold text-primary-green">
                {categoryNames[category]}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <MenuItem key={item.name} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default MenuSection
