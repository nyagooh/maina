'use client';

import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface BestWorkProject {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  year: string;
  award?: string;
}

const bestProjects: BestWorkProject[] = [
  {
    title: 'AI Tutor App',
    category: 'EdTech · Mobile App',
    description: '',
    image: '/Ai tutor learning app/Ai Tutor app.png',
    href: '/work/ai-tutor',
    year: '2024',
    award: 'Featured EdTech Design',
  },
  {
    title: 'CoinMarket Dashboard',
    category: 'Fintech · Dashboard',
    description: '',
    image: '/Coinmarket /couinmarket.png',
    href: '/work/coinmarket',
    year: '2024',
  },
  {
    title: 'Home Finance Dashboard',
    category: 'Fintech · Personal Finance',
    description: '',
    image: '/Home Dashboard/home dashboard.png',
    href: '/work/home-finance',
    year: '2023',
  },
  {
    title: 'Savings Dashboard',
    category: 'Fintech · Web App',
    description: '',
    image: '/saving dashboard/saving dashboard.png',
    href: '/work/savings-dashboard',
    year: '2024',
  },
  {
    title: 'Subscription Manager',
    category: 'Fintech · Mobile App',
    description: '',
    image: '/subscription app/subscription app.png',
    href: '/work/subscription-manager',
    year: '2022',
  },
];

export default function BestWork() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('best-work');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;
        setHasScrolled(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.scrollWidth / bestProjects.length * index;
      container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScrollUpdate = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / bestProjects.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    container.addEventListener('scroll', handleScrollUpdate);
    return () => container.removeEventListener('scroll', handleScrollUpdate);
  }, []);

  return (
    <section
      id="best-work"
      className="relative py-20 md:py-32 overflow-hidden"
    >
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
            Featured Excellence
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-tight">
                Best Work
              </h2>
              <p className="text-lg text-charcoal-300 mt-6 max-w-2xl">
                Showcasing exceptional projects that push boundaries and create meaningful impact.
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
          {bestProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                rotateY: 0,
              }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-shrink-0 w-[75vw] md:w-[55vw] lg:w-[40vw] snap-start group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <Link href={project.href}>
                <motion.div
                  className="relative overflow-hidden glass-dark rounded-3xl cursor-pointer h-[450px] md:h-[500px]"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-all duration-700"
                      sizes="(max-width: 768px) 75vw, (max-width: 1024px) 55vw, 40vw"
                      priority={index < 2}
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
                        <span className="text-sm font-bold text-white">{project.year}</span>
                      </motion.div>
                      
                      {project.award && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                          className="glass-dark px-4 py-2 rounded-full backdrop-blur-xl border border-orange-600/30"
                        >
                          <span className="text-xs font-medium text-orange-600">★ {project.award}</span>
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Project Number */}
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
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-white mb-6 group-hover:text-orange-600 transition-colors duration-500"
                      >
                        {project.title}
                      </motion.h3>
                      
                      {/* View Link */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                        className="flex items-center gap-3 text-orange-600 transition-all duration-300"
                      >
                        <span className="text-base font-bold uppercase tracking-wider">Explore Project</span>
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
          {bestProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="group relative"
              aria-label={`Go to project ${index + 1}`}
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

        {/* Project Counter */}
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
            <span className="text-charcoal-500">{String(bestProjects.length).padStart(2, '0')}</span>
          </span>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: hasScrolled ? 0.08 : 0, 
          scale: hasScrolled ? 1 : 0.8,
        }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600 rounded-full blur-[200px] pointer-events-none -z-10"
      />

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
