'use client';

import { motion } from 'framer-motion';

const capabilities = [
  'Product Design',
  'User Research',
  'Design Systems',
  'Prototyping',
  'UI/UX Design',
  'Design Strategy',
];

export default function Capabilities() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal-400 font-medium mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white leading-tight">
            What I Do
          </h2>
        </motion.div>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="px-8 py-4 bg-charcoal-800 border border-charcoal-700 text-charcoal-300 font-medium hover:text-orange-600 hover:border-orange-600 transition-all duration-300 text-base md:text-lg cursor-pointer">
                {capability}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
