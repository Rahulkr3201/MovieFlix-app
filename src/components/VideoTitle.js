import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen pt-[20%] px-24 absolute aspect-video  bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-16 text-xl rounded-md hover:bg-opacity-70">
          ▶ Play
        </button>
        <button className="mx-3 bg-white text-black p-4 px-16 text-xl  rounded-md hover:bg-opacity-70">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
