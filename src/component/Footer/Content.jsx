"use client";
import React, { useEffect, useRef } from "react";

export default function Content() {
  return (
    <div className="relative h-full w-full">
      <div className="bg-gradient-to-tr py-10 bg-black px-12 h-full w-full flex flex-col justify-between">
        <Nav />
      </div>
    </div>
  );
}

const Nav = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);
  return (
    <div className="flex  justify-around h-full flex-col ">
      <div className="flex gap-2">
        <div className="flex flex-col gap-10 z-50">
          <div>
            <h1 className="font-medium text-[120px]">Our </h1>
            <h1 className="font-medium text-[120px]">Story</h1>
          </div>
          <div>
            <p className="text-2xl max-w-2xl font-light">
              PiFactor merges creativity and curiosity, making each project a
              journey in visual discovery
            </p>
          </div>
        </div>
        <div className="w-1/2 h-full flex items-start">
          <video
            ref={videoRef}
            className="h-full w-full laptop:scale-x-150 laptop:scale-y-150 tablet:scale-x-150 tablet:scale-y-150 opacity-85 z-0 "
            autoPlay
            muted
            loop
            playsInline
            src="/footer.mp4"
          ></video>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="w-full h-[2px] bg-violet-900 "></div>
        <div className="flex  gap-20">
          <div>
            <ul className="text-gray-200 font-thin">
              <li>TTK Road,chennai</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:pifactor@gmail.com">pifactor@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-200 font-thin">
              <li className="cursor-pointer ">
                <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
                  Work
                </span>
              </li>
              <li className="cursor-pointer ">
                <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
                  Studio
                </span>
              </li>
              <li className="cursor-pointer">
                <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div>
              {" "}
              <ul className="text-gray-200 font-thin">
                <li className="cursor-pointer ">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
                    Behance
                  </span>
                </li>
                <li className="cursor-pointer ">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
                    Twitter
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
                    Youtube
                  </span>
                </li>
                <li className="cursor-pointer">
                  <span className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gray-200 after:scale-x-0 after:transition-transform after:duration-300">
                    Instagram
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
