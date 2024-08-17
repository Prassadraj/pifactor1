"use client";
import React, { useEffect } from "react";
import "./work.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Work1() {
  useEffect(() => {
    // GSAP animation setup
    gsap.set("header p", { y: 200, opacity: 0 }); // Initial state

    gsap.to("header p", {
      scrollTrigger: {
        trigger: "header",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="pp w-full h-[100vh] px-10 overflow-hidden">
      <header className="font-poppins flex letters">
        {"Work".split("").map((work, i) => (
          <div className="font-thin text-[20vw] md:text-[200px]" key={i}>
            {work}
          </div>
        ))}
      </header>
    </div>
  );
}

export default Work1;
