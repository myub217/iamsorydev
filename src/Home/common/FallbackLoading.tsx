// ✅ src/Home/common/FallbackLoading.tsx — Minimal Production-Grade Suspense Fallback

import React from 'react';

/**
 * 📦 FallbackLoading
 * - ใช้ใน Suspense fallback หรือระหว่าง lazy-loading component
 * - UI แบบ minimal, เห็นชัดเจน, ปลอดภัยสำหรับ dark/light mode
 * - พร้อม aria-accessibility สำหรับ screen reader
 */

const FallbackLoading: React.FC = () => (
  <div className="flex items-center justify-center h-screen bg-black text-white">
    <span
      className="loading loading-spinner loading-lg"
      role="status"
      aria-label="Loading content..."
    />
  </div>
);

<<<<<<< HEAD
export default FallbackLoading;
=======
<<<<<<< HEAD
export default FallbackLoading;
=======
export default FallbackLoading;
>>>>>>> 3fcc410 (update)
>>>>>>> b269264 (update)
