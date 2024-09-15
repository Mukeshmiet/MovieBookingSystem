import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (credentials) => {
    // Perform login logic and set authentication status
    setIsAuthenticated(true);
    navigate('/dashboard'); // Navigate to dashboard after login
  };

  const logout = () => {
    // Perform logout logic and clear authentication status
    setIsAuthenticated(false);
    navigate('/login'); // Navigate to login after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



