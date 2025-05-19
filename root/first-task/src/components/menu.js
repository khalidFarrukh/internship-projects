import Image from "next/image";
import SideBar from "@/components/sidebar";
import Main from "@/components/NonSideBar";
import { useAppContext } from "../context/AppContext";

export default function CustomMenu() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    menuRef
  } = useAppContext();
  return (
    <>
      <div
        ref={menuRef}
        className=
        {`
          z-[2]
          absolute
          w-[120px]
          bg-[blue]
          right-[20px]
          transition-all
          duration-150
          ease-in-out
          ${isMenuOpen ? "top-[60px]" : "top-[-60px]"}
          
        `}
      >
        <button
          className=
          {`
              w-[90%]
              bg-[red]
              my-[5px]
            `}
        >
          option - 1
        </button>
        <button
          className=
          {`
              w-[90%]
              bg-[red]
              my-[5px]
            `}
        >
          option - 2
        </button>
        <button
          className=
          {`
              w-[90%]
              bg-[red]
              my-[5px]
            `}
        >
          option - 3
        </button>

      </div>
    </>
  )
}
