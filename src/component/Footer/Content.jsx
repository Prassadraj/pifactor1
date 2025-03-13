"use client";
import MyContext from "@/context/MyContext";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";
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
export default function Content() {
  return (
    <div className="relative h-full w-full">
      <div className="bg-gradient-to-tr px-2 py-5 tablet:py-10 bg-black tablet:px-12 h-full w-full flex flex-col justify-between">
        <Nav />
      </div>
    </div>
  );
}

const Nav = () => {
  const videoRef = useRef(null);
  const { state, setState } = useContext(MyContext);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);
  return (
    <div className="h-screen w-full  flex flex-col justify-around tablet:gap-7 laptop:px-10 ">
      {/* first */}
      <div className="flex flex-col justify-evenly gap-6">
        <div className="flex items-start tablet:gap-2 w-full h-fit ">
          {/* left */}
          <div className="flex tablet:flex-col tablet:gap-5 gap-2 items-center tablet:items-start">
            <div className="z-50 flex flex-col leading-[1.2]">
              <p className="font-medium text-transparent bg-clip-text bg-gradient-to-tr from-[#e0ccbb] to-[#e0ccbb] text-[50px] tablet:text-[100px] laptop:text-[80px]">
                Our{" "}
              </p>
              <p className="font-medium text-transparent bg-clip-text bg-gradient-to-tr from-[#e0ccbb] to-[#e0ccbb] text-[50px] tablet:text-[100px] laptop:text-[70px]">
                Story
              </p>
            </div>
            {/* mobile */}
            <div className="tablet:hidden">
              <video
                ref={videoRef}
                className="tablet:h-full tablet:w-full scale-[2.4] opacity-85 z-0 mix-blend-difference"
                autoPlay
                preload="metadata"
                muted
                loop
                playsInline
                title="Descriptive title of the video"
              >
                <source src="/footer/earth2.mp4" type="video/mp4" />
              </video>
            </div>
            <p
              className={`${montserratLight.className} text-gold tablet:text-2xl hidden z-10 tablet:block tablet:max-w-md laptop:max-w-lg font-light`}
            >
              PiFactor merges creativity and curiosity, making each project a
              journey in visual discovery.
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 mt-10 tablet:mt-0 hidden tablet:block">
            <video
              ref={videoRef}
              className="tablet:h-full tablet:w-full scale-[3]  tablet:scale-y-150 tablet:scale-x-150  
             opacity-85  z-0"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/footer/earth2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* mobile */}
        <p
          className={`text-3xl z-20 tablet:hidden text-[#e0ccbb] tablet:max-w-md laptop:max-w-lg font-light ${montserratLight.className}`}
        >
          PiFactor merges creativity and curiosity, making each project a
          journey in visual discovery.
        </p>
      </div>

      {/* second */}
      <div className="w-full h-[1px] bg-[#e0ccbb] mt-2 z-10 hidden tablet:block"></div>
      <div className="flex flex-col gap-2">
        <div className="w-full h-[1px] bg-white z-10  tablet:hidden"></div>
        <div className="flex justify-between gap-2 tablet:justify-normal tablet:gap-20">
          <div>
            <ul
              className={`text-[#e0ccbb] text-sm tablet:text-lg font-thin ${montserratLight.className}`}
            >
              <li>TTK Road,chennai</li>
              <li className="flex gap-1">
                <strong className="text-sm tablet:text-lg font-semibold tablet:font-normal hidden tablet:block">
                  Email :
                </strong>{" "}
                <a href="mailto:pifactor@gmail.com">pifactor@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <ul
              className={`${montserratLight.className}  text-[#e0ccbb] font-thin`}
            >
              <Link href="/work">
                <li className="cursor-pointer ">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-sm tablet:text-lg">
                    Work
                  </span>
                </li>
              </Link>
              <Link href="/about">
                <li className="cursor-pointer ">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-sm tablet:text-lg">
                    About Us
                  </span>
                </li>
              </Link>
              <Link href="/contact">
                <li className="cursor-pointer">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-sm text-nowrap tablet:text-lg ">
                    Contact Us
                  </span>
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <div>
              {" "}
              <ul
                className={`${montserratLight.className}  text-[#e0ccbb] font-thin`}
              >
                <li className="cursor-pointer ">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-sm tablet:text-lg">
                    Behance
                  </span>
                </li>
                <li className="cursor-pointer ">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-sm tablet:text-lg">
                    Twitter
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-sm tablet:text-lg">
                    Youtube
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300 text-sm tablet:text-lg">
                    Instagram
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
