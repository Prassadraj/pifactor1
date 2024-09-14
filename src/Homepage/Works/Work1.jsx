"use client";

import React, { useEffect, useState, useRef } from "react";
import "../Works/work.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lato, Montserrat } from "@next/font/google";
import sparkle from "../../app/images/sparkle.png";
import Image from "next/image";
import { motion } from "framer-motion";
import debounce from "lodash.debounce"; // Use lodash debounce for performance

// Font Imports
const montserrat = Montserrat({ subsets: ["latin"] });
const latoLight = Lato({ subsets: ["latin"], weight: "300" });
const lato = Lato({ subsets: ["latin"], weight: "400" });

gsap.registerPlugin(ScrollTrigger);

function Work1() {
  const [enter, setEnter] = useState("");
  const [videoTimes, setVideoTimes] = useState({}); // Store playback times for multiple videos
  const videoRefs = useRef({}); // Object to store refs for multiple video elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [view, setView] = useState("");

  useEffect(() => {
    // Throttled mouse movement for performance
    const mouseMove = debounce((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });

    window.addEventListener("mousemove", mouseMove);

    // GSAP Animations
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
    <div className="pp w-full tablet:px-20 tablet:py-10 font-poppins font-thin">
      {view === "default" && (
        <motion.div
          variants={variants}
          animate={view}
          transition={{ duration: 0.1, ease: "linear" }}
          style={{ pointerEvents: "none" }}
          className="fixed top-0 flex justify-center items-center left-0 w-16 h-16 z-50 rounded-full bg-gray-700 mix-blend-difference"
        >
          <p
            className={`${montserrat.className} text-white font-normal text-sm`}
          >
            View
          </p>
        </motion.div>
      )}
      <header className="font-poppins flex letters">
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
        <div className="tablet:h-[170vh] tablet:flex tablet:gap-20">
          <div className="w-full h-full tablet:px-5">
            <p className="font-medium text-xl vfx">VFX</p>
            <div
              className="w-full h-[800px] relative image1"
              onMouseEnter={() => {
                handleMouseEnter("image1");
                setView("default");
              }}
              onMouseLeave={() => {
                handleMouseLeave("image1");
                setView("");
              }}
            >
              {enter === "image1" ? (
                <video
                  ref={(el) => (videoRefs.current["image1"] = el)}
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                  autoPlay
                  muted
                  loop
                  src="./car.mp4"
                />
              ) : (
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1567818668411-2580206b256d?q=80&w=1960&auto=format&fit=crop"
                  alt="Project Image"
                  layout="fill"
                />
              )}
            </div>
            <p className="text-white image1">About Project</p>
          </div>

          {/* Featured Projects Section */}
          <div className="tablet:flex-1 h-full flex flex-col justify-between">
            <div className="flex flex-col justify-end gap-10 featured">
              <div className="flex gap-1">
                <Image src={sparkle} alt="Sparkle" className="w-4" />
                <p className={`text-base ${latoLight.className}`}>Featured Projects</p>
              </div>
              <p className={`text-xl max-w-[400px] font-medium ${lato.className}`}>
                Highlights of cases that we passionately built with forward-thinking clients and friends over the years.
              </p>
            </div>
            <div
              className="w-[400px] h-[600px] tablet:w-[400px] flex tablet:h-[500px] relative image2"
              onMouseEnter={() => {
                handleMouseEnter("image2");
                setView("default");
              }}
              onMouseLeave={() => {
                handleMouseLeave("image2");
                setView("");
              }}
            >
              {enter === "image2" ? (
                <video
                  ref={(el) => (videoRefs.current["image2"] = el)}
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                  autoPlay
                  muted
                  loop
                  src="./car.mp4"
                />
              ) : (
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1598814165187-ed79437d7490?q=80&w=1887&auto=format&fit=crop"
                  alt="Project Image"
                  layout="fill"
                />
              )}
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="tablet:h-[150vh] w-full flex justify-evenly">
          <div className="flex w-[300px] justify-end items-start flex-col image3">
            <div
              className="w-full h-[400px] relative"
              onMouseEnter={() => {
                handleMouseEnter("image3");
                setView("default");
              }}
              onMouseLeave={() => {
                handleMouseLeave("image3");
                setView("");
              }}
            >
              {enter === "image3" ? (
                <video
                  ref={(el) => (videoRefs.current["image3"] = el)}
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                  autoPlay
                  muted
                  loop
                  src="./car.mp4"
                />
              ) : (
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1567818736054-5a48c89711fc?q=80&w=1887&auto=format&fit=crop"
                  alt="Project Image"
                  layout="fill"
                />
              )}
            </div>
            <p className="text-white image3 mt-2">About Project</p>
          </div>

          <div className="flex flex-col justify-center image4">
            <div
              className="w-[500px] h-[600px] relative"
              onMouseEnter={() => {
                handleMouseEnter("image4");
                setView("default");
              }}
              onMouseLeave={() => {
                handleMouseLeave("image4");
                setView("");
              }}
            >
              {enter === "image4" ? (
                <video
                  ref={(el) => (videoRefs.current["image4"] = el)}
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                  autoPlay
                  muted
                  loop
                  src="./car.mp4"
                />
              ) : (
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1611651336487-802fe164d3e5?q=80&w=1887&auto=format&fit=crop"
                  alt="Project Image"
                  layout="fill"
                />
              )}
            </div>
            <p className="text-white image4 mt-2 text-left transition-all">
              About Project
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work1;
