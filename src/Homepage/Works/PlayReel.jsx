import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import window from "../../app/images/window.png";
import Image from "next/image";
import { Lato, Montserrat } from "@next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
});
gsap.registerPlugin(ScrollTrigger);

function PlayReel() {
  const container = useRef(null);

  useEffect(() => {
    // GSAP animation for text gap
    gsap.to(".play", {
      gap: "10px",
      ease: "power2.inOut",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".video",
        scrub: 1,

        start: "top 60%",
        end: "bottom center",
      },
    });
    gsap.fromTo(
      ".reel",
      {
        scale: 0.1,
      },
      {
        scale: 1,
        ease: "power2.inOut",
        duration: 0.2,
        scrollTrigger: {
          trigger: ".video",
          scrub: 1,

          start: "top 60%",
          end: "bottom center",
        },
      }
    );

    // GSAP animation for image scaling
    gsap.to(".img", {
      scale: 100, // Adjust scale as needed
      ease: "power1.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".video",
        scrub: 3,
        start: "top top",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <>
      <div className="w-full h-[200vh] video" ref={container}>
        {/* The element to be animated on scroll */}
        <div className=" h-[100vh] sticky top-0 w-full overflow-hidden cursor-pointer">
          <Link href="#">
            <video
              style={{ cursor: "pointer" }}
              className="w-full h-full object-cover reel"
              loop
              src="./intro.mp4"
              autoPlay
              muted
            ></video>{" "}
          </Link>
          <div className="absolute inset-0 flex justify-center items-center">
            {/* Text that will be animated */}
            <div
              className={`text-center gap-96 play flex text-[10rem] text-white ${montserrat.className}`}
            >
              <p className={`font-medium`}>Play</p>
              <p className={` font-medium`}>Reel</p>
            </div>
            {/* Image to be scaled */}
            <div className="absolute top-0 left-0 w-full h-full">
              <Image
                src={window}
                alt="window"
                className="w-full h-full object-cover img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayReel;