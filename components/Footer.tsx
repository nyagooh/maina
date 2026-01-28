'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-charcoal-900 border-t border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Left Column - Stay Connected */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm uppercase tracking-wider text-white mb-6">STAY CONNECTED</h3>
            <a
              href="mailto:annmaina.info@gmail.com"
              className="block text-2xl md:text-3xl italic text-white mb-4 hover:text-orange-600 transition-colors duration-300"
            >
              annmaina.info@gmail.com
            </a>
            <p className="text-charcoal-300 text-sm mb-6 leading-relaxed">
              Transforming ideas into reality with creativity and passion. Let's connect!
            </p>
            <motion.a
              href="/Annemainaresume.pdf"
              download
              whileHover={{ scale: 1.05, x: 5 }}
              className="glass-medium px-6 py-3 rounded-lg text-white font-bold uppercase tracking-wider inline-block hover:bg-orange-600 transition-all duration-300"
            >
              DOWNLOAD RESUME +
            </motion.a>
          </motion.div>

          {/* Middle Column - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm uppercase tracking-wider text-white mb-6">Navigation</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-charcoal-300 hover:text-orange-600 transition-colors duration-300">
                Home
              </Link>
              <Link href="/#about" className="block text-charcoal-300 hover:text-orange-600 transition-colors duration-300">
                About
              </Link>
              <Link href="/work" className="block text-charcoal-300 hover:text-orange-600 transition-colors duration-300">
                Projects
              </Link>
              <Link href="/#contact" className="block text-charcoal-300 hover:text-orange-600 transition-colors duration-300">
                Contact
              </Link>
            </nav>
          </motion.div>

          {/* Right Column - Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm uppercase tracking-wider text-white mb-6">Social Media</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/maina-anne-37797820b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-medium flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-300"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full glass-medium flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-300"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full glass-medium flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-300"
              >
                <span className="text-sm font-bold">Bē</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-wider">ANN</h2>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-charcoal-500 text-sm">
          <p>Copyright © Ann Maina {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
