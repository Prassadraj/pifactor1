"use client";
import styles from "./styles.module.scss";
import Picture1 from "../../../../public/wedding/pics/thumbnail7.webp";
import Picture2 from "../../../../public/wedding/pics/anil.webp";
import Picture3 from "../../../../public/wedding/pics/aishwarya.webp";
import Picture4 from "../../../../public/wedding/pics/thumbnail1.webp";
import Picture5 from "../../../../public/wedding/pics/jaga.webp";
import Picture6 from "../../../../public/wedding/pics/thumbnail3.webp";
import Picture7 from "../../../../public/wedding/pics/thumbnail4.webp";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});
const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

gsap.registerPlugin(ScrollTrigger);

export default function Mobile4() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false); // Local hover state
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4, link: "/work/ShortInvites/1" },
    { src: Picture2, scale: scale5, link: "/work/ShortInvites/2" },
    { src: Picture3, scale: scale6, link: "/work/ShortInvites/3" },
    { src: Picture4, scale: scale5, link: "/work/ShortInvites/1" },
    { src: Picture5, scale: scale6, link: "/work/ShortInvites/2" },
    { src: Picture6, scale: scale8, link: "/work/ShortInvites/3" },
    { src: Picture7, scale: scale9, link: "/work/ShortInvites/1" },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".text4 p",
      { y: 150 },
      {
        y: 0,
        scrollTrigger: ".text4",
        duration: 0.5,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="">
      <div
        className="text4 flex overflow-hidden px-5"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        {"Wedding".split("").map((text, i) => (
          <p key={i} className={`${montserratLight.className} text-[35px]`}>
            {text === " " ? "\u00A0" : text}
          </p>
        ))}
      </div>

      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale, link }, index) => (
            <motion.div
              key={index}
              style={{ scale }}
              className={styles.el}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Link href={link} passHref>
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" placeholder="blur" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
