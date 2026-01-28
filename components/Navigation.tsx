'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md border-charcoal-700 py-4 shadow-lg'
          : 'bg-transparent border-white/20 py-6 shadow-[0_1px_0_0_rgba(255,255,255,0.1),0_4px_12px_0_rgba(0,0,0,0.3)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-display font-medium text-white hover:text-orange-600 transition-colors duration-300"
        >
          AM
        </Link>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 relative ${
                pathname === link.href
                  ? 'text-orange-600'
                  : 'text-charcoal-300 hover:text-orange-600'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
