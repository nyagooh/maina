'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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
    <section id="contact" className="py-32 md:py-40 px-6 md:px-12 lg:px-24 relative min-h-screen flex items-center pb-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Section - "Get in Touch" */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-light text-white leading-tight mb-6">
              <span className="font-bold">Get in</span>
              <br />
              <span className="italic font-light">Touch</span>
            </h2>
            <p className="text-lg text-charcoal-300 mb-8 leading-relaxed">
              Great ideas deserve exceptional visuals. Let's create something incredible together!
            </p>
            
            {/* Mouse Graphic Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-12 w-32 h-48"
            >
              <div className="glass-dark rounded-lg p-4 w-full h-full flex items-center justify-center">
                <div className="w-16 h-24 bg-charcoal-700 rounded-lg relative">
                  <div className="absolute top-2 left-2 w-2 h-2 bg-orange-600 rounded-full"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-charcoal-600 rounded"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-dark rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center uppercase tracking-wider">
              CONTACT
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-sm mb-2 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 focus:outline-none focus:border-orange-600 transition-colors duration-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 focus:outline-none focus:border-orange-600 transition-colors duration-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 focus:outline-none focus:border-orange-600 transition-colors duration-300 resize-none rounded-lg"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-4 bg-white text-charcoal-900 font-bold uppercase tracking-wider hover:bg-orange-600 hover:text-white transition-all duration-300 rounded-lg"
              >
                SUBMIT
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
