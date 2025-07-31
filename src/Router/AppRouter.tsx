// ✅ src/Router/AppRouter.tsx — Centralized Route Management for JP Visual & Docs

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@/Layout/Layout';
import Home from '@/Home/Home';
import Login from '@/Home/Login';
import Secret from '@/Home/Secret';
import NotFound from '@/Home/common/404';
import CustomerAssessmentForm from '@/Home/CustomerAssessmentForm';
import GuardRoutes from './GuardRoutes';

/**
 * 🎯 AppRouter
 * - ระบบจัดการเส้นทางทั้งหมดของเว็บไซต์ JP Visual & Docs
 * - แยก Public, Protected, และ Fallback routes
 * - ทุกหน้าอยู่ภายใต้ Layout
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