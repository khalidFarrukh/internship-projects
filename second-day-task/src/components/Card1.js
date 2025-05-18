"use client"
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Card1({ id, plink, pthumbnail, pname, disc_price, canceled_price }) {
  let products = [1, 2, 3];
  const [isViewMoreLinkHovered, setIsViewMoreLinkHovered] = useState(false);
  return (
    <>
      <Link
        href={plink}
        className=
        {`
          w-[100%]
        `}
      >
        <article
          className=
          {`
            w-[100%]
            h-[63vw]
            lg:h-[42vw]
            max-h-[610px] 
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
              border-1
              border-[var(--myBorderColor)]
              transition-all
              duration-150
              hover:shadow-sm
            `}
          >
          </div>
          <div
            className=
            {`
              flex
              mt-3
              w-[100%]
              text-[var(--myTextColorNormal)]
            `}
          >
            Item-1
          </div>
        </article>
      </Link>
    </>
  );
}