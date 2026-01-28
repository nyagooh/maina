'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const articles = [
  {
    title: 'Usability Testing',
    excerpt: 'Usability testing is testing the functionality of a website, app, or other digital product by observing real users as they attempt to complete tasks on it.',
    href: 'https://medium.com/@nyagooh/usability-testing-67a400746dbc',
    date: 'Jan 6, 2025',
  },
  {
    title: 'UX Design',
    excerpt: 'A comprehensive guide to UX design principles and best practices for creating user-friendly digital experiences.',
    href: 'https://medium.com/@nyagooh/ux-design-403997ea0605',
    date: 'Jan 4, 2025',
  },
  {
    title: 'Design Thinking',
    excerpt: 'What is Design thinking? It is a non-linear process that a team uses to understand users, challenge assumptions, redefine problems and create innovative solutions.',
    href: 'https://medium.com/@nyagooh/design-thinking-d720659c7a98',
    date: 'Jan 2, 2025',
  },
];

export default function Writing() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        className="mb-20 md:mb-28"
      >
          <p className="text-sm uppercase tracking-[0.2em] text-charcoal-400 font-medium mb-4">
          Writing
        </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6 leading-tight">
          Design Thoughts
        </h2>
      </motion.div>
        <div className="space-y-8 md:space-y-10">
        {articles.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 50, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
              whileHover={{ x: 10 }}
              className="p-10 md:p-12 bg-charcoal-800 border border-charcoal-700 hover:border-orange-600 transition-all duration-300 cursor-pointer group"
          >
              <Link href={article.href} target="_blank" className="block">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-display font-light text-white group-hover:text-orange-600 transition-colors duration-300">
                  {article.title}
                </h3>
                  <span className="text-sm text-charcoal-400">{article.date}</span>
              </div>
                <p className="text-base text-charcoal-400 leading-relaxed mb-4">
                {article.excerpt}
              </p>
                <div className="flex items-center gap-2 text-orange-600 group-hover:gap-4 transition-all duration-300">
                  <span className="text-sm font-medium">Read More</span>
                  <span className="text-xl">→</span>
                </div>
            </Link>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
