// src/Home/components/About/ui/AboutDescription.tsx
'use client';

import { motion } from 'framer-motion';

const AboutDescription = () => {
  return (
    <motion.section
      aria-labelledby="about-description"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center space-y-6 text-base md:text-lg text-base-content/80"
    >
      {/* ✅ Tagline / Blockquote */}
      <blockquote
        id="about-description"
        className="text-lg md:text-xl font-semibold leading-relaxed text-base-content/90"
      >
        “ทำธุรกิจสีเทาให้ดูโปรฯ และมีมาตรฐานระดับมืออาชีพ”
      </blockquote>

      {/* ✅ Business Description */}
      <p className="leading-relaxed text-base-content/70">
        เราคือทีมงานตัวจริง นำโดย <strong>เจ้าป่า</strong> พร้อมนักพัฒนาและโปรดิวเซอร์สายลุย
        ที่เชี่ยวชาญด้านการสร้างระบบแอปเฉพาะทาง ครอบคลุมทั้งสายเทาและไม่เทา
        จัดการด้วยสไตล์มืออาชีพ ครบทั้ง <strong>UX</strong>, <strong>UI</strong>,{' '}
        <strong>Backend</strong>, และ <strong>DevOps</strong>
      </p>

      {/* ✅ Signature Line / Punchline */}
      <p className="text-sm italic leading-snug text-base-content/50">
        สิ่งที่ Google หรือ YouTube ไม่มีสอน — เราสอน.
        <br />
        แต่บางอย่างก็โชว์ไม่ได้ทั้งหมด อ๊า ๆ
      </p>
    </motion.section>
  );
};

<<<<<<< HEAD
export default AboutDescription;
=======
export default AboutDescription;
>>>>>>> 3fcc410 (update)
