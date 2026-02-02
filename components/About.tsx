'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ChatGPT Image Jan 30, 2026, 03_48_25 PM.png"
          alt="Ann Maina"
          fill
          className="object-cover grayscale"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-charcoal-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left: Title in Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-2 border-white/30 rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-8 sm:p-10 md:p-12 lg:p-16 backdrop-blur-sm bg-white/5"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Not Just
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic text-white leading-tight mt-2">
              Another Designer!
            </h2>
          </motion.div>

          {/* Right: Description and Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              From creating immersive brands to perfecting every pixel, take a glimpse into my journey, philosophy, and the driving forces behind my design thinking.
            </p>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-charcoal-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-3 hover:bg-orange-600 hover:text-white transition-colors duration-300"
              >
                About
                <span className="text-xl">+</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
