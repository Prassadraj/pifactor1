import Footer from "@/Homepage/Works/Footer/Footer";
import PlayReel from "@/Homepage/Works/PlayReel";
import Spread from "@/Homepage/Works/Spread/Spread";
import Work1 from "@/Homepage/Works/Work1";
import Work2 from "@/Homepage/Works/Work2";
import Work3 from "@/Homepage/Works/Work3";
import Work4 from "@/Homepage/Works/Work4";
import Image from "next/image";
import React from "react";
import windowImg from "../../app/images/window.png";
import SwiperBtn from "@/component/Swiper/SwiperBtn";

function Works() {
  return (
    // <div className="tablet:py-20">
    //   <Work1 />
    //   <PlayReel />
    //   <Work2 />
    //   <Work3 />
    //   <Work4 />
    //   <Spread />
    //   <Footer />
    // </div>
    <div className="bg-black w-full h-full">
      <SwiperBtn />{" "}
    </div>
  );
}

export default Works;
// "use client";

// import React, { useRef } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/mousewheel";

// import "./nav.css";

// // Import required modules
// import { Mousewheel } from "swiper/modules";

// export default function App() {
//   const swiperRef = useRef(null); // Ref to access swiper instance

//   const handleSlideTo = (index) => {
//     if (swiperRef.current) {
//       swiperRef.current.slideToLoop(index); // Use slideToLoop to handle looping
//     }
//   };

//   return (
//     <>
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)} // Capture swiper instance
//         loop={true}
//         spaceBetween={0}
//         speed={1200}
//         effect="coverflow"
//         direction="vertical"
//         mousewheel={true}
//         modules={[Mousewheel]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>

//       {/* Custom vertical buttons */}
//       <div className="custom-navigation">
//         <button onClick={() => handleSlideTo(0)}>1</button>
//         <button onClick={() => handleSlideTo(1)}>2</button>
//         <button onClick={() => handleSlideTo(2)}>3</button>
//         <button onClick={() => handleSlideTo(3)}>4</button>
//         <button onClick={() => handleSlideTo(4)}>5</button>
//         <button onClick={() => handleSlideTo(5)}>6</button>
//         <button onClick={() => handleSlideTo(6)}>7</button>
//         <button onClick={() => handleSlideTo(7)}>8</button>
//         <button onClick={() => handleSlideTo(8)}>9</button>
//       </div>
//     </>
//   );
// }
