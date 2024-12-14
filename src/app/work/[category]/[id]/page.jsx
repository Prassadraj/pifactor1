"use client";

import MyContext from "@/context/MyContext";

import { gsap } from "gsap";

import Image from "next/image";
import React, { useContext, useEffect } from "react";

function Page({ params }) {
  const { category, id } = params;
  const { data } = useContext(MyContext);
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];
  console.log(data);
  useEffect(() => {
    const tl = gsap.timeline();
  }, []);
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          src={`${category == "vfx" && images[id]}`}
          alt={category[id]}
          className="object-cover transition-opacity duration-1000 images opacity-50  "
          fill
          quality={50}
          priority
        />
        <p>dfdf</p>
      </div>
    </>
  );
}

export default Page;
