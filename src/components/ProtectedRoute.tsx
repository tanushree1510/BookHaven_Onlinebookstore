import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAdmin?: boolean;
}

function ProtectedRoute({ children, isAdmin = false }: ProtectedRouteProps) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && !user.isAdmin) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;