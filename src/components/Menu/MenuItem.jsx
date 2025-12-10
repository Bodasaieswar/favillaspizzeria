import { motion } from 'framer-motion'

function MenuItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 md:hover:-translate-y-2 md:hover:scale-[1.02]"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={`Photo of ${item.name}`}
          className="w-full h-48 object-cover transition-transform duration-500 md:hover:scale-110"
          loading="lazy"
        />
        {item.badge && (
          <span className="absolute top-4 right-4 bg-primary-red text-white px-3 py-1 rounded-full text-sm font-semibold">
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
          <span className="text-xl font-bold text-primary-red">
            ${item.price}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default MenuItem
