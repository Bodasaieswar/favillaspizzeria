import { motion } from 'framer-motion'
import './App.css'

// Menu Data
const menuData = {
  pizzas: [
    {
      name: "NY Style Cheese Pizza",
      description: "Classic New York style pizza with our signature tomato sauce and premium mozzarella cheese",
      price: "14.99",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      badge: "Classic"
    },
    {
      name: "Pepperoni Pizza",
      description: "Loaded with premium pepperoni slices over melted mozzarella and tangy tomato sauce",
      price: "16.99",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
      badge: "Popular"
    },
    {
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomatoes, basil, and extra virgin olive oil on a crispy crust",
      price: "15.99",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop"
    },
    {
      name: "Supreme Pizza",
      description: "Pepperoni, sausage, bell peppers, onions, mushrooms, and black olives",
      price: "18.99",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      badge: "Best Seller"
    },
    {
      name: "Sicilian Pizza",
      description: "Thick, square-cut pizza with a fluffy interior and crispy bottom crust",
      price: "17.99",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop"
    },
    {
      name: "White Pizza",
      description: "Ricotta, mozzarella, garlic, and olive oil - no tomato sauce",
      price: "16.99",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    }
  ],
  calzones: [
    {
      name: "Classic Calzone",
      description: "Folded pizza dough stuffed with ricotta, mozzarella, and your choice of fillings",
      price: "12.99",
      image: "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=400&h=300&fit=crop"
    },
    {
      name: "Meat Lovers Calzone",
      description: "Stuffed with pepperoni, sausage, ham, bacon, and melted cheese",
      price: "14.99",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      badge: "Hearty"
    },
    {
      name: "Stromboli",
      description: "Rolled pizza dough with Italian meats, cheese, and marinara dipping sauce",
      price: "13.99",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop"
    }
  ],
  appetizers: [
    {
      name: "Garlic Knots",
      description: "Fresh-baked knots brushed with garlic butter and parmesan",
      price: "6.99",
      image: "https://images.unsplash.com/photo-1619531040576-f9416aedb7c3?w=400&h=300&fit=crop",
      badge: "Fan Favorite"
    },
    {
      name: "Mozzarella Sticks",
      description: "Golden fried mozzarella served with marinara sauce",
      price: "8.99",
      image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&h=300&fit=crop"
    },
    {
      name: "Buffalo Wings",
      description: "Crispy wings tossed in your choice of sauce with ranch or blue cheese",
      price: "12.99",
      image: "https://images.unsplash.com/photo-1608039829572-9b5e51034c34?w=400&h=300&fit=crop"
    },
    {
      name: "Bruschetta",
      description: "Toasted bread topped with fresh tomatoes, basil, and balsamic glaze",
      price: "7.99",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop"
    }
  ],
  salads: [
    {
      name: "Caesar Salad",
      description: "Romaine lettuce, parmesan, croutons, and creamy Caesar dressing",
      price: "9.99",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop"
    },
    {
      name: "Garden Salad",
      description: "Mixed greens, tomatoes, cucumbers, onions, and your choice of dressing",
      price: "8.99",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
    },
    {
      name: "Antipasto Salad",
      description: "Italian meats, cheeses, olives, peppers, and mixed greens",
      price: "12.99",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop"
    }
  ],
  pasta: [
    {
      name: "Spaghetti & Meatballs",
      description: "Classic spaghetti with homemade meatballs and marinara sauce",
      price: "14.99",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
      badge: "Homemade"
    },
    {
      name: "Chicken Parmesan",
      description: "Breaded chicken cutlet with marinara and melted mozzarella over pasta",
      price: "16.99",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop"
    },
    {
      name: "Baked Ziti",
      description: "Ziti pasta baked with ricotta, mozzarella, and meat sauce",
      price: "13.99",
      image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400&h=300&fit=crop"
    },
    {
      name: "Fettuccine Alfredo",
      description: "Fettuccine tossed in creamy parmesan alfredo sauce",
      price: "13.99",
      image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop"
    }
  ],
  subs: [
    {
      name: "Italian Sub",
      description: "Ham, salami, capicola, provolone, lettuce, tomato, onion, and Italian dressing",
      price: "11.99",
      image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&h=300&fit=crop"
    },
    {
      name: "Meatball Sub",
      description: "Homemade meatballs with marinara sauce and melted provolone",
      price: "10.99",
      image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&h=300&fit=crop"
    },
    {
      name: "Chicken Parm Sub",
      description: "Breaded chicken, marinara, and melted mozzarella on a toasted roll",
      price: "12.99",
      image: "https://images.unsplash.com/photo-1481070555726-e2fe8357571d?w=400&h=300&fit=crop"
    }
  ]
}

const categoryIcons = {
  pizzas: "🍕",
  calzones: "🥟",
  appetizers: "🧆",
  salads: "🥗",
  pasta: "🍝",
  subs: "🥪"
}

const categoryNames = {
  pizzas: "NY Style Pizzas",
  calzones: "Calzones & Stromboli",
  appetizers: "Appetizers",
  salads: "Fresh Salads",
  pasta: "Pasta Dishes",
  subs: "Hot Subs"
}

function App() {
  const orderUrl = "https://www.doordash.com/store/favilla's-new-york-pizza-asheville-345038/"

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header */}
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
              alt="Favilla's Pizza"
              className="w-12 h-12 rounded-full border-3 border-gold object-cover"
            />
            <div>
              <h1 className="text-white text-2xl font-bold drop-shadow-lg">Favilla's NY Pizza</h1>
              <span className="text-gold text-sm">Authentic New York Style</span>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            <a href="#menu" className="text-white font-medium hover:text-gold transition-colors">Menu</a>
            <a href="#location" className="text-white font-medium hover:text-gold transition-colors">Location</a>
            <a href="#hours" className="text-white font-medium hover:text-gold transition-colors">Hours</a>
            <motion.a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold to-gold-dark text-dark-brown px-6 py-2 rounded-full font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transition-shadow"
            >
              Order Online
            </motion.a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-red/95 to-dark-brown/95"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920')" }}
        ></div>

        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full border border-gold/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Authentic <span className="text-gold">New York</span> Pizza
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Hand-tossed, brick-oven baked perfection in the heart of Asheville
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold to-gold-dark text-dark-brown px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider shadow-2xl hover:shadow-gold/50 transition-all"
            >
              Order Now
            </motion.a>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-3 border-white text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-primary-red transition-all"
            >
              View Menu
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-gradient-to-b from-warm-white to-cream">
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
            <p className="text-gray-600 text-lg mt-6">Fresh ingredients, authentic recipes, made with love</p>
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
              <div className="flex items-center gap-4 mb-8 pb-4 border-b-3 border-primary-green">
                <span className="text-4xl">{categoryIcons[category]}</span>
                <h3 className="text-3xl font-bold text-primary-green">{categoryNames[category]}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
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
                        <span className="text-xl font-bold text-primary-red">${item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-20 px-4 bg-gradient-to-br from-primary-green to-primary-green-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Visit Us Today</h2>

              {/* Address */}
              <div className="flex items-start gap-5 mb-8">
                <span className="text-4xl text-gold">📍</span>
                <div>
                  <h4 className="text-gold text-xl font-semibold mb-2">Address</h4>
                  <p className="text-white/90 text-lg">5 Regent Park Blvd</p>
                  <p className="text-white/90 text-lg">Asheville, NC 28806</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 mb-8">
                <span className="text-4xl text-gold">📞</span>
                <div>
                  <h4 className="text-gold text-xl font-semibold mb-2">Phone</h4>
                  <a href="tel:828-225-2885" className="text-white/90 text-lg hover:text-gold transition-colors">
                    (828) 225-2885
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div id="hours" className="flex items-start gap-5">
                <span className="text-4xl text-gold">🕐</span>
                <div>
                  <h4 className="text-gold text-xl font-semibold mb-3">Hours of Operation</h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-white/90">
                    <span className="font-semibold">Monday - Thursday</span>
                    <span>11:00 AM - 8:00 PM</span>
                    <span className="font-semibold">Friday - Saturday</span>
                    <span>11:00 AM - 9:00 PM</span>
                    <span className="font-semibold">Sunday</span>
                    <span>12:00 PM - 8:00 PM</span>
                  </div>
                </div>
              </div>

              <motion.a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-10 bg-gradient-to-r from-gold to-gold-dark text-dark-brown px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all"
              >
                Order Online Now
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d-82.6!3d35.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598c8e8c8e8c8d%3A0x8c8e8c8e8c8e8c8e!2s5%20Regent%20Park%20Blvd%2C%20Asheville%2C%20NC%2028806!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Favilla's NY Pizza Location"
                className="w-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-brown text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-gold text-2xl font-bold mb-6 pb-3 border-b-2 border-primary-red inline-block">
                Favilla's NY Pizza
              </h4>
              <p className="text-white/70 leading-relaxed">
                Bringing authentic New York style pizza to Asheville since day one.
                Every slice is made with love and the freshest ingredients.
              </p>
            </div>

            <div>
              <h4 className="text-gold text-xl font-bold mb-6 pb-3 border-b-2 border-primary-red inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><a href="#menu" className="text-white/70 hover:text-gold hover:pl-2 transition-all">Our Menu</a></li>
                <li><a href="#location" className="text-white/70 hover:text-gold hover:pl-2 transition-all">Location</a></li>
                <li><a href="#hours" className="text-white/70 hover:text-gold hover:pl-2 transition-all">Hours</a></li>
                <li><a href={orderUrl} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold hover:pl-2 transition-all">Order Online</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-gold text-xl font-bold mb-6 pb-3 border-b-2 border-primary-red inline-block">
                Contact Us
              </h4>
              <div className="space-y-3 text-white/70">
                <p>5 Regent Park Blvd</p>
                <p>Asheville, NC 28806</p>
                <p>
                  <a href="tel:828-225-2885" className="hover:text-gold transition-colors">(828) 225-2885</a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50">
              © {new Date().getFullYear()} Favilla's NY Pizza. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Order Button */}
      <motion.a
        href={orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-red to-primary-red-dark text-white px-6 py-4 rounded-full font-bold uppercase tracking-wide shadow-2xl flex items-center gap-2 hover:shadow-primary-red/50 transition-shadow"
      >
        <span>🍕</span>
        Order Online
      </motion.a>
    </div>
  )
}

export default App
