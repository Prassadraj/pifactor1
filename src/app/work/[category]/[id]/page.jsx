"use client";

import MyContext from "@/context/MyContext";

import { gsap } from "gsap";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Zoom from "@/component/Zoom/Zoom";
import Work3 from "@/Homepage/Works/Work3/Work3";
import Slider from "@/component/Slider/Slider";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});
const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: "300", // Specify weight as a string instead of an array
});
const montserraMedium = Montserrat({
  subsets: ["latin"],
  weight: "500", // Specify weight as a string instead of an array
});
function Page({ params }) {
  const { category, id } = params;
  const { data, mousePosition } = useContext(MyContext);

  const filteredData = data.allData.filter((data) => category == data.category);
  const items = filteredData[0].items;
  const selectedItem = items.find((data) => data.id == id);
  const currentIndex = items.findIndex((data) => data.id == id);
  const nextProject = items[currentIndex + 1] || items[0];
  const nextProjectImg = nextProject?.mainImg;
  const [motionName, setMotionName] = useState("scroll");
  console.log(nextProjectImg);

  const [isHovering, setIsHovering] = useState(true);

  const cursorVariants = {
    hover: { x: mousePosition.x, y: mousePosition.y },
    default: {},
  };
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".title",
      {
        y: 450,
        opacity: 0,
        skewX: "-160deg",
      },
      {
        y: 0,
        opacity: 1,
        skewX: "0deg",
        duration: 1,
        ease: "power3.out",

        stagger: 0.1,
      }
    );
    gsap.fromTo(
      ".subTitle",
      {
        y: 450,
        opacity: 0,
        skewX: "-160deg",
      },
      {
        y: 0,
        opacity: 1,
        skewX: "0deg",
        duration: 1.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".trigger", // Element to trigger the animation
          // Smooth scrubbing effect
        },
        ease: "power3.out",

        stagger: 0.1,
      }
    );
    tl.fromTo(
      ".phone",
      {
        opacity: 0,
      },
      {
        opacity: 1,

        // height: "200vh",
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className={`${montserrat.className} `}>
      {isHovering && (
        <motion.div
          variants={cursorVariants}
          animate="hover"
          transition={{ duration: 0.1, ease: "linear" }}
          className="fixed top-0  hidden tablet:flex
          justify-center items-center  w-16 h-16 z-50 rounded-full bg-gray-700 mix-blend-difference"
          style={{ pointerEvents: "none" }}
        >
          <p
            className={`${montserrat.className} transition-all duration-300 text-white font-normal text-sm`}
          >
            {motionName}
          </p>
        </motion.div>
      )}
      {/* mobile  */}
      <div
        className={`tablet:hidden banner h-[150vh] relative w-full ${montserrat.className}`}
      >
        <div className="parallax-container h-[100vh] sticky top-0 overflow-hidden">
          <Image
            src={selectedItem.mainImg}
            alt="Dynamic Parallax Background"
            className="parallax-image object-cover w-full h-full"
            fill
            quality={50}
            priority
          />
        </div>

        <div className="absolute  bottom-20 flex flex-col gap-10 items-start overflow-hidden">
          <div className="overflow-hidden px-5">
            <p className="title text-[30px] tablet:text-4xl capitalize font-bold">
              {selectedItem.title}
            </p>
          </div>
          <div className="overflow-hidden max-w-lg px-5">
            <p
              className={`title text-xl tablet:text-2xl capitalize font-normal ${montserratLight.className}`}
            >
              {selectedItem.subTitle}
            </p>
          </div>
          <div className=" mt-2 rounded-full  text-center font-medium px-5 phone">
            ⇩
          </div>

          <div className="mt-10 px-3 phone">
            <p className={`${montserratLight.className} text-xl`}>
              {selectedItem.description}
            </p>
          </div>
          <div className="tablet:hidden phone mt-6 phone px-2">
            <div className="flex gap-3 mt-6">
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Client</p>
                <p className="text-base">{selectedItem.client}</p>
              </div>
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Services</p>
                {selectedItem.services.map((data, i) => (
                  <p key={i} className="text-base">
                    {data}
                  </p>
                ))}
              </div>{" "}
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Industries</p>
                <p className="text-base">{selectedItem.industries}</p>
              </div>
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Date</p>
                <p className="text-base">{selectedItem.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* laptop  */}

      <div
        className={`hidden tablet:block banner px-2 h-screen w-full tablet:px-20 tablet:py-20 ${montserrat.className}`}
      >
        {" "}
        <div className="flex fixed h-full bg-black bg-opacity-30 inset-0"></div>
        <Image
          src={selectedItem.mainImg}
          alt={category[id]}
          onMouseEnter={() => {
            setIsHovering(true);
            setMotionName("Scroll");
          }}
          onMouseLeave={() => setIsHovering(false)}
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
              {selectedItem.title}
            </p>
          </div>

          <div
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            className="overflow-hidden"
          >
            <p className="title opacity-0 text-xl tablet:text-2xl  capitalize font-normal">
              {selectedItem.subTitle}
            </p>
          </div>
          {/* fo mobile  */}
          <div className="tablet:hidden phone mt-6 ">
            <p className="">{selectedItem.description}</p>
            <div className="flex gap-3 mt-6">
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Client</p>
                <p className="text-base">{selectedItem.client}</p>
              </div>
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Services</p>
                {selectedItem.services.map((data, i) => (
                  <p key={i} className="text-base">
                    {data}
                  </p>
                ))}
              </div>{" "}
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Industries</p>
                <p className="text-base">{selectedItem.industries}</p>
              </div>
              <div className="flex flex-col tablet:gap-2">
                <p className="text-sm font-semibold">Date</p>
                <p className="text-base">{selectedItem.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* laptop  */}
      <div className=" px-5 tablet:px-20 ">
        <div className="hidden tablet:mt-10 laptop:mt-20  laptop:h-screen tablet:h-fit tablet:flex flex-col laptop:gap-28 tablet:gap-20">
          <p className="laptop:max-w-3xl  largeLaptop:max-w-3xl tablet:max-w-xl tablet:text-2xl laptop:text-3xl largeLaptop:text-4xl">
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
        <div className="h-screen  hidden tablet:block laptop:h-screen trigger tablet:my-10 tablet:h-fit">
          <div className="flex justify-center tablet:text-[30px] laptop:text-[50px] largeLaptop:text-[60px] tablet:font-medium h-1/2 ">
            <div
              className="overflow-hidden h-fit"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <p className="subTitle text-[80px] text-gold">
                {" "}
                {selectedItem.subTitle}
              </p>
            </div>
          </div>
          <div className="laptop:px-28  flex gap-20 items-center">
            <p>Objective</p>
            <p className="text-sm tablet:max-w-2xl laptop:max-w-md text-gray-300">
              {selectedItem.objective}
            </p>
          </div>
        </div>
        {/* for mobile */}
        <div className="h-fit py-20 tablet:hidden ">
          {" "}
          <div className=" flex flex-col gap-5">
            <div className="">
              {" "}
              <p>Objective</p>
              <p className="text-3xl font-semibold mt-1">
                {selectedItem.subTitle}
              </p>
            </div>
            <div>
              <p> {selectedItem.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Zoom />
        <div className="tablet:h-screen w-full h-fit flex items-center justify-center">
          <video
            preload="auto"
            autoPlay
            muted
            controls
            playsInline
            loop
            src={`${selectedItem.video}`}
          ></video>
        </div>
        <Slider />
        <div
          className="tablet:h-screen w-full h-full"
          onMouseEnter={() => {
            setMotionName("Next");
            setIsHovering(true);
          }}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            backgroundImage: `url("${nextProjectImg}")`,
            backgroundAttachment: "fixed",
            top: "0px",
            left: "0px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Link href={`/work/${category}/${nextProject.id}`}>
            <div className="h-full w-full relative">
              <div
                className="absolute left-1/2 top-1/2 transform translate-x-[-50%] translate-y-[-50%] 
            h-[400px] w-[400px]"
              >
                <Image
                  fill
                  src={nextProjectImg || "/placeholder.jpg"} // Ensure a fallback image
                  alt="Selected Item Image" // Add an alt attribute for accessibility
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
