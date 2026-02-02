'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative overflow-hidden z-10 bg-charcoal-900">
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
      <div className="max-w-[1920px] w-full relative z-10">
        {/* Top Hello Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-0 left-0 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-600 z-20"
        >
          (HELLO! I'M ANN)
        </motion.div>

        {/* Large Name Spanning Horizontally */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-bold leading-none tracking-tighter whitespace-nowrap"
            style={{ 
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ANN MAINA
          </motion.h1>
        </div>

        {/* Center Phone Element */}
        <div className="relative z-10 flex justify-center items-center min-h-[500px] sm:min-h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Phone Strap */}
            <div className="absolute -top-12 sm:-top-20 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-12 sm:h-20 bg-charcoal-800 rounded-t-2xl z-20 border-t-4 border-charcoal-700"></div>
            
            {/* Phone Container */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[380px] aspect-[9/16] bg-charcoal-800 rounded-[2rem] sm:rounded-[2.5rem] p-2 sm:p-3 shadow-2xl">
              {/* Phone Screen with Orange Background */}
              <div className="w-full h-full bg-orange-600 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative">
                {/* Portfolio Tab */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-charcoal-900/70 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-white text-[10px] sm:text-xs font-bold z-10">
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
                <div className="absolute bottom-0 left-0 right-0 z-10 glass-dark rounded-b-[1.5rem] sm:rounded-b-[2rem] py-4 sm:py-6 px-4 sm:px-6 backdrop-blur-xl border-t border-white/10">
                  <p className="text-white text-[10px] sm:text-xs font-medium mb-1 sm:mb-2 tracking-wider text-center">UI/UX</p>
                  <h2 className="text-white text-2xl sm:text-3xl font-bold text-center leading-tight">
                    PRODUCT<br/>DESIGNER
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Orange Tagline - Lower Right Corner */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute right-4 sm:right-6 md:right-12 lg:right-24 bottom-24 sm:bottom-32 md:bottom-36 max-w-[200px] sm:max-w-xs md:max-w-md z-20 text-right"
        >
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-orange-600 leading-tight tracking-wide">
            SOLVING PROBLEMS WITH AESTHETICS AND EMPATHY
          </p>
        </motion.div>
      </div>

      {/* Bottom Elements */}
      <div className="absolute bottom-6 sm:bottom-12 left-0 right-0 px-4 sm:px-6 md:px-12 lg:px-24 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
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
            className="bg-white text-charcoal-900 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white/30 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 text-white"
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
            className="glass-medium px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10"
          >
            <span className="text-white text-xs sm:text-sm font-bold">01</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
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
                    src="/ChatGPT Image Jan 30, 2026, 03_48_25 PM.png" 
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
          {/* Download Resume Button - Left Side */}
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
            className="bg-white text-charcoal-900 px-8 py-4 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
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
          
          {/* Page Number - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="glass-medium px-5 py-2.5 rounded-full border border-white/10"
          >
            <span className="text-white text-sm font-bold">01</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
