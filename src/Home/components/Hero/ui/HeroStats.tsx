// src/Home/components/Hero/ui/HeroStats.tsx
'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Clock4, Zap } from 'lucide-react';
import { FC } from 'react';

const stats = [
  {
    icon: ShieldCheck,
    color: 'text-green-500',
    label: 'ความลับปลอดภัย',
  },
  {
    icon: Clock4,
    color: 'text-yellow-400',
    label: 'งานไวใน 24 ชม.',
  },
  {
    icon: Zap,
    color: 'text-blue-500',
    label: 'พร้อมลุยทุกเคส',
  },
];

const HeroStats: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-4"
      role="list"
      aria-label="JP Visual จุดเด่น"
    >
      {stats.map(({ icon: Icon, color, label }, index) => (
        <div
          key={index}
          role="listitem"
          className="flex flex-col items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900/80 px-6 py-5 shadow-md text-center"
        >
          <Icon className={`h-6 w-6 ${color}`} strokeWidth={2.2} aria-hidden="true" />
          <span className="text-sm font-medium text-white whitespace-nowrap">{label}</span>
        </div>
      ))}
    </motion.div>
  );
};

<<<<<<< HEAD
export default HeroStats;
=======
<<<<<<< HEAD
export default HeroStats;
=======
export default HeroStats;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
