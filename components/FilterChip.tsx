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
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active
          ? 'glass text-lilac-600 border border-lilac-200'
          : 'glass text-base-dark/60 hover:text-base-dark'
      }`}
    >
      {label}
    </motion.button>
  );
}
