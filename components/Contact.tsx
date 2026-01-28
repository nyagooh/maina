'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/CKS03997.jpg"
          alt="Get in Touch"
          fill
          className="object-cover grayscale"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-charcoal-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Title - No Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight">
              Get in
            </h2>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif italic text-white leading-tight mt-2">
              Touch
            </h2>
            <p className="text-base md:text-lg text-white/90 mt-8 leading-relaxed max-w-md">
              Great ideas deserve exceptional visuals.
              <br />
              Let's create something incredible together!
            </p>
          </motion.div>

          {/* Right: Contact Form - Enhanced Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl p-10 md:p-12 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-[0.3em]">
              Contact
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/90 text-sm mb-3 font-normal">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-orange-600 focus:bg-white/10 transition-all duration-300 rounded-xl"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm mb-3 font-normal">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-orange-600 focus:bg-white/10 transition-all duration-300 rounded-xl"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm mb-3 font-normal">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-orange-600 focus:bg-white/10 transition-all duration-300 resize-none rounded-xl"
                  placeholder=""
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-10 py-4 bg-white text-charcoal-900 font-bold uppercase tracking-[0.2em] hover:bg-orange-600 hover:text-white transition-all duration-300 rounded-xl shadow-lg text-sm"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
