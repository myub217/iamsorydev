// ✅ src/Home/common/FallbackLoader.tsx — Production-Ready Fallback

import React from 'react';

/**
 * 🔄 FallbackLoader Component
 * ใช้แสดง UI ระหว่างโหลด Lazy Components / Suspense
 * รองรับ Dark Mode, เหมาะกับทุกหน้า
 */
const FallbackLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-950 text-primary">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary" />
        <p className="text-sm text-gray-500 dark:text-gray-400">กำลังโหลดข้อมูล...</p>
      </div>
    </div>
  );
};

export default FallbackLoader;
