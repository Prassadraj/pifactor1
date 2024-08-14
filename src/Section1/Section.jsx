"use client";
import Nav from "@/Nav/Nav";
import React, { useEffect } from "react";
import "./section.css";
import { gsap } from "gsap";
import { Montserrat, Raleway } from "@next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900", "100"], // Add any specific font weights you need
});
function Section() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });
    const movement = [-200, 150, -200, -90, 100, -200, 180, -220];

    gsap.set("h1", { y: 100 });
    gsap.set(".counter p", { y: 35 });

    tl.to("h1", {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.1,
    });
    tl.to(
      ".counter p",
      {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
      },
      "-=0.5"
    );
    tl.to(".counter p", {
      y: -35,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.5,
    });
    tl.to(".counter p", {
      y: -75,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.5,
    });
    tl.to(".counter p", {
      y: -105,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.5,
    });
    tl.from(
      ".tagline",
      {
        y: 40,
        opacity: 0,
      },
      "-=4"
    );

    tl.to("h1", {
      fontSize: "30vh",
      // fontStyle:"bold",
      duration: 1,
      ease: "power3.out",
    });
    tl.to(
      ".header-item",
      {
        clipPath: "none",
        duration: 0.1,
      },
      "<"
    );
    tl.to(
      ".block",
      {
        clipPath: " polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: "0.5",
        stagger: {
          amount: 0.5,
          from: "random",
          ease: "power3.out",
        },
      },
      "<"
    );
    movement.forEach((move, i) => {
      tl.to(
        `.hh-${i + 1}`,
        {
          y: move,
          duration: 0.5,
          ease: "power3.out",
        },
        "<"
      );
    });
  }, []);

  return (
    <div className="container">
      {/* Navigation */}
      <Nav />

      {/* Hero Video Section */}
      <div className="hero-video">
        <video
          className="w-full h-full object-cover"
          loop
          src="./intro.mp4"
          autoPlay
          muted
        ></video>
      </div>

      {/* Blocks Section */}
      <div className="blocks">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>

      {/* Header Section */}
      <div className={`header ${montserrat.className}`}>
        {["P", "I", "F", "A", "C", "T", "O", "R"].map((letter, index) => (
          <div className="header-item" key={index}>
            <div className={`header-wrapper hh-${index + 1}`}>
              <h1 className="">{letter}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Counter Section */}
      <div className="counter text-white">
        <p>
          3 <br />
          2 <br />1
        </p>
      </div>

      {/* Tagline Section */}
      <div className="tagline">
        {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          beatae cupiditate voluptatum
        </p> */}
      </div>
    </div>
  );
}

export default Section;
