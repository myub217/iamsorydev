// src/Home/components/Header/Header.tsx

import { FC } from 'react';
import Logo from './ui/Logo';

const Header: FC = () => {
  return (
    <header
      role="banner"
      className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur border-b border-base-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <span className="hidden text-xs sm:text-sm text-muted-foreground sm:block">
          Dev by เจ้าป่า
        </span>
      </div>
    </header>
  );
};

export default Header;
