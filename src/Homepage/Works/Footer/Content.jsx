import React from "react";

export default function Content() {
  return (
    <div className="relative h-full w-full">
      {/* Earth as a background */}
      <div className="absolute inset-0 -z-10"></div>

      {/* Content Sections */}
      <div className="bg-gradient-to-tr py-20 bg-black px-12 h-full w-full flex flex-col justify-between">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="flex h-full justify-center">
      <Nav />
      <div className="w-1/2 h-full flex items-start ">
        <video
          className="h-full w-full "
          autoPlay
          muted
          loop
          playsInline
          src="/footer.mp4"
        ></video>
      </div>
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end absolute bottom-5">
      {/* <h1 className="text-[14vw] mt-10">Title</h1> */}
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-10">
      <div className="flex flex-col gap-10">
        <div>
          <h1 className="font-medium text-[120px]">Our </h1>
          <h1 className="font-medium text-[120px]">Story</h1>
        </div>
        <div>
          <p className="text-2xl max-w-lg">
            The story behind PiFactor is one of exploration, creativity and
            curiosity.
          </p>
        </div>
      </div>
    </div>
  );
};
