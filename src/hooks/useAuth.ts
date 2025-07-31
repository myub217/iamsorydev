// src/hooks/useAuth.ts
import { useNavigate } from 'react-router-dom';
import { User } from '@/data/users';

export const useAuth = () => {
  const navigate = useNavigate();

  const getUser = (): User | null => {
    try {
      const raw = localStorage.getItem('user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  };

  const isLoggedIn = (): boolean => {
    return !!getUser();
  };

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return {
    user: getUser(),
    isLoggedIn,
    logout,
  };
};
