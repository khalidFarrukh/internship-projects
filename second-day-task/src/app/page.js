"use client"
import Image from "next/image";
import SideBar from "@/components/sidebar";
import Header from "@/components/Header";
import CustomCartBox from "@/components/smallCartBox";
import Main from "@/components/main";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <div
        className=
        {`
          z-[1]
          relative
          flex
          flex-col
          text-[var(--myNormalTextColor)]
          `}
      >
        <Header />
        <CustomCartBox />
        <Main />
        <Footer />
      </div>
    </>
  )
}
