"use client";
import React, { useEffect, useState, useRef } from "react";
import "./work.css";
import Head from "next/head"; // Import Head for metadata
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lato, Montserrat } from "next/font/google";
import sparkle from "../../../app/images/sparkle.png";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const latoLight = Lato({
  subsets: ["latin"],
  weight: "300",
});
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

gsap.registerPlugin(ScrollTrigger);

function Laptop1() {
  const [enter, setEnter] = useState("");
  const [videoTimes, setVideoTimes] = useState({}); // Store playback times for multiple videos
  const videoRefs = useRef({}); // Object to store refs for multiple video elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [view, setView] = useState("");
  const [loading, setLoading] = useState({
    image1: true,
    image2: true,
    image3: true,
    image4: true,
  });
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX, // Corrected here
        y: e.clientY, // Corrected here
      });
    };
    window.addEventListener("mousemove", mouseMove);

    gsap.set("header p", { y: 200, opacity: 0, skewY: "60deg" });

    gsap.to("header p", {
      scrollTrigger: { trigger: "header" },
      y: 0,
      skewY: "0deg",
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
      stagger: 0.1,
    });

    gsap.fromTo(
      [".image1,.about"],
      { y: 0, opacity: 0.5 },
      {
        y: 50,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".image1",
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      [".image2"],
      { y: 60, opacity: 0.3 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".image2",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      [".image3"],
      { y: 150, opacity: 0.2 },
      {
        y: 80,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".image3",
          start: "top 40%",
          end: "bottom 70%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      [".image4"],
      { y: -40, opacity: 0.3 },
      {
        y: 10,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".image4",
          start: "top 60%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

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
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <>
      <div className="pp w-full   tablet:px-20 tablet:py-10  font-poppins font-thin">
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
        <header className="font-poppins flex letters container  !mx-auto h-">
          {"Work".split("").map((work, i) => (
            <p
              className={`${montserrat.className} font-normal text-[20vw] tablet:text-[100px]`}
              montserrat
              key={i}
            >
              {work}
            </p>
          ))}
        </header>

        <section className="flex flex-col ">
          {/* section1 */}
          <div className=" tablet:!h-[900px]  tablet:flex tablet:gap-0  container !mx-auto  ">
            <div className="w-full h-full tablet:px-5">
              <p className="font-medium text-xl vfx">VFX</p>
              {/* for lap */}
              <div
                className="tablet:w-full hidden tablet:block h-[800px] !w-[650px]  relative image1"
                onMouseEnter={() => {
                  handleMouseEnter("image1");
                  setView("default");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("image1");
                  setView("");
                }}
                style={{ clipPath: "polygon(0 0, 72% 0, 72% 100%, 0% 100%)" }}
              >
                {loading.image1 && (
                  <div className="absolute top-0 left-0 w-full h-full object-cover animate-pulse">
                    <img
                      className=" w-full h-full object-cover"
                      src="/vfx/pics/Jessey.webp"
                      alt=""
                    />
                  </div>
                )}
                <Link href="/work/vfx/1">
                  {enter === "image1" ? (
                    <video
                      ref={(el) => (videoRefs.current["image1"] = el)}
                      className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer "
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
                      src="/vfx/videos/jesseyCut.mp4"
                    ></video>
                  ) : (
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src="/vfx/pics/Jessey.webp"
                      alt=""
                    />
                  )}
                </Link>
              </div>

              <p className="text-white image1 -mt-16">JESSEY</p>
            </div>
            {/* right side  */}
            <div className="tablet:w-[50%] h-full flex  flex-col justify-between">
              <div className="flex flex-col justify-end gap-10 featured">
                <div className="flex gap-1">
                  <Image alt="img" src={sparkle} className="w-4" />
                  <p className={`text-base ${latoLight.className} `}>
                    Featured Projects
                  </p>
                </div>
                <p
                  className={`text-xl max-w-[400px] font-medium ${lato.className}`}
                >
                  Highlights of cases that we passionately built with
                  forward-thinking clients and friends over the years.
                </p>
              </div>
              <div
                className="w-[400px] hidden h-[600px] tablet:max-w-[450px] laptop:flex  tablet:h-[500px]  relative image2"
                onMouseEnter={() => {
                  handleMouseEnter("image2");
                  setView("default");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("image2");
                  setView("");
                }}
              >
                {" "}
                {loading.image2 && (
                  <div className="absolute top-0 left-0 w-full h-full object-cover animate-pulse">
                    <img
                      className="w-full h-full object-cover"
                      src="/vfx/pics/Bloody Begger.webp"
                      alt=""
                    />
                  </div>
                )}
                <Link href="/work/vfx/2">
                  {enter === "image2" ? (
                    <video
                      ref={(el) => (videoRefs.current["image2"] = el)}
                      className="absolute top-0 !right-0 w-full h-full object-cover cursor-pointer"
                      autoPlay
                      onLoadedData={() =>
                        setLoading((prev) => ({ ...prev, image2: false }))
                      }
                      muted
                      preload="auto"
                      playsInline
                      loop
                      src="/vfx/videos/bloddybeggarCut.mp4"
                    ></video>
                  ) : (
                    <img
                      className="absolute top-0 !right-0 w-full h-full object-cover"
                      src="/vfx/pics/Bloody Begger.webp"
                      alt=""
                    />
                  )}
                </Link>
              </div>
              <p className="text-left -mt-20">Bloddy Beggar</p>
              <div>
                {" "}
                <div className="tablet:w-[250px] laptop:hidden block h-[200px]  relative image1">
                  <video
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    muted
                    preload="auto"
                    loop
                    playsInline
                    src="/car.mp4"
                  ></video>
                  <p className="mt-2">About Project3</p>
                </div>
              </div>
            </div>
          </div>
          {/* section2 */}
          <div className="tablet:!h-[900px] w-full flex justify-evenly overflow-hidden tablet:gap-10">
            <div className="flex w-[400px] justify-center items-start flex-col image3">
              <div
                className="laptop:w-full tablet:w-[400px] h-[500px]  relative"
                onMouseEnter={() => {
                  handleMouseEnter("image3");
                  setView("default");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("image3");
                  setView("");
                }}
              >
                {loading.image3 && (
                  <div className="absolute top-0 left-0 w-full h-full object-cover animate-pulse">
                    <img
                      className=" w-full h-full object-cover"
                      src="https://m.media-amazon.com/images/M/MV5BNGE3Yjg4MzYtM2E0Zi00ODFkLTk1YWYtMDVlZTVmMTg3ODE1XkEyXkFqcGc@._V1_.jpg"
                      alt="Demonte"
                    />
                  </div>
                )}
                <Link href="/work/vfx/3">
                  {enter === "image3" ? (
                    <video
                      ref={(el) => (videoRefs.current["image3"] = el)}
                      className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                      autoPlay
                      muted
                      playsInline
                      loop
                      onLoadedData={() =>
                        setLoading((prev) => ({ ...prev, image3: false }))
                      }
                      preload="auto"
                      src="/vfx/videos/demonte colony.mp4"
                    ></video>
                  ) : (
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src="https://m.media-amazon.com/images/M/MV5BNGE3Yjg4MzYtM2E0Zi00ODFkLTk1YWYtMDVlZTVmMTg3ODE1XkEyXkFqcGc@._V1_.jpg"
                      alt="Demonte"
                    />
                  )}
                </Link>
              </div>
              <p className="text-white  image3 -mt-16">Demonte Colony</p>
            </div>
            <div className="flex  flex-col justify-center image4">
              <div
                className="laptop:w-[500px] laptop:h-[600px] tablet:h-[400px] tablet:w-[300px]  relative"
                onMouseEnter={() => {
                  handleMouseEnter("image4");
                  setView("default");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("image4");
                  setView("");
                }}
              >
                {loading.image4 && (
                  <div className="absolute top-0 left-0 w-full h-full object-cover animate-pulse">
                    <img
                      className=" w-full h-full object-cover"
                      src="https://m.media-amazon.com/images/M/MV5BYWUwZmEwMmMtZGU1ZS00Njg0LWE3MWMtYmIzMjVhM2FlYjkzXkEyXkFqcGc@._V1_.jpg"
                      alt=""
                    />
                  </div>
                )}
                <Link href="/work/vfx/7">
                  {enter === "image4" ? (
                    <video
                      ref={(el) => (videoRefs.current["image4"] = el)}
                      className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                      autoPlay
                      muted
                      preload="auto"
                      playsInline
                      onLoadedData={() =>
                        setLoading((prev) => ({ ...prev, image4: false }))
                      }
                      loop
                      src="/vfx/videos/ThangalanCut.mp4"
                    ></video>
                  ) : (
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src="https://m.media-amazon.com/images/M/MV5BYWUwZmEwMmMtZGU1ZS00Njg0LWE3MWMtYmIzMjVhM2FlYjkzXkEyXkFqcGc@._V1_.jpg"
                      alt=""
                    />
                  )}
                </Link>
              </div>
              <p className="text-white  image3 -mt-16">Thangalan</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Laptop1;
