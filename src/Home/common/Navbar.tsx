// ✅ src/Home/common/Navbar.tsx — JP-System Responsive Navbar

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';
import MobileMenu from './MobileMenu';

/**
 * ✅ Navbar Component
 * - รองรับ Responsive, Dark Mode, Transition Smooth
 * - ใช้ร่วมกับ React Router DOM + Lucide + TailwindCSS
 */
const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'หน้าแรก', path: '/' },
    { label: 'เข้าสู่ระบบ', path: '/login' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <nav className="container navbar px-4 py-2" role="navigation" aria-label="Main navigation">
          {/* ✅ Logo */}
          <div className="flex-1">
            <Link
              to="/"
              className="text-xl font-bold text-primary hover:opacity-80 transition-colors"
            >
              JP-System
            </Link>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  'btn btn-sm btn-ghost px-4 rounded-md transition-colors',
                  pathname === path
                    ? 'text-primary font-semibold bg-base-200 dark:bg-base-300'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                )}
                aria-current={pathname === path ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* ✅ Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="btn btn-ghost btn-sm"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ✅ Fullscreen Mobile Drawer */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
