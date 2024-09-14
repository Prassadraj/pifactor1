import Footer from "@/Homepage/Works/Footer/Footer";
import PlayReel from "@/Homepage/Works/PlayReel";
import Spread from "@/Homepage/Works/Spread/Spread";
import Work1 from "@/Homepage/Works/Work1";
import Work2 from "@/Homepage/Works/Work2";
import Work3 from "@/Homepage/Works/Work3";
import Work4 from "@/Homepage/Works/Work4";
import React from "react";

function Works() {
  return (
    <div className="tablet:py-20">
      <Work1 />
      <PlayReel />
      <Work2 />
      <Work3 />
      <Work4 />
      <Spread />
      <Footer />
    </div>
  );
}

export default Works;
