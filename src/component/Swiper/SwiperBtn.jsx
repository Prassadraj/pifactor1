"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

import "./nav.css";

// Import required modules
import { Mousewheel } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";

export default function App() {
  const swiperRef = useRef(null); // Ref to access swiper instance
  const [count, setCount] = useState(0); // State to track the previous slide index
  const [selected, setSelected] = useState(1); // Initialize selected at 1 to avoid starting from 0
  // Condition to choose between jpg and jpeg
  const useJpg = true; // Set to true for .jpg, false for .jpeg
  const [nav, setNav] = useState("VFX");

  const categories = ["VFX", "2D", "3D", "Wedding"];
  const handleSlideTo = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // Use slideToLoop to handle looping
    }
  };

  const animateImage = () => {
    gsap.fromTo(
      ".image", // Target image
      { y: 900, scale: 0.5 }, // Starting state (from a larger distance for a more noticeable effect)
      {
        scale: 1,
        y: 0, // Ending state
        ease: "power4.out", // Smoother ease function for gradual deceleration
        duration: 2, // Slightly longer duration for a smoother transition
        delay: 0.1, // Reduced delay for quicker initiation
      }
    );
  };

  useEffect(() => {
    if (swiperRef.current) {
      // When the swiper is ready, run animation on active slide
      animateImage();

      // Listen to slide change events to trigger animation on each new slide
      swiperRef.current.on("slideChange", () => {
        const activeSlideIndex = swiperRef.current.realIndex + 1; // Add 1 to avoid starting from 0
        const activeSlide =
          swiperRef.current.slides[swiperRef.current.activeIndex];
        if (activeSlide.querySelector(".image")) {
          animateImage();
        }
        // Store the previous slide index in count state
        setCount(swiperRef.current.previousIndex);
        // Update selected state to current active slide index, adjusted by +1
        setSelected(activeSlideIndex);
      });
    }
  }, []);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Capture swiper instance
        loop={true}
        spaceBetween={0}
        speed={1200}
        effect="coverflow"
        direction="vertical"
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('/images/${selected}.jpg')` }}
            >
              {/* Content inside the slide */}
              <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
                <div
                  className="relative w-[25%] top-[10%] h-3/5 overflow-hidden "
                  style={{
                    // backgroundImage: `url('/images/${selected + 2}.jpg')`,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Full rectangle clip path
                  }}
                >
                  {/* Image inside with proper positioning */}
                  <Image
                    src={`/images/${index + 1}.${useJpg ? "jpg" : "jpeg"}`} // Use conditional format
                    alt="slide"
                    className="object-cover image" // Object cover to fill and scale proportionally
                    fill // Fill ensures the image scales with its parent
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom vertical buttons */}
      <div className="custom-navigation">
        {[...Array(7)].map((_, index) => (
          <button key={index} onClick={() => handleSlideTo(index)}>
            {index + 1}
          </button>
        ))}
      </div>
      <div className="fixed text-xl flex gap-10 font-black top-28 left-[50%] translate-x-[-50%] z-50">
        {categories.map((category) => (
          <p
            key={category}
            className="cursor-pointer relative"
            onClick={() => setNav(category)}
          >
            {category}
            {nav === category && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"></span>
            )}
          </p>
        ))}
      </div>

      {/* Debugging: Display the current slide index */}
      <div className="fixed bottom-10 left-10 z-50 text-white">
        <p> 0{selected} / 7</p>
      </div>
    </>
  );
}
