// ✅ src/main.tsx — Production-ready entry point for JP Visual & Docs

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router/AppRouter';
import './index.css';
import FallbackLoading from '@/Home/common/FallbackLoading'; // ✅ fallback แยกไว้สำหรับ Suspense

/**
 * 🎯 จุดเริ่มต้นของแอป JP Visual & Docs
 * - ใช้ React 18 Concurrent Renderer
 * - ใช้ <Suspense> เพื่อรองรับ lazy import
 * - รองรับ fallback UI ระหว่างการโหลด components
 */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<FallbackLoading />}>
      <AppRouter />
    </Suspense>
  </React.StrictMode>
<<<<<<< HEAD
);
=======
);
>>>>>>> 3fcc410 (update)
