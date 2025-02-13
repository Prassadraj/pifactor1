"use client";
import React, { useState } from "react";
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
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});
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
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
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
        <div className={`${styles.body} ${montserrat.style}}`}>
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className={styles.nav}
          >
            <div className={`${styles.header} text-red-400`}>
              <p className="laptop:text-xs text-gray-400">Navigation</p>
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
        className="w-screen h-screen bg-black inset-0 tablet:hidden px-5 py-10"
      >
        <div className=" ">
          <Image
            width={200}
            height={100}
            className="w-32 "
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="mt-16 text-white px-4">
          <ul className="w-64 space-y-4 text-4xl">
            <li>Home</li>
            <li>
              <div
                onClick={() => setMenuOpen((prev) => !prev)}
                className=" flex gap-4 items-center"
              >
                Work <span className="text-2xl">{isWorkOpen ? "▲" : "▼"}</span>
              </div>
              {menuOpen && (
                <ul className="h-60 overflow-y-scroll  p-2 ">
                  {menus.map((data, i) => (
                    <li key={i} className=" ">
                      <p className="text-2xl font-bold mt-4 text-gold">
                        {data.title}
                      </p>
                      <ul className="mt-2 space-y-2">
                        {data.items.map((val, i) => (
                          <li key={i} className=" text-xl">
                            • {val}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
``;
