"use client";
import Nav from "@/Nav/Nav";
import React, { useEffect, useState } from "react";
import "./section.css";
import { gsap } from "gsap";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900", "100"], // Add any specific font weights you need
});

function Section() {
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);

  useEffect(() => {
    const animationStatus = localStorage.getItem("animationPlayed");
    const animationTimestamp = localStorage.getItem("animationTimestamp");
    const now = Date.now();

    // Check if 5 minutes have passed since the animation was last played
    if (animationStatus && animationTimestamp && (now - parseInt(animationTimestamp)) < 5 * 60 * 1000) {
      setHasAnimationPlayed(true);
    } else {
      // Run animation if not already played or if 5 minutes have passed
      const tl = gsap.timeline({ delay: 1 });
      const movement = [-200, 100, -200, -90, 100, -200, 180, -200];

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

      // Fade out h1 elements
      tl.to("h1", {
        display: "none",
        delay: 2,
        duration: 1,
        ease: "power2.out",
      });

      // Set localStorage to indicate animation has played and update timestamp
      localStorage.setItem("animationPlayed", "true");
      localStorage.setItem("animationTimestamp", now.toString());
      setHasAnimationPlayed(true);
    }
  }, []);

  return (
    <div className="container">
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

      {/* Conditionally Render Sections Based on Animation Status */}
      {!hasAnimationPlayed && (
        <div>
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
      )}
    </div>
  );
}

export default Section;
