import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Montserrat } from "@next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
import Picture1 from "../../../public/images/1.jpeg";
import Picture2 from "../../../public/images/2.jpeg";
import Picture3 from "../../../public/images/3.jpg";
import Picture4 from "../../../public/images/4.jpg";
import Picture5 from "../../../public/images/5.jpg";
import Picture6 from "../../../public/images/6.jpg";
import Picture7 from "../../../public/images/7.jpeg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

gsap.registerPlugin(ScrollTrigger);

function Work2() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    // Setup GSAP animations with ScrollTrigger
    // 2D animation text
    gsap.fromTo(
      ".text p",
      {
        y: 150,
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

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const pictures = [Picture1, Picture5, Picture6, Picture7];

  return (
    <div ref={containerRef} className="md:px-20 md:py-10 w-full h-[240vh]">
      <div
        className="text flex overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {" 2D Animations".split("").map((text, i) => (
          <p
            key={i}
            className={`${montserrat.className} font-normal text-[20vw] md:text-[70px]`}
          >
            {text}
          </p>
        ))}
      </div>
      <p className={`${montserrat.className} text-3xl font-thin`}></p>
      <div className="h-full w-full gap-10 flex flex-col mt-4">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={`animations${
              i + 1
            } flex items-center md:h-[25vh] md:w-[50%] gap-5 ${
              i === 2 || i === 3 ? "rounded-md" : ""
            }`}
          >
            <div className="animate-2d">
              <p className={`${montserrat.className} text-2xl font-medium`}>
                Title
              </p>
              <p className={`${montserrat.className} text-lg`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, aut eum a, vero, quia.
              </p>
            </div>
            <div className="img-2d h-full w-full  rounded-md">
              <Image
                src={pictures[i].src}
                width={pictures[i].width}
                height={pictures[i].height}
                className="object-cover w-full h-full"
                alt="Window animation preview"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work2;
