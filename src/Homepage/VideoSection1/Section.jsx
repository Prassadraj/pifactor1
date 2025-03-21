"use client";

import React, { useEffect, useState } from "react";
import "./section.css";
import { gsap } from "gsap";
import { Montserrat } from "next/font/google";
const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: "300", // Specify weight as a string instead of an array
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

function Section() {
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  useEffect(() => {
    // Check if the animation has already played
    const played = sessionStorage.getItem("hasPlayedOnce");
    const isMobile = window.innerWidth <= 768;
    if (!played) {
      const tl = gsap.timeline({ delay: 0 });
      const movement = [
        -130, 100, -130, -90, 100, 110, -110, 115, -115, 120, -130, 180, -130,
      ];

      tl.to(".cover-screen", {
        display: "none",
      });

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
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.5,
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
        // delay: 2,
        // duration: 1,
        ease: "power2.out",
        onComplete: () => {
          setHasPlayedOnce(true);
          sessionStorage.setItem("hasPlayedOnce", "true"); // Persist the state
        },
      });
    } else {
      // Else part for when animation has already played
      const tl = gsap.timeline({ delay: 0.5 });

      const movement = [
        -130, 100, -130, -90, 100, 110, -110, 115, -115, 120, -130, 180, -130,
      ];

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
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.5,
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

      tl.to("h1", {
        display: "none",
        delay: 2,
        duration: 1,
        ease: "power2.out",
      });

      setHasPlayedOnce(true);
    }
  }, []);

  return (
    <div className="containerVideo tablet:block ">
      {!hasPlayedOnce && <div className="cover-screen"></div>}{" "}
      {/* Cover Screen Element */}
      <div className="hero-video w-full h-screen">
        <video
          className="hidden tablet:block w-full h-full object-cover"
          loop
          src="/PF_LOGO.mp4"
          autoPlay
          playsInline
          muted
          preload="metadata"
        ></video>
        <video
          className="tablet:hidden w-full h-full object-cover"
          loop
          src="/logoMobile.mp4"
          autoPlay
          playsInline
          muted
          preload="metadata"
        ></video>
        <p
          className={`absolute  bottom-4 tablet:bottom-2 right-4 text-sm text-black ${montserratLight.className}`}
        >
          ↓ Dive in
        </p>
      </div>
      <div>
        <div className="blocks">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
        {!hasPlayedOnce && (
          <div className={`header  ${montserrat.className}`}>
            {[
              "P",
              "i",
              "x",
              "c",
              "e",
              "l",
              "l",
              " ",
              "F",
              "a",
              "c",
              "t",
              "o",
              "r",
              "y",
            ].map((letter, index) => (
              <div className="header-item" key={index}>
                <div className={`header-wrapper hh-${index + 1}`}>
                  <h1 className="text-gold">
                    {letter.includes(" ") ? (
                      <span key={index}>&nbsp;</span>
                    ) : (
                      letter
                    )}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        )}

        {!hasPlayedOnce && (
          <div className="counter text-white">
            <p>
              3 <br />
              2 <br />1
            </p>
          </div>
        )}

        {!hasPlayedOnce && <div className="tagline"></div>}
      </div>
    </div>
  );
}

export default Section;
