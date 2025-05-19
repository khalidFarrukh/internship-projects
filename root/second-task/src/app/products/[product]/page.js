"use client"
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card2 from "@/components/Card2";
import TextAndPlus from "@/components/TextAndPlus";
import { useParams } from 'next/navigation';
import { useSelector } from "react-redux";
import { useAppContext } from "@/context/AppContext";

export default function Product() {
  const {
    isProductPageArrowDown1,
    setIsProductPageArrowDown1,
    isProductPageArrowDown2,
    setIsProductPageArrowDown2

  } = useAppContext();
  const { product } = useParams();
  const selected_product = useSelector((state) => state.medusaSelectedProduct);
  console.log(selected_product);
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
          my-6
          lg:my-3
          flex
          flex-col
          items-center
        `}
      >
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
              flex
              w-[calc(100%-3rem)]
              
              mx-auto
            `}
          >
            <div
              className=
              {`
                w-[370px]
                flex
                items-center
              `}
            >
              <div
                className=
                {`
                  w-[330px]
                `}
              >
                <Link
                  href={"/collections/" + selected_product.pheading}
                  className=
                  {`
                    block
                  `}
                >
                  <h3
                    className=
                    {`
                      font-poppins
                      text-[var(--myTextColorLightGray)]
                      text-[105%]
                      font-bold
                      hover:text-black
                    `}
                  >
                    {
                      selected_product.pheading
                    }
                  </h3>
                </Link>
                <h1
                  className=
                  {`
                    mt-3
                    w-full
                    font-poppins
                    text-black
                    text-[205%]
                    font-semibold
                  `}
                >
                  {
                    selected_product.pname
                  }
                </h1>
                <p
                  className=
                  {`
                    mt-3
                    w-full
                    font-poppins
                    text-[90%]
                    font-bold
                    `}
                >
                  {
                    selected_product.description
                  }
                </p>
                <hr
                  className=
                  {`
                    w-full
                    mt-5
                    border-t
                    border-[var(--myBorderColor)]
                  `}
                />
                <TextAndPlus id={1} title="Product Information" state={isProductPageArrowDown1} setState={setIsProductPageArrowDown1} />
                <div
                  className=
                  {`
                    overflow-hidden 
                    transition-all
                    duration-550
                    ease-in-out
                    
                    w-full
                    ${isProductPageArrowDown1 ? "h-[0px] pointer-events-none pb-0" : "pb-3 h-[160px]"}
                  `}
                >
                  <div
                    className=
                    {`
                      grid 
                      grid-cols-2 
                      gap-x-4
                      gap-y-4
                      text-black
                      font-poppins
                      text-[80%]
                      font-extrabold
                    `}
                  >
                    <div
                      className=
                      {`
                        flex
                        flex-col
                        
                      `}
                    >
                      <div>
                        Material
                      </div>
                      <div
                        className=
                        {`
                          text-[90%]
                          text-[var(--myTextColorNormal)]
                          font-bold
                        `}
                      >
                        Leather
                      </div>
                    </div>
                    <div
                      className=
                      {`
                        flex
                        flex-col

                      `}
                    >
                      <div>
                        Material
                      </div>
                      <div
                        className=
                        {`
                          text-[90%]
                          text-[var(--myTextColorNormal)]
                          font-bold
                        `}
                      >
                        Leather
                      </div>
                    </div>
                    <div
                      className=
                      {`
                        flex
                        flex-col

                      `}
                    >
                      <div>
                        Material
                      </div>
                      <div
                        className=
                        {`
                          text-[90%]
                          text-[var(--myTextColorNormal)]
                          font-bold
                        `}
                      >
                        Leather
                      </div>
                    </div>
                    <div
                      className=
                      {`
                        flex
                        flex-col

                      `}
                    >
                      <div>
                        Material
                      </div>
                      <div
                        className=
                        {`
                          text-[90%]
                          text-[var(--myTextColorNormal)]
                          font-bold
                        `}
                      >
                        Leather
                      </div>
                    </div>
                    <div
                      className=
                      {`
                        flex
                        flex-col

                      `}
                    >
                      <div>
                        Material
                      </div>
                      <div
                        className=
                        {`
                          text-[90%]
                          text-[var(--myTextColorNormal)]
                          font-bold
                        `}
                      >
                        Leather
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  className=
                  {`
                    w-full
                    border-t
                    border-[var(--myBorderColor)]
                  `}
                />
                <TextAndPlus id={2} title="Shipping & Returns" state={isProductPageArrowDown2} setState={setIsProductPageArrowDown2} />
                <hr
                  className=
                  {`
                    w-full
                    border-t
                    border-[var(--myBorderColor)]
                  `}
                />
              </div>
            </div>
            <div
              className=
              {`
                flex-1
                bg-[green]
              `}
            >
              <Card2 pthumbLink={selected_product.pthumbLink} pname={selected_product.pname} />
            </div>
            <div
              className=
              {`
                w-[370px]
                bg-[yellow]
              `}
            >

            </div>
          </div>

        </section>
      </main>
    </>
  );
}