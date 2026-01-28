'use client';

import { motion } from 'framer-motion';

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function FilterChip({ label, active, onClick }: FilterChipProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-2 text-sm font-medium transition-all duration-300 ${
        active
          ? 'bg-orange-600 text-white border border-orange-600'
          : 'bg-charcoal-800 text-charcoal-300 hover:text-orange-600 border border-charcoal-700 hover:border-orange-600'
      }`}
    >
      {label}
    </motion.button>
  );
}
