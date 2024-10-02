import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <NavbarContext.Provider value={{ isVisible, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};