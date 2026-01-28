import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/authContext';

const ProtectedRoute = ({ children, adminOnly = false, vendorOnly = false }) => {
  const { user, isAdmin, isVendor } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  if (vendorOnly && !isVendor) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
