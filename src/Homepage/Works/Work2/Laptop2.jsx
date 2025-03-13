"use client";
import React, { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

gsap.registerPlugin(ScrollTrigger);

function Laptop2() {
  const containerRef = useRef(null);
  const videoRefs = useRef([]); // Store references to each video element
  useEffect(() => {
    gsap.fromTo(
      ".text p",
      { y: 150, opacity: 0 },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".text",
        },
        duration: 1,
        opacity: 1,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.1,
      }
    );
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const triggers = [
        { class: "animations1", start: "top 50%", end: "bottom 70%" },
        { class: "animations2", start: "top 50%", end: "bottom 50%" },
        { class: "animations3", start: "top 30%", end: "bottom 50%" },
      ];

      triggers.forEach(({ class: className, start, end }) => {
        gsap.to(`.${className}`, {
          height: "350px",
          width: "100%",
          ease: "power3.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: `.${className}`,
            start,

            end,
            scrub: 2,
          },
        });
      });

      // Video play/pause logic based on viewport visibility
      videoRefs.current.forEach((video, index) => {
        ScrollTrigger.create({
          trigger: video,
          start: "top 50%",
          end: "bottom 20%",
          onEnter: () => {
            if (video.paused) video.play();
          },
          onLeave: () => {
            video.pause();
          },
          onEnterBack: () => {
            video.play();
          },
          onLeaveBack: () => {
            video.pause();
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  const pictures = [
    {
      src: "/2dAnimations/videos/PI&PI.mp4",
      title: "PI&PI",
      desc: "Description...",
      link: "work/Stories/1",
    },
    {
      src: "/2dAnimations/videos/Flash_Demo1.mp4",
      title: "Flash 1",
      desc: "Description...",
      link: "work/Stories/2",
    },
    {
      src: "/2dAnimations/videos/Flash_Demo2.mp4",
      title: "Flash 2",
      desc: "Description...",
      link: "work/Stories/3",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="laptop:px-20 px-2 laptop:py-10 tablet:px-10 tablet:py-10 w-full h-fit"
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
      <div className="hidden h-full w-full tablet:px-20 tablet:gap-5 laptop:gap-10 tablet:flex flex-col mt-4">
        {pictures.map((picture, i) => (
          <div
            key={i}
            className={`animations${
              i + 1
            } tablet:flex items-center tablet:h-[250px] tablet:w-[50%] gap-5 `}
          >
            <div className="animate-2d">
              <p
                className={`${montserrat.className} laptop:text-2xl font-medium`}
              >
                {picture.title}
              </p>
              <p className={`${montserrat.className} laptop:text-lg`}>
                {picture.desc}
              </p>
            </div>
            <div className="img-2d h-full w-full rounded-md cursor-pointer">
              <Link href={`${picture.link}`}>
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={picture.src}
                  autoPlay={false}
                  loop
                  playsInline
                  muted
                  preload="auto"
                  width={1000}
                  height={800}
                  className="object-contain w-full h-full"
                ></video>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laptop2;
