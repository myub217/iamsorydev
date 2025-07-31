// src/Home/components/Header/ui/Logo.tsx

import { FC } from 'react';
import { Link } from 'react-router-dom';

const Logo: FC = () => {
  return (
    <Link
      to="/"
      aria-label="JP Visual & Docs Home"
      className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition"
    >
      <span className="text-xl sm:text-2xl font-extrabold tracking-tight leading-none">
        JP-Visual<span className="text-secondary align-super text-xs">'</span>Docs
      </span>
    </Link>
  );
};

export default Logo;
