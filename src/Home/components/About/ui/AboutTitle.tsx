'use client';

import { motion } from 'framer-motion';

const AboutTitle = () => {
  return (
    <motion.h2
      id="about-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center text-balance font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl text-base-content"
    >
      <span className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        JP Visual & Docs
      </span>
    </motion.h2>
  );
};

<<<<<<< HEAD
export default AboutTitle;
=======
<<<<<<< HEAD
export default AboutTitle;
=======
export default AboutTitle;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
