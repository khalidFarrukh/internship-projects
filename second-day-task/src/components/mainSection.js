"use client"
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Card1 from "./Card1";

export default function MainSection() {
  return (
    <>
      <section
        className=
        {`
          
          max-w-[1440px]
          w-full
        `}
      >
        <div
          className=
          {`
              w-[calc(100%-3rem)]
              my-12
              lg:my-24
              mx-auto
            `}
        >
          <div
            className=
            {`
                flex
                items-center
                relative
                text-[16px]
                text-[var(--myTextColorHeading)]
                font-medium
              `}
          >
            <h1>
              {heading}
            </h1>

            <Link
              href="/collections/latest-drops"
              className=
              {`
                  absolute
                  flex
                  items-center
                  justify-center
                  right-0
                  text-[14px]
                  text-[skyblue]
                  font-bold
                  
                `}
            >
              <div>
                View all
              </div>
              <ArrowUpRight
                className=
                {`
                  transiion-all
                  duration-300
                  w-[20px]
                  ${!isViewMoreLinkHovered ? "rotate-0" : "rotate-45"}
                `}
              />
            </Link>

          </div>
          <div
            className=
            {`
                mt-7
                grid
                grid-cols-2
                lg:grid-cols-3
                gap-x-4
                gap-y-22
                w-full
                
              `}
          >
            {

              products.map((item, index) => (
                <Card1 key={index} id={index} plink={"/products/"} pthumbnail={""} disc_price={0} canceled_price={0} />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}