'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  role: string;
  productType: string;
  outcome: string;
  image: string;
  href: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  role,
  productType,
  outcome,
  image,
  href,
  tags = [],
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link href={href} className="block">
        <div className="relative overflow-hidden glass-dark rounded-2xl">
          {/* Image Section */}
          <motion.div 
            className="relative w-full aspect-[4/3] overflow-hidden bg-charcoal-800 rounded-t-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain transition-transform duration-1000 group-hover:scale-105"
              sizes="100vw"
            />
            <motion.div
              className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/10 transition-colors duration-700"
            />
          </motion.div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs uppercase tracking-[0.2em] text-charcoal-400 mb-3"
            >
              {productType}
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-display font-light text-white leading-tight mb-3 group-hover:text-orange-600 transition-colors duration-500"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-charcoal-300 mb-4"
            >
              {role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-charcoal-400 leading-relaxed mb-4"
            >
              {outcome}
            </motion.p>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2 text-orange-600 group-hover:gap-4 transition-all duration-300">
                <span className="text-sm font-medium">View</span>
                <span className="text-lg">→</span>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium glass-medium text-charcoal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
