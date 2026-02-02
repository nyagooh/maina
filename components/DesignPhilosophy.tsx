'use client';

import { motion } from 'framer-motion';

export default function DesignPhilosophy() {
  const supportingPoints = [
    'Clear structure',
    'Clear feedback',
    'Clear outcomes',
  ];

  return (
    <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden bg-orange-600">
      {/* Grid Lines Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light text-white leading-tight px-4">
            Clarity enables
            <br />
            <span className="font-medium">confident action.</span>
          </h2>
        </motion.div>

        {/* Supporting Lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {supportingPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="border-l-4 border-white/30 pl-4 sm:pl-6 py-3 sm:py-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-tight">
                  {point}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center px-4"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 tracking-wide">
            Simple, optimistic, and timeless.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
