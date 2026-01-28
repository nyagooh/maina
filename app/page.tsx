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
      title: 'CervCareAI',
      role: 'Lead Designer',
      productType: 'Healthcare AI',
      outcome: 'AI-powered cervical cancer prediction system with clean, professional interface delivering accurate insights for early detection.',
      image: '/cervcare1i.png',
      href: '/work/cervcare',
      tags: ['AI', 'Machine Learning', 'Next.js'],
    },
    {
      title: 'Bongo Hub',
      role: 'UI/UX Designer',
      productType: 'Creative Platform',
      outcome: 'Comprehensive UI/UX design for creatives to connect, collaborate and build together.',
      image: '/mockuuups-free-macbook-pro-with-female-professional(1).jpeg',
      href: '/work/bongo-hub',
      tags: ['UI Design', 'Figma', 'Wireframing'],
    },
    {
      title: 'Salama',
      role: 'Product Designer',
      productType: 'Travel App',
      outcome: 'AI-powered travel companion for athletes that helps plan trips, connect with other athletes, and manage travel documents.',
      image: '/mockuuups-female-hand-holding-iphone-14-pro-mockup(3).png',
      href: '/work/salama',
      tags: ['UI Design', 'Figma', 'AI'],
    },
    {
      title: 'PeerFund',
      role: 'Lead Product Designer',
      productType: 'Fintech Solution',
      outcome: 'Modern peer-to-peer lending platform revolutionizing financial access in emerging markets with intuitive user experience.',
      image: '/peerfund.png',
      href: '/work/peerfund',
      tags: ['Fintech', 'Mobile App'],
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
