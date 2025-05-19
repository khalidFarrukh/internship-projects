"use client"
import Image from "next/image";
import SideBar from "@/components/sidebar";
import { MenuIcon } from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import Link from "next/link";

export default function SearchWindow() {
  const {
    isSearchBtnClicked,
    setIsSearchBtnClicked,

  } = useAppContext();
  return (
    <>

      <div
        className=
        {`
          z-[60]
          fixed
          w-[100%]
          h-[100vh]
          bg-white
          blur-sm
        `}
      >
        <div
          className=
          {`

            max-w-[1440px]
            w-full
            h-full
            mx-auto
          `}
        >
          <div
            className=
            {`
              w-[calc(100%-3rem)]
              h-full
              bg-[gray]
              relative
              pt-
              mx-auto
              flex
              flex-col
              items-center
            `}
          >
          </div>
        </div>
      </div>
      <div
        className=
        {`
          z-[60]
          fixed
          w-[100%]
          h-[100vh]
        `}
      >
        <div
          className=
          {`

            max-w-[1440px]
            w-full
            h-full
            mx-auto
          `}
        >
          <div
            className=
            {`
              w-[calc(100%-3rem)]
              h-full
              relative
              pt-
              mx-auto
              flex
              flex-col
              items-center
            `}
          >
            <div
              className=
              {`
                  w-[50vw]
                  h-[3vw]
                  mt-12
                  text-black
                  text-[120%]
                  outline-0
                  rounded-[50px]
                  
                  bg-white
                  flex
                `}
            >

              <input
                className=
                {`
                    flex-1
                    h-[full]
                    text-black
                    text-[120%]
                    outline-0
                    mx-7
                    
                  `}
                placeholder="Search..." />
              <button
                onClick={() => { }}
                className=
                {`
                    cursor-pointer
                    w-[10%]
                    h-[full]
                    text-black
                    text-[120%]
                    outline-0
                    rounded-[0_50px_50px_0]
                    font-semibold
                    bg-[lightgray]
                  `}
              >
                Search
              </button>
            </div>
            <div
              className=
              {`
                w-[50vw]
                flex-1
                m-3
                rounded-[25px]
                bg-white
              `}
            >
              <div
                className=
                {`
                  w-full
                  h-full
                  grid
                  grid-cols-2
                  gap-x-2
                  gap-y-2
                `}
              >
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
