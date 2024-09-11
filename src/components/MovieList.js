import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log("movies null or not", movies);
  //console.log("movies[1]", movies[0]);
  return (
    <div className="pt-5 px-4 ">
      <h1 className="text-xl font-semibold text-white p-1">{title}</h1>
      <div className="flex overflow-x-scroll mt-2">
        {movies && (
          <div className="flex ">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
