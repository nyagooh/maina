'use client';

import { motion } from 'framer-motion';

const capabilities = [
  {
    number: '01',
    title: 'Product Design',
    description: 'Creating end-to-end digital products that balance user needs with business goals through thoughtful design decisions.'
  },
  {
    number: '02',
    title: 'User Research',
    description: 'Uncovering deep user insights through interviews, usability testing, and behavioral analysis to inform design.'
  },
  {
    number: '03',
    title: 'Design Systems',
    description: 'Building scalable component libraries and style guides that ensure consistency across platforms.'
  },
  {
    number: '04',
    title: 'Interaction Design',
    description: 'Crafting intuitive micro-interactions and animations that enhance the overall user experience.'
  },
  {
    number: '05',
    title: 'Visual Design',
    description: 'Developing compelling visual languages that communicate brand identity while maintaining usability.'
  },
  {
    number: '06',
    title: 'Prototyping',
    description: 'Building high-fidelity interactive prototypes to validate concepts and accelerate development.'
  },
];

export default function Capabilities() {
  return (
    <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-28 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600 font-bold mb-4 sm:mb-6">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-charcoal-900 leading-tight mb-4 sm:mb-6">
            Capabilities
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed px-4">
            From concept to execution, expertise across the full design spectrum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
              }}
              className="group relative bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl border border-gray-200 hover:border-orange-600/30 hover:shadow-xl hover:shadow-orange-600/5 transition-all duration-500"
            >
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 text-4xl sm:text-5xl md:text-6xl font-light text-gray-100 group-hover:text-orange-600/10 transition-colors duration-500">
                {capability.number}
              </div>
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-normal text-charcoal-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
