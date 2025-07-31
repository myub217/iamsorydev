'use client';

import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '@/Home/common/Navbar';
import Footer from '@/Home/components/Footer/Footer';
import BackToTop from '@/Home/common/BackToTop';
import ScrollProgress from '@/Home/common/ScrollProgress';
import ScrollToTop from '@/Home/common/ScrollToTop';
import TawkScript from '@/widgets/ChatWidget'; // ✅ Corrected path
import { Toaster } from 'sonner';

/**
 * ✅ Layout.tsx — AppShell สำหรับ JP Visual & Docs
 * - ใช้สำหรับจัดโครงสร้าง UI หลัก + ฝัง global behavior ต่าง ๆ
 * - รองรับการโหลด Chat script แบบปลอดภัยและเงื่อนไขตาม path
 */
const Layout = () => {
  const { pathname } = useLocation();

  // ✅ ซ่อน Chat บางหน้าที่ไม่ต้องให้แสดง
  const hiddenChatRoutes = ['/login', '/admin'];
  const shouldHideChat = hiddenChatRoutes.some(path => pathname.startsWith(path));

  return (
    <div className="relative flex min-h-screen flex-col bg-base-100 text-base-content">
      {/* ✅ Accessibility: ข้ามไปยังเนื้อหา */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute top-2 left-2 z-50 bg-white text-black px-4 py-2 rounded"
      >
        ข้ามไปยังเนื้อหา
      </a>

      {/* ✅ Scroll behavior */}
      <ScrollToTop />
      <ScrollProgress />

      {/* ✅ Global Toast */}
      <div role="region" aria-live="polite" aria-label="ระบบแจ้งเตือน">
        <Toaster richColors position="top-right" />
      </div>

      {/* ✅ Navigation */}
      <Navbar />

      {/* ✅ Main Content */}
      <main id="main-content" role="main" className="flex-1">
        <Outlet />
      </main>

      {/* ✅ Footer + Utility */}
      <Footer />
      <BackToTop />

      {/* ✅ Live Chat Script */}
      {!shouldHideChat && <TawkScript />}
    </div>
  );
};

export default Layout;