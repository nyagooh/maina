'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import FilterChip from '@/components/FilterChip';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const allProjects = [
  {
    title: 'CervCareAI',
    role: 'Lead Designer',
    productType: 'Healthcare AI Platform',
    outcome: 'Revolutionary AI-powered cervical cancer prediction system delivering 94% accuracy in early detection. Designed an intuitive, clean interface that makes complex medical data accessible to healthcare professionals, featuring real-time analytics dashboards, patient management systems, and comprehensive reporting tools.',
    image: '/cervcare1i.png',
    href: '/work/cervcare',
    tags: ['AI', 'Machine Learning', 'Next.js', 'Healthcare'],
    category: 'Fintech',
    year: '2024',
    duration: '6 months',
  },
  {
    title: 'Bongo Hub',
    role: 'UI/UX Designer',
    productType: 'Creative Collaboration Platform',
    outcome: 'Comprehensive collaboration platform empowering creatives to connect, share portfolios, and build innovative projects together. Created an engaging user experience with portfolio showcases, real-time messaging, project management tools, and a vibrant community feed that drives creative collaboration.',
    image: '/mockuuups-free-macbook-pro-with-female-professional(1).jpeg',
    href: '/work/bongo-hub',
    tags: ['UI Design', 'Figma', 'Wireframing', 'Community'],
    category: 'Dashboards',
    year: '2023',
    duration: '4 months',
  },
  {
    title: 'Salama',
    role: 'Product Designer',
    productType: 'AI Travel Companion',
    outcome: 'Intelligent travel app connecting athletes worldwide with AI-powered trip planning, real-time collaboration features, and seamless document management. Designed intuitive user flows for booking accommodations, connecting with fellow athletes, managing travel itineraries, and accessing destination-specific athletic facilities and events.',
    image: '/mockuuups-female-hand-holding-iphone-14-pro-mockup(3).png',
    href: '/work/salama',
    tags: ['UI Design', 'Figma', 'AI', 'Mobile UX'],
    category: 'Mobile',
    year: '2024',
    duration: '5 months',
  },
  {
    title: 'PeerFund',
    role: 'Lead Product Designer',
    productType: 'Fintech Lending Platform',
    outcome: 'Modern peer-to-peer lending platform revolutionizing financial access in emerging markets. Designed a trustworthy, secure interface for borrowers and lenders, featuring automated credit scoring, transparent transaction tracking, and an intuitive dashboard for managing multiple loans and investments.',
    image: '/peerfund.png',
    href: '/work/peerfund',
    tags: ['Fintech', 'Mobile App', 'Web Platform', 'UX Research'],
    category: 'Fintech',
    year: '2023',
    duration: '8 months',
  },
  {
    title: 'Digital Ducks',
    role: 'UI/UX Designer',
    productType: 'Educational Platform',
    outcome: 'Interactive learning platform for children featuring gamified lessons and engaging educational content. Created colorful, playful interfaces with progress tracking, achievement systems, and parent monitoring tools that make learning fun and effective for young students.',
    image: '/digitalducks.jpeg',
    href: '/work/digital-ducks',
    tags: ['UI Design', 'Gamification', 'Education', 'Kids'],
    category: 'Mobile',
    year: '2023',
    duration: '3 months',
  },
  {
    title: 'A1 Professional Cleaning',
    role: 'Web Designer & Developer',
    productType: 'Service Business Website',
    outcome: 'Modern, responsive website for a professional cleaning service company. Designed a conversion-focused layout with online booking system, service packages, testimonials, and easy-to-navigate service areas. Implemented SEO optimization and mobile-first approach for maximum reach.',
    image: '/image.png',
    href: '/work/a1-cleaning',
    tags: ['Tailwind CSS', 'JavaScript', 'Responsive', 'SEO'],
    category: 'Dashboards',
    year: '2023',
    duration: '2 months',
  },
  {
    title: 'Trident Solutions',
    role: 'UI/UX Designer',
    productType: 'Corporate Technology Website',
    outcome: 'Professional corporate website for a technology solutions provider. Created a modern, trustworthy design showcasing services, case studies, and client success stories. Designed with clear information architecture, professional color palette, and conversion-optimized contact forms.',
    image: '/Trident.png',
    href: '/work/trident',
    tags: ['Tailwind CSS', 'UI/UX', 'Corporate', 'B2B'],
    category: 'Dashboards',
    year: '2022',
    duration: '3 months',
  },
];

const filters = ['All', 'Fintech', 'Web3', 'Dashboards', 'Mobile'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-charcoal-900">
      <Navigation />
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-28">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white mb-12 leading-tight">
              Work
            </h1>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {filters.map((filter) => (
                <FilterChip
                  key={filter}
                  label={filter}
                  active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
