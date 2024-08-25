import React from "react";
import window from "../../app/images/window.png";
import Image from "next/image";
import { Montserrat } from "@next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});
gsap.registerPlugin(ScrollTrigger);
function Work2() {
  gsap.to(".animations1", {
    height: "50vh",
    width: "100%",
    ease: "power3.inOut",
    duration: 1,
    scrollTrigger: {
      trigger: ".animations1",

      start: "top 80%",
      end: "bottom 70%",
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

      start: "top 70%",
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
  return (
    <div className="md:px-20 md:py-10 w-full h-[200vh]">
      <p className={`${montserrat.className} text-3xl font-thin'`}>
        2D Animations
      </p>
      <div className="h-full w-full gap-10 flex flex-col mt-4">
        <div className="animations1 flex items-center md:h-[25vh] md:w-[50%] gap-5 ">
          <div className="animate-2d">
            <p className={`${montserrat.className} text-4xl`}>Title</p>
            <p className={`${montserrat.className} text-xl`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              aut eum a, vero, quia.
            </p>
          </div>
          <div className="img-2d h-full w-full border-white border-2 rounded-md">
            <Image
              src={window}
              className="object-cover w-full h-full"
              alt="Window animation preview"
            />
          </div>
        </div>
        <div className="animations2 flex items-center md:h-[25vh] md:w-[50%] gap-5 ">
          <div className="animate-2d">
            <p className={`${montserrat.className} text-4xl`}>Title</p>
            <p className={`${montserrat.className} text-xl`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              aut eum a, vero, quia.
            </p>
          </div>
          <div className="img-2d h-full w-full border-white border-2 rounded-md">
            <Image
              src={window}
              className="object-cover w-full h-full"
              alt="Window animation preview"
            />
          </div>
        </div>
        <div className="animations3 flex items-center md:h-[25vh] md:w-[50%] gap-5 rounded-md ">
          <div className="animate-2d">
            <p className={`${montserrat.className} text-4xl`}>Title</p>
            <p className={`${montserrat.className} text-xl`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              aut eum a, vero, quia.
            </p>
          </div>
          <div className="img-2d h-full w-full border-white border-2">
            <Image
              src={window}
              className="object-cover w-full h-full"
              alt="Window animation preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work2;
