'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { FileText, MessagesSquare, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessagesSquare className="w-7 h-7 text-yellow-500" />,
    title: 'คุยรายละเอียด',
    description: 'ส่งความต้องการผ่าน LINE หรือฟอร์มหน้าเว็บ เราตอบไวไม่ปล่อยค้าง',
  },
  {
    icon: <FileText className="w-7 h-7 text-blue-500" />,
    title: 'จัดเตรียมเอกสาร',
    description: 'เรารวบรวม จัดทำ หรือแก้ไขเอกสารให้ตรงตามที่คุณต้องการ',
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-green-500" />,
    title: 'ส่งงานไว ปลอดภัย',
    description: 'ตรวจเช็กก่อนส่งทุกครั้ง ส่งผ่านช่องทางที่ปลอดภัย พร้อมติดตามผลได้',
  },
];

/**
 * ✅ JP HowItWorks Section
 * - แสดงขั้นตอนการทำงานแบบมืออาชีพ
 * - ใช้ semantic HTML และ animation
 */
const HowItWorks: FC = () => {
  return (
    <section
      id="how-it-works"
      aria-labelledby="howitworks-heading"
      className="bg-[#0f0f0f] dark:bg-neutral-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 text-center">
        <header className="space-y-4">
          <h2 id="howitworks-heading" className="text-3xl sm:text-5xl font-bold text-white">
            ขั้นตอนทำงานของเรา
          </h2>
          <p className="text-lg text-neutral-400">
            ทุกขั้นตอนออกแบบให้เนียน โปร และไม่ยุ่งยากสำหรับคุณ
          </p>
        </header>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left list-none">
          {steps.map(({ icon, title, description }, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 shadow space-y-4"
            >
              <div>{icon}</div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">{description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default HowItWorks;
=======
<<<<<<< HEAD
export default HowItWorks;
=======
export default HowItWorks;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
