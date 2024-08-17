"use client";

import Section from "@/Section1/Section";
import Work1 from "@/Works/Work1";

import { useEffect, useState } from "react";

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
        </>
      )}
    </>
  );
}
