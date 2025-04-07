import React from "react";
import Laptop1 from "./Laptop1";
import Mobile1 from "./Mobile1";
import First from "./First";

function Work1() {
  return (
    <>
      <div className="hidden tablet:block">
        {/* <Laptop1 /> */}
        <First />
      </div>
      <div className="tablet:hidden ">
        <Mobile1 />
      </div>
    </>
  );
}

export default Work1;
