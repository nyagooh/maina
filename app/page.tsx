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
      title: 'CoinMarket Dashboard',
      role: 'UI/UX Designer',
      productType: 'Fintech · Data-Heavy Dashboard',
      outcome: 'Redesign of a high-traffic crypto market dashboard aimed at reducing cognitive load caused by dense financial data. The focus was on improving information hierarchy, spacing, and layout so users can quickly scan prices, trends, and market movements without feeling overwhelmed.',
      image: '/Coinmarket /couinmarket.png',
      href: '/work/coinmarket',
      tags: ['Fintech', 'Dashboard', 'Data Visualization', 'Crypto'],
    },
    {
      title: 'Coinly',
      role: 'Product Designer',
      productType: 'Fintech · Crypto Investment App',
      outcome: 'Crypto investment app designed to help users track assets, monitor performance, and make informed investment decisions. The UX centers around transparency and simplicity, presenting complex portfolio data in a way that feels approachable to both new and experienced investors.',
      image: '/Coinly/Untitled.png',
      href: '/work/coinly',
      tags: ['Crypto', 'Investment', 'Mobile App', 'Portfolio Management'],
    },
    {
      title: 'Designa Agency',
      role: 'Web Designer',
      productType: 'Web3 · Marketing Website',
      outcome: 'A website for a Web3-focused design agency, built to communicate credibility, craft, and strategic thinking. The layout highlights case studies, services, and process, while the visual system balances bold Web3 aesthetics with clarity and usability for non-technical clients.',
      image: '/Design Agency/design agency.png',
      href: '/work/designa-agency',
      tags: ['Web3', 'Marketing', 'Agency', 'Corporate Website'],
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
