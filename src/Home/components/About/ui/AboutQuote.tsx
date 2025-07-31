'use client';

import { motion } from 'framer-motion';

const AboutQuote = () => {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mt-24 px-4 text-center max-w-3xl mx-auto"
    >
      <blockquote className="relative text-base md:text-lg italic text-base-content/70 leading-relaxed border-l-4 border-primary pl-6">
        <span className="text-xl md:text-2xl text-base-content/80 font-medium">
          “งานเราต้องดูแพง เพราะลูกค้าเราไม่ใช่คนธรรมดา”
        </span>
      </blockquote>
      <figcaption className="mt-3 text-xs text-base-content/50">
        — เจ้าป่า ・ JP Visual & Docs
      </figcaption>
    </motion.figure>
  );
};

export default AboutQuote;
