import { Montserrat } from "@next/font/google";
import Image from "next/image";
import React from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "10.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "line.webp",
];

function Spread() {
  return (
    <>
      <div className="h-[200vh] w-full ">
        <div className="h-[130vh] relative flex items-center justify-center">
          <div className="relative">
            <Image
              width={400}
              height={600}
              className="object-cover"
              src={`/3dImages/${images[12]}`} // Path corrected to remove "./"
              alt="3D image"
              priority // Improves loading performance
            />
            <div className="absolute  top-10 -right-24 ">
              <Image
                width={200}
                height={200}
                className="object-cover h-[300px]"
                src={`/3dImages/${images[0]}`} // Path corrected to remove "./"
                alt="3D image"
                priority // Improves loading performance
              />
            </div>
            <div className="absolute  bottom-28 -left-36 ">
              <Image
                width={200}
                height={200}
                className="object-cover h-[250px]"
                src={`/3dImages/${images[5]}`} // Path corrected to remove "./"
                alt="3D image"
                priority // Improves loading performance
              />
            </div>
          </div>
          <div className="absolute  -bottom-10 left-60">
            <Image
              width={300}
              height={400}
              className="object-cover"
              src="/images/1.jpeg" // Path corrected to remove "./"
              alt="3D image"
              priority // Improves loading performance
            />
          </div>
          <div className="absolute  -bottom-20 right-56 ">
            <Image
              width={300}
              height={200}
              className="object-cover h-[300px]"
              src={`/3dImages/${images[4]}`} // Path corrected to remove "./"
              alt="3D image"
              priority // Improves loading performance
            />
          </div>
        </div>
        <div className={`flex  flex-col mt-5 ${montserrat.className}`}>
          <div className="text-center text-[100px] flex flex-col leading-tight mb-4">
            <p className="text-gradient-to-tr from-slate-300 via-blue-800 to-white">Spread</p>
            <p>the News</p>
          </div>
          <div className="max-w-md mx-auto">
            <p className="text-2xl text-center">
              Find out more about our work on these leading design and
              technology platforms
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spread;
