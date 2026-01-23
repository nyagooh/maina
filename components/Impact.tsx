'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: '40%', label: 'Conversion Increase', description: 'Average improvement across client projects' },
  { value: '2.5M+', label: 'Users Reached', description: 'Products I\'ve designed in production' },
  { value: '85%', label: 'Efficiency Gain', description: 'Reduced time-to-market for design systems' },
];

export default function Impact() {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="text-sm uppercase tracking-wider text-base-dark/50 font-medium mb-4">
          Impact
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-base-dark mb-6">
          Measurable Results
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="text-5xl font-display font-semibold text-lilac-600 mb-3">
              {metric.value}
            </div>
            <div className="text-lg font-medium text-base-dark mb-2">
              {metric.label}
            </div>
            <div className="text-sm text-base-dark/60">
              {metric.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
