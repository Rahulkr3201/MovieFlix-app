import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestion = () => {
  //suggested movie conatin all the redux searched movie
  const { searchedMovie } = useSelector((store) => store.gpt);
  if (searchedMovie === 0) {
    return (
      <div className="bg-black text-white h-40 w-48">
        <p>😥Oooops</p>
        <p>Couldn't Find Movies</p>
      </div>
    );
  }
  return (
    <div className="bg-black flex overflow-x-scroll mt-0 md:mt-2 mx-0 md:mx-56">
      {searchedMovie && (
        <div className="flex">
          {searchedMovie.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
