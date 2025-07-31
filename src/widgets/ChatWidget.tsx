// src/widgets/ChatWidget/TawkScript.tsx
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
      const existing = document.getElementById('tawk-script');
      if (existing) existing.remove();
    };
  }, []);

  return null;
};

export default TawkScript;