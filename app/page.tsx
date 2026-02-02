'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Hero from '@/components/Hero';
import BestWork from '@/components/BestWork';
import DesignPhilosophy from '@/components/DesignPhilosophy';
import Capabilities from '@/components/Capabilities';
import Writing from '@/components/Writing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const featuredProjects = [
    {
      title: 'Bongohub',
      role: 'UI/UX Designer',
      productType: 'Creative Marketplace · Web App',
      outcome: 'Creative marketplace designed to help creatives discover work, sell services, and build long-term professional communities. The UX focuses on trust, profile clarity, and easy service discovery.',
      image: '/Bongohub/bongo hub.png',
      href: '/work/bongohub',
      tags: ['Marketplace', 'Community', 'Web App'],
    },
    {
      title: 'AI Tutor App',
      role: 'Product Designer',
      productType: 'EdTech · Mobile App',
      outcome: 'AI-powered learning app for kids that enables curiosity-driven learning through natural language questions. Designed to be friendly, safe, and distraction-free.',
      image: '/Ai tutor learning app/Ai Tutor app.png',
      href: '/work/ai-tutor',
      tags: ['EdTech', 'AI', 'Kids', 'Mobile'],
    },
    {
      title: 'Predix',
      role: 'Product Designer',
      productType: 'Crypto · AI-Assisted Trading App',
      outcome: 'AI-assisted trading app that surfaces crypto market signals to support better decision-making. Simplifies complex trading insights into digestible signals.',
      image: '/predix/predix.jpeg',
      href: '/work/predix',
      tags: ['Crypto', 'AI', 'Trading', 'Mobile'],
    },
    {
      title: 'Savings Dashboard',
      role: 'Product Designer',
      productType: 'Fintech · Web App',
      outcome: 'Savings dashboard that gives users a clear overview of their financial activity. The UX prioritizes clarity and reassurance through calm visuals and well-structured data.',
      image: '/saving dashboard/saving dashboard.png',
      href: '/work/savings-dashboard',
      tags: ['Fintech', 'Dashboard', 'Web App'],
    },
  ];

  return (
    <main className="min-h-screen relative z-10 pb-20">
      <Navigation />
      <Hero />
      
      {/* Best Work Section - Featured showcase with popup transitions */}
      <BestWork />
      
      {/* Design Philosophy Section */}
      <DesignPhilosophy />
      
      {/* Projects Section - Full width, stacked */}
      <section id="work" className="px-0 py-20 md:py-32">
        <div className="px-6 md:px-12 lg:px-24 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-orange-600 font-bold mb-4">
              Portfolio
          </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-tight mb-6">
              Selected Work
          </h2>
            <p className="text-lg text-charcoal-300 max-w-2xl leading-relaxed">
              Explore high-quality, innovative designs aimed at elevating brands and captivating audiences. Each project reflects my commitment to creativity and excellence.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 px-6 md:px-12 lg:px-24 mb-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="px-6 md:px-12 lg:px-24 text-center">
          <motion.a
            href="/work"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 px-12 py-6 bg-orange-600 text-white font-bold uppercase tracking-wider hover:bg-orange-700 transition-all duration-300 text-sm rounded-2xl shadow-lg shadow-orange-600/20 hover:shadow-xl hover:shadow-orange-600/30"
          >
            View All Work
            <span className="text-xl">→</span>
          </motion.a>
        </div>
      </section>
      
      <About />
      <Capabilities />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
