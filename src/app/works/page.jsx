import Work from "@/Homepage/Works/3dWorks/Work";
import Footer from "@/Homepage/Works/Footer/Footer";
import PlayReel from "@/Homepage/Works/PlayReel";
import Spread from "@/Homepage/Works/Spread/Spread";
import Work1 from "@/Homepage/Works/Work1";
import Work2 from "@/Homepage/Works/Work2";
import Work4 from "@/Homepage/Works/Work4";
import React from "react";

function Works() {
  return (
    <div className="tablet:py-20">
      <Work1 />
      <PlayReel />
      <Work2 />
      <Work />
      <Work4 />
      <Spread />
      <Footer />
    </div>
  );
}

export default Works;
