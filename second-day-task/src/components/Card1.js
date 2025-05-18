
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Card1({ id, plink, pname, discount, price, pthumbLink, description, options, info, route }) {
  return (
    <>
      <Link
        key={id}
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
            <Image
              src={pthumbLink}
              alt={pname}
              width={1200}
              height={1200}
            />
          </div>
          <div
            className=
            {`
              relative
              flex
              mt-3
              w-[100%]
              text-[95%]
              text-[var(--myTextColorNormal)]
              font-semibold
              reverse
            `}
          >
            <div
              className=
              {`
                break-words
                w-full
                whitespace-normal
              `}
            >
              {pname}
            </div>
            <div
              className=
              {`
                flex
                text-right
              `}
            >
              {
                discount > 0 &&
                <div
                  className=
                  {`
                    ml-3
                    line-through
                  `}
                >
                  {price}
                </div>
              }
              <div
                className=
                {`
                  ml-3
                  ${discount > 0 && "text-[var(--myTextColorBlue)]"}
                `}
              >
                {Math.floor((price / 100) * (100 - discount))}.00
              </div>
            </div>

          </div>
        </article>
      </Link>
    </>
  );
}