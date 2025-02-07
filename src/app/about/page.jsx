"use client";

import { gsap, ScrollTrigger } from "gsap/all";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import spark from "../images/sparkle.png";
import Footer from "@/component/Footer/Footer";
import "./about.css";
import Marquee from "react-fast-marquee";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
});
const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: "300", // Specify weight as a string instead of an array
});
const montserraMedium = Montserrat({
  subsets: ["latin"],
  weight: "500", // Specify weight as a string instead of an array
});

function About() {
  const images = ["/images/baner.jpg", "/images/left.jpg"];
  useEffect(() => {
    gsap
      .timeline({ delay: 0 })
      .to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.7,
        stagger: { amount: 0.5, from: "random", ease: "power3.out" },
      })
      .fromTo(".blocks", { zIndex: 999 }, { zIndex: 0, display: "none" });
  }, []);
  useEffect(() => {
    gsap.to(
      ".second",

      {
        marginTop: 0,
        duration: 0.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".second",
          start: "top 70%",
          end: "top 50%",

          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for the sticky image
    gsap.to(".parallax-image", {
      scale: 1.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".banner",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Title animation
    gsap.fromTo(
      ".title",
      { y: 450, opacity: 0, skewX: "-160deg" },
      {
        y: 0,
        delay: 0.4,
        opacity: 1,
        skewX: "0deg",
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      }
    );

    // Phone animation
    gsap.fromTo(
      ".phone",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <>
      <div className={`blocks `}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={`block`}></div>
        ))}
      </div>
      <div className={` ${montserrat.className}  w-full h-full`}>
        {/* Banner Section */}
        <div
          className={`banner h-[170vh] laptop:h-[1300px] relative w-full ${montserrat.className}`}
        >
          <div className="parallax-container w-full h-screen translate-x-80 opacity-55 scale-95 sticky top-0 overflow-hidden">
            <Image
              src={images[0]}
              alt="Dynamic Parallax Background"
              className="parallax-image object-cover w-full h-full"
              fill
              quality={50}
              priority
            />
          </div>

          <div className="absolute px-5 top-1/3 laptop:top-40 flex flex-col gap-10 items-start overflow-hidden laptop:px-10 w-full">
            <div className="overflow-hidden">
              <p className="title text-[30px] tablet:text-[50px] capitalize font-bold laptop:max-w-3xl">
                Shaping Stories, Elevating Digital Presence
              </p>
            </div>
            <div className="overflow-hidden max-w-lg">
              <p
                className={`title text-xl tablet:text-3xl capitalize font-normal ${montserratLight.className}`}
              >
                Crafting immersive visuals and seamless edits to build a
                compelling digital presence.
              </p>
            </div>
            <div className=" mt-2 rounded-full laptop:hidden  text-center text-base tablet:text-3xl font-medium">
              ⇩
            </div>

            <div className="mt-10 tablet:mt-10 laptop:gap-5 laptop:mt-20  flex w-full flex-col items-end  ">
              <div className="laptop:w-1/2 flex-col flex gap-4">
                <p className="font-bold text-lg laptop:text-3xl leading-relaxed text-left">
                  Turning ideas into immersive experiences with unparalleled
                  creativity.
                </p>
                <p
                  className={`!font-light laptop:text-base  leading-relaxed ${montserratLight.className}`}
                >
                  At our studio, we blend the power of cutting-edge technology
                  with the art of storytelling. Every frame is carefully crafted
                  to evoke emotion, creating visuals that transport audiences
                  into another world. From conceptualization to final cut, we
                  ensure every project leaves an indelible mark.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="h-fit px-3 py-10 tablet:py-32 tablet:px-5 flex-col flex gap-14 laptop:px-20">
          <div className="flex flex-col gap-6">
            <div className="flex gap-1 items-center">
              <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
              <h2 className="text-lg font-bold tracking-wide tablet:text-3xl laptop:text-xl">
                How we work
              </h2>
            </div>

            <p
              className={`text-2xl tablet:text-3xl font-extralight laptop:text-xl laptop:max-w-lg ${montserratLight.className}`}
            >
              We believe that extraordinary achievements stem from unwavering
              passion, fearless creativity, and impeccable artistry.
            </p>
          </div>
          <div className="flex flex-col gap-10 justify-center px-2 tablet:py-10 tablet:grid grid-cols-2 tablet:gap-20">
            <div className="flex gap-8 w-full">
              <div className="tablet:text-4xl text-base">01</div>
              <div className="flex flex-col gap-5">
                <p className="text-2xl max-w-60 tablet:text-4xl">
                  {" "}
                  Crafting Multisensory Marvels
                </p>
                <p className="text-gray-400 text-base tablet:text-xl">
                  We design experiences that harmonize the physical and digital
                  worlds, ensuring every nuance of your product resonates across
                  all senses. With meticulous attention to detail, we deliver an
                  unforgettable journey that seamlessly integrates into your
                  ecosystem.
                </p>
              </div>
            </div>
            <div className="flex gap-8 w-full tablet:mt-32">
              <div className="tablet:text-4xl text-base">02</div>
              <div className="flex flex-col gap-5">
                <p className="text-2xl max-w-60 tablet:text-4xl">
                  {" "}
                  Humanity: The Soul of Our Craft
                </p>
                <p className="text-gray-400 text-base tablet:text-xl">
                  We see intuition as our ultimate technology and curiosity as
                  our driving force. Rooted in empathy and honesty, our
                  creations go beyond visuals—they touch hearts and leave
                  lasting impressions, infusing soul and passion into every
                  detail.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="tablet:h-[300px] tablet:block hidden">
            <Marquee direction="left" speed={200}>
              <p className=" tablet:text-[180px] text-gold">Always rising </p>
              <span className=" mx-5 tablet:text-[180px] text-gold"> ∞ </span>
              <p className=" tablet:text-[180px] text-gold"> Always rising </p>
              <span className=" mx-5 tablet:text-[180px] text-gold"> ∞ </span>
            </Marquee>
          </div>

          <div className="h-fit tablet:hidden  ">
            <Marquee direction="left" className="h-fit" speed={100}>
              <p className="text-5xl leading-relaxed text-gold whitespace-nowrap">
                Always rising{" "}
              </p>
              <span className="text-5xl mx-5 leading-relaxed text-gold whitespace-nowrap">
                {" "}
                ∞{" "}
              </span>
              <p className="text-5xl leading-relaxed text-gold whitespace-nowrap">
                {" "}
                Always rising{" "}
              </p>
              <span className="text-5xl mx-5 leading-relaxed text-gold whitespace-nowrap">
                {" "}
                ∞{" "}
              </span>
            </Marquee>
          </div>

          {/*  */}
          <div className="flex flex-col gap-10 justify-center px-2 tablet:grid grid-cols-2 tablet:gap-20">
            <div className="flex gap-8 w-full">
              <div className="tablet:text-4xl text-base">03</div>
              <div className="flex flex-col gap-5">
                <p className="text-2xl max-w-60 tablet:text-4xl">
                  {" "}
                  The Elegance of Simplicity
                </p>
                <p className="text-gray-400 text-base tablet:text-xl">
                  In a cluttered world, we strive for clarity. Our designs
                  embody the perfect union of form and function, focusing on
                  essentials to craft timeless elegance and meaningful impact.
                  Simplicity isn’t just our style; it’s our philosophy.
                </p>
              </div>
            </div>
            <div className="flex gap-8 w-full tablet:mt-32">
              <div className="tablet:text-4xl text-base">04</div>
              <div className="flex flex-col gap-5">
                <p className="text-2xl max-w-60 tablet:text-4xl">
                  {" "}
                  Excellence Beyond Boundaries
                </p>
                <p className="text-gray-400 text-base tablet:text-xl">
                  Perfection is in the details, and innovation is our compass.
                  We push creative limits to deliver groundbreaking experiences
                  that elevate your brand and exceed expectations, blending
                  artistry with precision to create something extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* what we believe */}
        <div className="px-6 mt-14 h-fit mb-5 flex flex-col gap-10  tablet:px-4 laptop:px-20">
          {/* mobile */}
          <div className="flex items-center gap-2 tablet:hidden">
            {" "}
            <Image
              src={spark}
              width={20}
              height={20}
              className="w-5 tablet:w-10 aspect-square"
              alt="Sparkle Effect"
            />
            <p className="text-base tablet:text-4xl">What we believe</p>
          </div>
          {/*  */}
          <div className="flex flex-col  items-center tablet:px-20">
            <h1 className="text-[30px] font-semibold tablet:text-[50px] leading-relaxed whitespace-nowrap">
              Data guides the way
            </h1>
            <h1
              className="text-[30px] text-gold font-semibold tablet:text-[50px] leading-relaxed 
            max-w-lg"
            >
              {" "}
              — Emotion sparks the transformation.
            </h1>
          </div>
          <div className="flex flex-col items-center  w-full tablet:mt-4 tablet:my-10">
            <div className=" items-center gap-2 tablet:flex hidden">
              {" "}
              <Image
                src={spark}
                width={20}
                height={20}
                className="w-5 tablet:w-10 laptop:w-4 aspect-square"
                alt="Sparkle Effect"
              />
              <p className="text-base tablet:text-lg tablet:text-nowrap ">
                What we believe
              </p>
            </div>
            <p
              className={`${montserratLight.className} text-base text-center tablet:text-xl tablet:mt-20 laptop:mt-5 tablet:px-10 lapleading-relaxed`}
            >
              We believe the best results come when data-driven insights ignite
              emotional connections, fostering deeper brand loyalty, lasting
              customer engagement, and higher conversion rates.
            </p>
          </div>
        </div>

        {/* design  */}
        <div className="flex flex-col tablet:flex-row justify-center bg-gray-500/35 items-center tablet:my-5 py-10 my-2 text-center tablet:text-left h-auto">
          {/* Left - Image */}
          {/* <div
            className="w-full tablet:w-1/2 relative aspect-square hidden tablet:flex justify-center items-center"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 75%)" }}
          > */}
          {/* <div className="absolute w-full h-full bg-black/30 z-10"></div>
            <Image
              src={images[1]}
              alt="sd"
              priority
              width={500}
              height={300}
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
                maskImage:
                  "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
              }}
              className="object-contain h-1/2 w-full"
            /> */}
          {/* </div> */}
          <div className="w-1/2"></div>

          {/* Right - Text */}
          <div className="w-full tablet:w-1/2 px-6 tablet:px-4 flex flex-col justify-center items-center tablet:items-start">
            <p
              className={`text-[23px] tablet:text-[35px] laptop:text-[50px] ${montserraMedium.className}`}
            >
              Innovation and transformation <br />
              <span className="text-gold">through design.</span>
            </p>

            <p
              className={`${montserratLight.className} text-base tablet:text-lg mt-2  laptop:max-w-xl tablet:mt-5`}
            >
              We are a collective of visionary VFX artists and tech innovators,
              pushing the boundaries of the digital world with relentless
              passion and dedication. Inspired by the magic of visual
              storytelling, captivated by cutting-edge technology, and driven by
              an unwavering commitment to creating breathtaking digital
              experiences that resonate with purpose and artistry.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
