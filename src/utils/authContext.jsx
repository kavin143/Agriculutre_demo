import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isVendor, setIsVendor] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsPremium(userData.isPremium || false);
      setIsAdmin(userData.isAdmin || false);
      setIsVendor(userData.isVendor || false);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setIsPremium(userData.isPremium || false);
    setIsAdmin(userData.isAdmin || false);
    setIsVendor(userData.isVendor || false);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsPremium(false);
    setIsAdmin(false);
    setIsVendor(false);
    localStorage.removeItem('user');
  };

  const upgradeToPremium = () => {
    const updatedUser = { ...user, isPremium: true };
    setUser(updatedUser);
    setIsPremium(true);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isPremium, 
      isAdmin, 
      isVendor,
      login, 
      logout, 
      upgradeToPremium 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
