"use client";

import { useRef, createContext, useState, useContext } from "react";
import useOnClickOutside from "../components/useOnClickOutside";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);

  // Close Menu when clicking outside
  useOnClickOutside(menuBtnRef, menuRef, () => setIsMenuOpen(false), isMenuOpen);

  return (
    <AppContext.Provider value={
      {
        isMenuOpen,
        setIsMenuOpen,
        menuBtnRef,
        menuRef
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
