"use client"
import { ArrowUpRight, ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card1 from "@/components/Card1";
import { useParams } from 'next/navigation';
import { useSelector } from "react-redux";

export default function Product() {

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
                relative
                
              `}
            >
              <div
                className=
                {`
                  absolute
                  w-[330px]
                  h-[500px]
                  
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
                      text-[105%]
                      font-bold
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
                    mt-6
                    border-[lightgray]
                  `}
                />
                
              </div>
            </div>
            <div
              className=
              {`
                flex-1
                h-[700px]
                bg-[green]
              `}
            >

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