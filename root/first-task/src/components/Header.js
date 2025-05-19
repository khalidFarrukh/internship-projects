import Image from "next/image";
import SideBar from "@/components/sidebar";
import { MenuIcon } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function Header() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    menuBtnRef

  } = useAppContext();
  return (
    <>
      <header
        className=
        {`
      
        z-[3]
        w-[100%]
        h-[50px]
        bg-[red]
        relative
        flex
        items-center
        `}
      >
        <button
          ref={menuBtnRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=
          {`
                  
          absolute
          right-[20px]
          cursor-pointer
          `}
        >
          <MenuIcon
            className=
            {`
            
            `}
          />
        </button>
      </header>
    </>
  )
}
