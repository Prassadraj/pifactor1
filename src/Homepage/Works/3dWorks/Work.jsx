"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { Montserrat } from "@next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./work.module.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

gsap.registerPlugin(ScrollTrigger);

export default function Work2() {
  const galleryRef = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    gsap.fromTo(
      ".text1 p",
      { y: 150 },
      {
        y: 0,
        scrollTrigger: {
          trigger: ".text1",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );

    const onResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", onResize);
    requestAnimationFrame((time) => lenis.raf(time));
    onResize(); // Initial call

    return () => {
      window.removeEventListener("resize", onResize);
      lenis.destroy(); // Clean up Lenis instance
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles.spacer} flex items-center`}>
        <div
          className="text1 laptop:px-20 tablet:px-10 flex overflow-hidden"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          {" 3D Animations".split("").map((text, i) => (
            <p
              key={i}
              className={`${montserrat.className} font-normal text-[20vw] tablet:text-[10vw] laptop:text-[70px]`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
      <div ref={galleryRef} className={styles.gallery}>
        <Column images={images.slice(0, 3)} y={y} />
        <Column images={images.slice(3, 6)} y={y2} />
        <Column images={images.slice(6, 9)} y={y3} />
        <Column images={images.slice(9)} y={y4} />
      </div>
      <div className="h-[20vh]"></div>
    </main>
  );
}

const images = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "10.jpg",
  "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
  "11.jpg", "12.jpg"
];

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image
            src={`/3dImages/${src}`}
            alt={`Image ${i}`}
            fill
            quality={75} // Adjust quality as needed
            priority={i === 0} // Set priority for the first image
          />
        </div>
      ))}
    </motion.div>
  );
};
