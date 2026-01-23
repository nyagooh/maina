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
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <p className="text-sm uppercase tracking-wider text-base-dark/50 font-medium mb-4">
          Writing
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-semibold text-base-dark mb-6">
          Design Thoughts
        </h2>
      </motion.div>
      <div className="space-y-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass p-8 rounded-2xl hover:bg-white/90 transition-all duration-300"
          >
            <Link href={article.href} target="_blank" className="block group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <h3 className="text-2xl font-display font-semibold text-base-dark group-hover:text-lilac-600 transition-colors">
                  {article.title}
                </h3>
                <span className="text-sm text-base-dark/50">{article.date}</span>
              </div>
              <p className="text-base text-base-dark/70 leading-relaxed">
                {article.excerpt}
              </p>
              <span className="inline-block mt-4 text-sm font-medium text-lilac-600 group-hover:translate-x-2 transition-transform">
                Read More →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
