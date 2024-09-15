import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen md:w-screen pt-[20%] px-24 absolute aspect-video bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold text-white hidden md:block">
        {title}
      </h1>
      <p className="py-6 text-lg w-1/4 text-white z-0 hidden md:block">
        {overview}
      </p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-16 text-xl rounded-md hover:bg-opacity-70 hidden md:block">
          ▶ Play
        </button>
        <button className="mx-3 bg-white text-black p-4 px-16 text-xl  rounded-md hover:bg-opacity-70 hidden md:block">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
