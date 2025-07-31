// ✅ src/Router/AppRouter.tsx — Centralized Route Management for JP Visual & Docs

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@/Layout/Layout';
import Home from '@/Home/Home';
import Secret from '@/Home/Secret';
import Login from '@/Home/Login';
import CustomerAssessmentForm from '@/Home/CustomerAssessmentForm';
import NotFound from '@/Home/common/404';
import GuardRoutes from './GuardRoutes';

/**
 * ✅ AppRouter
 * - ระบบ Routing หลักของเว็บไซต์
 * - รองรับ Layout ครอบทุกหน้า
 * - แยกเส้นทาง Public / Protected
 * - จัดการ Fallback 404
 */
const AppRouter = () => (
  <BrowserRouter basename="/">
    <Routes>
      {/* ✅ Global Layout Wrapper */}
      <Route element={<Layout />}>
        {/* 🌐 Public Routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="form" element={<CustomerAssessmentForm />} />

        {/* 🔐 Protected Routes */}
        <Route element={<GuardRoutes />}>
          <Route path="secret" element={<Secret />} />
        </Route>

        {/* 🚫 Catch-All: 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
