'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import FilterChip from '@/components/FilterChip';
import Footer from '@/components/Footer';

const allProjects = [
  {
    title: 'CervCareAI',
    role: 'Lead Designer',
    productType: 'Healthcare AI',
    outcome: 'AI-powered cervical cancer prediction system with clean, professional interface.',
    image: '/cervcare1i.png',
    href: '/work/cervcare',
    tags: ['AI', 'Machine Learning', 'Next.js'],
    category: 'Fintech',
  },
  {
    title: 'Bongo Hub',
    role: 'UI/UX Designer',
    productType: 'Creative Platform',
    outcome: 'Comprehensive UI/UX design for creatives to connect, collaborate and build.',
    image: '/mockuuups-free-macbook-pro-with-female-professional(1).jpeg',
    href: '/work/bongo-hub',
    tags: ['UI Design', 'Figma', 'Wireframing'],
    category: 'Dashboards',
  },
  {
    title: 'Salama',
    role: 'Product Designer',
    productType: 'Travel App',
    outcome: 'AI-powered travel companion for athletes.',
    image: '/mockuuups-female-hand-holding-iphone-14-pro-mockup(3).png',
    href: '/work/salama',
    tags: ['UI Design', 'Figma', 'AI'],
    category: 'Mobile',
  },
  {
    title: 'Meal Prep App',
    role: 'UX Designer',
    productType: 'Food Delivery',
    outcome: 'Mobile app for ordering nutritious, customized meal prep plans.',
    image: '/mockuuups-free-transparent-iphone-air-mockup(2).png',
    href: '/work/meal-prep',
    tags: ['UX Design', 'UI Design', 'Figma'],
    category: 'Mobile',
  },
  {
    title: 'A1 Professional Cleaning',
    role: 'Web Designer',
    productType: 'Service Website',
    outcome: 'Modern cleaning service website with responsive design.',
    image: '/image.png',
    href: '/work/a1-cleaning',
    tags: ['Tailwind CSS', 'JavaScript', 'Responsive'],
    category: 'Dashboards',
  },
  {
    title: 'Trident Solutions',
    role: 'UI/UX Designer',
    productType: 'Corporate Website',
    outcome: 'Corporate website for a technology solutions provider.',
    image: '/Trident.png',
    href: '/work/trident',
    tags: ['Tailwind CSS', 'UI/UX', 'Corporate'],
    category: 'Dashboards',
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
          <div className="space-y-0">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
