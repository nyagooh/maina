'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { href: '/work', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md border-charcoal-700 py-3 md:py-4 shadow-lg'
          : 'bg-transparent border-white/20 py-4 md:py-6 shadow-[0_1px_0_0_rgba(255,255,255,0.1),0_4px_12px_0_rgba(0,0,0,0.3)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex justify-between items-center">
        {/* Logo/Name with Profile Image */}
        <Link 
          href="/" 
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-300"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-orange-600/50">
            <Image 
              src="/ChatGPT Image Jan 30, 2026, 03_48_25 PM.png" 
              alt="Ann Maina"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-display font-medium text-white hover:text-orange-600 transition-colors duration-300">
            AM
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-charcoal-900/98 backdrop-blur-md border-t border-charcoal-700"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium py-2 transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-orange-600'
                    : 'text-charcoal-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
