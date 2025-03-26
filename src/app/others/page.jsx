"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Montserrat } from "next/font/google";
import Footer from "@/component/Footer/Footer";
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["200"] });
const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-300 w-full h-full"></div>
);

const Main = () => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <>
      <Others1 setVideoUrl={setVideoUrl} setOpen={setOpen} />
      <Others2 setVideoUrl={setVideoUrl} setOpen={setOpen} />
      <Section5 setVideoUrl={setVideoUrl} setOpen={setOpen} />
      <Footer />
      {open && (
        <div
          className="fixed w-full h-full bg-black/40 top-0 left-0 px-4 z-50
      "
        >
          <div
            className="relative tablet:w-4/6 h-2/6 tablet:h-4/6 bg-black
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className="absolute tablet:!-top-5 tablet:!-right-5 top-2 right-2 text-2xl cursor-pointer"
              style={{ zIndex: 999 }}
              onClick={() => setOpen(false)}
            >
              X
            </div>
            <div className="h-full w-full">
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                controls
                playsInline
                className="w-full h-full"
              ></video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;

function Others1({ setVideoUrl, setOpen }) {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative h-full w-full">
      <div
        className={` justify-center  items-center flex  gap-3 mt-32 ${montLight.className}`}
      >
        {/* <p className="text-center text-sm font-medium">Men</p> */}
        <div className={` group flex flex-col items-center `}>
          <p className="tablet:text-base text-xs text-white name">Videos</p>
          <p className="h-[1px] laptop:block hidden bg-white w-full group-hover:w-full transition-all duration-300"></p>
        </div>
        <span>/</span>
        <div className={` group flex flex-col items-center `}>
          <p className="tablet:text-base text-xs text-white name cursor-pointer">
            Images
          </p>
          <p className="h-[1px] laptop:block hidden bg-white w-0 group-hover:w-full transition-all duration-300"></p>
        </div>
      </div>
      <div className="relative h-[200vh]" ref={container}>
        <Section1
          setVideoUrl={setVideoUrl}
          scrollYProgress={scrollYProgress}
          setOpen={setOpen}
        />
        <Section2
          setVideoUrl={setVideoUrl}
          scrollYProgress={scrollYProgress}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
}
function Others2({ setVideoUrl, setOpen }) {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative h-full w-full">
      <div className="relative h-[200vh]" ref={container}>
        <Section3
          scrollYProgress={scrollYProgress}
          setVideoUrl={setVideoUrl}
          setOpen={setOpen}
        />
        <Section4
          scrollYProgress={scrollYProgress}
          setVideoUrl={setVideoUrl}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
}

function Section1({ scrollYProgress, setVideoUrl, setOpen }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    {
      src: "/Event/thumbnail/AIR CARGO INDIA.png",
      title: "Concrete_INK",
      video: "/Event/videos/AIR CARGO INDIA.mp4",
    },
    {
      src: "/Event/thumbnail/analytica.png",
      title: "Concrete_INK",
      video: "/Event/videos/analytica (1).mp4",
    },
    {
      src: "/Event/thumbnail/Bauma_Truck Intro.png",
      title: "Bauma_Truck",
      video: "/Event/videos/Bauma_Truck Intro.mp4",
    },
    {
      src: "/Event/thumbnail/Concrete_INK.mov.png",
      title: "Concrete_INK",
      video: "/Event/videos/Concrete_INK.mp4",
    },
  ];
  return (
    <motion.div
      style={{ scale, rotate }}
      className={`sticky tablet:top-2 h-screen  ${montLight.className}`}
    >
      <div className=" grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 gap-5 h-full px-4 tablet:px-20 tablet: py-10">
        {data.map((val, i) => (
          <div
            key={i}
            className="w-full bg-blue-300 cursor-pointer relative h-[200px] overflow-hidden tablet:h-full"
          >
            <Image
              className="object-cover w-full h-full"
              onClick={() => {
                setVideoUrl(val.video);
                setOpen(true);
              }}
              width={900}
              height={900}
              alt="img1"
              src={val.src}
            />
            <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center">
              <p className="p-1 font-semibold">{val.title}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Section2({ scrollYProgress, setVideoUrl, setOpen }) {
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [-5, 0]);
  const data = [
    {
      src: "/Event/thumbnail/CPHI LOGO 2.png",
      title: "Concrete_INK",
      video: "/Event/videos/CPHI LOGO 2.mp4",
    },
    {
      src: "/Event/thumbnail/DrinkTech.png",
      title: "Concrete_INK",
      video: "/Event/videos/DrinkTech.mp4",
    },
    {
      src: "/Event/thumbnail/E waste.png",
      title: "Bauma_Truck",
      video: "/Event/videos/E waste.mp4",
    },
    {
      src: "/Event/thumbnail/glasspro INDIA 2019.png",
      title: "Concrete_INK",
      video: "/Event/videos/glasspro INDIA 2019.mp4",
    },
  ];
  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div
        className="bg-black  grid tablet:grid-cols-2 tablet:grid-rows-2 gap-10
       px-4 h-full tablet:px-20 tablet: py-10"
      >
        {data.map((val, i) => (
          <div
            key={i}
            className="w-full bg-blue-300 cursor-pointer relative h-[200px] overflow-hidden tablet:h-full"
          >
            <Image
              className="object-cover w-full h-full"
              onClick={() => {
                setVideoUrl(val.video);
                setOpen(true);
              }}
              width={900}
              height={900}
              alt="img1"
              src={val.src}
            />
            <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center">
              <p className="p-1 font-semibold">{val.title}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
function Section3({ scrollYProgress, setVideoUrl, setOpen }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    {
      src: "/Event/thumbnail/Goa_Event_Video.png",
      title: "Concrete_INK",
      video: "/Event/videos/Goa_Event_Video.mp4",
    },
    {
      src: "/Event/thumbnail/Ifat.png",
      title: "Concrete_INK",
      video: "/Event/videos/Ifat.mp4",
    },
    {
      src: "/Event/thumbnail/JCB_Engl.png",
      title: "Bauma_Truck",
      video: "/Event/videos/JCB_Engl.mp4",
    },
    {
      src: "/Event/thumbnail/Juror Awards.png",
      title: "Concrete_INK",
      video: "/Event/videos/Juror Awards.mp4",
    },
  ];
  return (
    <motion.div
      style={{ scale, rotate }}
      className={`sticky tablet:top-2 top-2 mt-32 h-screen  ${montLight.className}`}
    >
      <div className=" grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 gap-5 h-full px-4 tablet:px-20 tablet:py-10">
        {data.map((val, i) => (
          <div
            key={i}
            className="w-full bg-blue-300 cursor-pointer relative h-[200px] overflow-hidden tablet:h-full"
          >
            <Image
              className="object-cover w-full h-full"
              onClick={() => {
                setVideoUrl(val.video);
                setOpen(true);
              }}
              width={900}
              height={900}
              alt="img1"
              src={val.src}
            />
            <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center">
              <p className="p-1 font-semibold">{val.title}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
function Section4({ scrollYProgress, setVideoUrl, setOpen }) {
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.8], [5, 0]);
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    {
      src: "/Event/thumbnail/Medical_Fair_2019_Promo.png",
      title: "Concrete_INK",
      video: "/Event/videos/Medical_Fair_2019_Promo.png",
    },
    {
      src: "/Event/thumbnail/Netizo_For_Ref.png",
      title: "Concrete_INK",
      video: "/Event/videos/Netizo_For_Ref.mp4",
    },
    {
      src: "/Event/thumbnail/Smarter E.png",
      title: "Bauma_Truck",
      video: "/Event/videos/Smarter E.mp4",
    },
    {
      src: "/Event/thumbnail/TAFE_FINAL.png",
      title: "Concrete_INK",
      video: "/Event/videos/TAFE_FINAL.mp4",
    },
  ];
  return (
    <motion.div
      style={{ scale, rotate }}
      className={`sticky tablet:top-2 h-screen  ${montLight.className}`}
    >
      <div className=" grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 gap-5 h-full px-4 tablet:px-20 tablet: py-10 bg-black">
        {data.map((val, i) => (
          <div
            key={i}
            className="w-full bg-blue-300 cursor-pointer relative h-[200px] overflow-hidden tablet:h-full"
          >
            <Image
              className="object-cover w-full h-full"
              onClick={() => {
                setVideoUrl(val.video);
                setOpen(true);
              }}
              width={900}
              height={900}
              alt="img1"
              src={val.src}
            />
            <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center">
              <p className="p-1 font-semibold">{val.title}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Section5({ setVideoUrl, setOpen }) {
  return (
    <div className=" grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 gap-5 h-full px-4 tablet:px-20 tablet: py-10 bg-black">
      <div className="w-full bg-blue-300 cursor-pointer relative">
        <Image
          className="object-cover w-full h-full"
          onClick={() => {
            setVideoUrl("/Event/videos/Netizo_For_Ref.png");
            setOpen(true);
          }}
          width={900}
          height={900}
          alt="img1"
          src="/Event/thumbnail/Medical_Fair_2019_Promo.png"
        />
        <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center">
          <p className="p-1 font-semibold"> Concrete_INK</p>
        </div>
      </div>
      <div className="w-full bg-blue-300 cursor-pointer relative">
        <Image
          className="object-cover w-full h-full"
          onClick={() => {
            setVideoUrl("/Event/videos/Netizo_For_Ref.png");
            setOpen(true);
          }}
          width={900}
          height={900}
          alt="img1"
          src="/Event/thumbnail/Netizo_For_Ref.png"
        />
        <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center">
          <p className="p-1 font-semibold"> Bauma_Truck</p>
        </div>
      </div>
    </div>
  );
}

function ImageCard({ item }) {
  const [isLoading, setIsLoading] = useState(true);

  return <div className="flex flex-col mb-5"></div>;
}
