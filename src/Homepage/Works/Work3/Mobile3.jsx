"use client";
//
import { Montserrat } from "next/font/google";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

gsap.registerPlugin(ScrollTrigger);

function Mobile3() {
  const container = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".text1 p",
      {
        y: 150,
      },
      {
        y: 0,
        scrollTrigger: ".text1",

        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Correct way to kill all ScrollTriggers
    };
  }, []);

  return (
    <div className="my-10 h-full w-full px-2">
      <div
        className="text1   flex overflow-hidden my-2"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {" 3D Animations".split("").map((text, i) => (
          <p
            key={i}
            className={`${montserrat.className} font-bold text-[25px] `}
          >
            {text}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="h-full">
          <video
            className="h-[400px] w-full object-cover"
            src="./car.mp4"
            autoPlay
            loop
            muted
          ></video>
          <p className="text-white">About the Project1...</p>
        </div>
        <div className="h-full">
          <img
            className="h-[400px w-full object-cover"
            src="https://images.unsplash.com/photo-1622994690845-56efd20992c6?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="text-white">About the Project1...</p>
        </div>
      </div>
    </div>
  );
}

export default Mobile3;
