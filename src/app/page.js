"use client";
import { useEffect, useState } from "react";
import Section from "@/Homepage/Section1/Section";
import Work1 from "@/Homepage/Works/Work1";
import PlayReel from "@/Homepage/Works/PlayReel";
import Work2 from "@/Homepage/Works/Work2";
import Work3 from "@/Homepage/Works/Work3";
import Lenis from "@studio-freight/lenis";
import Work4 from "@/Homepage/Works/Work4";
import Spread from "@/Homepage/Works/Spread/Spread";
import Footer from "@/Homepage/Works/Footer/Footer";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setShow(true); // Show the content after 5 seconds
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Section />
      {/* Conditionally render components after 5 seconds */}
      {show && (
        <>
          <Work1 />
          <PlayReel />
          <Work2 />
          <Work3 />
          <Work4 />
          <Spread />
          <Footer />
        </>
      )}
    </>
  );
}
