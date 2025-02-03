"use client";

import React, { useEffect } from "react";
import SwiperBtn from "@/component/Swiper/SwiperBtn";
import gsap from "gsap";
import "./nav.css";
import { usePathname } from "next/navigation";

function Works() {
  const path = usePathname();

  useEffect(() => {
    gsap
      .timeline({ delay: 0.2 })
      .to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: { amount: 0.5, from: "random", ease: "power3.out" },
      })
      .fromTo(".blocks", { zIndex: 999 }, { zIndex: 0 });
  }, []);

  return (
    <div>
      {/* Blocks Animation Layer */}
      <div className={`blocks `}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="block"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-black w-full h-full container">
        <SwiperBtn />
      </div>
    </div>
  );
}

export default Works;
