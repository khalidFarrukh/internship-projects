"use client"
import { ArrowUpRight, ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Card1 from "@/components/Card1";
import { useParams } from 'next/navigation';
import { useSelector } from "react-redux";

export default function Product() {

  const { proute } = useParams();
  const product = useSelector((state) => state.medusaSelectedProduct);
  console.log(product);
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
              bg-[red]
              mx-auto
            `}
          >
            <div
              className=
              {`
                w-[370px]
                bg-[blue]
                h-[700px]
              `}
            >
              
            </div>
            <div
              className=
              {`
                flex-1
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