// ✅ src/Router/GuardRoutes.tsx — Protected Route Wrapper (Auth Guard)

import { Navigate, Outlet, useLocation } from 'react-router-dom';

/**
 * 🔐 Mock Auth (ควรเชื่อมต่อ Zustand/Auth Context จริงในภายหลัง)
 */
const useAuth = () => {
  const user = {
    isAuthenticated: true, // ❗ เปลี่ยนเป็น false เพื่อลอง redirect
    role: 'user', // ex: 'admin', 'editor', 'user'
  };
  return user;
};

/**
 * ✅ GuardRoutes
 * - ป้องกัน route สำหรับผู้ที่ยังไม่ได้ login
 * - redirect พร้อมเก็บตำแหน่งหน้าปัจจุบัน (state.from) เพื่อกลับมาได้หลัง login
 */
const GuardRoutes = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // ❌ ยังไม่ได้ login → redirect ไป /login พร้อมจำหน้าเดิมไว้
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // ✅ login แล้ว → แสดง Outlet (children route)
  return <Outlet />;
};

export default GuardRoutes;
