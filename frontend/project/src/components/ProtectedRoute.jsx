import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the import based on your file structure

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Use context to get isAuthenticated

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;


