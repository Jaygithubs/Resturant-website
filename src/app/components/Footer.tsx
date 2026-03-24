"use client";

import { UtensilsCrossed, FacebookIcon, InstagramIcon, TwitterIcon, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <UtensilsCrossed className="h-8 w-8 text-orange-500" />
              <span className="font-playfair text-2xl font-bold">Saffron & Spice</span>
            </div>
            <p className="text-gray-400 text-sm">
              Experience the finest Indian cuisine with authentic flavors and modern elegance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="#specials" className="hover:text-orange-500 transition-colors">Specials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>123 Gourmet Street, NY 10001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@saffronandspice.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <InstagramIcon size={24} />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                <TwitterIcon size={24} />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-sm mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-gray-900 rounded-l-lg focus:outline-none"
                />
                <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Saffron & Spice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;