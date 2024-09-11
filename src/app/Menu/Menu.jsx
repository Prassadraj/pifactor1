"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../images/PixcellFactory_logo.png";
import Link from "next/link";
import "./menu.css";
import { Lato } from "@next/font/google";
const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});
function Menu() {
  const container = useRef();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navItems = [
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  const toggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <div
      className={`${lato.className} menu-container flex flex-col justify-between z-40 fixed top-0 left-0 lg:px-16 lg:py-10 w-full`}
      ref={container}
    >
      <div className="menu-bar flex w-full justify-between items-center">
        <div className="menu-logo">
          <Link href="/">
            <Image className="w-32 lg:w-52 " src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-open" onClick={toggle}>
          <p className="">Menu</p>
        </div>
      </div>
      <div className="menu-overlay z-50 bg-gray-500 h-full fixed top-0 left-0 lg:px-16 lg:py-10 w-full">
        <div className="menu-overlay-bar flex w-full justify-between items-center">
          <div className="menu-logo">
            {/* <Image className="img  w-32 lg:w-52 " src={logo} alt="Logo" /> */}
            <Link href="/">
              <p>Logo</p>
            </Link>
          </div>
          <div className="menu-close" onClick={toggle}>
            <p>Close</p>
          </div>
        </div>
        <div className="menu-copy flex">
          <div className="menu-links">
            {navItems.map((nav, i) => (
              <div key={i} className="menu-links-item">
                <div
                  className="menu-links-item-holder text-[70px]"
                  onClick={toggle}
                >
                  <Link className="menu-link" href={nav.href}>
                    {nav.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="menu-close-icon flex items-end justify-between">
          <p className="text-4xl">&#x2715;</p>
          <div className="menu-info">
            <div className="menu-info-col flex flex-col items-end">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Insta
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Insta
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Insta
              </a>
            </div>
            <div className="menu-info-col">
              <p>adress</p>
              <p>phn no</p>
            </div>
          </div>
          <div className="menu-preview">
            <p>view</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
