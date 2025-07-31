// src/Home/components/Hero/ui/HeroBadge.tsx

import { BadgeCheck } from 'lucide-react';
import { FC } from 'react';

const HeroBadge: FC = () => {
  return (
    <div
      role="status"
      aria-label="พร้อมลุยแบบมืออาชีพ"
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1 text-sm text-white shadow-sm backdrop-blur-sm"
    >
      <BadgeCheck className="h-4 w-4 text-green-500" strokeWidth={2.2} />
      <span className="font-medium tracking-tight whitespace-nowrap">พร้อมลุยแบบมืออาชีพ</span>
    </div>
  );
};

export default HeroBadge;
