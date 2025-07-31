// src/Home/components/About/ui/AboutImage.tsx
'use client';

import { motion } from 'framer-motion';

const AboutImage = () => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="pt-6 text-center"
    >
      <img
        src="/assets/signature.webp" // ✅ โหลดจาก public/
        alt="ลายเซ็นเจ้าป่า JP-System"
        className="mx-auto w-28 sm:w-36 md:w-44 lg:w-48 opacity-80"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        width={192}
        height={64}
      />
      <figcaption className="mt-2 text-xs sm:text-sm text-base-content/50 leading-tight">
        By เจ้าป่า ・ JP Visual & Docs
      </figcaption>
    </motion.figure>
  );
};

<<<<<<< HEAD
export default AboutImage;
=======
export default AboutImage;
>>>>>>> 3fcc410 (update)
