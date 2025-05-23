"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import spark from "../images/sparkle.png";
import Footer from "@/component/Footer/Footer";
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import { CiLocationOn } from "react-icons/ci";

const montserrat = Montserrat({
  subsets: ["latin"],
});
const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});
const montserratMoreLight = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});

function Page() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap
      .timeline({ delay: 0 })
      .to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.8,
        stagger: { amount: 0.5, from: "random", ease: "power3.out" },
      })
      .to(".blocks", { zIndex: 0 });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 2,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.02 * direction;
  };

  useEffect(() => {
    gsap.fromTo(
      ".img",
      {
        opacity: 0.1,
        skewX: "-40deg",
        scale: 5,
      },
      {
        duration: 1.3,
        delay: 0.5,
        ease: "power3.inOut",
        skewX: "0deg",
        opacity: 1,
        scale: 1,
      }
    );
  }, []);
  return (
    <>
      {" "}
      <div
        className={`blocks ${styles.blocks} ${
          path === "/contact" ? "z-50" : "z-0"
        }`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={`block ${styles.block}`}></div>
        ))}
      </div>
      <div className="tablet:pt-[5vh] pt-[15vh] tablet:h-screen h-fit flex flex-col ">
        <div
          className="flex justify-center items-center tablet:ml-32 px-10 z-10 h-[420px] tablet:h-[700px] 
        laptop:h-3/4 tablet:py-5 overflow-hidden"
          style={{ clipPath: "polygon(30% 0%, 70% 0%, 70% 100%, 30% 100%)" }}
        >
          <Image
            src="/Contact/contact5.webp" // Path relative to the 'public' folder
            alt="Contact Us Image"
            width={380} // This will act as the default width (tablet and above)
            height={400}
            quality={90}
            priority
            className="img object-cover  scale-125 h-full laptop:h-full w-[200px] tablet:w-[380px]" // Responsive widths
          />
        </div>

        <div className={`${styles.sliderContainer} `}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>
              Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·
              -
            </p>
            <p ref={secondText}>
              Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·
              -
            </p>
          </div>
        </div>
      </div>
      <div
        className={`pt-[10vh] px-7 flex flex-col gap-10 h-fit tablet:px-20 py-20 ${montserrat.className}`}
      >
        <p
          className={`tablet:absolute laptop:bottom-32 tablet:bottom-36 tablet:max-w-sm
            tablet:text-base tablet:font-thin text-2xl font-semibold ${montserratMoreLight.className}
             ${montserratLight.className}`}
        >
          All set for lift-off? Drop us a ping, send a tweet, message, or poke,
          and we’ll be back in no time!
        </p>
        <div
          className="flex group items-center gap-2 tablet:absolute tablet:bottom-20 tablet:max-w-md
            tablet:text-base tablet:font-light  hover:cursor-pointer"
        >
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <a
            href="mailto:pixceilfactory@gmail.com"
            className="text-xl tablet:text-base group-hover:text-gold  transition-all"
          >
            pixceilfactory@gmail.com
          </a>
        </div>
        {/* <div
          className="flex items-center gap-2 tablet:absolute tablet:bottom-12 tablet:max-w-md
            tablet:text-sm tablet:font-light"
        >
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <p className="text-xl tablet:text-base underline">+91 123456789</p>
        </div> */}
        <div
          className="pl-2 tablet:absolute tablet:bottom-20 tablet:max-w-sm
            tablet:text-base tablet:font-light tablet:right-20 flex gap-2 items-center"
        >
          {/* <p className="text-xl tablet:text-sm capitalize">{`TTK Road, chennai,
       `}</p> */}
          <CiLocationOn />
          <p className="text-xl tablet:text-sm">Chennai, TamilNadu</p>
        </div>
        {/* <div
          className="flex items-center gap-2 tablet:absolute tablet:bottom-10 tablet:max-w-sm
            tablet:text-base tablet:font-light tablet:right-20"
        >
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <p className="text-xl tablet:text-sm underline">View on Maps</p>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default Page;
