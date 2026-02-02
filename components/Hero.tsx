'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-20 relative overflow-hidden z-10 bg-charcoal-900">
      {/* Grid background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Main Container */}
      <div className="max-w-[1920px] w-full relative z-10 h-full flex flex-col">
        {/* Top Hello Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600 z-20 mb-6 sm:mb-8 md:mb-0 md:absolute md:top-0 md:left-0"
        >
          (HELLO! I'M ANN)
        </motion.div>

        {/* Large Name Spanning Horizontally - Background */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] 2xl:text-[20rem] font-bold leading-none tracking-tighter"
            style={{ 
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ANN MAINA
          </motion.h1>
        </div>

        {/* Center Phone Element */}
        <div className="relative z-10 flex justify-center items-center flex-1 my-4 sm:my-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Phone Strap */}
            <div className="absolute -top-10 sm:-top-12 md:-top-20 left-1/2 transform -translate-x-1/2 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-20 bg-charcoal-800 rounded-t-2xl z-20 border-t-4 border-charcoal-700"></div>
            
            {/* Phone Container */}
            <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] aspect-[9/16] bg-charcoal-800 rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-2 sm:p-2.5 md:p-3 shadow-2xl">
              {/* Phone Screen with Orange Background */}
              <div className="w-full h-full bg-orange-600 rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative">
                {/* Portfolio Tab */}
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-charcoal-900/70 backdrop-blur-sm px-2 sm:px-2.5 md:px-3 py-1 sm:py-1 md:py-1.5 rounded-md text-white text-[9px] sm:text-[10px] md:text-xs font-bold z-10">
                  (PORTFOLIO)
                </div>
                
                {/* Your Portrait Image */}
                <div className="absolute inset-0">
                  <Image 
                    src="/ChatGPT Image Jan 30, 2026, 03_48_25 PM.png" 
                    alt="Ann Maina"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/30 via-transparent to-charcoal-900/50"></div>
                </div>
                
                {/* Text Overlay on Phone */}
                <div className="absolute bottom-0 left-0 right-0 z-10 glass-dark rounded-b-[1.25rem] sm:rounded-b-[1.5rem] md:rounded-b-[2rem] py-3 sm:py-4 md:py-6 px-3 sm:px-4 md:px-6 backdrop-blur-xl border-t border-white/10">
                  <p className="text-white text-[9px] sm:text-[10px] md:text-xs font-medium mb-1 sm:mb-1.5 md:mb-2 tracking-wider text-center">UI/UX</p>
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold text-center leading-tight">
                    PRODUCT<br/>DESIGNER
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Orange Tagline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center md:text-right md:absolute md:right-4 lg:right-12 xl:right-24 md:bottom-32 lg:bottom-36 max-w-full md:max-w-xs lg:max-w-md z-20 mb-6 sm:mb-8 md:mb-0"
        >
          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl font-bold text-orange-600 leading-tight tracking-wide px-4 md:px-0">
            SOLVING PROBLEMS WITH AESTHETICS AND EMPATHY
          </p>
        </motion.div>
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-12 left-0 right-0 px-4 sm:px-6 md:px-12 lg:px-24 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Download Resume Button */}
          <motion.a
            href="/Maina-Ann-resume-4-1.pdf"
            download="Maina-Ann-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(249, 115, 22, 1)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-charcoal-900 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl md:rounded-2xl font-bold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-1.5 sm:gap-2"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </motion.a>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
          
          {/* Page Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="glass-medium px-2.5 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full border border-white/10"
          >
            <span className="text-white text-[10px] sm:text-xs md:text-sm font-bold">01</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
