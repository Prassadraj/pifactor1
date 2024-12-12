"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import "./nav.css";
import logo from "../../app/images/PixcellFactory_logo.png";
import sparkle from "../../app/images/sparkle.png";
import Header from "../../component/header";

const montserrat = Montserrat({ subsets: ["latin"] });

function Nav() {
  const pathname = usePathname(); // Get the current pathname
  const [isNavVisible, setIsNavVisible] = useState(true);
  const location = usePathname();

  const navItems = [
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle nav visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline({ delay: 5 });

    // Initial setup
    gsap.set(".logo .img", { y: 100 });
    gsap.set(".nav-item", { y: 100, opacity: 0 });

    // Animate the logo and nav items
    tl.to(".logo .img", {
      y: 0,
      ease: "power3.out",
      duration: 0.5,
    }).to(
      ".nav-item",
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        stagger: 0.1,
        duration: 0.5,
      },
      "-=0.3"
    );

    return () => {
      tl.kill(); // Clean up GSAP timeline on unmount
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 left-0 w-full flex tablet:justify-between items-center px-2 py-5 laptop:px-16 laptop:py-10 gap-2 ${montserrat.className} transition-opacity duration-300`}
    >
      {/* Logo Section */}
      <Link
        href="/"
        className={`logo ${
          isNavVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 hidden tablet:block`}
      >
        <Image className="img w-32 tablet:w-52 z-50" src={logo} alt="Logo" />
      </Link>

      {/* Navigation Items */}
      {isNavVisible ? (
        <div
          className={`tablet:flex hidden gap-4 tablet:gap-5 laptop:gap-10 cursor-pointer 
      transition-all duration-1000 ease-in-out transform opacity-100 visible`}
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className={`nav-item group flex flex-col items-center ${
                  pathname === item.href ? "text-gray-800" : ""
                }`}
              >
                <p className="tablet:text-base text-xs text-white name">
                  {item.name}
                </p>
                <p className="h-[1px] laptop:block hidden bg-white w-0 group-hover:w-full transition-all duration-300"></p>
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
      ) : (
        <Header
          className={`transition-all duration-1000 ease-in-out transform opacity-0 invisible`}
        />
      )}
    </div>
  );
}

export default Nav;
