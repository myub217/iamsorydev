// ✅ src/Router/RoleGuard.tsx — Production-Ready Role-Based Route Protection

import { Navigate, Outlet } from 'react-router-dom';

/**
 * 🔐 Role Types สำหรับระบบสิทธิ์ผู้ใช้
 */
type Role = 'admin' | 'editor' | 'user';

/**
 * ✅ RoleGuard
 * - ป้องกันหน้าเฉพาะสิทธิ์ (RBAC)
 * - หากไม่มี role หรือไม่มีสิทธิ์ => redirect
 */
interface RoleGuardProps {
  allowedRoles: Role[];
  userRole: Role | null;
}

const RoleGuard = ({ allowedRoles, userRole }: RoleGuardProps) => {
  // ✅ ยังไม่มี role (เช่นยังไม่ได้ login) → ไปหน้า Login
  if (!userRole) {
    return <Navigate to="/login" replace />;
  }

  // ✅ มี role แต่ไม่ตรงสิทธิ์ที่อนุญาต → ไปหน้า Unauthorized
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ ผ่านสิทธิ์ → แสดง Outlet ที่ match route
  return <Outlet />;
};

export default RoleGuard;
