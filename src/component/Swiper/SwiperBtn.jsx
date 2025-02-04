"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "./swipe.css";
import { Mousewheel } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import MyContext from "@/context/MyContext";

const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function App() {
  // vfx
  const vfx1 = "/vfx/pics/Jessey.webp";
  const vfx2 = "/vfx/pics/Bloody Begger.webp";
  const vfx3 = "/vfx/pics/demonte colony.webp";
  const vfx4 = "/vfx/pics/Mouse.webp";
  const vfx5 = "/vfx/pics/Ox.webp";
  const vfx6 = "/vfx/pics/Password.webp";
  const vfx7 = "/vfx/pics/Thangalan.webp";
  const vfx8 = "/vfx/pics/Vettaiyan.webp";

  // TitleAnimation
  const TitleAnimation1 = "/images/1.webp";

  // LyricVideos
  const LyricVideos1 = "/LyricVideos/pics/veesi.webp";
  const LyricVideos2 = "/LyricVideos/pics/dha.webp";

  // 2D Animations Stories
  const Stories1 = "/2dAnimations/Pics/PI&PI.webp";
  const Stories2 = "/2dAnimations/Pics/Flash1.webp";
  const Stories3 = "/2dAnimations/Pics/Flash1.webp";

  // Explainers
  const Explainer1 = "/images/1.webp";

  // 3D Animations / Previsualization
  const Animation1 = "/3dAnimations/pics/architectural.webp";
  const Animation2 = "/3dAnimations/pics/cell_07.webp";

  // ProductPreviz
  const ProductPreviz1 = "/images/1.webp";

  // Wedding Invites
  const ShortInvites1 = "/wedding/pics/jaga.webp";
  const ShortInvites2 = "/wedding/pics/anil.webp";
  const ShortInvites3 = "/wedding/pics/aishwarya.webp";

  // StoryInvites
  const StoryInvites = "/images/1.webp";

  // Ads / Corporate - Ads
  const Ads1 = "/ads/pics/MTR.webp";
  const Ads2 = "/ads/pics/Soft Touch.webp";
  const Ads3 = "/ads/pics/Santhoor.webp";

  // Corporate
  const Corporate1 = "/images/1.webp";

  const images = [
    {
      category: "vfx",
      items: [
        { id: 1, mainImg: vfx1 },
        { id: 2, mainImg: vfx2 },
        { id: 3, mainImg: vfx3 },
        { id: 4, mainImg: vfx4 },
        { id: 5, mainImg: vfx5 },
        { id: 6, mainImg: vfx6 },
        { id: 7, mainImg: vfx7 },
        { id: 8, mainImg: vfx8 },
      ],
    },
    {
      category: "TitleAnimation",
      items: [{ id: 1, mainImg: TitleAnimation1 }],
    },
    {
      category: "LyricVideos",
      items: [
        { id: 1, mainImg: LyricVideos1 },
        { id: 2, mainImg: LyricVideos2 },
      ],
    },
    {
      category: "Stories",
      items: [
        { id: 1, mainImg: Stories1 },
        { id: 2, mainImg: Stories2 },
        { id: 3, mainImg: Stories3 },
      ],
    },
    {
      category: "Explainers",
      items: [{ id: 1, mainImg: Explainer1 }],
    },
    {
      category: "Animations",
      items: [
        { id: 1, mainImg: Animation1 },
        { id: 2, mainImg: Animation2 },
      ],
    },
    {
      category: "ProductPreviz",
      items: [{ id: 1, mainImg: ProductPreviz1 }],
    },
    {
      category: "ShortInvites",
      items: [
        { id: 1, mainImg: ShortInvites1 },
        { id: 2, mainImg: ShortInvites2 },
        { id: 3, mainImg: ShortInvites3 },
      ],
    },
    {
      category: "StoryInvites",
      items: [{ id: 1, mainImg: StoryInvites }],
    },
    {
      category: "Ads",
      items: [
        { id: 1, mainImg: Ads1 },
        { id: 2, mainImg: Ads2 },
        { id: 3, mainImg: Ads3 },
      ],
    },
    {
      category: "Corporate",
      items: [{ id: 1, mainImg: Corporate1 }],
    },
  ];

  const menus = [
    {
      title: "Movies / Short Films / Album",
      items: ["vfx", "Title Animation", "Lyric Videos"],
      category: ["vfx", "Title", "Lyric"],
    },
    {
      title: "Ads / Corporate",
      items: ["Ads", "Corporate"],
      category: ["Ads", "Corporate"],
    },
    {
      title: "Wedding Invites",
      items: ["Short Invites", "Story Invites"],
      category: ["Short", "Story"],
    },
    {
      title: "2D Animations",
      items: ["Stories", "Explainers"],
      category: ["Stories", "Explainers"],
    },
    {
      title: "3D Animations / Previsualization",
      items: ["Animations", "Product Previz"],
      category: ["Animations", "Product"],
    },
  ];

  const swiperRef = useRef(null);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(1);
  const { data, nav, setNav, mousePosition } = useContext(MyContext);
  // const [nav, setNav] = useState("vfx");

  const [isHovering, setIsHovering] = useState(true);
  const categories = data?.allData.map((item) => item.category);

  const router = useRouter();

  const filteredData = data.allData.filter((data) => nav == data.category);
  const filteredImages = images.filter((data) => data.category == nav);

  useEffect(() => {
    animateImage();
  }, [nav]);

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
    gsap.fromTo(
      ".title",
      {
        y: 150,
        skewX: "-160deg",
      },
      {
        y: 0,
        skewX: "0deg",
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      }
    );
  };
  const handleNavigation = (nav, itemId) => {
    const animationDuration = 0.8; // Adjust duration for mobile (<=768px)

    // Animate `.image`
    gsap.fromTo(
      ".image",
      { y: 0 },
      {
        y: -900,
        delay: 0.2,
        x: 0,
        ease: "power3.inOut", // Smooth ease-in-out transition
        duration: animationDuration,
      }
    );

    // Animate `.count`
    gsap.fromTo(
      ".count",
      { y: 0, opacity: 1 },
      {
        ease: "power3.inOut", // Smooth ease-in-out transition
        duration: animationDuration,
        opacity: 0,
        y: -50, // Add a slight upward motion for a better effect
        delay: 0.2,
      }
    );
    gsap.to(".countBtn", {
      opacity: 0,
      ease: "power3.inOut",
    });

    // Animate `.title`
    gsap.fromTo(
      ".title",
      { y: 0, opacity: 1 },
      {
        ease: "power3.inOut", // Smooth ease-in-out transition
        duration: animationDuration,
        opacity: 0,
        y: -50, // Add a slight upward motion for a better effect
        delay: 0.2,
      }
    );

    // Animate `.category`
    gsap.fromTo(
      ".category",
      { y: 0, opacity: 1, zIndex: 1 },
      {
        ease: "power3.inOut", // Smooth ease-in-out transition
        duration: animationDuration,
        opacity: 0,
        y: -50, // Add a slight upward motion for a better effect
        zIndex: 0,
        delay: 0.2,
      }
    );

    // Smooth transition to the next page
    setTimeout(() => {
      // Use encodeURIComponent to ensure special characters are encoded properly in the URL

      // Update the URL dynamically with encoded nav and itemId
      router.push(`/work/${nav}/${itemId}`);
    }, 1000); // Match navigation delay to animation duration
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

  const cursorVariants = {
    hover: { x: mousePosition.x, y: mousePosition.y },
    default: {},
  };

  return (
    <>
      <motion.div
        variants={cursorVariants}
        animate="hover"
        transition={{ duration: 0.1, ease: "linear" }}
        className="fixed top-0  hidden tablet:flex
          justify-center items-center left-0 w-16 h-16 z-50 rounded-full bg-gray-700 mix-blend-difference"
        style={{ pointerEvents: "none" }}
      >
        <p className={`${montserrat.className} text-white font-normal text-sm`}>
          View
        </p>
      </motion.div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        spaceBetween={0}
        speed={1200}
        effect="coverflow"
        direction="vertical"
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper "
      >
        {filteredImages.map((data, index) =>
          data.items.map((item, itemIndex) => {
            const coverImg = item.mainImg;
            return (
              <SwiperSlide key={itemIndex}>
                <div
                  key={itemIndex}
                  className="relative h-full w-full"
                  onMouseEnter={() => setIsHovering(true)}
                >
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      handleNavigation(nav, item.id); // Trigger animation and navigation
                    }}
                    aria-label={`View details of slide ${itemIndex + 1}`}
                  >
                    <Image
                      src={coverImg} // Use item.mainImg dynamically
                      alt={`Slide ${itemIndex + 1}`}
                      className="object-cover cursor-pointer h-full w-full transition-opacity duration-1000 images opacity-50"
                      fill
                      // placeholder={coverImg}
                      quality={50}
                      priority
                    />
                    <div className="flex items-center justify-center h-full bg-black bg-opacity-30">
                      <div
                        className="relative laptop:w-[25%] w-[60%] h-[400px]
            tablet:w-[50%] top-[2%] tablet:top-[8%] laptop:top-[12%] largeLaptop:top-[10%] tablet:h-1/2 laptop:h-[400px] overflow-hidden"
                        style={{
                          clipPath: "polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)", // Adds a visible effect
                        }}
                      >
                        <Image
                          src={coverImg} // Use item.mainImg dynamically here as well
                          alt={`Slide ${itemIndex + 1} inner`}
                          className="object-cover transition-opacity duration-1000 image"
                          fill
                          // placeholder={coverImg}
                          quality={60}
                          priority
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>

      <div className="countBtn custom-navigation right-5 z-30 tablet:right-10 gap-2 tablet:gap-3">
        {filteredData.map((data, dataIndex) =>
          data.items.map((_, index) => (
            <button
              key={`${dataIndex}-${index}`} // Unique key combining dataIndex and index
              className={`bg-black text-xs  tablet:text-base hover:bg-black p-1 
          tablet:px-2 tablet:py-1 rounded-[50%] transition-all duration-500
          ${
            selected === index + 1
              ? "bg-white text-black hover:text-white"
              : "bg-gray-800 border border-gray-500 text-white"
          }`}
              onClick={() => handleSlideTo(index)}
            >
              {index + 1}
            </button>
          ))
        )}
      </div>

      <div
        className="fixed tablet:text-xl w-full px-20  text-xs flex gap-5 tablet:gap-1 font-black top-24
         tablet:top-1/4 laptop:top-24 largeLaptop:top-32
       left-[50%] translate-x-[-50%] z-10 count"
      >
        <div className="flex flex-nowrap justify-center gap-2 w-full ">
          {menus.map((menu, index) => (
            <div key={index} className="group p-6 max-w-md">
              <ul className="text-lg font-bold text-white">
                <li className="relative">
                  <span className="cursor-pointer capitalize p-2 rounded-md laptop:text-sm largeLaptop:text-base">
                    {menu.title}
                  </span>
                  {menu.items.map((item, idx) => (
                    <>
                      {nav === item.split(" ").join("") && (
                        <span
                          className="absolute -bottom-1 left-0 w-full h-[2px] bg-white
                        capitalize"
                        ></span>
                      )}
                    </>
                  ))}

                  <ul className="absolute left-0 top-8 hidden group-hover:block bg-gray-100 p-4 rounded shadow-lg space-y-2 text-gray-700">
                    {menu.items.map((item, idx) => {
                      const formatted = item.split(" ").join("");
                      return (
                        <li
                          key={idx}
                          onClick={() => {
                            setNav(
                              item.includes(" ")
                                ? item.split(" ").join("")
                                : item
                            );
                            handleSlideTo(0);
                          }}
                          className={`hover:text-blue-500 capitalize laptop:text-sm largeLaptop:text-base cursor-pointer text-black ${
                            nav == formatted ? "text-blue-500" : ""
                          }`}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="count fixed tablet:bottom-10 bottom-5 tablet:text-lg text-xs
       left-5 tablet:left-14 z-20 text-white "
      >
        {filteredData.map((data, index) => (
          <div key={index}>
            <p>{`${selected} / ${data.items.length}`}</p>
          </div>
        ))}
      </div>

      <div
        className="fixed top-1/4 left-1/2 laptop:top-2/4 laptop:left-40 tablet:top-2/4 tablet:left-14 tablet:gap-3 flex flex-col 
            transform -translate-x-1/2 -translate-y-1/2 tablet:-translate-x-0 tablet:translate-y-0 tablet:text-lg text-xs z-20 text-white"
      >
        {filteredData.map((data, dataIndex) => (
          <div key={`${dataIndex}`} className="overflow-hidden -z-10">
            <div
              className="font-bold tablet:text-4xl capitalize text-base "
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <p className="title tablet:max-w-sm">
                {data?.items[selected - 1]?.title}
              </p>
            </div>

            <div
              className="font-medium tablet:text-xl text-sm capitalize mt-2"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <p className="title">{data?.items[selected - 1]?.subTitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="count fixed tablet:bottom-10 bottom-5 tablet:text-base text-xs
       right-5 tablet:right-14 z-20 text-white "
      >
        <p>click to explore</p>
      </div>
    </>
  );
}
