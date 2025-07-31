'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/Home/common/SectionWrapper';
import FeatureCards from './ui/FeatureCards';
import HowItWorks from './ui/HowItWorks';
import Awards from './ui/Awards';

const Feature = () => {
  return (
    <>
      {/* Why Choose Us Section */}
      <SectionWrapper id="features">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          aria-labelledby="whyus-heading"
          className="mb-10 text-center"
        >
<<<<<<< HEAD
          <h2 id="whyus-heading" className="text-3xl sm:text-4xl font-bold text-white">
=======
<<<<<<< HEAD
          <h2
            id="whyus-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
=======
          <h2 id="whyus-heading" className="text-3xl sm:text-4xl font-bold text-white">
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
            ทำไมต้องเลือกเรา?
          </h2>
        </motion.header>

        <FeatureCards />
      </SectionWrapper>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Awards / Trust Proof Section */}
      <SectionWrapper id="awards">
        <Awards />
      </SectionWrapper>
    </>
  );
};

<<<<<<< HEAD
export default Feature;
=======
<<<<<<< HEAD
export default Feature;
=======
export default Feature;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
