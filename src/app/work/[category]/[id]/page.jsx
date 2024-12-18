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
function Page({ params }) {
  const { category, id } = params;
  const { data } = useContext(MyContext);

  const filteredData = data.allData.filter((data) => category == data.category);
  const selectedItem = filteredData[0].items.find((data) => data.id == id);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
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
  }, []);
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX, // Corrected here
        y: e.clientY, // Corrected here
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorVariants = {
    hover: { x: mousePosition.x, y: mousePosition.y },
    default: {},
  };
  return (
    <div className={`${montserrat.className}`}>
      {isHovering && (
        <motion.div
          variants={cursorVariants}
          animate="hover"
          transition={{ duration: 0.1, ease: "linear" }}
          className="fixed top-0  hidden tablet:flex
          justify-center items-center left-0 w-16 h-16 z-50 rounded-full bg-gray-700 mix-blend-difference"
          style={{ pointerEvents: "none" }}
        >
          <p
            className={`${montserrat.className} transition-all duration-300 text-white font-normal text-sm`}
          >
            Scroll
          </p>
        </motion.div>
      )}
      <div
        onMouseEnter={() => setIsHovering(true)}
        className={`relative h-screen w-full tablet:px-20 tablet:py-20 ${montserrat.className}`}
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
      <div onMouseEnter={() => setIsHovering(false)} className=" tablet:px-20 ">
        <div className="laptop:h-screen tablet:h-[50vh] flex flex-col laptop:gap-28 tablet:gap-20">
          <p className="laptop:max-w-4xl tablet:max-w-xl tablet:text-2xl laptop:text-4xl">
            {selectedItem.description}
          </p>
          <div className="flex tablet:gap-16 laptop:gap-20">
            <div className="flex flex-col tablet:gap-2">
              <p className="text-xl font-semibold">Client</p>
              <p className="text-base">{selectedItem.client}</p>
            </div>
            <div className="flex flex-col tablet:gap-2">
              <p className="text-xl font-semibold">Services</p>
              {selectedItem.services.map((data, i) => (
                <p key={i} className="text-base">
                  {data}
                </p>
              ))}
            </div>{" "}
            <div className="flex flex-col tablet:gap-2">
              <p className="text-xl font-semibold">Industries</p>
              <p className="text-base">{selectedItem.industries}</p>
            </div>
            <div className="flex flex-col tablet:gap-2">
              <p className="text-xl font-semibold">Date</p>
              <p className="text-base">{selectedItem.date}</p>
            </div>
          </div>
        </div>
        {/* objective */}
        <div className="h-screen bg-slate-500"></div>
      </div>
    </div>
  );
}

export default Page;
