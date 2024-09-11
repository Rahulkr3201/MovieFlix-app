import React from "react";
import { IMG_CONST } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (posterPath === null) return;
  return (
    <div className="  w-40  p-1">
      <img
        className="rounded-lg"
        alt="Movie card"
        src={IMG_CONST + posterPath}
      />
    </div>
  );
};

export default MovieCard;
