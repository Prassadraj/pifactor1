"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "./nav.css";
import { Mousewheel } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";

export default function App() {
  const swiperRef = useRef(null);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(1);
  const [nav, setNav] = useState("VFX");
  const categories = ["VFX", "2D", "3D", "Wedding"];

  const handleSlideTo = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const animateImage = () => {
    gsap.fromTo(
      ".image",
      { y: 900, scale: 0.5 },
      { scale: 1, y: 0, ease: "power4.out", duration: 2, delay: 0.1 }
    );
  };

  useEffect(() => {
    if (swiperRef.current) {
      animateImage();
      swiperRef.current.on("slideChange", () => {
        const activeSlideIndex = swiperRef.current.realIndex + 1;
        const activeSlide =
          swiperRef.current.slides[swiperRef.current.activeIndex];
        if (activeSlide.querySelector(".image")) {
          animateImage();
        }
        setCount(swiperRef.current.previousIndex);
        setSelected(activeSlideIndex);
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
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('/images/${selected}.jpg')` }}
            >
              <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
                <div
                  className="relative w-[25%] top-[10%] h-3/5 overflow-hidden"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  <Image
                    src={`/images/${index + 1}.jpg`}
                    alt="slide"
                    className="object-cover image"
                    fill
                    loading={index === 0 ? "eager" : "lazy"} // Load first image eagerly, others lazily
                    priority={index === 0} // Priority load for the first image
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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

      <div className="fixed bottom-10 left-10 z-50 text-white">
        <p>0{selected} / 7</p>
      </div>
    </>
  );
}
