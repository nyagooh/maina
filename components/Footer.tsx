'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 bg-charcoal-900 border-t border-charcoal-800 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-10 sm:mb-12 md:mb-16">
          {/* Left Column - Stay Connected */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs sm:text-sm uppercase tracking-wider text-white mb-4 sm:mb-6">STAY CONNECTED</h3>
            <a
              href="mailto:annmaina.info@gmail.com"
              className="block text-xl sm:text-2xl md:text-3xl italic text-white mb-3 sm:mb-4 hover:text-orange-600 transition-colors duration-300"
            >
              annmaina.info@gmail.com
            </a>
            <p className="text-charcoal-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Transforming ideas into reality with creativity and passion. Let's connect!
            </p>
          </motion.div>

          {/* Middle Column - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xs sm:text-sm uppercase tracking-wider text-white mb-4 sm:mb-6">Navigation</h3>
            <nav className="space-y-2 sm:space-y-3">
              <Link href="/" className="block text-sm sm:text-base text-charcoal-300 hover:text-orange-600 transition-colors duration-300">
                Home
              </Link>
              <Link href="/#about" className="block text-sm sm:text-base text-charcoal-300 hover:text-orange-600 transition-colors duration-300">
                About
              </Link>
              <Link href="/work" className="block text-sm sm:text-base text-charcoal-300 hover:text-orange-600 transition-colors duration-300">
                Projects
              </Link>
              <Link href="/#contact" className="block text-sm sm:text-base text-charcoal-300 hover:text-orange-600 transition-colors duration-300">
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
            <h3 className="text-xs sm:text-sm uppercase tracking-wider text-white mb-4 sm:mb-6">Connect</h3>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:annmaina.info@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-charcoal-300 hover:text-orange-600 transition-colors duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-xs sm:text-sm">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ann-maina-37797820b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-charcoal-300 hover:text-orange-600 transition-colors duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs sm:text-sm">LinkedIn</span>
              </a>
              <a
                href="https://x.com/nyagoh_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-charcoal-300 hover:text-orange-600 transition-colors duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-xs sm:text-sm">X (Twitter)</span>
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
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wider">ANN</h2>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-charcoal-500 text-xs sm:text-sm">
          <p>Copyright © Ann Maina {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
