"use client";

import { useEffect, useState } from "react";
import Section from "@/Homepage/Section1/Section";
import Work1 from "@/Homepage/Works/Work1";
import PlayReel from "@/Homepage/Works/PlayReel";
import Work2 from "@/Homepage/Works/Work2";
import Work3 from "@/Homepage/Works/Work3";
import Lenis from "@studio-freight/lenis";
import Work4 from "@/Homepage/Works/Work4";
import Work from "@/Homepage/Works/3dWorks/Work";
import Footer from "@/Homepage/Works/Footer/Footer";
import Spread from "@/Homepage/Works/Spread/Spread";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setShow((e) => !e);
    }, 5000);

    return () => {
      clearTimeout(timer);
      lenis.destroy(); // Clean up Lenis on component unmount
    };
  }, []);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Section />
      {/* Uncomment the show state condition to control the rendering */}
      {/* {show && ( */}
      <>
        <Work1 />
        <PlayReel />
        <Work2 />
        {/* <Work3 /> */}
        <Work />
        <Work4 />
        <Spread />
        <Footer />
      </>
      {/* )} */}
    </>
  );
}
