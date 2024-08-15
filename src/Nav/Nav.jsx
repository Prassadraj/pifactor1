"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Montserrat } from "@next/font/google";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

import logo from "../app/images/PixcellFactory_logo.png";
import sparkle from "../app/images/sparkle.png";

const montserrat = Montserrat({ subsets: ["latin"] });

function Nav() {
  const pathname = usePathname(); // Get the current pathname
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navItems = [
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 5, // Start the timeline after 5 seconds
    });

    // Animate the logo
    tl.to(".logo", {
      opacity: 1,
      y: 0,
      duration: 1, // Animation duration
      ease: "power2.out", // Easing function
    });

    // Animate the navigation items
    tl.to(".nav-item", {
      opacity: 1,
      y: 0,
      stagger: 0.2, // Delay between each item
      duration: 1, // Animation duration
      ease: "power2.out", // Easing function
    });

    return () => {
      tl.kill(); // Clean up the timeline on component unmount
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 left-0 w-full gap-2 flex lg:justify-between items-center px-2 py-1 lg:px-16 lg:py-10 ${
        montserrat.className
      } ${
        isNavVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
    >
      <Link href="/">
        <Image
          className="logo opacity-0 transform translate-y-10 w-32 lg:w-52 transition-all duration-300"
          src={logo}
          alt="Logo"
        />
      </Link>
      <div className="flex gap-4 lg:gap-10 cursor-pointer">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={`nav-item group flex flex-col items-center text-base opacity-0 transform translate-y-10 transition-all duration-300 ease-in-out ${
                pathname === item.href ? "text-gray-800" : ""
              }`}
            >
              <p className="text-base text-white name">{item.name}</p>
              <p className="h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300"></p>
              {pathname === item.href && (
                <Image
                  className="transition-all duration-300"
                  src={sparkle}
                  alt="Sparkle"
                  width={15}
                  height={15}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
