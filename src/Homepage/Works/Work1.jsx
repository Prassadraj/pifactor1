"use client";
import React, { useEffect, useState, useRef } from "react";
import "./work.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "@next/font/google";
import sparkle from "../../app/images/sparkle.png";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

const montserrat = Montserrat({
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

function Work1() {
  const [enter, setEnter] = useState("");
  const [videoTimes, setVideoTimes] = useState({}); // Store playback times for multiple videos
  const videoRefs = useRef({}); // Object to store refs for multiple video elements

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.set("header p", { y: 200, opacity: 0 });

    gsap.to("header p", {
      scrollTrigger: { trigger: "header" },
      y: 0,
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
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      [".image3"],
      { y: 130, opacity: 0.3 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".image4",
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      [".image4"],
      { y: 0, opacity: 0.3 },
      {
        y: 70,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".image4",
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      }
    );

    return () => {
      lenis.destroy();
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

  return (
    <div className="pp w-full md:px-20 md:py-10 font-poppins font-thin">
      <header className="font-poppins flex letters">
        {"Work".split("").map((work, i) => (
          <p
            className={`${montserrat.className} font-thin text-[20vw] md:text-[100px]`}
            montserrat
            key={i}
          >
            {work}
          </p>
        ))}
      </header>
      <section className="flex flex-col md:gap-20">
        {/* section1 */}
        <div className="md:h-[170vh] md:flex md:gap-20">
          <div className="md:flex-1 h-full md:px-5">
            <p className="font-medium text-xl">VFX</p>
            <div
              className="w-full h-[800px] bg-slate-200 relative image1"
              onMouseEnter={() => handleMouseEnter("image1")}
              onMouseLeave={() => handleMouseLeave("image1")}
            >
              {enter === "image1" ? (
                <video
                  ref={(el) => (videoRefs.current["image1"] = el)}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  src="./car.mp4"
                ></video>
              ) : (
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              )}
            </div>
            <p className="text-white image1">About Project</p>
          </div>
          <div className="md:flex-1 h-full flex  flex-col justify-between">
            <div className="flex flex-col justify-end gap-10 featured">
              <div className="flex gap-1">
                <Image src={sparkle} className="w-4" />
                <p className="text-base">Featured Projects</p>
              </div>
              <p className="text-xl max-w-[400px]">
                Highlights of cases that we passionately built with
                forward-thinking clients and friends over the years.
              </p>
            </div>
            <div
              className="w-[500px] h-[800px] bg-slate-200 relative image2"
              onMouseEnter={() => handleMouseEnter("image2")}
              onMouseLeave={() => handleMouseLeave("image2")}
            >
              {enter === "image2" ? (
                <video
                  ref={(el) => (videoRefs.current["image2"] = el)}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  src="./car.mp4"
                ></video>
              ) : (
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        {/* section2 */}
        <div className="md:h-[150vh] flex justify-evenly">
          <div className="flex w-[300px] justify-end items-start flex-col image3">
            <div
              className="w-full h-[500px] bg-slate-200 relative"
              onMouseEnter={() => handleMouseEnter("image3")}
              onMouseLeave={() => handleMouseLeave("image3")}
            >
              {enter === "image3" ? (
                <video
                  ref={(el) => (videoRefs.current["image3"] = el)}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  src="./car.mp4"
                ></video>
              ) : (
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://images.pexels.com/photos/6494449/pexels-photo-6494449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              )}
            </div>
            <p className="text-white mt-2">About Project</p>
          </div>
          <div className="flex w-2/4 items-center  flex-col justify-center image4">
            <div
              className="w-[500px] h-[600px] bg-slate-200 relative"
              onMouseEnter={() => handleMouseEnter("image4")}
              onMouseLeave={() => handleMouseLeave("image4")}
            >
              {enter === "image4" ? (
                <video
                  ref={(el) => (videoRefs.current["image4"] = el)}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  src="./car.mp4"
                ></video>
              ) : (
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src="https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              )}
            </div>
            <p className="text-white mt-2 text-left">About Project</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work1;
