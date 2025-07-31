// ✅ src/main.tsx — Production-ready with Suspense fallback and externalized FallbackLoading

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router/AppRouter';
import './index.css';
import FallbackLoading from '@/Home/common/FallbackLoading'; // ✅ ใช้ component แยกไฟล์ตามโครงสร้างจริง

/**
 * 🎯 Entry point หลักของแอป JP Visual & Docs
 * - ใช้ React 18 concurrent renderer
 * - ครอบด้วย <Suspense> รองรับ dynamic import
 * - รองรับ fallback UI ระหว่าง lazy loading
 */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<FallbackLoading />}>
      <AppRouter />
    </Suspense>
  </React.StrictMode>
);
