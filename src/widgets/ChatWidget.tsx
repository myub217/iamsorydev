<<<<<<< HEAD
=======
// src/widgets/ChatWidget/TawkScript.tsx
>>>>>>> b269264 (update)
'use client';

import { useEffect } from 'react';

<<<<<<< HEAD
/**
 * ✅ ChatWidget.tsx — Tawk.to Integration สำหรับ JP Visual & Docs
 *
 * - ปลอดภัย และไม่ขัดกับ SSR (ใช้ Delay inject)
 * - แสดงเฉพาะ public page (จัดการที่ Layout.tsx)
 * - Visitor name/email ระบุได้
 * - ป้องกัน script ซ้ำ / ลบซ้ำ / timing conflict
 */

const TAWK_PROPERTY_ID = '688b41edee33f51926870e9f';
const TAWK_WIDGET_ID = '1j1g0o1nq';
const TAWK_SRC = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;

=======
>>>>>>> b269264 (update)
declare global {
  interface Window {
    Tawk_API?: {
      visitor?: {
        name?: string;
        email?: string;
      };
      [key: string]: unknown;
    };
    Tawk_LoadStart?: Date;
  }
}

const TawkScript = () => {
  useEffect(() => {
<<<<<<< HEAD
    if (typeof window === 'undefined') return;

    const injectTawk = () => {
      // ✅ Remove old instance if exists
      const existing = document.getElementById('tawk-script');
      if (existing) {
        existing.remove();
        if (import.meta.env.DEV) console.log('[Tawk] Existing script removed.');
      }

      // ⏱️ Start Load
      window.Tawk_LoadStart = new Date();

      // 👤 Set visitor data
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.visitor = {
        name: 'เจ้าป่า',
        email: 'jp.system.webdev@gmail.com',
      };

      // 🧠 Inject new script
      const script = document.createElement('script');
      script.id = 'tawk-script';
      script.src = TAWK_SRC;
      script.async = true;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      document.body.appendChild(script);

      if (import.meta.env.DEV) {
        console.log('[Tawk] Script injected:', TAWK_SRC);
      }
    };

    // ✅ Delay for CSR hydration safety
    const timeout = setTimeout(injectTawk, 1200);

    return () => {
      clearTimeout(timeout);
=======
    if (typeof window === 'undefined' || document.getElementById('tawk-script')) return;

    window.Tawk_LoadStart = new Date();
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.visitor = {
      name: 'เจ้าป่า',
      email: 'jp.system.webdev@gmail.com',
    };

    const script = document.createElement('script');
    script.id = 'tawk-script';
    script.src = 'https://embed.tawk.to/688b41edee33f51926870e9f/1j1g0o1nq';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    return () => {
>>>>>>> b269264 (update)
      const existing = document.getElementById('tawk-script');
      if (existing) existing.remove();
    };
  }, []);

  return null;
};

export default TawkScript;