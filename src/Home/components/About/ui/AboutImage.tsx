'use client';

import { motion } from 'framer-motion';
import Signature from '@/assets/signature.webp';

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
        src={Signature}
        alt="ลายเซ็นเจ้าป่า JP-System"
        className="mx-auto w-32 sm:w-40 md:w-48 opacity-80"
        loading="lazy"
        decoding="async"
        fetchPriority="low" // ✅ แก้จาก fetchpriority เป็น fetchPriority
      />
      <figcaption className="mt-3 text-xs leading-tight text-base-content/50">
        By เจ้าป่า ・ JP Visual & Docs
      </figcaption>
    </motion.figure>
  );
};

export default AboutImage;
