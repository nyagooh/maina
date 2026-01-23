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
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-sm uppercase tracking-wider text-base-dark/50 font-medium mb-4">
          Capabilities
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-base-dark">
          What I Do
        </h2>
      </motion.div>
      <div className="flex flex-wrap gap-4">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="glass px-6 py-3 rounded-full text-base-dark/70 font-medium hover:text-base-dark transition-colors">
              {capability}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
