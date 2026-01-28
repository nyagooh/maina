'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface Article {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  image: string;
  category: string;
}

const articles: Article[] = [
  {
    title: 'Usability Testing',
    excerpt: 'Usability testing is testing the functionality of a website, app, or other digital product by observing real users as they attempt to complete tasks on it.',
    href: 'https://medium.com/@nyagooh/usability-testing-67a400746dbc',
    date: 'Jan 6, 2025',
    image: '/illustration1.jpg',
    category: 'UX Research',
  },
  {
    title: 'UX Design',
    excerpt: 'A comprehensive guide to UX design principles and best practices for creating user-friendly digital experiences.',
    href: 'https://medium.com/@nyagooh/ux-design-403997ea0605',
    date: 'Jan 4, 2025',
    image: '/illustration2.jpg',
    category: 'Design Principles',
  },
  {
    title: 'Design Thinking',
    excerpt: 'What is Design thinking? It is a non-linear process that a team uses to understand users, challenge assumptions, redefine problems and create innovative solutions.',
    href: 'https://medium.com/@nyagooh/design-thinking-d720659c7a98',
    date: 'Jan 2, 2025',
    image: '/illustration3.jpg',
    category: 'Methodology',
  },
];

export default function Writing() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.scrollWidth / articles.length * index;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScrollUpdate = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / articles.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    container.addEventListener('scroll', handleScrollUpdate);
    return () => container.removeEventListener('scroll', handleScrollUpdate);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-orange-600 font-medium mb-4">
            Writing & Insights
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-tight">
                Design Thoughts
              </h2>
              <p className="text-lg text-charcoal-300 mt-6 max-w-2xl">
                Exploring ideas, insights, and perspectives on design, UX, and creating meaningful digital experiences.
              </p>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 text-charcoal-400"
            >
              <span className="text-sm uppercase tracking-wider">Drag to explore</span>
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="relative">
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-6 md:gap-8 overflow-x-auto overflow-y-visible px-6 md:px-12 lg:px-24 pb-8 scroll-smooth snap-x snap-mandatory hide-scrollbar"
          style={{
            scrollSnapType: 'x mandatory',
          }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-shrink-0 w-[75vw] md:w-[55vw] lg:w-[40vw] snap-start group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Link href={article.href} target="_blank">
                <motion.div
                  className="relative overflow-hidden glass-dark rounded-3xl cursor-pointer h-[600px] md:h-[700px]"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 75vw, (max-width: 1024px) 55vw, 40vw"
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/70 to-charcoal-900/20 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/40 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="glass-medium px-4 py-2 rounded-full backdrop-blur-xl"
                      >
                        <span className="text-sm font-bold text-white">{article.date}</span>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="glass-dark px-4 py-2 rounded-full backdrop-blur-xl border border-orange-600/30"
                      >
                        <span className="text-xs font-medium text-orange-600">{article.category}</span>
                      </motion.div>
                    </div>
                    
                    {/* Article Number */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="absolute top-6 right-6 text-[120px] md:text-[180px] font-bold text-white/5 leading-none pointer-events-none"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-4 group-hover:text-orange-600 transition-colors duration-500"
                      >
                        {article.title}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                        className="text-sm md:text-base text-charcoal-200 leading-relaxed mb-6 max-w-xl line-clamp-3"
                      >
                        {article.excerpt}
                      </motion.p>
                      
                      {/* Read Link */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                        className="flex items-center gap-3 text-orange-600 transition-all duration-300"
                      >
                        <span className="text-base font-bold uppercase tracking-wider">Read Article</span>
                        <span className="text-xl">→</span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-orange-600/0 rounded-3xl pointer-events-none transition-colors duration-500"
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mt-12 px-6">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="group relative"
              aria-label={`Go to article ${index + 1}`}
            >
              <motion.div
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-12 bg-orange-600'
                    : 'w-2 bg-charcoal-600 group-hover:bg-orange-600/50'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Article Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8 px-6"
        >
          <span className="text-sm text-charcoal-400 tracking-wider">
            <span className="text-orange-600 font-bold text-lg">{String(activeIndex + 1).padStart(2, '0')}</span>
            {' / '}
            <span className="text-charcoal-500">{String(articles.length).padStart(2, '0')}</span>
          </span>
        </motion.div>
      </div>

      {/* Hide Scrollbar Styles */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
