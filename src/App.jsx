import { motion } from 'framer-motion'
import './App.css'

// Menu Data - Complete Favilla's Real NY Pizza Menu
const menuData = {
  appetizers: [
    {
      name: "Jamaican Beef Patties",
      description: "Savory seasoned beef wrapped in a flaky golden crust",
      price: "5.50",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop"
    },
    {
      name: "Fried Zucchini Sticks",
      description: "Crispy breaded zucchini sticks served with marinara sauce",
      price: "8.99",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
    },
    {
      name: "Mozzarella Sticks",
      description: "Golden fried mozzarella served with marinara sauce",
      price: "8.99",
      image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&h=300&fit=crop",
      badge: "Popular"
    },
    {
      name: "Garlic Rolls",
      description: "Fresh-baked rolls brushed with garlic butter and herbs",
      price: "4.25",
      image: "https://images.unsplash.com/photo-1619531040576-f9416aedb7c3?w=400&h=300&fit=crop",
      badge: "Fan Favorite"
    },
    {
      name: "French Fries",
      description: "Crispy golden french fries",
      price: "3.99",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop"
    },
    {
      name: "Side Dressing",
      description: "Your choice of dressing on the side",
      price: "1.00",
      image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=300&fit=crop"
    },
    {
      name: "Side Marinara",
      description: "House-made marinara dipping sauce",
      price: "1.00",
      image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=300&fit=crop"
    }
  ],
  pizzas: [
    {
      name: "Favilla's Traditional Pizza",
      description: "Our signature NY style pizza with house-made sauce and premium mozzarella",
      price: "10.99",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      badge: "Signature"
    },
    {
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomatoes, basil, and extra virgin olive oil",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop",
      badge: "Classic"
    },
    {
      name: "Hidden Valley Pizza",
      description: "Ranch-based pizza with fresh toppings and melted cheese",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
    },
    {
      name: "BBQ Chicken Pizza",
      description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
      badge: "Popular"
    },
    {
      name: "Buffalo Chicken Pizza",
      description: "Spicy buffalo chicken with blue cheese crumbles",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop"
    },
    {
      name: "Cream Of Spinach Pizza",
      description: "Creamy spinach base with garlic and mozzarella",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
      name: "BBQ Delight Pizza",
      description: "BBQ sauce, mixed meats, onions, and peppers",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
    },
    {
      name: "Steak Deluxe Pizza",
      description: "Sliced steak, peppers, onions, and mushrooms",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
      name: "CheeseBurger Pizza",
      description: "Ground beef, pickles, onions, and special sauce",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop"
    },
    {
      name: "Fresco Pizza",
      description: "Fresh tomatoes, basil, garlic, and olive oil",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop"
    },
    {
      name: "Lasagna Pizza",
      description: "Ricotta, meat sauce, and mozzarella - lasagna on a pizza",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
    },
    {
      name: "Primavera Pizza",
      description: "Fresh seasonal vegetables with garlic and olive oil",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
      name: "House Special Pizza",
      description: "Pepperoni, sausage, peppers, onions, and mushrooms",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      badge: "Best Seller"
    },
    {
      name: "Veggie Special Pizza",
      description: "Mushrooms, peppers, onions, olives, and tomatoes",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&h=300&fit=crop"
    },
    {
      name: "Meat Special Pizza",
      description: "Pepperoni, sausage, ham, bacon, and ground beef",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
      badge: "Hearty"
    },
    {
      name: "Meatball Parmesan Pizza",
      description: "Sliced meatballs, marinara, and melted mozzarella",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop"
    },
    {
      name: "Eggplant Parmesan Pizza",
      description: "Breaded eggplant, marinara, and mozzarella",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop"
    },
    {
      name: "White Mediterranean Pizza",
      description: "Olive oil base, feta, olives, tomatoes, and spinach",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop"
    },
    {
      name: "Balsamic Chicken Pizza",
      description: "Grilled chicken, balsamic glaze, and fresh arugula",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
    },
    {
      name: "Chicken Parmesan Pizza",
      description: "Breaded chicken, marinara, and melted mozzarella",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop"
    }
  ],
  glutenFree: [
    {
      name: "GF Cream Of Spinach Pizza",
      description: "Creamy spinach base with garlic and mozzarella on 10\" gluten-free crust",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      badge: "Gluten Free"
    },
    {
      name: "GF Pizza Fresco",
      description: "Fresh tomatoes, basil, garlic on 10\" gluten-free crust",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop",
      badge: "Gluten Free"
    },
    {
      name: "GF BBQ Chicken Pizza",
      description: "BBQ chicken, onions, cilantro on 10\" gluten-free crust",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
      badge: "Gluten Free"
    },
    {
      name: "GF White Mediterranean Pizza",
      description: "Feta, olives, tomatoes, spinach on 10\" gluten-free crust",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      badge: "Gluten Free"
    },
    {
      name: "GF CheeseBurger Pizza",
      description: "Ground beef, pickles, special sauce on 10\" gluten-free crust",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",
      badge: "Gluten Free"
    },
    {
      name: "GF Margherita Pizza",
      description: "Fresh mozzarella, tomatoes, basil on 10\" gluten-free crust",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop",
      badge: "Gluten Free"
    },
    {
      name: "GF Chicken Parmesan Pizza",
      description: "Breaded chicken, marinara on 10\" gluten-free crust",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop",
      badge: "Gluten Free"
    },
    {
      name: "GF Hidden Valley Pizza",
      description: "Ranch-based with fresh toppings on 10\" gluten-free crust",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      badge: "Gluten Free"
    },
    {
      name: "GF Buffalo Chicken Pizza",
      description: "Spicy buffalo chicken on 10\" gluten-free crust",
      price: "16.49",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop",
      badge: "Gluten Free"
    }
  ],
  calzones: [
    {
      name: "Cheese Calzone",
      description: "Folded pizza dough stuffed with ricotta and mozzarella cheese",
      price: "11.49",
      image: "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=400&h=300&fit=crop"
    },
    {
      name: "Build Your Own Stromboli",
      description: "Choose your favorite fillings wrapped in fresh dough",
      price: "13.00",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop"
    },
    {
      name: "Traditional Stromboli",
      description: "Italian meats, cheese, and peppers rolled in fresh dough",
      price: "13.95",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop",
      badge: "Classic"
    },
    {
      name: "10\" Dough Ball",
      description: "Fresh pizza dough ball - perfect for homemade pizza",
      price: "3.00",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop"
    },
    {
      name: "14\" Dough Ball",
      description: "Fresh pizza dough ball - medium size",
      price: "6.00",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop"
    },
    {
      name: "16\" Dough Ball",
      description: "Fresh pizza dough ball - large size",
      price: "8.00",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop"
    }
  ],
  drinks: [
    {
      name: "Sweet Tea",
      description: "Refreshing Southern-style sweet tea",
      price: "2.49",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop"
    },
    {
      name: "Monster Energy Mean Bean",
      description: "Coffee-flavored energy drink",
      price: "3.50",
      image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&h=300&fit=crop"
    },
    {
      name: "San Pellegrino",
      description: "Premium Italian sparkling water",
      price: "3.50",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=300&fit=crop"
    },
    {
      name: "Bottled Water",
      description: "Pure refreshing bottled water",
      price: "1.59",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop"
    },
    {
      name: "Canned Soda",
      description: "Coke, Diet, Cherry, Sprite, Zero, or Lemonade",
      price: "1.59",
      image: "https://unsplash.com/photos/a-group-of-soda-cans-stacked-on-top-of-each-other-L7ugLVFdejY?w=400&h=300&fit=crop"
    },
    {
      name: "20oz Soda",
      description: "Coke, Diet, Cherry, Sprite, Pibb, or Lemonade",
      price: "2.29",
      image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop"
    },
    {
      name: "Minute Maid Apple Juice",
      description: "100% pure apple juice",
      price: "2.29",
      image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=400&h=300&fit=crop"
    },
    {
      name: "Manhattan Special",
      description: "Classic espresso coffee soda",
      price: "3.50",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop"
    },
    {
      name: "Powerade",
      description: "Sports drink to keep you energized",
      price: "2.50",
      image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&h=300&fit=crop"
    },
    {
      name: "Snapple",
      description: "Fruit Punch or Apple flavor",
      price: "2.29",
      image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop"
    }
  ],
  desserts: [
    {
      name: "Dunkin Donut",
      description: "Fresh donut from Dunkin",
      price: "3.00",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop"
    },
    {
      name: "Mascarpone Limoncello Cake",
      description: "Creamy mascarpone cake with lemon liqueur flavor",
      price: "6.99",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
      badge: "Premium"
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with espresso-soaked ladyfingers",
      price: "6.99",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      badge: "Classic"
    },
    {
      name: "Cannoli",
      description: "Crispy shell filled with sweet ricotta cream",
      price: "5.99",
      image: "https://images.unsplash.com/photo-1607920592519-bab8da732222?w=400&h=300&fit=crop",
      badge: "Italian Favorite"
    }
  ]
}

const categoryIcons = {
  appetizers: "🧆",
  pizzas: "🍕",
  glutenFree: "🌿",
  calzones: "🥟",
  drinks: "🥤",
  desserts: "🍰"
}

const categoryNames = {
  appetizers: "Appetizers & Sides",
  pizzas: "Traditional & Specialty Pizzas",
  glutenFree: "Gluten Free 10\" Pizzas",
  calzones: "Calzones, Strombolis & Dough",
  drinks: "Drinks",
  desserts: "Desserts"
}

function App() {
  const orderUrl = "https://favillasrealnypizza.hrpos.heartland.us/menu"

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
              <h1 className="text-white text-2xl font-bold drop-shadow-lg">Favilla's Real NY Pizza</h1>
              <span className="text-gold text-sm">Real Italians-Real NewYorkers </span>
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
            Authentic <span className="text-gold">Italian</span> Pizza
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            At Favilla's every pizza is a masterpiece of authentic Italian taste, made with love by a real Italian family in Ashville.
           
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
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 md:hover:-translate-y-2 md:hover:scale-[1.02]"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
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
                title="Favilla's Real NY Pizza Location"
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
                Favilla's Real NY Pizza
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
              © {new Date().getFullYear()} Favilla's Real NY Pizza. All rights reserved.
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
