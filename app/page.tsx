'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import Impact from '@/components/Impact';
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
  ];

  return (
    <main className="min-h-screen relative z-10 pb-20">
      <Navigation />
      <Hero />
      
      {/* Projects Section - Full width, stacked */}
      <section id="work" className="px-0">
        <div className="px-6 md:px-12 lg:px-24 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-32"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-charcoal-400 font-medium mb-6">
              Work
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white leading-tight">
              Selected Work
            </h2>
            <p className="text-lg text-charcoal-300 mt-6 max-w-2xl">
              Explore high-quality, innovative designs aimed at elevating brands and captivating audiences. Each project reflects my commitment to creativity and excellence.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6 md:px-12 lg:px-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="px-6 md:px-12 lg:px-24 py-20 text-center">
          <motion.a
            href="/work"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, x: 5 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-orange-600 text-white font-medium hover:bg-orange-700 transition-all duration-300 text-lg"
          >
            View All Work
            <span className="text-xl">→</span>
          </motion.a>
        </div>
      </section>
      
      <Capabilities />
      <About />
      <Impact />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
