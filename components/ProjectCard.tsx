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
  year?: string;
  duration?: string;
}

export default function ProjectCard({
  title,
  role,
  productType,
  outcome,
  image,
  href,
  tags = [],
  year,
  duration,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link href={href} className="block">
        <motion.div
          className="relative overflow-hidden rounded-3xl glass-dark border border-white/5 hover:border-white/10 transition-all duration-500"
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Image Section */}
          <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-charcoal-800 to-charcoal-900">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-60" />
            
            {/* Year Badge */}
            {year && (
              <div className="absolute top-6 left-6">
                <span className="glass-medium px-4 py-2 text-sm font-bold text-white rounded-full backdrop-blur-xl border border-white/10">
                  {year}
                </span>
              </div>
            )}
            
            {/* Floating Tags */}
            {tags.length > 0 && (
              <div className="absolute top-6 right-6 flex flex-wrap gap-2 justify-end max-w-md">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-medium px-3 py-1.5 text-xs font-medium text-white rounded-full backdrop-blur-xl border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Content Section with Glass Effect */}
          <div className="glass-medium p-8 md:p-10 border-t border-white/5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-600 font-bold">
                {productType}
              </p>
              {duration && (
                <p className="text-xs text-charcoal-400 font-medium">
                  {duration}
                </p>
              )}
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white leading-tight mb-4 transition-colors duration-500">
              {title}
            </h3>
            
            <p className="text-sm text-charcoal-400 mb-4 font-medium uppercase tracking-wide">
              {role}
            </p>
            
            <p className="text-base md:text-lg text-charcoal-300 leading-relaxed mb-6">
              {outcome}
            </p>
            
            {/* View Link */}
            <div className="flex items-center gap-3 text-orange-600 transition-all duration-300 group-hover:gap-5">
              <span className="text-sm font-bold uppercase tracking-wider">View Full Case Study</span>
              <span className="text-xl">→</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
