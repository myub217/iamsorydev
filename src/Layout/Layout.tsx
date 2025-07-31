<<<<<<< HEAD
=======
<<<<<<< HEAD
// ✅ src/Layout/Layout.tsx — Production-Ready App Shell for JP Visual & Docs

=======
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
'use client';

import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/Home/common/Navbar';
import Footer from '@/Home/components/Footer/Footer';
import BackToTop from '@/Home/common/BackToTop';
import ScrollProgress from '@/Home/common/ScrollProgress';
import ScrollToTop from '@/Home/common/ScrollToTop';
<<<<<<< HEAD
import TawkScript from '@/widgets/ChatWidget';
=======
<<<<<<< HEAD
import ChatWidget from '@/Home/common/ChatWidget';
>>>>>>> b269264 (update)
import { Toaster } from 'sonner';

/**
 * ✅ Layout.tsx — AppShell สำหรับ JP Visual & Docs
 * ใช้จัดโครงสร้าง UI หลัก + ฝัง global behavior ต่าง ๆ
 * รองรับการโหลด Chat script แบบปลอดภัย และเงื่อนไขตาม path
 */
const Layout = () => {
  const { pathname } = useLocation();
  const hiddenChatRoutes = ['/login', '/admin'];
  const shouldHideChat = hiddenChatRoutes.some(path => pathname.startsWith(path));

  return (
    <div className="relative flex min-h-screen flex-col bg-base-100 text-base-content">
<<<<<<< HEAD
      {/* ✅ Accessibility: ลิงก์ข้ามไปยังเนื้อหา */}
=======
      {/* ✅ Accessibility: Skip Link */}
=======
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
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute top-2 left-2 z-50 bg-white text-black px-4 py-2 rounded"
      >
        ข้ามไปยังเนื้อหา
      </a>

<<<<<<< HEAD
      {/* ✅ Scroll behavior */}
      <ScrollToTop />
      <ScrollProgress />

      {/* ✅ Global Toast Notification */}
=======
<<<<<<< HEAD
      {/* ✅ Global Scroll Behavior */}
      <ScrollToTop />
      <ScrollProgress />

      {/* ✅ Toast Notifications */}
=======
      {/* ✅ Scroll behavior */}
      <ScrollToTop />
      <ScrollProgress />

      {/* ✅ Global Toast */}
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
      <div role="region" aria-live="polite" aria-label="ระบบแจ้งเตือน">
        <Toaster richColors position="top-right" />
      </div>

<<<<<<< HEAD
      {/* ✅ Navigation */}
      <Navbar />

      {/* ✅ Main Content */}
=======
<<<<<<< HEAD
      {/* ✅ Main Navigation */}
      <Navbar />

      {/* ✅ Page Content */}
=======
      {/* ✅ Navigation */}
      <Navbar />

      {/* ✅ Main Content */}
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
      <main id="main-content" role="main" className="flex-1">
        <Outlet />
      </main>

<<<<<<< HEAD
      {/* ✅ Footer & Utility */}
      <Footer />
      <BackToTop />

      {/* ✅ Tawk.to Live Chat (เฉพาะ path ที่ไม่ถูกซ่อนไว้) */}
      {!shouldHideChat && <TawkScript />}
=======
<<<<<<< HEAD
      {/* ✅ Footer and Back-to-top */}
      <Footer />
      <BackToTop />

      {/* ✅ Conditional Live Chat */}
      {!shouldHideChat && (
        <div className="fixed bottom-4 right-4 z-50">
          <ChatWidget />
        </div>
      )}
=======
      {/* ✅ Footer + Utility */}
      <Footer />
      <BackToTop />

      {/* ✅ Live Chat Script */}
      {!shouldHideChat && <TawkScript />}
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
    </div>
  );
};

export default Layout;