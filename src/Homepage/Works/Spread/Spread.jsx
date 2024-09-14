"use client";
import { Montserrat } from "@next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect } from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});
const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: "300",
});
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "10.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "line.webp",
];
gsap.registerPlugin(ScrollTrigger);
function Spread() {
  useEffect(() => {
    gsap.to(".spread", {
      y: -40,
      scale: 1.1,
      duration: 2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".spread",
        start: "top 100%",

        end: "bottom 70%",
        scrub: 0.5, // Adjust this for smoother effect
      },
    });
    gsap.to(".sentence", {
      y: 0,
      scale: 1.1,
      duration: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".spread",
        start: "top 90%",
        end: "bottom 50%",
        scrub: 0.5, // Adjust this for smoother effect
      },
    });

    gsap.fromTo(
      ".spreadText p",
      {
        y: 150, // Start position off-screen
        opacity: 0, // Optional: Start with opacity 0
        skewY: "-60deg",
      },
      {
        y: 0, // End position
        opacity: 1,
        skewY: "0deg",
        // Optional: End with opacity 1
        scrollTrigger: {
          trigger: ".spreadText",
        },
        duration: 0.5,
        delay: 0.5,
        ease: "power3.out",

        stagger: {
          amount: 0.5, // Total duration for all stags
          from: "end", // Stagger from the end to the start
          ease: "power3.out", // Easing for each stagger
        },
      }
    );
    gsap.fromTo(
      ".spreadText2 p",
      {
        y: 150,
        skewY: "60deg",
      },
      {
        y: 0,
        scrollTrigger: ".spreadText2",
        skewY: "0deg",
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.1,
      }
    );
    //images
    gsap.fromTo(
      ".image1",
      {
        x: 0,
      },
      {
        x: 150,

        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top 90%",
          end: "bottom 50%",
          scrub: 0.5, // Adjust this for smoother effect
        },
      }
    );
    gsap.fromTo(
      ".image2",
      {
        x: 0,
      },
      {
        x: -150,

        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top 90%",
          end: "bottom 50%",
          scrub: 0.5, // Adjust this for smoother effect
        },
      }
    );
    gsap.fromTo(
      ".image3",
      {
        x: 0,
      },
      {
        x: -220,

        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top 60%",
          end: "bottom 20%",
          scrub: 0.5, // Adjust this for smoother effect
        },
      }
    );
    gsap.fromTo(
      ".image4",
      {
        x: 0,
      },
      {
        x: 220,

        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".imageContainer",
          start: "top 60%",
          end: "bottom 20%",
          scrub: 0.5, // Adjust this for smoother effect
        },
      }
    );
  }, []);
  return (
    <>
      <div className="h-[200vh] w-full ">
        <div className="h-[130vh] relative flex items-center justify-center">
          <div className="relative imageContainer">
            <Image
              width={400}
              height={600}
              className="object-cover"
              src={`/3dImages/${images[12]}`} // Path corrected to remove "./"
              alt="3D image"
              priority // Improves loading performance
            />
            <div className="absolute  top-10 -right-24 ">
              <Image
                width={100}
                height={0}
                className="object-cover w-[200px] h-[300px] image1"
                src={`/3dImages/${images[0]}`} // Path corrected to remove "./"
                alt="3D image"
                priority // Improves loading performance
              />
            </div>
            <div className="absolute  bottom-48 -left-36 image2">
              <Image
                width={100}
                height={0}
                className="object-cover w-[200px] h-[250px]"
                src={`/3dImages/${images[5]}`} // Path corrected to remove "./"
                alt="3D image"
                priority // Improves loading performance
              />
            </div>
          </div>
          <div className="absolute  bottom-20 left-60 image3">
            <Image
              width={300}
              height={200}
              className="object-cover h-[200px]"
              src={`/3dImages/${images[11]}`} // Path corrected to remove "./"
              alt="3D image"
              priority // Improves loading performance
            />
          </div>
          <div className="absolute  bottom-10 right-56 image4">
            <Image
              width={400}
              height={200}
              className="object-cover h-[200px]"
              src={`/3dImages/${images[7]}`} // Path corrected to remove "./"
              alt="3D image"
              priority // Improves loading performance
            />
          </div>
        </div>
        <div className={`flex h-screen flex-col mt-5 ${montserrat.className}`}>
          <div className="spread text-center text-[100px] flex flex-col leading-tight mb-4">
            <div
              className="flex justify-center spreadText"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              {" Spread".split("").map((text, i) => (
                <p key={i} className={`${montserrat.className} `}>
                  {text}
                </p>
              ))}
            </div>
            <div
              className="flex justify-center spreadText2"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              {"the News".split("").map((text, i) => (
                <p key={i} className={`${montserrat.className} `}>
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div className="max-w-lg mx-auto sentence">
            <p className={`${montserratLight.className} text-2xl text-center`}>
              Find out more about our work on these leading design and
              technology platforms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spread;
