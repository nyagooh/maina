'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 relative overflow-hidden z-10 bg-charcoal-900">
      {/* Grid background - bigger grid, lower opacity */}
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
      <div className="max-w-[1920px] w-full relative z-10">
        {/* Top Hello Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-0 left-0 text-sm uppercase tracking-[0.3em] text-orange-600 z-20"
        >
          (HELLO! I'M ANN)
        </motion.div>

        {/* Large Name Spanning Horizontally - BIG AGAIN */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[8rem] md:text-[12rem] lg:text-[14rem] xl:text-[18rem] font-bold leading-none tracking-tighter whitespace-nowrap"
            style={{ 
              WebkitTextStroke: '3px rgba(255, 255, 255, 0.5)',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ANN MAINA
          </motion.h1>
        </div>

        {/* Center Phone Element */}
        <div className="relative z-10 flex justify-center items-center min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Phone Strap - Longer like a tag rope */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-charcoal-800 rounded-t-2xl z-20 border-t-4 border-charcoal-700"></div>
            
            {/* Phone Container */}
            <div className="relative w-[320px] md:w-[380px] aspect-[9/16] bg-charcoal-800 rounded-[2.5rem] p-3 shadow-2xl">
              {/* Phone Screen with Orange Background */}
              <div className="w-full h-full bg-orange-600 rounded-[2rem] overflow-hidden relative">
                {/* Portfolio Tab */}
                <div className="absolute top-4 right-4 bg-charcoal-900/70 backdrop-blur-sm px-3 py-1.5 rounded-md text-white text-xs font-bold z-10">
                  (PORTFOLIO)
                </div>
                
                {/* Your Portrait Image */}
                <div className="absolute inset-0">
                  {/* Replace '/your-image.jpg' with the path to your image in the public folder */}
                  <Image 
                    src="/CKS03987.jpg" 
                    alt="Ann Maina"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/30 via-transparent to-charcoal-900/50"></div>
                </div>
                
                {/* Text Overlay on Phone - Moved to Bottom with Glassmorphism */}
                <div className="absolute bottom-0 left-0 right-0 z-10 glass-dark rounded-b-[2rem] py-6 px-6 backdrop-blur-xl border-t border-white/10">
                  <p className="text-white text-xs font-medium mb-2 tracking-wider text-center">UI/UX</p>
                  <h2 className="text-white text-3xl font-bold text-center leading-tight">
                    PRODUCT<br/>DESIGNER
                  </h2>
                </div>
                
                {/* Bottom Text on Phone - Removed since we moved UI/UX text to bottom */}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Orange Tagline - Lower Right Corner */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute right-6 md:right-12 lg:right-24 bottom-32 md:bottom-36 max-w-md z-20 text-right"
        >
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-orange-600 leading-tight tracking-wide">
            SOLVING PROBLEMS WITH AESTHETICS AND EMPATHY
          </p>
        </motion.div>
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 lg:px-24 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Page Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="glass-medium px-5 py-2.5 rounded-full border border-white/10"
          >
            <span className="text-white text-sm font-bold">01</span>
          </motion.div>
          
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
              className="w-10 h-10 border-2 border-white/30 rounded-full flex items-center justify-center"
        >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
          
          {/* Leveled Up Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-right"
          >
            <p className="text-white/60 text-xs mb-1 tracking-wider">Leveled up at:</p>
            <p className="text-white text-lg font-bold tracking-wider">10KDESIGNERS</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
