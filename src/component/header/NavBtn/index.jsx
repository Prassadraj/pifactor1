"use client";
import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import logo from "../../../app/images/PixcellFactory_logo.png";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import MyContext from "@/context/MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "100"],
});
const montLight = Montserrat({ subsets: ["latin"], weight: ["200"] });

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/works",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Others",
    href: "/others",
  },
];

const menus = [
  {
    title: "Movies & others",
    items: ["vfx", "Title Animation", "Lyric Videos"],
    category: ["vfx", "Title", "Lyric"],
  },
  {
    title: "Digital",
    items: ["Ads", "Corporate"],
    category: ["Ads", "Corporate"],
  },
  {
    title: "Wedding",
    items: ["Short Invites", "Story Invites"],
    category: ["Short", "Story"],
  },
  {
    title: "2D",
    items: ["Stories", "Explainers"],
    category: ["Stories", "Explainers"],
  },
  {
    title: "3D",
    items: ["Animations", "Product Previz"],
    category: ["Animations", "Product"],
  },
];
export default function NavBtn() {
  // Renamed from "index" to "NavBtn"
  const pathname = usePathname();
  const { setNav, isActive, setIsActive } = useContext(MyContext);
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  // const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={`${styles.menu} hidden tablet:block`}
      >
        <div className="absolute tablet:top-12 tablet:left-5 top-9 left-5 largeLaptop:left-7">
          <Image
            width={200}
            height={100}
            className="w-32 laptop:w-40"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className={`${styles.body} ${montserrat.style} }`}>
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className={styles.nav}
          >
            <div className={`${styles.header} text-red-400`}>
              <p className={`laptop:text-xs text-gray-400 `}>Navigation</p>
            </div>
            {navItems.map((data, index) => {
              return (
                <Link
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator === data.href}
                  setSelectedIndicator={setSelectedIndicator}
                />
              );
            })}
          </div>
          <Footer />
        </div>
        <Curve />
      </motion.div>

      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={`${montserrat.style}  w-screen h-screen bg-black inset-0 tablet:hidden px-5 py-10 justify-evenly flex flex-col`}
      >
        <div className=" absolute top-10">
          <Image
            width={200}
            height={100}
            className="w-32 "
            src={logo}
            alt="Logo"
          />
        </div>

        <div className="mt-12 tablet:mt-16 text-white px-8">
          <ul className="w-64 space-y-4 text-4xl ">
            <li className={`text-xl ${montserrat.style} font-extralight `}>
              Navigation
              <li className="w-full h-[2px] bg-gold"></li>
            </li>

            <li className="flex gap-2  items-center ">
              <Link
                data={navItems[0]}
                isActive={selectedIndicator === "/"}
                setSelectedIndicator={setSelectedIndicator}
              />
            </li>
            <li>
              <div className=" flex gap-2 items-center ">
                <Link
                  data={navItems[1]}
                  isActive={selectedIndicator === "/works"}
                  setSelectedIndicator={setSelectedIndicator}
                ></Link>
              </div>

              <ul className="h-52 overflow-y-scroll  p-2 px-4">
                {menus.map((data, i) => (
                  <li key={i} className=" ">
                    <p className="text-2xl font-bold mt-4 text-gold">
                      {data.title}
                    </p>
                    <ul className={`mt-2 space-y-2 ${montLight.className}`}>
                      {data.items.map((val, i) => (
                        <li
                          key={i}
                          onClick={() => {
                            setNav(
                              val.includes(" ") ? val.split(" ").join("") : val
                            );
                            setIsActive(false);
                          }}
                          className=" text-xl"
                        >
                          <Link
                            data={{ title: val, href: "/works", i }}
                            setSelectedIndicator={setSelectedIndicator}
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                data={navItems[2]}
                isActive={selectedIndicator === navItems[2].href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            </li>
            <li>
              <Link
                data={navItems[3]}
                isActive={selectedIndicator === navItems[3].href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            </li>
            <li>
              <Link
                data={navItems[4]}
                isActive={selectedIndicator === navItems[4].href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            </li>
          </ul>
        </div>
        <ul className="flex justify-evenly mt-6 text-2xl">
          <li>
            <FontAwesomeIcon icon={faSquareInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
        </ul>
      </motion.div>
    </>
  );
}
``;
