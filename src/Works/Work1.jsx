"use client";
import React, { useEffect } from "react";
import "./work.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "@next/font/google";
import sparkle from "../app/images/sparkle.png";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
const montserrat = Montserrat({
  subsets: ["latin"],
});
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Work1() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, // Duration of the scroll (in seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
    });

    function raf(time) {
      lenis.raf(time); // Pass the timestamp to Lenis
      requestAnimationFrame(raf); // Loop the requestAnimationFrame
    }

    requestAnimationFrame(raf); // Start the loop
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
    gsap.fromTo(
      [".image1,.about"],

      {
        y: 0,
        opacity: 0.5,
        // Initial state with opacity 0
      },
      {
        y: 50,
        opacity: 1, // Final state with opacity 1
        duration: 0.5, // Duration of the animation
        ease: "back.out(1.7)", // Back easing with an overshoot of 1.7
        scrollTrigger: {
          trigger: ".image1", // Trigger the animation when `.image1` enters the viewport
          start: "top 80%", // Start animation when top of `.image1` is 80% from the top
          end: "bottom 60%", // End animation when bottom of `.image1` is 20% from the top
          scrub: 1, // Smooth animation tied to scroll position
        },
      }
    );
    gsap.fromTo(
      [".image2"],

      {
        y: 50,
        opacity: 0.5,
        // Initial state with opacity 0
      },
      {
        y: 0,
        opacity: 1, // Final state with opacity 1
        duration: 1, // Duration of the animation
        ease: "back.out(1.7)", // Back easing with an overshoot of 1.7
        scrollTrigger: {
          trigger: ".image2", // Trigger the animation when `.image1` enters the viewport
          start: "top 80%", // Start animation when top of `.image1` is 80% from the top
          end: "bottom 100%", // End animation when bottom of `.image1` is 20% from the top
          scrub: 1, // Smooth animation tied to scroll position
        },
      }
    );
    return () => {
      lenis.destroy(); // Clean up Lenis on unmount
    };
  }, []);

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
      <section>
        {/* section1 */}
        <div className="md:h-[170vh]  flex ">
          <div className="md:flex-1  h-full md:px-5">
            <p>VFX</p>
            <img
              className="w-full object-contain image1"
              src="https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <p className="text-white about">About Project</p>
          </div>
          <div className="md:flex-1  h-full flex flex-col justify-between px-20">
            <div className="flex flex-col gap-10 featured">
              <div className="flex gap-1">
                <Image src={sparkle} className="w-4" />
                <p className="text-base">Featured Projects</p>
              </div>
              <p className="text-xl">
                Highlights of cases that we passionately built with forward
                -thinking clients and friends over the years.
              </p>
            </div>
            <div>
              <img
                className="image2"
                src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work1;
