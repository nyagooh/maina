'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Image from 'next/image';

const experiences = [
  {
    company: '10K Designers',
    role: 'Product Designer',
    period: '2024 - Present',
    description: 'Leading product design initiatives for multiple clients, creating user-centered solutions that drive business growth and enhance user satisfaction across various digital platforms.',
    details: 'Specializing in end-to-end product design, from research and wireframing to high-fidelity prototypes and design systems.'
  },
  {
    company: 'Freelance',
    role: 'UI/UX Designer',
    period: '2020 - 2024',
    description: 'Collaborated with startups and established brands to create impactful design solutions that aligned with business goals and effectively engaged users across various platforms.',
    details: 'Working with diverse clients including healthcare, fintech, and education sectors to deliver innovative digital experiences.'
  },
  {
    company: 'Tech Innovation Hub',
    role: 'Junior Designer',
    period: '2019 - 2020',
    description: 'Supported senior designers in creating user interfaces for web and mobile applications, contributing to projects for renowned brands and gaining valuable industry experience.',
    details: 'Focused on UI design, prototyping, and collaborating with development teams to ensure seamless implementation.'
  },
  {
    company: 'Design Bootcamp',
    role: 'Design Intern',
    period: '2019',
    description: 'Participated in intensive design training program, working on real-world projects and developing foundational skills in user research, wireframing, and visual design.',
    details: 'Completed multiple client projects focusing on mobile app design and responsive web interfaces.'
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen relative z-10">
      <Navigation />
      
      {/* Hero Section with Name */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/CKS04016.jpg"
            alt="Ann Maina"
            fill
            className="object-cover grayscale"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Large Name */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight mb-6">
                ANN MAINA
              </h1>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse" />
                <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
                  Nairobi, Kenya
                </p>
              </div>
            </motion.div>

            {/* Right: Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Hello! I'm Ann, a Product Designer specializing in creating beautiful, functional digital experiences. With a strong foundation in user-centered design, I create work that elevates brand presence and drives meaningful engagement. From intuitive interfaces to comprehensive design systems, I'm passionate about crafting solutions that resonate with users and achieve business goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section - GRAY BACKGROUND */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-charcoal-900 mb-6">
              Experience
            </h2>
            <p className="text-lg md:text-xl text-charcoal-700 max-w-3xl">
              Bringing 5+ years of industry experience in UI/UX design, branding, and product strategy to create visuals that stand out.
            </p>
          </motion.div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 hover:shadow-md transition-all duration-300"
              >
                {/* Company Name */}
                <h3 className="text-3xl md:text-4xl font-normal text-charcoal-900 mb-6">
                  {exp.company}
                </h3>
                
                {/* Role and Period */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <p className="text-lg font-normal text-charcoal-900">
                    {exp.role}
                  </p>
                  <span className="text-base text-charcoal-700 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-base text-charcoal-700 leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                {/* Details */}
                <p className="text-base text-charcoal-700 leading-relaxed">
                  {exp.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section - LIGHT BACKGROUND */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-charcoal-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Tools I Use
            </h2>
            <p className="text-lg text-charcoal-700 max-w-2xl">
              A comprehensive toolkit to bring creative visions to life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Figma', color: 'from-purple-500/10 to-pink-500/10', border: 'group-hover:border-purple-500/50' },
              { name: 'Adobe XD', color: 'from-purple-600/10 to-purple-800/10', border: 'group-hover:border-purple-600/50' },
              { name: 'Sketch', color: 'from-yellow-500/10 to-orange-500/10', border: 'group-hover:border-yellow-500/50' },
              { name: 'Photoshop', color: 'from-blue-500/10 to-blue-700/10', border: 'group-hover:border-blue-500/50' },
              { name: 'Illustrator', color: 'from-orange-600/10 to-orange-800/10', border: 'group-hover:border-orange-600/50' },
              { name: 'Prototyping', color: 'from-green-500/10 to-teal-500/10', border: 'group-hover:border-green-500/50' },
              { name: 'User Research', color: 'from-indigo-500/10 to-blue-500/10', border: 'group-hover:border-indigo-500/50' },
              { name: 'Wireframing', color: 'from-gray-500/10 to-slate-600/10', border: 'group-hover:border-gray-500/50' },
              { name: 'Design Systems', color: 'from-red-500/10 to-pink-500/10', border: 'group-hover:border-red-500/50' },
              { name: 'HTML/CSS', color: 'from-blue-600/10 to-cyan-600/10', border: 'group-hover:border-blue-600/50' },
              { name: 'React', color: 'from-cyan-500/10 to-blue-500/10', border: 'group-hover:border-cyan-500/50' },
              { name: 'Next.js', color: 'from-black/10 to-gray-800/10', border: 'group-hover:border-black/50' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative bg-white rounded-2xl p-6 text-center border border-gray-200 ${skill.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <p className="text-charcoal-900 font-semibold text-base">{skill.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
