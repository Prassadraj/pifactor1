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
    const tl = gsap.timeline({ delay: 5 });
    gsap.set(".logo .img", {
      y: 100,
    });
    gsap.set(".nav-item p", {
      y: 100,
    });

    // Animate the logo
    tl.to(".logo .img", {
      y: 0,
      ease: "power3.out",
      stagger: 0.1,
      duration: 0.5,
    });
    tl.to(".nav-item p", {
      y: 0,
      ease: "power3.out",
      stagger: 0.1,
      duration: 0.5,
      opacity: 1,
    });
    return () => {
      tl.kill(); // Clean up the timeline on component unmount
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 left-0 w-full gap-2 flex tablet:justify-between items-center px-2 py-5 laptop:px-16 laptop:py-10 ${montserrat.className}  transition-opacity duration-300`}
    >
      <Link
        href="/"
        className={`logo ${
          isNavVisible ? "opacity-100" : "opacity-0"
        }  transition-opacity duration-300
      `}
      >
        <Image className="img  w-32 lg:w-52 " src={logo} alt="Logo" />
      </Link>

      <Header />
    </div>
  );
}

export default Nav;
{
  /* <div className="tablet:flex hidden gap-4 tablet:gap-5  laptop:gap-10 cursor-pointer">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={`nav-item group flex flex-col items-center  ${
                pathname === item.href ? "text-gray-800" : ""
              }`}
            >
              <p className="tablet:text-base text-xs text-white name">
                {item.name}
              </p>
              <p className="h-[1px] laptop:block hidden bg-white w-0 group-hover:w-full "></p>
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
      </div> */
}
