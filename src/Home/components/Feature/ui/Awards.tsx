'use client';

import { BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { FC } from 'react';

const awards: string[] = [
  'ความไว้วางใจจากลูกค้ากว่า 5,000 ราย',
  'มีระบบหลังบ้านอัตโนมัติพร้อมบอท',
  'รองรับเอกสารทุกประเภท ทั้งจริง-จำลอง',
  'ออกแบบโลโก้ แบรนด์ดิ้ง และ UI ครบวงจร',
];

/**
 * ✅ Awards Section
 * - แสดงจุดแข็งของ JP Visual & Docs
 * - มี animation & semantic <ul><li> + A11y
 */
const Awards: FC = () => {
  return (
    <motion.ul
      aria-label="ความสำเร็จและความเชื่อมั่นจากลูกค้า"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {awards.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-4 shadow"
        >
          <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm text-white leading-relaxed">{item}</p>
        </li>
      ))}
    </motion.ul>
  );
};

<<<<<<< HEAD
export default Awards;
=======
<<<<<<< HEAD
export default Awards;
=======
export default Awards;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
