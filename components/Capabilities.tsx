'use client';

import { motion } from 'framer-motion';

const capabilities = [
  {
    number: '01',
    title: 'Product Design',
    description: 'End-to-end product experiences that delight users and drive business goals'
  },
  {
    number: '02',
    title: 'User Research',
    description: 'Deep user insights through interviews, testing, and data analysis'
  },
  {
    number: '03',
    title: 'Design Systems',
    description: 'Scalable component libraries and design tokens for consistency'
  },
  {
    number: '04',
    title: 'Prototyping',
    description: 'Interactive prototypes to validate ideas and test concepts'
  },
  {
    number: '05',
    title: 'UI/UX Design',
    description: 'Beautiful interfaces with intuitive user experiences'
  },
  {
    number: '06',
    title: 'Design Strategy',
    description: 'Strategic design thinking aligned with business objectives'
  },
];

export default function Capabilities() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-charcoal-900 leading-tight mb-6">
            Capabilities
          </h2>
          <p className="text-lg text-charcoal-700 max-w-2xl leading-relaxed">
            From concept to execution, I bring expertise across the full design spectrum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
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
              className="group bg-white p-10 md:p-12 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex items-start gap-6 md:gap-8">
                <span className="text-sm font-light text-charcoal-400 pt-1 min-w-[2rem]">
                  {capability.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-normal text-charcoal-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-base text-charcoal-700 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
