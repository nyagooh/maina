'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light text-base-dark leading-tight">
            Ann Maina
          </h1>
          <p className="text-xl md:text-2xl text-base-dark/60 font-medium">
            Product Designer
          </p>
          <p className="text-lg md:text-xl text-base-dark/50 max-w-2xl mx-auto leading-relaxed">
            Crafting thoughtful digital experiences at the intersection of design
            and technology
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/work"
            className="px-8 py-4 glass rounded-full text-base-dark font-medium hover:bg-white/90 transition-all duration-300"
          >
            View Work
          </Link>
          <a
            href="/Annemainaresume.pdf"
            download
            className="px-8 py-4 border border-base-dark/20 rounded-full text-base-dark font-medium hover:bg-base-dark hover:text-white transition-all duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
