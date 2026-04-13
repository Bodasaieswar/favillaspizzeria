import { motion } from 'framer-motion'
import { ORDER_URL, RESTAURANT_INFO } from '../data/menuData'

function LocationHours() {
  const { address, phone, hours } = RESTAURANT_INFO

  return (
    <section
      id="location"
      className="py-20 px-4 bg-gradient-to-br from-primary-green to-primary-green-dark relative overflow-hidden"
    >
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
              Visit Us Today
            </h2>

            {/* Address */}
            <div className="flex items-start gap-5 mb-8">
              <span className="text-4xl text-gold">📍</span>
              <div>
                <h4 className="text-gold text-xl font-semibold mb-2">Address</h4>
                <p className="text-white/90 text-lg">{address.street}</p>
                <p className="text-white/90 text-lg">
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 mb-8">
              <span className="text-4xl text-gold">📞</span>
              <div>
                <h4 className="text-gold text-xl font-semibold mb-2">Phone</h4>
                <a
                  href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                  className="text-white/90 text-lg hover:text-gold transition-colors"
                >
                  {phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div id="hours" className="flex items-start gap-5">
              <span className="text-4xl text-gold">🕐</span>
              <div>
                <h4 className="text-gold text-xl font-semibold mb-3">
                  Hours of Operation
                </h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-white/90">
                  <span className="font-semibold">{hours.weekday.days}</span>
                  <span>{hours.weekday.time}</span>
                  <span className="font-semibold">{hours.weekend.days}</span>
                  <span>{hours.weekend.time}</span>
                  <span className="font-semibold">{hours.sunday.days}</span>
                  <span>{hours.sunday.time}</span>
                </div>
              </div>
            </div>

            <motion.a
              href={ORDER_URL}
              target="_self"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d-82.5977!3d35.5821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598d3d1b8c8e9d%3A0x1234567890abcdef!2s5%20Regent%20Park%20Blvd%2C%20Asheville%2C%20NC%2028806!5e0!3m2!1sen!2sus!4v1702234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Michelangelo Real NY Pizza Location"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationHours
