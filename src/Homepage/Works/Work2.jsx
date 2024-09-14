"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Montserrat } from "@next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Picture1 from "../../../public/images/1.jpeg";
import Picture2 from "../../../public/images/2.jpeg";
import Picture3 from "../../../public/images/3.jpg";
import Picture4 from "../../../public/images/4.jpg";
import Picture5 from "../../app/images/window.png";
import Picture6 from "../../../public/images/6.jpg";
import Picture7 from "../../../public/images/7.jpeg";

// Importing the Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

gsap.registerPlugin(ScrollTrigger);

function Work2() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 2D animation text
      gsap.fromTo(
        ".text p",
        { y: 150 },
        {
          y: 0,
          scrollTrigger: { trigger: ".text", start: "top center", end: "bottom top"},
          duration: 0.5,
          ease: "power3.out",
          delay: 0.2,
          stagger: 0.1,
        }
      );

      gsap.to(".animations1", {
        height: "50vh",
        width: "100%",
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".animations1",
          start: "top 80%",
          end: "bottom 80%",
          scrub: 2,
        },
      });

      gsap.to(".animations2", {
        height: "50vh",
        width: "100%",
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".animations2",
          start: "top 60%",
          end: "bottom 60%",
          scrub: 2,
        },
      });

      gsap.to(".animations3", {
        height: "50vh",
        width: "100%",
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".animations3",
          start: "top 40%",
          end: "bottom 40%",
          scrub: 2,
        },
      });

      gsap.to(".animations4", {
        height: "50vh",
        width: "100%",
        ease: "power3.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".animations4",
          start: "top 10%",
          end: "bottom 40%",
          scrub: 2,
        },
      });
    }, containerRef);

    // Cleanup on component unmount
    return () => ctx.revert();
  }, []);

  const pictures = [Picture1, Picture5, Picture6, Picture7];

  return (
    <div
      ref={containerRef}
      className="laptop:px-20 px-2 laptop:py-10 tablet:px-10 tablet:py-10 w-full h-[240vh]"
    >
      <div
        className="text flex overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {" 2D Animations".split("").map((text, i) => (
          <p
            key={i}
            className={`${montserrat.className} mb-4 font-normal text-[7vw] tablet:text-[10vw] laptop:text-[70px]`}
          >
            {text}
          </p>
        ))}
      </div>
      <p
        className={`${montserrat.className} tablet:text-2xl laptop:text-3xl font-thin`}
      ></p>
      <div className="hidden h-full w-full tablet:gap-5 laptop:gap-10 tablet:flex flex-col mt-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={`animations${
              i + 1
            } tablet:flex items-center  tablet:h-[25vh] tablet:w-[50%] gap-5 ${
              i === 2 || i === 3 ? "rounded-md" : ""
            }`}
          >
            <div className="animate-2d">
              <p
                className={`${montserrat.className} laptop:text-2xl font-medium`}
              >
                Title
              </p>
              <p className={`${montserrat.className} laptop:text-lg`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, aut eum a, vero, quia.
              </p>
            </div>
            <div className="img-2d h-full w-full  rounded-md">
              <Image
                src={pictures[i]}
                width={800}
                height={500}
                className="object-cover w-full h-full"
                alt="Animation preview"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 tablet:hidden  gap-3 w-full h-full">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="space-y-2">
            <div>
              <p className={`${montserrat.className} text-lg font-medium`}>
                Title
              </p>
              <p className={`${montserrat.className} text-sm laptop:text-lg`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, aut eum a, vero, quia.
              </p>
            </div>
            <div className="h-60  w-full rounded-md overflow-hidden">
              <Image
                src={pictures[i]}
                width={800}
                height={500}
                className="object-cover w-full h-full"
                alt="Animation preview"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work2;
