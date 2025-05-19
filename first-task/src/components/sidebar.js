"use client"
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar, closeSidebar } from "@/store/sidebarSlice";


export default function SideBar() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  // const sidebarRef = useRef(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  // useEffect(() => {
  //   const observer = new ResizeObserver(([entry]) => {
  //     const width = entry.contentRect.width;
  //     if (width == 0) {

  //     }
  //   });

  //   if (sidebarRef.current) {
  //     observer.observe(sidebarRef.current);
  //   }

  //   return () => {
  //     if (sidebarRef.current) {
  //       observer.unobserve(sidebarRef.current);
  //     }
  //   };
  // }, []);
  return (
    <div
      // ref={sideBarRef}
      className=
      {`
        z-[2]
        relative
        transition-all
        duration-150
        ease-in-out
        ${isOpen ? "w-[350px]" : "w-0"}
        h-[100%]
        bg-[green]
      `}
    >
      {
        isOpen ?

          <button
            onClick={() => dispatch(closeSidebar())}
            className=
            {`
              absolute
              w-[30px]
              h-[30px]
              bg-[yellow]
              rounded-full
              top-[10px]
              right-[10px]
              cursor-pointer
              flex
              items-center
              justify-center
              hover:bg-yellow-400
            `}
          >
            <ArrowLeft
              className=
              {`
            text-black
            `}
            />
          </button>
          :
          <button
            onClick={() => dispatch(openSidebar())}
            className=
            {`
            absolute
            w-[30px]
            h-[30px]
            bg-[yellow]
            rounded-full
            top-[10px]
            right-[-40px]
            cursor-pointer
            flex
            items-center
            justify-center
            hover:bg-yellow-400
            `}
          >
            <ArrowRight
              className=
              {`
            text-black
            `}
            />
          </button>
      }
    </div>
  );
}
