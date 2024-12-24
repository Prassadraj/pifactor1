import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";
import spark from "../images/sparkle.png";
import Footer from "@/component/Footer/Footer";
const montserrat = Montserrat({
  subsets: ["latin"],
});
const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

function Page() {
  return (
    <>
      <div className="pt-[15vh] flex flex-col ">
        <div className="flex justify-center items-center px-10 z-10 h-[420px]">
          <Image
            src="/contactUs.jpg" // Path relative to the 'public' folder
            alt="Contact Us Image"
            width={280}
            height={400}
            quality={90}
            className="object-cover h-[400px]" // Ensures the image covers the container without distortion
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="6" // Adjust this value for speed (lower value = slower)
            className={`text-[90px] font-bold ${montserratLight.className}`}
          >
            Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·
          </marquee>
        </div>
      </div>
      <div
        className={`pt-[14vh] px-7 flex flex-col gap-10 h-fit py-20 ${montserrat.className}`}
      >
        <p className={`text-3xl font-semibold ${montserratLight.className}`}>
          All set for lift-off? Drop us a ping, send a tweet, message, or poke,
          and we’ll be back in no time!
        </p>
        <div className="flex items-center gap-2">
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <p className="text-2xl underline">pifactor@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <p className="text-2xl underline">+91 123456789</p>
        </div>
        <div className="pl-2">
          <p className="text-xl capitalize">{`TTK Road, chennai,
       `}</p>
          <p className="text-xl"> TamilNadu</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={spark} width={20} height={20} alt="Sparkle Effect" />
          <p className="text-2xl underline">View on Maps</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
{
  /* <div
className={`h-[110vh] relative flex flex-col ${montserrat.className}`}
>
<div
  className="absolute z-10 left-1/2 top-2/4 transform -translate-x-1/2 -translate-y-1/2 w-[300px] 
h-[500px]"
>
  <Image
    src="/contactUs.jpg" // Path relative to the 'public' folder
    alt="Contact Us Image"
    fill
    className="object-cover" // Ensures the image covers the container without distortion
  />
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
  <marquee
    behavior="scroll"
    direction="left"
    scrollamount="10" // Adjust this value for speed (lower value = slower)
    className={`text-[90px] font-bold ${montserratLight.className}`}
  >
    Get in touch · 保持联系 · Ponerse en contacto · Neem contact op ·
  </marquee>
</div>
<div className="absolute bottom-0 px-7">
  <p className="text-2xl font-medium">
    "All set for takeoff? Drop us a ping, send a tweet, message, or
    poke, and we’ll be back in a flash!"
  </p>
</div>
</div> */
}
