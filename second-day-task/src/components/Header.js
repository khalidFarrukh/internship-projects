import Image from "next/image";
import SideBar from "@/components/sidebar";
import { MenuIcon } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import Link from "next/link";

export default function Header() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    isCartBtnHovered,
    setIsCartBtnHovered,
    menuBtnRef,
    searchBtnRef,
    accBtnRef,
    cartBtnRef

  } = useAppContext();
  return (
    <>
      <header
        className=
        {`
          z-[50]
          fixed
          w-[100%]
          h-[60px]
          bg-white
          border-b
          border-[var(--myBorderColor)]
        `}
      >
        <nav
          className=
          {`
            z-[50]
            max-w-[1440px]
            w-[100%]
            h-[65px]
            mx-auto
          `}
        >
          <div
            className=
            {`
            w-[calc(100%-3rem)]
            h-[100%]
            -bg-[blue]
            relative
            mx-auto
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
                left-0
                cursor-pointer
                text-[12px]
                font-semibold
              `}
            >
              Menu
            </button>
            <Link
              href="/"
              className=
              {`
              mx-auto
              font-poppins
              font-semibold
            `}
            >
              MEDUSA STORE
            </Link>
            <div
              className=
              {`
              absolute
              h-full
              right-0
              flex
              items-center
            `}
            >
              <Link
                href="/search"
                ref={searchBtnRef}
                //onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=
                {`
                hidden
                lg:block
                cursor-pointer
                text-[12px]
                font-semibold
                mr-6
              `}
              >
                Search
              </Link>
              <Link
                href="/account"
                ref={accBtnRef}
                //onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=
                {`
                hidden
                lg:block
                cursor-pointer
                text-[12px]
                font-semibold
                mr-6
              `}
              >
                Account
              </Link>
              <Link
                href="/cart"
                ref={cartBtnRef}
                onMouseEnter={() => setIsCartBtnHovered(true)}
                onMouseLeave={() => setIsCartBtnHovered(false)}
                //onClick={() => setIsMenuOpen(!isMenuOpen)}
                className=
                {`
                cursor-pointer
                font-semibold
                text-[12px]
              `}
              >
                {
                  "Cart (" +
                  0
                  + ")"
                }
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
