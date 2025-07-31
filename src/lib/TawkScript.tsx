<<<<<<< HEAD
// ✅ src/lib/TawkScript.tsx — Production-ready embed for Tawk.to widget (JP Visual & Docs)
=======
// ✅ src/lib/TawkScript.tsx — Secure Tawk.to Embed for React
>>>>>>> 3fcc410 (update)

'use client';

import { useEffect } from 'react';

<<<<<<< HEAD
// ✅ Type-safe global extension for Tawk.to widget
=======
>>>>>>> 3fcc410 (update)
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

<<<<<<< HEAD
/**
 * ✅ JP-System Tawk.to Live Chat Widget
 * ฝังระบบสนทนาแบบเรียลไทม์ลงในเว็บไซต์ JP Visual & Docs
 * - ใช้งานผ่าน Tawk.to Dashboard: https://dashboard.tawk.to
 * - รองรับการโหลดเฉพาะ client-side
 * - เชื่อมต่อข้อมูล visitor ได้ในอนาคตผ่าน auth context
 */
const TawkScript = () => {
  useEffect(() => {
    // ✅ ป้องกัน SSR และ Hot Reload ซ้อนซ้ำ
    if (typeof window === 'undefined' || document.getElementById('tawk-script')) return;

    // ✅ เริ่มเวลาโหลด
    window.Tawk_LoadStart = new Date();

    // ✅ ระบุข้อมูลผู้เยี่ยมชมเริ่มต้น (สามารถผูกกับ auth ได้ภายหลัง)
=======
const TawkScript = () => {
  useEffect(() => {
    // ❌ Block on SSR or already mounted
    if (typeof window === 'undefined' || document.getElementById('tawk-script')) return;

    // ✅ Init Timestamp
    window.Tawk_LoadStart = new Date();

    // ✅ (Optional) Secure visitor info — bind with Auth if needed
>>>>>>> 3fcc410 (update)
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.visitor = {
      name: 'เจ้าป่า',
      email: 'jp.system.webdev@gmail.com',
    };

<<<<<<< HEAD
    // ✅ สร้าง Script ฝังแชท
    const script = document.createElement('script');
    script.id = 'tawk-script';
    script.src = 'https://embed.tawk.to/688b41edee33f51926870e9f/1j1fvj2or';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);

    // ✅ ล้าง script เมื่อ unmount เพื่อป้องกันการโหลดซ้ำ
=======
    // ✅ Inject Tawk.to Script
    const script = document.createElement('script');
    script.id = 'tawk-script';
    script.src = 'https://embed.tawk.to/688b41edee33f51926870e9f/1j1g0o1nq';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    // 🧼 Cleanup on hot reload or unmount
>>>>>>> 3fcc410 (update)
    return () => {
      const existing = document.getElementById('tawk-script');
      if (existing) existing.remove();
    };
  }, []);

  return null;
};

export default TawkScript;