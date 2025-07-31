'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Server } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    title: 'ความปลอดภัยสูง',
    description: 'เข้ารหัสข้อมูล พร้อมระบบแจ้งเตือนทุกการใช้งาน รองรับ PDPA เต็มรูปแบบ',
  },
  {
    icon: <Zap className="w-8 h-8 text-green-500" />,
    title: 'ไวทันใจ',
    description: 'โหลดไว ใช้ไว ส่งไว รองรับลูกค้าที่ต้องการงานด่วนแบบไม่สะดุด',
  },
  {
    icon: <Server className="w-8 h-8 text-purple-500" />,
    title: 'ระบบหลังบ้านครบ',
    description: 'มีระบบหลังบ้านพร้อมใช้ เช่น LINE แจ้งเตือน, API, ระบบเช็กสถานะ',
  },
];

/**
 * ✅ JP FeatureCards Section
 * - แสดงคุณสมบัติเด่น 3 ข้อ
 * - Responsive, Animated, Semantic
 */
const FeatureCards: FC = () => {
  return (
    <section
      id="features"
      aria-labelledby="feature-heading"
      className="bg-[#0f0f0f] dark:bg-neutral-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        <header className="space-y-4">
          <h2 id="feature-heading" className="text-3xl sm:text-5xl font-bold text-white">
            ฟีเจอร์เด่นของเรา
          </h2>
          <p className="text-lg text-neutral-400">
            ฟีเจอร์ที่ทำให้ JP Visual & Docs แตกต่างจากรายอื่น
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 text-left">
          {features.map(({ icon, title, description }, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 shadow space-y-4"
            >
              <div>{icon}</div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">{description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureCards;
