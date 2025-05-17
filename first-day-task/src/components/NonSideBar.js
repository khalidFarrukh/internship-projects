"use client"
import Image from "next/image";

import Header from "./Header";
import CustomMenu from "./menu";
import Main from "./main";
import Footer from "./Footer";

export default function NonSideBar() {

  return (
    <>
      <div
        className=
        {`
        z-[1]
        relative
        flex-1
        h-full
        bg-[blue]
        flex
        flex-col
        
        `}
      >
        <Header />
        <CustomMenu />
        <Main />
        <Footer />



      </div>
    </>
  )
}
