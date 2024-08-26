import { Montserrat } from "@next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
});
gsap.registerPlugin(ScrollTrigger);
function Work3() {
  const container = useRef(null);
  gsap.fromTo(
    ".text p",
    {
      y: 50,
    },
    {
      y: 0,
      scrollTrigger: ".text",

      duration: 0.5,
      ease: "power3.out",
      delay: 0.2,
      stagger: 0.1,
    }
  );
  return (
    <div className="h-[200vh]   md:py-10" useRef={container}>
      <div className="text md:px-20 flex overflow-hidden h-10 ">
        {" 3D Animations".split("").map((text, i) => (
          <p key={i} className={`${montserrat.className} text-4xl font-medium`}>
            {text}
          </p>
        ))}
      </div>
      <div className="h-[100vh] sticky top-0 w-full overflow-hidden py-10 gap-10 flex flex-col justify-evenly">
        <div className="h-[50vh] w-full overflow-x-hidden flex gap-5 items-center justify-center">
          <div className="ImageWrapper">
            <div className="w-[20rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1585355596541-effaec37618d?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        </div>
        <div className="h-[50vh] w-full overflow-x-hidden flex flex-row-reverse gap-5 items-center justify-center">
          <div className="ImageWrapper">
            <div className="w-[20rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                src="https://images.unsplash.com/photo-1619572945516-7598cb601a11?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="ImageWrapper">
            <div className="w-[20rem] h-full ">
              <img
                className="h-full w-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1673483585942-70592b8fea56?q=80&w=2870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
