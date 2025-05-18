"use client"
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import MainSection from "./mainSection";

export default function Main() {
  let mainSectionData = [
    {
      heading: "Latest Drops",
      route: "/collections/latest-drops"
    },
    {
      heading: "Weekly Picks",
      route: "/collections/weekly-picks"
    },
    {
      heading: "Sale",
      route: "/collections/sale"
    }
  ];

  return (
    <>
      <div className="h-[70px]"> </div>
      <main
        className=
        {`
          z-[1]
          relative
          w-[100%]
          bg-white
          my-12
          flex
          flex-col
          items-center
        `}
      >
        {
          mainSectionData.map((section_v, index) => {
            return (
              <MainSection key={index} id={index} heading={section_v.heading} route={section_v.route} />
            )
          })
        }
      </main>

    </>
  )
}
