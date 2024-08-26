"use client";

import Section from "@/Homepage/Section1/Section";
import Work1 from "@/Homepage/Works/Work1";
import PlayReel from "@/Homepage/Works/PlayReel";
import { useEffect, useState } from "react";
import Work2 from "@/Homepage/Works/Work2";

export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow((e) => !e);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Section />
      {show && (
        <>
          <Work1 />
          <PlayReel />
          <Work2 />
        </>
      )}
    </>
  );
}
