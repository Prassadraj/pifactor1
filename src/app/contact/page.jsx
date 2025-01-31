"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import spark from "../images/sparkle.png";
import Footer from "@/component/Footer/Footer";
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
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
      ".marquee",
      {
        scale: 2,
      },
      { scale: 1, duration: 1, ease: "power3.out", skewX: "0deg" }
    );
    gsap.fromTo(
      ".img",
      {
        opacity: 0.1,
        skewX: "-10deg",
      },
      { duration: 1.5, ease: "power3.out", skewX: "0deg", opacity: 1 }
    );
  }, []);
  return (
    <>
      <div className="tablet:pt-[5vh] w-full pt-[15vh] tablet:h-screen h-fit flex flex-col ">
        <div className="flex justify-center items-center tablet:ml-32 px-10 z-10 h-[420px] tablet:h-screen tablet:py-5">
          <Image
            src="/contact4.png" // Path relative to the 'public' folder
            alt="Contact Us Image"
            width={380} // This will act as the default width (tablet and above)
            height={400}
            quality={90}
            className="img object-cover h-[400px] scale-125 tablet:h-full w-[280px] tablet:w-[380px]" // Responsive widths
          />
        </div>
        <div
          className={`${styles.sliderContainer} w-full overflow-hidden hidden tablet:block`}
        >
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

        {/* mobile / */}
        <div className="tablet:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="8" // Adjust this value for speed (lower value = slower)
            className={`marquee text-[90px] font-bold ${montserratLight.className}`}
          >
            Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·
            -&nbsp; Get in touch · 保持联系 · Ponerse en contacto · Neem contact
            op · -
          </marquee>
        </div>
      </div>
      <div
        className={`pt-[10vh] px-7 flex flex-col gap-10 h-fit tablet:px-20 py-20 ${montserrat.className}`}
      >
        <p
          className={`tablet:absolute tablet:bottom-20 laptop:bottom-32 tablet:max-w-sm
            tablet:text-base tablet:font-thin text-2xl font-semibold ${montserratMoreLight.className}
             ${montserratLight.className}`}
        >
          All set for lift-off? Drop us a ping, send a tweet, message, or poke,
          and we’ll be back in no time!
        </p>
        <div
          className="flex items-center gap-2 tablet:absolute tablet:bottom-20 tablet:max-w-md
            tablet:text-base tablet:font-light"
        >
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <p className="text-xl tablet:text-base underline">
            pifactor@gmail.com
          </p>
        </div>
        <div
          className="flex items-center gap-2 tablet:absolute tablet:bottom-12 tablet:max-w-md
            tablet:text-sm tablet:font-light"
        >
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <p className="text-xl tablet:text-base underline">+91 123456789</p>
        </div>
        <div
          className="pl-2 tablet:absolute tablet:bottom-20 tablet:max-w-sm
            tablet:text-base tablet:font-light tablet:right-20"
        >
          <p className="text-xl tablet:text-sm capitalize">{`TTK Road, chennai,
       `}</p>
          <p className="text-xl tablet:text-sm"> TamilNadu</p>
        </div>
        <div
          className="flex items-center gap-2 tablet:absolute tablet:bottom-10 tablet:max-w-sm
            tablet:text-base tablet:font-light tablet:right-20"
        >
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <p className="text-xl tablet:text-sm underline">View on Maps</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
{
  /* <div
className={`h-[110vh] relative flex flex-col ${montserrat.className}`}
>
<div
  className="absolute z-10 left-1/2 top-2/4 transform -translate-x-1/2 -translate-y-1/2 w-[300px] 
h-[500px]"
>
  <Image
    src="/contactUs.jpg" // Path relative to the 'public' folder
    alt="Contact Us Image"
    fill
    className="object-cover" // Ensures the image covers the container without distortion
  />
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="10" // Adjust this value for speed (lower value = slower)
    className={`text-[90px] font-bold ${montserratLight.className}`}
  >
    Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·
  </marquee>
</div>
<div className="absolute bottom-0 px-7">
  <p className="text-2xl font-medium">
    "All set for takeoff? Drop us a ping, send a tweet, message, or
    poke, and we’ll be back in a flash!"
  </p>
</div>
</div> */
}
