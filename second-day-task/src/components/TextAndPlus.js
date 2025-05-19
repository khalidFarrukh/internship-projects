"use client"
import { ArrowUp, ArrowDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";

export default function TextAndPlus({ title }) {
  const {
    isProductPageArrowDown,
    setIsProductPageArrowDown

  } = useAppContext();
  return (
    <>
      <div
        className=
        {`
          relative
          py-3
          flex
          items-center
          w-full
        `}
      >
        <h4
          className=
          {`
            font-poppins
            text-[90%]
            font-semibold
            `}
        >
          {
            title
          }
        </h4>
        <button
          onClick={() => setIsProductPageArrowDown(!isProductPageArrowDown)}
          className=
          {`
            absolute
            cursor-pointer
            w-8
            h-8
            right-0
            mr-6
            hover:bg-[#fafafa]
            rounded-[50%]
            flex
            items-center
            justify-center
          `}
        >
          {
            isProductPageArrowDown ?
              <ArrowDown width={16} height={16} />
              :
              <ArrowUp width={16} height={16} />
          }
        </button>
      </div>
    </>
  )
}