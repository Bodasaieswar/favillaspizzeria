import { ORDER_URL, RESTAURANT_INFO } from '../data/menuData'

function Footer() {
  const { address, phone } = RESTAURANT_INFO

  return (
    <footer className="bg-dark-brown text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-gold text-2xl font-bold mb-6 pb-3 border-b-2 border-primary-red inline-block">
              {RESTAURANT_INFO.name}
            </h4>
            <p className="text-white/70 leading-relaxed">
              Bringing authentic New York style pizza to Asheville since day
              one. Every slice is made with love and the freshest ingredients.
            </p>
          </div>

          <div>
            <h4 className="text-gold text-xl font-bold mb-6 pb-3 border-b-2 border-primary-red inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#menu"
                  className="text-white/70 hover:text-gold hover:pl-2 transition-all"
                >
                  Our Menu
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-white/70 hover:text-gold hover:pl-2 transition-all"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#hours"
                  className="text-white/70 hover:text-gold hover:pl-2 transition-all"
                >
                  Hours
                </a>
              </li>
              <li>
                <a
                  href={ORDER_URL}
                
                  className="text-white/70 hover:text-gold hover:pl-2 transition-all"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xl font-bold mb-6 pb-3 border-b-2 border-primary-red inline-block">
              Contact Us
            </h4>
            <div className="space-y-3 text-white/70">
              <p>{address.street}</p>
              <p>
                {address.city}, {address.state} {address.zip}
              </p>
              <p>
                <a
                  href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                  className="hover:text-gold transition-colors"
                >
                  {phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
