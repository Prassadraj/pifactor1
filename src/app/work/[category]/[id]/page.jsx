"use client";

import MyContext from "@/context/MyContext";
import { ProductDataContext } from "@/context/ProductData";
import { gsap } from "gsap";

import Image from "next/image";
import React, { useContext, useEffect } from "react";

function page({ params }) {
  const { category, id } = params;
  const { allItems } = useContext(MyContext);
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".image",
      { y: 0 },
      { y: -900, delay: 1, x: 0, ease: "power3.out", duration: 3 } // Adjusted duration for smoother animation
    );
  }, []);
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          src={`${category == "vfx" && images[id]}`}
          alt={category[id]}
          className="object-cover transition-opacity duration-1000 images opacity-50"
          fill
          quality={50}
          priority
        />
        <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
          <div
            className="relative   laptop:w-[23%] w-[60%] tablet:w-[40%] top-[5%] h-[400px] overflow-hidden"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src={`${category == "vfx" && images[id]}`}
              alt={category[id]}
              className="object-cover transition-opacity duration-1000 image"
              fill
              quality={75}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
