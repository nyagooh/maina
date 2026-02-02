'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Image from 'next/image';

const experiences = [
  {
    company: 'Nova Technologies',
    role: 'Product Designer',
    period: '',
    description: 'Designing a cross-border remittance app that enables users to send and receive money across multiple countries and currencies. Designing and refining key user flows, including onboarding, KYC, payments, fee visibility, and transaction tracking.',
    details: 'Built and maintained a scalable design system in Figma using Auto Layout, components, variants, and design tokens, reducing UI inconsistencies by 45%. Simplified complex technical and regulatory requirements into clear, user-friendly flows, reducing user errors by 28%.'
  },
  {
    company: 'Zone01 Kisumu',
    role: 'Product Designer',
    period: '',
    description: 'Led end-to-end UX research and design for web and mobile products, reviewing and refining interfaces to improve task completion by 38%. Conducted user interviews and usability testing to evaluate design clarity and usability, reducing onboarding friction by 32%.',
    details: 'Built and maintained a scalable Figma design system using components and Auto Layout, increasing cross-product consistency by 50%. Worked closely with product managers and engineers to translate technical and functional requirements into clear, usable interface designs.'
  },
  {
    company: 'Rishiflow',
    role: 'UI/UX Designer',
    period: '',
    description: 'Led end-to-end design for an AI-powered chatbot mobile application, owning key user journeys such as onboarding, session booking, and in-app content access. Reviewed and refined AI-assisted design outputs, improving usability and increasing task completion rates by 30%.',
    details: 'Designed reusable UI components and interaction patterns in Figma, improving design-to-development handoff speed by 40%. Created wireframes, interactive prototypes, and high-fidelity designs while maintaining consistency through a scalable design system.'
  },
  {
    company: 'Bongohub',
    role: 'UI/UX Designer',
    period: '',
    description: 'Redesigned high-impact user flows (onboarding, discovery, and project showcase), reviewing and refining layouts to improve clarity and usability, increasing user engagement by 27%. Built and maintained reusable UI components and layout patterns in Figma.',
    details: 'Applied Material Design principles and accessibility standards to ensure consistent, usable, and inclusive interfaces across the product. Worked closely with developers and product stakeholders to balance user needs with technical constraints, reducing rework by 25%.'
  },
  {
    company: 'Kisumu Youth Wash Parliament',
    role: 'Web Developer',
    period: '',
    description: 'Designed and launched a responsive, user-centered website using Tailwind CSS, improving overall usability and increasing conversions by 35%. Evaluated and optimized frontend performance, reducing page load times by 50%.',
    details: 'Conducted A/B testing and usability reviews to validate design decisions, resulting in a 20% increase in user engagement. Designed accessible, mobile-first interfaces to ensure consistent and reliable experiences across devices.'
  },
  {
    company: 'A1 Professional Cleaning Service',
    role: 'Web Developer',
    period: '',
    description: 'Designed and developed the A1 Cleaning Services website using Tailwind CSS. Built a responsive, mobile first, and cross browser compatible UI to ensure consistent user experience across devices.',
    details: 'Improved customer engagement by 40% through clean, intuitive interface design aligned with brand identity.'
  },
  {
    company: 'Cityright LLP',
    role: 'UI/UX Design Intern',
    period: '',
    description: 'Reviewed and redesigned key user flows, evaluating usability and clarity, reducing task completion time by 30% and improving user satisfaction. Conducted usability testing to assess design quality, iterating on feedback.',
    details: 'Created wireframes, interactive prototypes, and high-fidelity designs in Figma, following clear structure and naming standards. Improved navigation and interface clarity, increasing user engagement by 25% across mobile and desktop platforms.'
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
            src="/ChatGPT Image Jan 30, 2026, 03_48_25 PM.png"
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
                
                {/* Role */}
                <div className="mb-6">
                  <p className="text-lg font-normal text-charcoal-900">
                    {exp.role}
                  </p>
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
              { name: 'FigJam', color: 'from-purple-400/10 to-pink-400/10', border: 'group-hover:border-purple-400/50' },
              { name: 'Adobe XD', color: 'from-purple-600/10 to-purple-800/10', border: 'group-hover:border-purple-600/50' },
              { name: 'Sketch', color: 'from-yellow-500/10 to-orange-500/10', border: 'group-hover:border-yellow-500/50' },
              { name: 'Framer', color: 'from-blue-500/10 to-cyan-500/10', border: 'group-hover:border-blue-500/50' },
              { name: 'Webflow', color: 'from-blue-600/10 to-indigo-600/10', border: 'group-hover:border-blue-600/50' },
              { name: 'Lottie', color: 'from-green-500/10 to-teal-500/10', border: 'group-hover:border-green-500/50' },
              { name: 'Jitter', color: 'from-purple-600/10 to-pink-600/10', border: 'group-hover:border-purple-600/50' },
              { name: 'Protopie', color: 'from-pink-500/10 to-red-500/10', border: 'group-hover:border-pink-500/50' },
              { name: 'Principle', color: 'from-indigo-500/10 to-purple-500/10', border: 'group-hover:border-indigo-500/50' },
              { name: 'Mockuuups Studio', color: 'from-orange-500/10 to-red-500/10', border: 'group-hover:border-orange-500/50' },
              { name: 'Angle', color: 'from-blue-400/10 to-cyan-400/10', border: 'group-hover:border-blue-400/50' },
              { name: 'Artboard Studio', color: 'from-pink-400/10 to-purple-400/10', border: 'group-hover:border-pink-400/50' },
              { name: 'GitHub', color: 'from-gray-700/10 to-black/10', border: 'group-hover:border-gray-700/50' },
              { name: 'Miro', color: 'from-yellow-400/10 to-yellow-600/10', border: 'group-hover:border-yellow-400/50' }
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
