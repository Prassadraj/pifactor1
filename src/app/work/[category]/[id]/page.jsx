"use client";

import MyContext from "@/context/MyContext";

import { gsap } from "gsap";
import { Montserrat } from "next/font/google";

import Image from "next/image";
import React, { useContext, useEffect } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
});
function Page({ params }) {
  const { category, id } = params;
  const { data } = useContext(MyContext);

  const filteredData = data.allData.filter((data) => category == data.category);
  const selectedItem = filteredData[0].items.find((data) => data.id == id);

  console.log(selectedItem);
  useEffect(() => {
    const tl = gsap.timeline();
    gsap.fromTo(
      ".title",
      {
        y: 450,
        skewX: "-160deg",
      },
      {
        y: 0,
        skewX: "0deg",
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      ".banner",
      {
        scale: 1.1,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <>
      <div
        className={`banner relative h-screen w-full tablet:px-20 tablet:py-20 ${montserrat.className}`}
      >
        <Image
          src={selectedItem.mainImg}
          alt={category[id]}
          className="object-cover transition-opacity duration-1000 images opacity-50  "
          fill
          quality={50}
          priority
        />
        <div
          className=" absolute tablet:bottom-1/4 tablet:left-32
        bottom-1/4 left-10 flex flex-col items-start overflow-hidden"
        >
          <div
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            className="overflow-hidden"
          >
            <p className="title text-[60px] tablet:text-[80px] capitalize font-bold">
              {selectedItem.title}
            </p>
          </div>

          <div
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            className="overflow-hidden"
          >
            <p className="title text-xl tablet:text-2xl  capitalize font-normal">
              {selectedItem.subTitle}
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </>
  );
}

export default Page;
