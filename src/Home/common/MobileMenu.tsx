// ✅ src/Home/common/MobileMenu.tsx — JP Visual & Docs Mobile Nav Drawer

import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ✅ MobileMenu
 * - เมนูมือถือแบบ Slide-down สำหรับ JP Visual & Docs
 * - รองรับ dark mode, responsive, และ CTA ที่เน้น conversion
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navItems = [
    { href: '/', label: 'หน้าแรก' },
    { href: '#portfolio', label: 'ผลงาน' },
    { href: '#services', label: 'บริการ' },
    { href: '#about', label: 'เกี่ยวกับเรา' },
  ];

  return (
    <div
      className={`fixed inset-0 z-[60] bg-base-100 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral">
        <span className="text-lg font-bold">JP Visual & Docs</span>
        <button onClick={onClose} aria-label="Close menu">
          <X className="w-6 h-6 text-primary" />
        </button>
      </div>

      <nav className="flex flex-col items-center justify-center gap-6 py-10 text-lg font-medium">
        {navItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={onClose}
            className="hover:text-primary transition-colors duration-200"
          >
            {label}
          </a>
        ))}

        <a
          href="https://line.me/ti/p/เจ้าป่า" // 🔗 โปรดเปลี่ยนลิงก์เป็นของจริง
          onClick={onClose}
          className="btn btn-primary px-6 py-2 text-base font-semibold rounded-xl shadow-md transition hover:scale-105"
        >
          ติดต่อเจ้าป่า
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
