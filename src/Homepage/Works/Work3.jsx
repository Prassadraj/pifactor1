import { Montserrat } from "@next/font/google";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

gsap.registerPlugin(ScrollTrigger);

function Work3() {
  const container = useRef(null);

  useEffect(() => {
    gsap.to(".ImageWrapper", {
      x: 190,
      duration: 0.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".fullContainer",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      },
    });

    gsap.to(".ImageWrapper2", {
      x: -190,
      duration: 0.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".fullContainer",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      },
    });

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
    <div className="fullContainer h-[200vh]   md:py-10" useRef={container}>
      <div
        className="text1 md:px-20 flex overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {" 3D Animations".split("").map((text, i) => (
          <p
            key={i}
            className={`${montserrat.className} font-normal text-[20vw] md:text-[70px]`}
          >
            {text}
          </p>
        ))}
      </div>
      <div className=" h-[100vh] sticky top-0 w-full overflow-hidden py-10 gap-10 flex flex-col justify-evenly">
        <div className="h-[50vh] w-full overflow-hidden flex gap-5 items-center justify-center ">
          <div className="ImageWrapper ">
            <div className="w-[25rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1622994690845-56efd20992c6?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="ImageWrapper">
            <div className="w-[35rem] h-full ">
              <video
                className="h-full w-full object-cover"
                src="./car.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
          <div className="ImageWrapper">
            <div className="w-[25rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1474224017046-182ece80b263?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="ImageWrapper">
            <div className="w-[20rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/flagged/photo-1553368178-f3b731b61fde?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="ImageWrapper ">
            <div className="w-[20rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1585355596541-effaec37618d?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="h-[50vh] w-full overflow-hidden flex flex-row-reverse gap-5 items-center justify-center">
          <div className="ImageWrapper2">
            <div className="w-[20rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="ImageWrapper2">
            <div className="w-[35rem] h-full ">
              <video
                className="h-full w-full object-cover"
                src="./car.mp4"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
          <div className="ImageWrapper2">
            <div className="w-[25rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1619572945516-7598cb601a11?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="ImageWrapper2">
            <div className="w-[20rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1673483585942-70592b8fea56?q=80&w=2870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="ImageWrapper2">
            <div className="w-[20rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1622994690845-56efd20992c6?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work3;
