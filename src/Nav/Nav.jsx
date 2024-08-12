"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";

import logo from "../app/images/PixcellFactory_logo.png";
import sparkle from "../app/images/sparkle.png";
import { Montserrat } from "@next/font/google";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "100"], // Add any specific font weights you need
});

function Nav() {
  const pathname = usePathname(); // Get the current pathname

  const navItems = [
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  const tl = gsap.timeline();
  useEffect(() => {
    gsap.fromTo(
      ".img,.name",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        delay: 5.3,
   
        stagger: 0.4,
        y: 0,
      }
    );
  }, []);

  return (
    <div
      className={`fixed  top-0 z-50 left-0 w-full flex justify-between items-center px-4 py-2 lg:px-16 lg:py-10 ${montserrat.className}`}
    >
      <Link href="/">
        <Image className="img lg:w-52" src={logo} alt="Logo" />
      </Link>
      <div className="flex gap-10 cursor-pointer">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={`group flex flex-col items-center text-base  transition-all duration-300 ease-in-out ${
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
