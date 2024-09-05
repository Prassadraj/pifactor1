"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../images/PixcellFactory_logo.png";
import Link from "next/link";
import "./menu.css";
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
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/">
            <Image className="img  w-32 lg:w-52 " src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="menu-open" onClick={toggle}>
          <p className="">Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
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
        <div className="menu-close-icon">
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {navItems.map((nav, i) => (
              <div className="menu-links-item">
                <div className="menu-links-item-holder" onClick={toggle}>
                  <Link className="menu-link" href={nav.href}>
                    {nav.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="menu-info">
          <div className="menu-info-col">
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
  );
}

export default Menu;
