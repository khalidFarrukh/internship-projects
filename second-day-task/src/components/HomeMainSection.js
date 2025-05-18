"use client"
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Card1 from "./Card1";

export default function HomeMainSection({ id, heading, collection, route }) {
  const [isViewMoreLinkHovered, setIsViewMoreLinkHovered] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/collections/" + collection)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
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
              href={route}
              onMouseEnter={() => setIsViewMoreLinkHovered(true)}
              onMouseLeave={() => setIsViewMoreLinkHovered(false)}
              className=
              {`
                  absolute
                  flex
                  items-center
                  justify-center
                  right-0
                  text-[14px]
                  text-[var(--myTextColorBlue)]
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
                gap-x-6
                gap-y-22
                w-full
              `}
          >
            {
              products.map((item, index) => {
                return (
                  <Card1 key={index} productObj={item} id={index} pname={item.pname} plink={"/products/" + String(item.route)} pthumbLink={item.pthumbLink} discount={item.discount} price={item.price} description={item.description} options={item.options} info={item.info} route={item.route} collection={item.collection} />
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}