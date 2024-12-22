import { Montserrat } from "next/font/google";
import React from "react";
const montserrat = Montserrat({
  subsets: ["latin"],
});
function page() {
  return (
    <div
      className={`   h-screen w-full tablet:px-20 tablet:py-20 ${montserrat.className}`}
    ><p>dssds</p></div>
  );
}

export default page;
