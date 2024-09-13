"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./work.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { Montserrat } from "@next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

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
];
gsap.registerPlugin(ScrollTrigger);
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});
export default function Work() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    gsap.fromTo(
      ".text1 p",
      {
        y: 150,
      },
      {
        y: 0,
        scrollTrigger: ".text1",

        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={`${styles.spacer} flex items-center`}>
        <div
          className="text1 laptop:px-20 tablet:px-10  flex overflow-hidden"
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
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className="h-[20vh]"></div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image  src={`/3dImages/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
