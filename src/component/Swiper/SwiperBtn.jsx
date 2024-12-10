"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "./swipe.css";
import { Mousewheel } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";

export default function App() {
  const swiperRef = useRef(null);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(1);
  const [nav, setNav] = useState("VFX");
  const categories = ["VFX", "2D", "3D", "Wedding"];
  const images = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
  ];

  const handleSlideTo = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const animateImage = () => {
    gsap.fromTo(
      ".image",
      { y: 900, scale: 0.5 },
      { y: 0, x: 0, scale: 1, ease: "power2.out", duration: 1.5 } // Adjusted duration for smoother animation
    );
    gsap.fromTo(
      ".images",
      { y: 50, scale: 0 },
      { y: 0, scale: 1, ease: "power2.out", duration: 2 } // Adjusted duration for smoother animation
    );
  };

  useEffect(() => {
    if (swiperRef.current) {
      animateImage();
      swiperRef.current.on("slideChange", () => {
        const activeSlideIndex = swiperRef.current.realIndex + 1;
        setSelected(activeSlideIndex);
        animateImage();
      });
    }
  }, []);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        spaceBetween={0}
        speed={1200}
        effect="coverflow"
        direction="vertical"
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover transition-opacity duration-1000 images opacity-50"
                fill
                loading={index === 0 ? "eager" : "lazy"} // Load first image eagerly
                priority={index === 0} // Priority load for the first image
              />
              <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
                <div
                  className="relative laptop:w-[25%] w-[60%] tablet:w-[40%] top-[10%] h-3/5 overflow-hidden"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="object-cover transition-opacity duration-1000 image"
                    fill
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-navigation right-5 tablet:right-20 gap-2 tablet:gap-4 ">
        {images.map((_, index) => (
          <button
            className={`bg-black text-xs tablet:text-lg hover:bg-black p-1 
      tablet:px-2 tablet:py-1 rounded-[50%] transition-all duration-500
      ${
        selected === index + 1
          ? "bg-white text-black hover:text-white"
          : "bg-gray-800 border border-gray-500 text-white"
      }`}
            key={index}
            onClick={() => handleSlideTo(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="fixed tablet:text-xl text-xs flex gap-5 tablet:gap-10 font-black top-20 tablet:top-28 left-[50%] translate-x-[-50%] z-20">
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

      <div className="fixed tablet:bottom-10 bottom-5 tablet:text-lg text-xs left-10 z-20 text-white">
        <p>
          0{selected} / {images.length}
        </p>
      </div>
    </>
  );
}
