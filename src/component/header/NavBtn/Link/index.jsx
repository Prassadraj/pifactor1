"use effect";
import styles from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import { useEffect } from "react";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});
export default function Index({ data, isActive, setSelectedIndicator }) {
  const { title, href, index } = data ?? {}; // Default to an empty object
  const pathname = usePathname();
  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={pathname == href ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>

      <Link href={href} className={`${montserrat.style}`}>
        {title || ""}
      </Link>
    </motion.div>
  );
}
