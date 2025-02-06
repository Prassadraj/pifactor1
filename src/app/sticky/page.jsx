"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sticky.css";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);
const montserrat = Montserrat({
  subsets: ["latin"],
});
function Page() {
  const container = useRef(null);
  const images = ["/images/baner (2).jpg", "/images/baner (3).jpg"];

  useEffect(() => {
    // GSAP animation for text gap

    gsap.fromTo(
      ".move",
      {
        translateX: "0%",
        // scale: 0.1,
      },
      {
        translateX: "50%",
        // scale: 1,
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
  }, []);

  return (
    <div className="bg-slate-600">
      <div className="h-screen bg-black"></div>

      <div className="w-full h-[300vh] video" ref={container}>
        {/* The element to be animated on scroll */}
        <div className=" h-[100vh] sticky top-0 w-full overflow-hidden  cursor-pointer flex z-0 bg-blue-300">
          <div className="w-1/2 h-auto ">
            {" "}
            <Image
              src={images[0]}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="absolute left-10 top-1/2 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta
            possimus quisquam veniam quam libero tempore, nam aliquid fugiat
            nulla. Aperiam provident suscipit, architecto fuga id voluptatem
            nulla atque iste.
          </p>
          <div
            className="bg-red-400 w-full h-screen move z-10 absolute left-0 top-0 flex
          justify-center items-center "
          >
            <div className="w-1/2 h-auto">
              <Image
                src={images[0]}
                width={500}
                height={500}
                className="object-cover w-full h-auto scale-105 translate-y-20"
              />
            </div>
            <div className="w-1/2">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et,
                molestiae consequuntur numquam eveniet voluptatum corrupti
                officia hic rem dicta mollitia sit ad iste rerum qui est, dolor
                incidunt? Explicabo, laboriosam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen bg-black"></div>
    </div>
  );
}

export default Page;
