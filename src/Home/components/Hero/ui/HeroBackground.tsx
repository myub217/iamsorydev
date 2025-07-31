// src/Home/components/Hero/ui/HeroBackground.tsx
'use client';

import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  className?: string;
}

const HeroBackground = ({ className = '' }: HeroBackgroundProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 overflow-hidden z-0 ${className}`}
  >
    {/* 🔵 Blurred Glow */}
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] rounded-full bg-blue-500/20 blur-3xl z-10" />

    {/* 🟣 Radial Grid Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:30px_30px] opacity-10 z-20" />

    {/* 🖼️ Custom Background Image */}
    <div className="absolute inset-0 z-0 opacity-10">
      <picture>
        <source srcSet="/assets/images/hero/hero-bg.webp" type="image/webp" />
        <img
          src="/assets/images/hero/hero-bg.jpg"
          alt="JP Visual Hero Background"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  </motion.div>
);

<<<<<<< HEAD
export default HeroBackground;
=======
<<<<<<< HEAD
export default HeroBackground;
=======
export default HeroBackground;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
