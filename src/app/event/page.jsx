"use client";
import React, { useEffect, useRef, useState } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";
import Aos from "aos";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Footer from "@/component/Footer/Footer";
import gsap from "gsap";
import { usePathname } from "next/navigation";
const mont = Montserrat({ subsets: ["latin"], weight: ["800"] });
const montLight = Montserrat({ subsets: ["latin"], weight: ["200"] });
const SkeletonLoader = () => (
  <div className="animate-pulse bg-gray-300 w-full h-full"></div>
);

const Main = () => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(true);
  const [videoUrl, setVideoUrl] = useState("");
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const path = usePathname();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide
  const data = [
    {
      src: "/Event/images/Base_Plan_.webp",
      title: "Show Venue 3D Overview",
    },
    {
      src: "/Event/images/MMI_ExpoVile.png",
      title: "Trade Fair center messe munchen",
    },
    {
      src: "/Event/images/Entrance-EP.jpg",
      title: "Online event - Exhibition hall entrance",
    },
    {
      src: "/Event/images/Product Launch 3 5-10-2020.png",
      title: "Online show - bosch",
    },
    {
      src: "/Event/images/Registration.jpg",
      title: "Online event - registration hall",
    },
    {
      src: "/Event/images/Drinktech.jpg",
      title: "Online event - Exhibition hall",
    },
    {
      src: "/Event/images/MMI.png",
      title: "online event - mini Exhibition hall",
    },
    {
      src: "/Event/images/Conference Room.jpeg",
      title: "Online event - Conference Room",
    },

    {
      src: "/Event/images/premium stall_6a.jpg",
      title: "",
    },
    {
      src: "/Event/images/premium stall_7b.jpg",
      title: "",
    },
    {
      src: "/Event/images/premium stall_8.jpg",
      title: "",
    },

    {
      src: "/Event/images/Conference_room_F.jpg",
      title: "",
    },

    {
      src: "/Event/images/ILE.jpg",
      title: "",
    },
  ];
  const dataMobile = [
    {
      src: "/Event/thumbnail/Info_Hub.png",
      title: "Event Application Walkthrough",
      video: "/Event/videos/Info_Hub.mp4",
    },
    {
      src: "/Event/thumbnail/DrinkTech.png",
      title: "DrinkTech Rebranding",
      video: "/Event/videos/DrinkTech.mp4",
    },
    {
      src: "/Event/thumbnail/JCB_Engl.png",
      title: "Bauma Conexpo 2024 Promo",
      video: "/Event/videos/JCB_Engl.mp4",
    },
    {
      src: "/Event/thumbnail/Netizo_For_Ref.png",
      title: "Brand Promo",
      video: "/Event/videos/Netizo_For_Ref.mp4",
    },
    {
      src: "/Event/thumbnail/AIR CARGO INDIA.png",
      title: "AIR CARGO INDIA - Festival Wishes",
      video: "/Event/videos/AIR CARGO INDIA.mp4",
    },
    {
      src: "/Event/thumbnail/Concrete_INK.mov.png",
      title: "UBM - Train Concrete Show Promo",
      video: "/Event/videos/Concrete_INK.mov.mp4",
    },
    {
      src: "/Event/thumbnail/Bauma_Truck Intro.png",
      title: "Bauma Conexpo India 2023",
      video: "/Event/videos/Bauma_Truck Intro.mp4",
    },
    {
      src: "/Event/thumbnail/TAFE_FINAL.png",
      title: "TAFE 3D Visualization",
      video: "/Event/videos/TAFE_FINAL.mp4",
    },
    {
      src: "/Event/thumbnail/Ifat.png",
      title: "IFAT INDIA - Event day Promo",
      video: "/Event/videos/Ifat.mp4",
    },
    {
      src: "/Event/thumbnail/Textile waste_1.png",
      title: "Textile Waste - IFAT INDIA Promo",
      video: "/Event/videos/Textile waste_1.mp4",
    },
    {
      src: "/Event/thumbnail/Water_Waste (1).png",
      title: "Water Waste - IFAT INDIA",
      video: "/Event/videos/Water_Waste (1).mp4",
    },
    {
      src: "/Event/thumbnail/E waste.png",
      title: "E Waste - IFAT INDIA",
      video: "/Event/videos/E waste.mp4",
    },
    {
      src: "/Event/thumbnail/Juror Awards.png",
      title: "Medgate Today Awards",
      video: "/Event/videos/Juror Awards.mp4",
    },
    {
      src: "/Event/thumbnail/Goa_Event_Video.png",
      title: "Vibrant MDI Event",
      video: "/Event/videos/Goa_Event_Video.mp4",
    },
    {
      src: "/Event/thumbnail/Medical_Fair_2019_Promo.png",
      title: "Medical Fair Promo",
      video: "/Event/videos/Medical_Fair_2019_Promo.mp4",
    },
    {
      src: "/Event/thumbnail/glasspro INDIA 2019.png",
      title: "Glasspro INDIA Promo",
      video: "/Event/videos/glasspro INDIA 2019.mp4",
    },
    {
      src: "/Event/thumbnail/Smarter E.png",
      title: "Smarter E Promo",
      video: "/Event/videos/Smarter E.mp4",
    },
    {
      src: "/Event/thumbnail/analytica.png",
      title: "Analytica Lab India",
      video: "/Event/videos/analytica (1).mp4",
    },
    {
      src: "/Event/thumbnail/CPHI LOGO 2.png",
      title: "CPhI India Promo",
      video: "/Event/videos/CPHI LOGO 2.mp4",
    },
  ];

  // intro
  useEffect(() => {
    gsap
      .timeline({ delay: 0 })
      .to(".block", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.7,
        stagger: { amount: 0.5, from: "random", ease: "power3.out" },
      })
      .fromTo(".blocks", { zIndex: 999 }, { zIndex: 0, display: "none" });
  }, []);
  useEffect(() => {
    Aos.init({ duration: 700, delay: 500, once: true });
  }, []);
  useEffect(() => {
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
      }
      setSwiperInstance(null); // Reset instance
      setThumbsSwiper(null);
    };
  }, [option]);
  return (
    <div>
      <div className={`blocks ${styles.blocks} `}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={`block ${styles.block}`}></div>
        ))}
      </div>
      <div className={` justify-center  items-center flex  gap-3 mt-32 `}>
        {/* <p className="text-center text-sm font-medium">Men</p> */}
        <div
          className={` group flex flex-col items-center `}
          onClick={() => setOption(true)}
        >
          <p className="tablet:text-base text-xs text-white name cursor-pointer">
            Videos
          </p>
          <p
            className={`h-[1px] laptop:block hidden bg-white  group-hover:w-full transition-all duration-300
              ${option ? "w-full" : "w-0"}`}
          ></p>
        </div>
        <span>/</span>
        <div
          className={` group flex flex-col items-center `}
          onClick={() => setOption(0)}
        >
          <p className="tablet:text-base text-xs text-white name cursor-pointer ">
            Images
          </p>
          <p
            className={`h-[1px] laptop:block hidden bg-white  group-hover:w-full transition-all duration-300
              ${!option ? "w-full" : "w-0"}`}
          ></p>{" "}
        </div>
      </div>
      {/* videos  */}
      {option == true ? (
        <>
          {/* tab  */}
          <div className={` ${mont.className} hidden tablet:block`}>
            <Others1 setVideoUrl={setVideoUrl} setOpen={setOpen} />
            <Others2 setVideoUrl={setVideoUrl} setOpen={setOpen} />
            <Section5 setVideoUrl={setVideoUrl} setOpen={setOpen} />

            {/* popup info about video  */}
          </div>
          {/* mobile  */}
          <motion.div className={` tablet:hidden mt-5`}>
            <div className=" grid  grid-cols-1  gap-5 h-full px-4 tablet:px-20 tablet:py-10">
              {dataMobile.map((val, i) => (
                <div
                  data-aos="fade-up"
                  key={i}
                  className=" w-full bg-gray-300 cursor-pointer relative h-[200px] overflow-hidden tablet:h-full group"
                >
                  <Image
                    className="object-cover  w-full h-full"
                    onClick={() => {
                      setVideoUrl(val.video);
                      setOpen(true);
                    }}
                    width={900}
                    l
                    priority={i === 0}
                    height={900}
                    alt="img1"
                    src={val.src}
                  />
                  <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center px-2 justify-between">
                    <p className="p-1 font-semibold  capitalize">{val.title}</p>
                    <MdArrowOutward className="text-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed w-full h-full bg-black/40 top-0 left-0 px-4 z-50 cursor-pointer
      "
            >
              <div
                className="relative tablet:w-4/6 h-2/6 tablet:h-4/6 bg-black
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className="absolute tablet:!-top-5 tablet:!-right-5 top-2 right-2 text-2xl cursor-pointer"
                  style={{ zIndex: 9999 }}
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
          <Footer />
        </>
      ) : (
        // images
        <div
          className={` flex flex-col items-center justify-center w-full tablet:mt-10 mt-4 mb-10`}
        >
          {/* Main Swiper */}
          <Swiper
            style={{
              "--swiper-navigation-color": "grey",
              "--swiper-pagination-color": "grey",
            }}
            loop={true}
            spaceBetween={10}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full max-w-5xl rounded-lg shadow-lg relative"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide
          >
            {data?.map((val, i) => (
              <>
                <SwiperSlide
                  key={i}
                  className="flex items-center justify-center"
                >
                  <Image
                    width={900}
                    height={900}
                    priority
                    src={val.src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-[400px] object-contain rounded-lg bg-gray-950"
                  />
                  <div className="absolute bg-black h-10  w-full bottom-0 left-0 justify-center items-center">
                    <p
                      className={`text-center tablet:text-xl  capitalize p-1
                      bg-grey-gradient text-transparent bg-clip-text ${mont.className}`}
                    >
                      {val.title || ""}
                    </p>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
          {/* Thumbnail Swiper */}
          <Swiper
            loop={true}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full max-w-5xl mt-4"
          >
            {data?.map((val, i) => (
              <SwiperSlide key={i} className="cursor-pointer">
                <Image
                  width={900}
                  height={900}
                  priority
                  onClick={() => thumbsSwiper?.slideTo(i)}
                  src={val.src}
                  alt={`Thumbnail ${i + 1}`}
                  className={`w-full h-[50px] object-cover rounded-md border-2 border-transparent
                  hover:border-white transition duration-300 bg-gray-900 ${
                    activeIndex === i
                      ? "border-white scale-105"
                      : "border-transparent"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
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
      src: "/Event/thumbnail/Info_Hub.png",
      title: "Event Application Walkthrough",
      video: "/Event/videos/Info_Hub.mp4",
    },
    {
      src: "/Event/thumbnail/DrinkTech.png",
      title: "DrinkTech Rebranding",
      video: "/Event/videos/DrinkTech.mp4",
    },
    {
      src: "/Event/thumbnail/JCB_Engl.png",
      title: "Bauma Conexpo 2024 Promo",
      video: "/Event/videos/JCB_Engl.mp4",
    },
    {
      src: "/Event/thumbnail/Netizo_For_Ref.png",
      title: "Brand Promo",
      video: "/Event/videos/Netizo_For_Ref.mp4",
    },
  ];

  return (
    <motion.div
      style={{ scale, rotate }}
      className={`sticky tablet:top-2 h-screen `}
    >
      <div
        data-aos="fade-up"
        className=" grid  grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 gap-5 h-full px-4 tablet:px-20 tablet:py-10"
      >
        {data.map((val, i) => (
          <div
            key={i}
            className=" w-full bg-gray-300 cursor-pointer relative h-[200px] overflow-hidden tablet:h-full group"
          >
            <Image
              className="object-cover  w-full h-full"
              onClick={() => {
                setVideoUrl(val.video);
                setOpen(true);
              }}
              width={900}
              l
              priority={i === 0}
              height={900}
              alt="img1"
              src={val.src}
            />
            <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center px-2 justify-between">
              <p className="p-1 font-semibold  capitalize">{val.title}</p>
              <MdArrowOutward className="text-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
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
      src: "/Event/thumbnail/AIR CARGO INDIA.png",
      title: "AIR CARGO INDIA - Festival Wishes",
      video: "/Event/videos/AIR CARGO INDIA.mp4",
    },
    {
      src: "/Event/thumbnail/Concrete_INK.mov.png",
      title: "UBM - Train Concrete Show Promo",
      video: "/Event/videos/Concrete_INK.mov.mp4",
    },
    {
      src: "/Event/thumbnail/Bauma_Truck Intro.png",
      title: "Bauma Conexpo India 2023",
      video: "/Event/videos/Bauma_Truck Intro.mp4",
    },
    {
      src: "/Event/thumbnail/airCargo.png",
      title: "Air Cargo Promo",
      video: "/Event/videos/airCargo.mp4",
    },
  ];

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <div
        className="bg-black  grid tablet:grid-cols-2 tablet:grid-rows-2 gap-10
       px-4 h-full tablet:px-20 tablet:py-10"
      >
        {data.map((val, i) => (
          <div
            key={i}
            data-aos={i !== 0 ? "fade-up" : undefined}
            className="w-full bg-gray-300 cursor-pointer group relative h-[200px] overflow-hidden tablet:h-full"
          >
            <Image
              className="object-cover w-full h-full"
              priority={i === 0}
              onClick={() => {
                setVideoUrl(val.video);
                setOpen(true);
              }}
              width={900}
              height={900}
              alt="img1"
              src={val.src}
            />
            <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center px-2 justify-between">
              <p className="p-1 font-semibold capitalize">{val.title}</p>
              <MdArrowOutward className="text-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
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
      src: "/Event/thumbnail/Ifat.png",
      title: "IFAT INDIA - Event day Promo",
      video: "/Event/videos/Ifat.mp4",
    },
    {
      title: "Textile Waste - IFAT INDIA Promo",
      src: "/Event/thumbnail/Textile waste_1.png",
      video: "/Event/videos/Textile waste_1.mp4",
    },
    {
      title: "Water Waste - IFAT INDIA",
      src: "/Event/thumbnail/Water_Waste (1).png",
      video: "/Event/videos/Water_Waste (1).mp4",
    },
    {
      src: "/Event/thumbnail/E waste.png",
      title: "E Waste - IFAT INDIA",
      video: "/Event/videos/E waste.mp4",
    },
  ];

  return (
    <motion.div
      style={{ scale, rotate }}
      className={`sticky tablet:top-2 top-2 mt-32 h-screen  `}
    >
      <div className=" grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 gap-5 h-full px-4 tablet:px-20 tablet:py-10">
        {data.map((val, i) => (
          <div
            data-aos={i !== 0 ? "fade-up" : undefined}
            key={i}
            className="w-full bg-gray-300 group cursor-pointer relative h-[200px] overflow-hidden tablet:h-full"
          >
            <Image
              className="object-cover w-full h-full"
              priority={i === 0}
              onClick={() => {
                setVideoUrl(val.video);
                setOpen(true);
              }}
              width={900}
              height={900}
              alt="img1"
              src={val.src}
            />
            <div
              className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center
            justify-between px-2"
            >
              <p className="p-1 font-semibold capitalize">{val.title}</p>
              <MdArrowOutward className="text-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
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
      src: "/Event/thumbnail/Juror Awards.png",
      title: "Medgate Today Awards",
      video: "/Event/videos/Juror Awards.mp4",
    },
    {
      src: "/Event/thumbnail/Goa_Event_Video.png",
      title: "Vibrant MDI Event",
      video: "/Event/videos/Goa_Event_Video.mp4",
    },
    {
      src: "/Event/thumbnail/Medical_Fair_2019_Promo.png",
      title: "Medical Fair Promo",
      video: "/Event/videos/Medical_Fair_2019_Promo.mp4", // Fixed incorrect file extension
    },
    {
      src: "/Event/thumbnail/glasspro INDIA 2019.png",
      title: "Glasspro INDIA Promo",
      video: "/Event/videos/glasspro INDIA 2019.mp4",
    },
  ];

  return (
    <motion.div
      style={{ scale, rotate }}
      className={`sticky tablet:top-2 h-screen  `}
    >
      <div className=" grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 gap-5 h-full px-4 tablet:px-20 tablet:py-10 bg-black">
        {data.map((val, i) => (
          <div
            data-aos={i !== 0 ? "fade-up" : undefined}
            key={i}
            className="w-full bg-gray-300 group cursor-pointer relative h-[200px] overflow-hidden tablet:h-full"
          >
            <Image
              className="object-cover w-full h-full"
              priority={i === 0}
              onClick={() => {
                setVideoUrl(val.video);
                setOpen(true);
              }}
              width={900}
              height={900}
              alt="img1"
              src={val.src}
            />
            <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex items-center px-2 justify-between">
              <p className="p-1 font-semibold capitalize">{val.title}</p>
              <MdArrowOutward className="text-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Section5({ setVideoUrl, setOpen }) {
  const data = [
    {
      src: "/Event/thumbnail/Smarter E.png",
      title: "Smarter E Promo",
      video: "/Event/videos/Smarter E.mp4",
    },
    {
      title: "Analytica Lab India",
      src: "/Event/thumbnail/analytica.png",
      video: "/Event/videos/analytica (1).mp4",
    },
    {
      src: "/Event/thumbnail/CPHI LOGO 2.png",
      title: "CPhI India Promo",
      video: "/Event/videos/CPHI LOGO 2.mp4",
    },
    {
      src: "/Event/thumbnail/TAFE_FINAL.png",
      title: "TAFE 3D Visualization",
      video: "/Event/videos/TAFE_FINAL.mp4",
    },
  ];

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 gap-5 h-screen px-4 tablet:px-20 tablet:py-10 bg-black">
      {data.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          className="w-full bg-gray-300 cursor-pointer relative group h-[200px] overflow-hidden tablet:h-full"
        >
          <Image
            className="object-cover w-full h-full"
            onClick={() => {
              setVideoUrl(item.video);
              setOpen(true);
            }}
            width={900}
            height={900}
            loading="lazy"
            alt={item.title}
            src={item.src}
          />
          <div className="bg-black/40 absolute bottom-0 left-0 w-full h-10 flex justify-between items-center px-2">
            <p className="p-1 font-semibold">{item.title}</p>
            <MdArrowOutward className="text-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ImageCard({ item }) {
  const [isLoading, setIsLoading] = useState(true);

  return <div className="flex flex-col mb-5"></div>;
}
