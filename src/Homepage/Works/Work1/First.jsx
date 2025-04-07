"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import sparkle from "../../../app/images/sparkle.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { Montserrat, Newsreader } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const news = Newsreader({ subsets: ["latin"], weight: ["800"] });

const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["200"] });
gsap.registerPlugin(ScrollTrigger);

function First() {
  const [enter, setEnter] = useState("");
  const videoRefs = useRef({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [view, setView] = useState("");
  const [videoTimes, setVideoTimes] = useState({});
  const [loading, setLoading] = useState({
    image1: true,
    image2: true,
    image3: true,
    image4: true,
  });
  const handleMouseEnter = (imageClass) => {
    setEnter(imageClass);
    const videoRef = videoRefs.current[imageClass];
    if (videoRef) {
      videoRef.currentTime = videoTimes[imageClass] || 0; // Resume from where it left off
      videoRef.play();
    }
  };

  const handleMouseLeave = (imageClass) => {
    setEnter("");
    const videoRef = videoRefs.current[imageClass];
    if (videoRef) {
      setVideoTimes((prev) => ({
        ...prev,
        [imageClass]: videoRef.currentTime,
      })); // Store current time
      videoRef.pause();
    }
  };
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX, // Corrected here
        y: e.clientY, // Corrected here
      });
    };
    window.addEventListener("mousemove", mouseMove);
    gsap.set(".letters p", { y: 200, opacity: 0, skewY: "60deg" });

    gsap.to(".letters p", {
      scrollTrigger: { trigger: "header" },
      y: 0,
      skewY: "0deg",
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
      stagger: 0.1,
    });
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };
  return (
    <div className="w-full laptop:px-20 tablet:px-10 mt-10 container mx-auto">
      {view == "default" && (
        <motion.div
          variants={variants}
          animate={view}
          transition={{ duration: 0.1, ease: "linear" }}
          className="fixed hidden top-0 pointer-events-none laptop:flex justify-center items-center left-0 w-16 h-16 z-50 rounded-full bg-gray-700 mix-blend-difference"
        >
          <p
            className={`${montserrat.className} text-white font-normal text-sm`}
          >
            {" "}
            View
          </p>
        </motion.div>
      )}
      {/* work title description  */}
      <div className="flex justify-between items-center">
        {" "}
        <div className="flex flex-col gap-4">
          <div className="flex letters ">
            {"Work".split("").map((work, i) => (
              <p
                className={`${montserrat.className} bg-grey-gradient text-transparent bg-clip-text font-normal text-[20vw] tablet:text-[100px]`}
                montserrat
                key={i}
              >
                {work}
              </p>
            ))}
          </div>
          <h3
            className={`text-2xl ml-4 ${news.className} bg-blue-gradient text-transparent bg-clip-text`}
          >
            Vfx
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Image alt="img" src={sparkle} className="w-4" />
            <p className={`text-base`}>Featured Projects</p>
          </div>
          <p
            className={`text-xl max-w-[400px] font-medium bg-grey-gradient text-transparent bg-clip-text  ${montLight.className}`}
          >
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>
      </div>
      {/* poster  */}
      <div className="h-screen  grid tablet:grid-rows-7 tablet:grid-cols-7 laptop:grid-cols-10 laptop:grid-rows-10 w-full my-10 laptop:px-5">
        {/* img1  */}
        <div
          className="flex flex-col col-start-1 row-start-1 tablet:col-end-4 laptop:col-end-5 
         tablet:row-end-6 laptop:row-end-10 h-full w-full
      gap-4"
          onMouseEnter={() => {
            handleMouseEnter("image1");
            setView("default");
          }}
          onMouseLeave={() => {
            handleMouseLeave("image1");
            setView("");
          }}
        >
          <div className="h-full w-full  relative">
            <div className="absolute top-0 left-0 h-full w-full">
              {loading.image1 && (
                <div className="absolute top-0 left-0 w-full h-full object-cover animate-pulse">
                  <img
                    className=" w-full h-full object-cover"
                    src="/vfx/pics/vettaiyanPotrait.webp"
                    alt=""
                  />
                </div>
              )}
              <Link href="/work/vfx/1">
                {enter === "image1" ? (
                  <video
                    ref={(el) => (videoRefs.current["image1"] = el)}
                    className="w-full h-full object-cover cursor-pointer "
                    autoPlay
                    playsInline
                    onLoadedData={() =>
                      setLoading((prev) => ({
                        ...prev,
                        image1: false,
                      }))
                    }
                    muted
                    loop
                    src="/vfx/videos/Vettaiyan.mp4"
                  ></video>
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src="/vfx/pics/vettaiyanPotrait.webp"
                    alt=""
                  />
                )}
              </Link>
            </div>
          </div>
          <p className="relative z-10 mt-2 bg-grey-gradient text-transparent bg-clip-text tablet:text-2xl ">
            Vettaiyan
          </p>
        </div>

        {/* img2  */}
        <div
          className="flex flex-col tablet:col-start-5 tablet:!col-end-8  laptop:col-start-8 row-start-3 laptop:!col-end-11  h-full w-full tablet:row-end-7 laptop:row-end-10
      gap-4"
          onMouseEnter={() => {
            handleMouseEnter("image2");
            setView("default");
          }}
          onMouseLeave={() => {
            handleMouseLeave("image2");
            setView("");
          }}
        >
          <div className="h-full w-full  relative">
            <div className="absolute top-0 left-0 h-full w-full">
              {loading.image2 && (
                <div className="absolute top-0 left-0 w-full h-full object-cover animate-pulse">
                  <img
                    className=" w-full h-full object-cover"
                    src="/vfx/pics/thangalanPortrait.jpg"
                    alt=""
                  />
                </div>
              )}
              <Link href="/work/vfx/2">
                {enter === "image2" ? (
                  <video
                    ref={(el) => (videoRefs.current["image2"] = el)}
                    className="w-full h-full object-cover cursor-pointer "
                    autoPlay
                    playsInline
                    onLoadedData={() =>
                      setLoading((prev) => ({
                        ...prev,
                        image2: false,
                      }))
                    }
                    muted
                    loop
                    src="/vfx/videos/ThangalanCut.mp4"
                  ></video>
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src="/vfx/pics/thangalanPortrait.jpg"
                    alt=""
                  />
                )}
              </Link>
            </div>
          </div>
          <p className="relative z-10 bg-grey-gradient text-transparent bg-clip-text tablet:text-2xl mt-2">
            Thangalaan
          </p>
        </div>
      </div>
      {/* 2div  */}
      <div className="h-screen  grid tablet:grid-rows-7 tablet:grid-cols-7 laptop:grid-cols-10 laptop:grid-rows-10 w-full my-10 laptop:px-5">
        {/* img3  */}
        <div
          className="flex flex-col col-start-1 tablet:row-start-5 laptop:row-start-4 tablet:col-end-4 laptop:col-end-4
         tablet:row-end-9 laptop:row-end-11 h-full w-full
      gap-4"
          onMouseEnter={() => {
            handleMouseEnter("image3");
            setView("default");
          }}
          onMouseLeave={() => {
            handleMouseLeave("image3");
            setView("");
          }}
        >
          <div className="h-full w-full  relative">
            <div className="absolute top-0 left-0 h-full w-full">
              {loading.image3 && (
                <div className="absolute top-0 left-0 w-full h-full object-cover animate-pulse">
                  <img
                    className=" w-full h-full object-cover"
                    src="/vfx/pics/jerseyPotrait.jpg"
                    alt=""
                  />
                </div>
              )}
              <Link href="/work/vfx/3">
                {enter === "image3" ? (
                  <video
                    ref={(el) => (videoRefs.current["image3"] = el)}
                    className="w-full h-full object-cover cursor-pointer "
                    autoPlay
                    playsInline
                    onLoadedData={() =>
                      setLoading((prev) => ({
                        ...prev,
                        image3: false,
                      }))
                    }
                    muted
                    loop
                    src="/vfx/videos/jesseyCut.mp4"
                  ></video>
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src="/vfx/pics/jerseyPotrait.jpg"
                    alt=""
                  />
                )}
              </Link>
            </div>
          </div>
          <p className="relative z-10 bg-grey-gradient text-transparent bg-clip-text tablet:text-2xl mt-2">
            Jersey
          </p>
        </div>
        {/* img4  */}
        <div
          onMouseEnter={() => {
            handleMouseEnter("image4");
            setView("default");
          }}
          onMouseLeave={() => {
            handleMouseLeave("image4");
            setView("");
          }}
          className="flex flex-col tablet:col-start-3 tablet:!col-end-7  laptop:col-start-5 row-start-1 laptop:!col-end-10  h-full w-full tablet:row-end-4 laptop:row-end-10
      gap-4"
        >
          <div className="h-full w-full  relative">
            <div className="absolute top-0 left-0 h-full w-full">
              {loading.image4 && (
                <div className="absolute top-0 left-0 w-full h-full object-cover animate-pulse">
                  <img
                    className=" w-full h-full object-cover"
                    src="/vfx/pics/demonte.jpg"
                    alt=""
                  />
                </div>
              )}
              <Link href="/work/vfx/5">
                {enter === "image4" ? (
                  <video
                    ref={(el) => (videoRefs.current["image4"] = el)}
                    className="w-full h-full object-cover cursor-pointer "
                    autoPlay
                    playsInline
                    onLoadedData={() =>
                      setLoading((prev) => ({
                        ...prev,
                        image4: false,
                      }))
                    }
                    muted
                    loop
                    src="/vfx/videos/demonte colony.mp4"
                  ></video>
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src="/vfx/pics/demonte.jpg"
                    alt=""
                  />
                )}
              </Link>
            </div>
          </div>
          <p className="relative z-10 bg-grey-gradient text-transparent bg-clip-text tablet:text-2xl mt-2">
            Demonte colony
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;
