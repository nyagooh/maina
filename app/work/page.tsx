'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import FilterChip from '@/components/FilterChip';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const allProjects = [
  {
    title: 'Bongohub',
    role: 'UI/UX Designer',
    productType: 'Creative Marketplace · Web App',
    outcome: 'Creative marketplace designed to help creatives discover work, sell services, and build long-term professional communities. The UX focuses on trust, profile clarity, and easy service discovery, making it simple for clients to evaluate talent while giving creatives tools to showcase their skills and connect with peers.',
    image: '/Bongohub/bongo hub.png',
    href: '/work/bongohub',
    tags: [],
    category: 'All',
    categories: ['Dashboards', 'Web3', 'Apps'],
    year: '2024',
    duration: '6 months',
  },
  {
    title: 'AI Tutor App',
    role: 'Product Designer',
    productType: 'EdTech · Mobile App',
    outcome: 'AI-powered learning app for kids that enables curiosity-driven learning through natural language questions. The interface is designed to be friendly, safe, and distraction-free, with age-appropriate visuals, simple interactions, and clear feedback that encourages exploration without overwhelming young users.',
    image: '/Ai tutor learning app/Ai Tutor app.png',
    href: '/work/ai-tutor',
    tags: [],
    category: 'Apps',
    year: '2024',
    duration: '5 months',
  },
  {
    title: 'CoinMarket Dashboard',
    role: 'UI/UX Designer',
    productType: 'Fintech · Data-Heavy Dashboard',
    outcome: 'Redesign of a high-traffic crypto market dashboard aimed at reducing cognitive load caused by dense financial data. The focus was on improving information hierarchy, spacing, and layout so users can quickly scan prices, trends, and market movements without feeling overwhelmed.',
    image: '/Coinmarket /couinmarket.png',
    href: '/work/coinmarket',
    tags: [],
    category: 'Dashboards',
    categories: ['Dashboards', 'Web3'],
    year: '2024',
    duration: '4 months',
  },
  {
    title: 'Savings Dashboard',
    role: 'Product Designer',
    productType: 'Fintech · Web App',
    outcome: 'A savings dashboard that gives users a clear overview of their financial activity, including balances, transactions, and progress toward savings goals. The UX prioritizes clarity and reassurance, helping users feel in control of their money through calm visuals and well-structured data.',
    image: '/saving dashboard/saving dashboard.png',
    href: '/work/savings-dashboard',
    tags: [],
    category: 'Dashboards',
    categories: ['Dashboards', 'Web3'],
    year: '2024',
    duration: '3 months',
  },
  {
    title: 'Home Finance Dashboard',
    role: 'Product Designer',
    productType: 'Fintech · Personal Finance Web App',
    outcome: 'A personal finance home dashboard that brings all money activity into one central view. The UX is designed around quick orientation - helping users instantly understand where their money is, what changed, and what actions they can take next.',
    image: '/Home Dashboard/home dashboard.png',
    href: '/work/home-finance',
    tags: [],
    category: 'Apps',
    year: '2023',
    duration: '4 months',
  },
  {
    title: 'Crypto Rates & Currency Converter',
    role: 'Product Designer',
    productType: 'Crypto · Web App',
    outcome: 'A real-time crypto dashboard designed for fast access to exchange rates and currency conversions. The experience emphasizes speed, accuracy, and readability, allowing users to convert values instantly without navigating complex market screens.',
    image: '/crypto dashboard/crypto dashboard.png',
    href: '/work/crypto-converter',
    tags: [],
    category: 'Dashboards',
    categories: ['Dashboards', 'Web3'],
    year: '2023',
    duration: '2 months',
  },
  {
    title: 'Predix',
    role: 'Product Designer',
    productType: 'Crypto · AI-Assisted Trading App',
    outcome: 'AI-assisted trading app that surfaces crypto market signals to support better decision-making. The UX focuses on simplifying complex trading insights into digestible signals, using visual indicators and clear states to help users act with confidence rather than speculation.',
    image: '/predix/predix.jpeg',
    href: '/work/predix',
    tags: [],
    category: 'Apps',
    year: '2023',
    duration: '5 months',
  },
  {
    title: 'Coinly',
    role: 'Product Designer',
    productType: 'Fintech · Crypto Investment App',
    outcome: 'Crypto investment app designed to help users track assets, monitor performance, and make informed investment decisions. The UX centers around transparency and simplicity, presenting complex portfolio data in a way that feels approachable to both new and experienced investors.',
    image: '/Coinly/Untitled.png',
    href: '/work/coinly',
    tags: [],
    category: 'Apps',
    year: '2023',
    duration: '4 months',
  },
  {
    title: 'Crypto Hub',
    role: 'UI/UX Designer',
    productType: 'Crypto · Content Platform',
    outcome: 'A web app that aggregates crypto news, market updates, and insights into a single platform. The design focuses on content hierarchy and filtering, allowing users to stay informed without being flooded by noise or low-quality information.',
    image: '/crypto hub/crypto hub.png',
    href: '/work/crypto-hub',
    tags: [],
    category: 'Web3',
    year: '2023',
    duration: '3 months',
  },
  {
    title: 'Designa Agency',
    role: 'Web Designer',
    productType: 'Web3 · Marketing Website',
    outcome: 'A website for a Web3-focused design agency, built to communicate credibility, craft, and strategic thinking. The layout highlights case studies, services, and process, while the visual system balances bold Web3 aesthetics with clarity and usability for non-technical clients.',
    image: '/Design Agency/design agency.png',
    href: '/work/designa-agency',
    tags: [],
    category: 'Web3',
    year: '2023',
    duration: '3 months',
  },
  {
    title: 'Mintify',
    role: 'Product Designer',
    productType: 'Web3 · NFT Marketplace',
    outcome: 'A Web3 platform that enables artists to mint, showcase, and sell digital artwork. The UX is designed to demystify blockchain concepts by guiding users through minting flows with clear steps, visual feedback, and minimal technical jargon.',
    image: '/Mintify/mintify.png',
    href: '/work/mintify',
    tags: [],
    category: 'Web3',
    year: '2023',
    duration: '5 months',
  },
  {
    title: 'Subscription Manager App',
    role: 'Product Designer',
    productType: 'Fintech / Productivity · Mobile App',
    outcome: 'An app that helps users track and manage all subscriptions in one place. The design focuses on visibility and control—surfacing active subscriptions, renewal dates, and spending patterns so users can avoid surprise charges and make informed decisions.',
    image: '/subscription app/subscription app.png',
    href: '/work/subscription-manager',
    tags: [],
    category: 'Apps',
    year: '2022',
    duration: '3 months',
  },
  {
    title: 'Meal Prep App',
    role: 'UX Designer',
    productType: 'Food Tech · Mobile App',
    outcome: 'A meal-prep ordering app that simplifies how users discover meals, place orders, and manage recurring plans. The experience emphasizes clarity in pricing, nutrition, and scheduling, reducing friction between browsing and checkout.',
    image: '/Meal prepping/Group 1.png',
    href: '/work/meal-prep',
    tags: [],
    category: 'Apps',
    year: '2023',
    duration: '3 months',
  },
];

const filters = ['All', 'Dashboards', 'Web3', 'Apps'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? allProjects
      : allProjects.filter((project) => {
          // Check if project has categories array (for multiple categories)
          if ('categories' in project && Array.isArray(project.categories)) {
            return project.categories.includes(activeFilter);
          }
          // Fallback to single category
          return project.category === activeFilter;
        });

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
