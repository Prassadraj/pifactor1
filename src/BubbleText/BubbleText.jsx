import React, { useState } from "react";

const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="hover-text text-center text-5xl font-thin text-indigo-300">
      <Text>Bubbbbbbbble text</Text>
    </h2>
  );
};

const Text = ({ children }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };

  return (
    <>
      {children.split("").map((child, idx) => {
        let style = {
          transition: "0.35s font-weight, 0.35s color",
          fontWeight: "100",
          color: "rgb(165, 180, 252)",
        };

        if (idx === hoveredIdx) {
          style.fontWeight = "900";
          style.color = "rgb(238, 242, 255)";
        } else if (idx === hoveredIdx - 1 || idx === hoveredIdx + 1) {
          style.fontWeight = "500";
          style.color = "rgb(199, 210, 254)";
        }

        return (
          <span
            key={idx}
            style={style}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            {child}
          </span>
        );
      })}
    </>
  );
};

export default Example;
