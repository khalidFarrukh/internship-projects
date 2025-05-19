"use client";

import { useRef, createContext, useState, useContext } from "react";
import useOnClickOutside from "../components/useOnClickOutside";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartBtnHovered, setIsCartBtnHovered] = useState(false);
  const [isProductPageArrowDown1, setIsProductPageArrowDown1] = useState(true);
  const [isProductPageArrowDown2, setIsProductPageArrowDown2] = useState(true);
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);


  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);
  const searchBarRef = useRef(null);
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
        isProductPageArrowDown1,
        setIsProductPageArrowDown1,
        isProductPageArrowDown2,
        setIsProductPageArrowDown2,
        menuBtnRef,
        menuRef,
        searchBarRef,
        smallCartBoxRef,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
