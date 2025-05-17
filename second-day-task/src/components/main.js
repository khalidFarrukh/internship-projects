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
        `}
      >
        <div className="my-12"> </div>
        {
          mainSectionData.map((section_v, index) => {
            return (
              <MainSection key={index} heading={section_v.heading} route={section_v.route} />
            )
          })
        }
        {/* <section
          className=
          {`
            max-w-[1440px]
            w-full
            mx-auto
          `}
        >
          <div
            className=
            {`
              w-[calc(100%-3rem)]
              my-12
              sm:my-24
              mx-auto
            `}
          >
            <div
              className=
              {`
                flex
                items-center
                relative
                text-black
                font-medium
              `}
            >
              <h1>
                Weekly Picks
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
                  text-[13px]
                  text-[skyblue]
                `}
              >
                <div>
                  View all
                </div>
                <ArrowUpRight
                  className=
                  {`
                    w-[20px]
                  `}
                />
              </Link>

            </div>
            <div
              className=
              {`
                mt-7
                grid
                grid-cols-3
                gap-x-4
                w-full

              `}
            >
              {

                products.map((item, index) => (
                  <Link
                    key={index}
                    href=""
                    className=
                    {`
                      w-[100%]
                      h-[43vw]
                      max-h-[610px]
                      
                    `}
                  >
                    <article
                      className=
                      {`
                        w-[100%]
                        h-[100%]
                        flex
                        flex-col
                      `}
                    >
                      <div
                        className=
                        {`
                          w-[100%]
                          h-[100%]
                          rounded-[12px]
                          bg-[#fafafa]
                          border-2
                          border-[lightgray]
                        `}
                      >
                      </div>
                      <div
                        className=
                        {`
                          flex
                          mt-3
                          w-[100%]
                          
                          text-[gray]
                        `}
                      >
                        Item-1
                      </div>
                    </article>
                  </Link>
                ))
              }


            </div>
          </div>
        </section>
        <section
          className=
          {`
            max-w-[1440px]
            w-full
            mx-auto
          `}
        >
          <div
            className=
            {`
              w-[calc(100%-3rem)]
              my-12
              sm:my-24
              mx-auto
            `}
          >
            <div
              className=
              {`
                flex
                items-center
                relative
                text-black
                font-medium
              `}
            >
              <h1>
                Sale
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
                  text-[13px]
                  text-[skyblue]
                `}
              >
                <div>
                  View all
                </div>
                <ArrowUpRight
                  className=
                  {`
                    w-[20px]
                  `}
                />
              </Link>

            </div>
            <div
              className=
              {`
                mt-7
                grid
                grid-cols-3
                gap-x-4
                w-full

              `}
            >
              {

                products.map((item, index) => (
                  <Link
                    key={index}
                    href=""
                    className=
                    {`
                      w-[100%]
                      h-[43vw]
                      max-h-[610px]
                      
                    `}
                  >
                    <article
                      className=
                      {`
                        w-[100%]
                        h-[100%]
                        flex
                        flex-col
                      `}
                    >
                      <div
                        className=
                        {`
                          w-[100%]
                          h-[100%]
                          rounded-[12px]
                          bg-[#fafafa]
                          border-2
                          border-[lightgray]
                        `}
                      >
                      </div>
                      <div
                        className=
                        {`
                          flex
                          mt-3
                          w-[100%]
                          
                          text-[gray]
                        `}
                      >
                        Item-1
                      </div>
                    </article>
                  </Link>
                ))
              }


            </div>
          </div>
        </section> */}
      </main>

    </>
  )
}
