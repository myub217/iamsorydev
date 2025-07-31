// src/Home/components/About/About.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AboutTitle from './ui/AboutTitle';
import AboutDescription from './ui/AboutDescription';
import AboutImage from './ui/AboutImage';
import AboutQuote from './ui/AboutQuote';

/**
 * ✅ About.tsx — Section แนะนำตัวสำหรับ JP Visual & Docs
 * - ครอบด้วย Motion Container
 * - รองรับ Subcomponents: Title, Description, Image, Quote
 * - รองรับ accessibility และ animation
 * - ปรับ Responsive Layout แล้ว
 */

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden bg-background text-base-content px-4 sm:px-6 lg:px-8 py-24"
    >
      {/* 🎨 Optional Background Shape */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl opacity-30" /> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mx-auto w-full max-w-3xl space-y-14 text-center"
      >
        <AboutTitle />
        <AboutDescription />
        <AboutImage />
        <AboutQuote />
      </motion.div>
    </section>
  );
};

<<<<<<< HEAD
export default About;
=======
export default About;
>>>>>>> 3fcc410 (update)
