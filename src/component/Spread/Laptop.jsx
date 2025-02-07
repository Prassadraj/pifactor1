"use client";
import { Montserrat } from "next/font/google";
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

gsap.registerPlugin(ScrollTrigger);

function Laptop() {
  const images = [
    "/spreadImg/img1.jpeg",
    "/spreadImg/img2.jpeg",
    "/spreadImg/img3.jpeg",
    "/spreadImg/img4.jpeg",
  ];
  useEffect(() => {
    gsap.to(".spread", {
      y: -40,
      scale: 1.1,
      duration: 2,
      delay: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".spreadText",
        start: "top 100%",
        end: "bottom 70%",
        scrub: 0.5,
      },
    });

    gsap.to(".sentence", {
      y: 0,
      scale: 1.1,
      duration: 1,
      delay: 0.5,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".spreadText",
        start: "top 90%",
        end: "bottom 50%",
        scrub: 0.5,
      },
    });

    gsap.fromTo(
      ".spreadText p",
      {
        y: 150,
        opacity: 0,
        skewY: "-60deg",
      },
      {
        y: 0,
        opacity: 1,
        skewY: "0deg",
        scrollTrigger: {
          trigger: ".spreadText",
        },
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
          from: "end",
          ease: "power3.out",
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
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.1,
      }
    );

    // Image Animations
    const mm = gsap.matchMedia();

    // Animation for larger screens
    mm.add("(min-width: 1025px)", () => {
      gsap.fromTo(
        ".image1",
        { x: 0 },
        {
          x: 150,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".imageContainer",
            start: "top 90%",
            end: "bottom 50%",
            scrub: 0.5,
          },
        }
      );
    });

    // Animation for tablet screens
    mm.add("(min-width: 768px) and (max-width: 1024px)", () => {
      gsap.fromTo(
        ".image1",
        { x: 0 },
        {
          x: 20,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".imageContainer",
            start: "top 90%",
            end: "bottom 50%",
            scrub: 0.5,
          },
        }
      );
    });

    gsap.matchMedia().add("(min-width: 768px) and (max-width: 1024px)", () => {
      gsap.fromTo(
        ".image2",
        { x: 0 },
        {
          x: -20,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".imageContainer",
            start: "top 90%",
            end: "bottom 50%",
            scrub: 0.5,
          },
        }
      );
    });
    gsap.matchMedia().add("(min-width: 1025px)", () => {
      gsap.fromTo(
        ".image2",
        { x: 0 },
        {
          x: -150,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".imageContainer",
            start: "top 90%",
            end: "bottom 50%",
            scrub: 0.5,
          },
        }
      );
    });
    gsap.matchMedia().add("(min-width: 768px) and (max-width: 1024px)", () => {
      // For tablet screens
      gsap.fromTo(
        ".image3",
        { x: 0 },
        {
          x: -80,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".imageContainer",
            start: "top 60%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );
    });

    gsap.matchMedia().add("(min-width: 1025px)", () => {
      // For larger screens
      gsap.fromTo(
        ".image3",
        { x: 0 },
        {
          x: -220,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".imageContainer",
            start: "top 60%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );
    });

    gsap.matchMedia().add("(min-width: 768px) and (max-width: 1024px)", () => {
      // For tablet screens
      gsap.fromTo(
        ".image4",
        { x: 0 },
        {
          x: 60, // Adjusted for tablet
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".imageContainer",
            start: "top 60%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );
    });

    gsap.matchMedia().add("(min-width: 1025px)", () => {
      // For larger screens
      gsap.fromTo(
        ".image4",
        { x: 0 },
        {
          x: 220, // Adjusted for larger screens
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".imageContainer",
            start: "top 60%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="h-[200vh] w-full overflow-hidden relative">
        {" "}
        {/* Add relative here */}
        <div className="h-[130vh] relative flex items-center justify-center">
          <div className="relative imageContainer">
            <Image
              width={400}
              height={600}
              className="object-cover"
              src={`/3dImages/line.webp`}
              alt="3D image"
              priority
            />
            <div className="absolute top-10 -right-24">
              <Image
                width={100}
                height={0}
                className="object-cover w-[400px]  image1"
                src={"/3dImages/img1.jpeg"}
                alt="3D image"
                priority
              />
            </div>
            <div className="absolute top-10 -left-36 image2">
              <Image
                width={100}
                height={0}
                className="object-cover w-[300px] rounded-lg h-auto"
                src={"/3dImages/img2.jpeg"}
                alt="3D image"
                priority
              />
            </div>
          </div>
          <div className="absolute laptop:bottom-0 tablet:bottom-32 tablet:left-20 laptop:left-60 image3">
            <Image
              width={300}
              height={200}
              className="object-cover "
              src={"/3dImages/img3.jpeg"}
              alt="3D image"
              priority
            />
          </div>
          <div className="absolute laptop:bottom-10 tablet:right-20 tablet:bottom-10 laptop:right-56 image4">
            <Image
              width={400}
              height={200}
              className="object-cover "
              src={"/3dImages/img4.jpeg"}
              alt="3D image"
              priority
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
                <p
                  key={i}
                  className={`${montserrat.className} tablet:text-[40px] laptop:text-[80px]`}
                >
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
                <p
                  key={i}
                  className={`${montserrat.className} tablet:text-[40px] laptop:text-[80px]`}
                >
                  {text === " " ? <>&nbsp;</> : text}
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

export default Laptop;
