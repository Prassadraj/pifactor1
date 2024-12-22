"use client";

import MyContext from "@/context/MyContext";

import { gsap } from "gsap";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

function About() {
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];
  return (
    <div>
      <div
        className={` banner px-2  relative h-screen w-full tablet:px-20 tablet:py-20 ${montserrat.className}`}
      >
        {" "}
        <div className="flex fixed h-full bg-black bg-opacity-30 inset-0"></div>
        <Image
          src={images[2]}
          alt={"ssd"}
 
          className="object-cover transition-opacity duration-1000 images opacity-50  "
          fill
          quality={50}
          priority
        />
        <div
          className=" absolute tablet:bottom-1/4 tablet:left-32
        bottom-10  flex flex-col items-start overflow-hidden"
        >
          <div
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            className="overflow-hidden"
          >
            <p className="title opacity-0 text-[60px] tablet:text-[80px] capitalize font-bold">
              Title
            </p>
          </div>

          <div
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            className="overflow-hidden"
          >
            <p className="title opacity-0 text-xl tablet:text-2xl  capitalize font-normal">
              Title
            </p>
          </div>
          {/* fo mobile  */}
          <div className="tablet:hidden phone mt-6">
            <p className="">Title</p>
            <div className="flex gap-3 mt-6">
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Client</p>
                <p className="text-base">Title</p>
              </div>
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Services</p>
              </div>{" "}
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Industries</p>
                <p className="text-base">Title</p>
              </div>
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Date</p>
                <p className="text-base">Title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
