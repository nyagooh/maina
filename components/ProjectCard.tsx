'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  role: string;
  productType: string;
  outcome: string;
  image: string;
  href: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  role,
  productType,
  outcome,
  image,
  href,
  tags = [],
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={href}>
        <div className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
          <div className="relative aspect-[4/3] overflow-hidden bg-base-dark/5">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-8 space-y-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-base-dark/50 font-medium">
                {productType}
              </p>
              <h3 className="text-2xl font-display font-semibold text-base-dark">
                {title}
              </h3>
              <p className="text-sm text-base-dark/60">{role}</p>
            </div>
            <p className="text-base text-base-dark/70 leading-relaxed">
              {outcome}
            </p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium glass rounded-full text-base-dark/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
