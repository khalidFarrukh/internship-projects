import Image from "next/image";
import SideBar from "@/components/sidebar";
import NonSideBar from "@/components/NonSideBar";

export default function Home() {
  return (
    <>
      <div
        className=
        {`
          flex
          flex-row
          w-full
          h-[100%]
        `}
      >
        <SideBar />
        <NonSideBar />


      </div>
    </>
  )
}
