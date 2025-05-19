"use client";

import { useRef, createContext, useState, useContext } from "react";
import useOnClickOutside from "../components/useOnClickOutside";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartBtnHovered, setIsCartBtnHovered] = useState(false);
  const [isProductPageArrowDown, setIsProductPageArrowDown] = useState(true);


  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);
  const searchBtnRef = useRef(null);
  const accBtnRef = useRef(null);
  const cartBtnRef = useRef(null);
  const smallCartBoxRef = useRef(null);

  // Close Menu when clicking outside
  useOnClickOutside(menuBtnRef, menuRef, () => setIsMenuOpen(false), isMenuOpen);

  return (
    <AppContext.Provider value={
      {
        isMenuOpen,
        setIsMenuOpen,
        isCartBtnHovered,
        setIsCartBtnHovered,
        isProductPageArrowDown,
        setIsProductPageArrowDown,
        menuBtnRef,
        menuRef,
        searchBtnRef,
        accBtnRef,
        cartBtnRef,
        smallCartBoxRef,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
