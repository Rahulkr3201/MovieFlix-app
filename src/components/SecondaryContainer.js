import React from "react";
import Movielist from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  //importing "(movies" data from store using useselector and passing in movielist.js
  const movies = useSelector((store) => store.movies);
  // console.log("movies use", movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 z-20 relative">
        <Movielist title={"Now Playing"} movies={movies?.addNowPlayingMovies} />
        <Movielist title={"Top Rated"} movies={movies.TopRatedMovies} />
        <Movielist title={"Popular"} movies={movies.PopularMovies} />
        <Movielist title={"Up coming"} movies={movies.upcomingMovies} />
        <Movielist
          title={"Recently Added"}
          movies={movies?.addNowPlayingMovies}
        />
        <Movielist title={"Most watched"} movies={movies.TopRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
