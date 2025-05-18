"use client"
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Card1 from "@/components/Card1";

export default function Product({ params }) {
  const { route } = params;
  useEffect(() => {
    fetch("/api/products/" + route)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data[0].pthumbLink);
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
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
          lg:my-6
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
        </section>
      </main>
    </>
  );
}