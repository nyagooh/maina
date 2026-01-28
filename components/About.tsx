'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-charcoal-400 font-medium mb-6">
              About
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-tight mb-8">
              Not Just Another Designer!
            </h2>
            <p className="text-lg text-charcoal-300 leading-relaxed">
              From creating immersive brands to perfecting every pixel, take a glimpse into my journey, philosophy, and the driving forces behind my design thinking.
            </p>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-display font-light text-white mb-4">About Ann</h3>
              <p className="text-base text-charcoal-300 leading-relaxed">
                I'm a Product Designer passionate about creating digital experiences that are both beautiful and functional. With a focus on user-centered design, I help brands transform their ideas into compelling digital products that resonate with users and drive business results.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-display font-light text-white mb-6">Services</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">✦</span>
                  <div>
                    <p className="text-white font-medium mb-1">Product Design</p>
                    <p className="text-charcoal-400 text-sm">End-to-end product design from research to implementation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">✦</span>
                  <div>
                    <p className="text-white font-medium mb-1">UI/UX Design</p>
                    <p className="text-charcoal-400 text-sm">Intuitive interfaces that users love to interact with</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 text-xl">✦</span>
                  <div>
                    <p className="text-white font-medium mb-1">Design Systems</p>
                    <p className="text-charcoal-400 text-sm">Scalable design systems for consistent brand experiences</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div>
              <h3 className="text-xl font-display font-light text-white mb-6">Milestones</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-display font-light text-orange-600 mb-2">5+</p>
                  <p className="text-charcoal-400 text-sm">Years of Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-light text-orange-600 mb-2">50+</p>
                  <p className="text-charcoal-400 text-sm">Projects Completed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
