import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PortfolioCTAProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const PortfolioCTA: React.FC<PortfolioCTAProps> = ({
  title = 'สนใจร่วมงานกับเราใช่ไหม?',
  subtitle = 'เราพร้อมออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทย์ธุรกิจคุณ',
  ctaLabel = 'ติดต่อเจ้าป่า',
  ctaHref = '/contact',
  className,
}) => {
  return (
    <section
      className={cn(
        'w-full rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white px-6 py-12 text-center',
        'flex flex-col items-center justify-center gap-4 shadow-md',
        className
      )}
    >
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-base sm:text-lg opacity-90">{subtitle}</p>
      <Link
        to={ctaHref}
        className="mt-4 inline-block rounded-full bg-white text-green-600 font-semibold px-6 py-3 text-sm shadow hover:bg-gray-100 transition"
      >
        {ctaLabel}
      </Link>
    </section>
  );
};

<<<<<<< HEAD
export default PortfolioCTA;
=======
<<<<<<< HEAD
export default PortfolioCTA;
=======
export default PortfolioCTA;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
