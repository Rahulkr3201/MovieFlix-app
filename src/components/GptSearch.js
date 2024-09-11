import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { bgLogo } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={bgLogo} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
