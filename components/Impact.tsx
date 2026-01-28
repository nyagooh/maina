'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  { value: 40, suffix: '%', label: 'Conversion Increase', description: 'Average improvement across client projects' },
  { value: 2.5, suffix: 'M+', label: 'Users Reached', description: 'Products I\'ve designed in production' },
  { value: 85, suffix: '%', label: 'Efficiency Gain', description: 'Reduced time-to-market for design systems' },
];

function CountUp({ end, suffix, duration = 2 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(progress * end);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-6xl md:text-7xl font-display font-light text-orange-600 mb-4">
      {end >= 1 ? count.toFixed(end % 1 !== 0 ? 1 : 0) : count.toFixed(1)}{suffix}
    </div>
  );
}

export default function Impact() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20 md:mb-28"
      >
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal-400 font-medium mb-4">
          Impact
        </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6 leading-tight">
          Measurable Results
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 md:p-12 bg-charcoal-800 border border-charcoal-700 cursor-pointer hover:border-orange-600 transition-all duration-300"
          >
            <CountUp end={metric.value} suffix={metric.suffix} />
              <div className="text-lg font-medium text-white mb-2">
              {metric.label}
            </div>
              <div className="text-sm text-charcoal-400">
              {metric.description}
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
