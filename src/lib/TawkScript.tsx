// ✅ src/lib/TawkScript.tsx — Secure Tawk.to Embed for React

'use client';

import { useEffect } from 'react';

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
    // ❌ Block on SSR or already mounted
    if (typeof window === 'undefined' || document.getElementById('tawk-script')) return;

    // ✅ Init Timestamp
    window.Tawk_LoadStart = new Date();

    // ✅ (Optional) Secure visitor info — bind with Auth if needed
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.visitor = {
      name: 'เจ้าป่า',
      email: 'jp.system.webdev@gmail.com',
    };

    // ✅ Inject Tawk.to Script
    const script = document.createElement('script');
    script.id = 'tawk-script';
    script.src = 'https://embed.tawk.to/688b41edee33f51926870e9f/1j1g0o1nq';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    // 🧼 Cleanup on hot reload or unmount
    return () => {
      const existing = document.getElementById('tawk-script');
      if (existing) existing.remove();
    };
  }, []);

  return null;
};

export default TawkScript;