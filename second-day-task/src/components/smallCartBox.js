"use client"
import Image from "next/image";
import SideBar from "@/components/sidebar";
import { useAppContext } from "@/context/AppContext";

export default function CustomCartBox() {
  const {
    smallCartBoxRef,
    isCartBtnHovered,
    setIsCartBtnHovered
  } = useAppContext();
  return (
    <>
      <div
        ref={smallCartBoxRef}
        onMouseEnter={() => setIsCartBtnHovered(true)}
        onMouseLeave={() => setIsCartBtnHovered(false)}
        className=
        {`  
          z-[50]
          absolute
          w-[400px]
          h-[300px]
          bg-[blue]
          right-[25px]
          transition-all duration-250 ease-in-out
          ${isCartBtnHovered ? "opacity-100 top-[60px] pointer-events-auto" : "opacity-0 top-[70px] pointer-events-none"}    
        `}
      >
      </div>
    </>
  )
}
