"use client";
import React, { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

gsap.registerPlugin(ScrollTrigger);

function Laptop2() {
  const containerRef = useRef(null);
  const videoRefs = useRef([]); // Correctly defined videoRefs once.

  useEffect(() => {
    if (typeof window !== "undefined") {
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
      const triggers = [
        {
          class: "animations1",
          start: "top 80%",
          end: "bottom 80%",
          play: "bottom 80%",
          stopPlay: "bottom top",
        },
        {
          class: "animations2",
          start: "top 60%",
          end: "bottom 40%",
          play: "bottom 40%",
          stopPlay: "bottom top",
        },
        {
          class: "animations3",
          start: "top 40%",
          end: "bottom 35%",
          play: "bottom 40%",
          stopPlay: "bottom -10%",
        },
        {
          class: "animations4",
          start: "top 10%",
          end: "bottom 30%",
          play: "bottom 50%",
          stopPlay: "bottom 50%",
        },
      ];

      triggers.forEach(
        ({ class: className, start, end, play, stopPlay }, i) => {
          const videoElement = videoRefs.current[i];
          if (!videoElement) return;

          // Ensure `playing` state is tracked.
          videoElement.playing = false;

          // Animation for size adjustments
          gsap.to(`.${className}`, {
            height: "50vh",
            width: "100%",
            ease: "power3.inOut",
            duration: 1,
            scrollTrigger: {
              trigger: `.${className}`,
              start,
              end,

              scrub: 2,
              onUpdate: (self) => {
                const progress = self.progress;

                if (progress > 0.5 && !videoElement.playing) {
                  videoElement.play();
                  videoElement.playing = true;
                }

                if (progress <= 0.5 && videoElement.playing) {
                  videoElement.pause();
                  videoElement.playing = false;
                }
              },
            },
          });

          // Animation for play/pause controls based on play and stopPlay
          gsap.to(
            {},
            {
              scrollTrigger: {
                trigger: `.${className}`,
                start: play,
                end: stopPlay,
                onEnter: () => {
                  videoElement.play();
                  videoElement.playing = true;
                },
                onEnterBack: () => {
                  videoElement.play();
                  videoElement.playing = true;
                },
                onLeave: () => {
                  videoElement.pause();
                  videoElement.playing = false;
                },
                onLeaveBack: () => {
                  videoElement.pause();
                  videoElement.playing = false;
                },
              },
            }
          );
        }
      );

      // Cleanup on component unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  const pictures = [
    { src: "/2dAnimations/Flash_Demo.mp4", width: 800, height: 600 },
    { src: "/2dAnimations/video2.mp4", width: 800, height: 600 },
    { src: "/2dAnimations/Flash_Demo.mp4", width: 800, height: 600 },
    { src: "/2dAnimations/video2.mp4", width: 800, height: 600 },
  ];

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
      <div className="hidden h-full w-full tablet:gap-5 laptop:gap-10 tablet:flex flex-col mt-4">
        {pictures.map((picture, i) => (
          <div
            key={i}
            className={`animations${
              i + 1
            } tablet:flex items-center tablet:h-[25vh] tablet:w-[50%] gap-5 `}
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
            <div className="img-2d h-full w-full rounded-md">
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                src={picture.src}
                autoPlay
                loop
                muted
                preload="auto"
                width={picture.width}
                height={picture.height}
                className="object-cover w-full h-full"
                alt="Window animation preview"
              ></video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laptop2;
