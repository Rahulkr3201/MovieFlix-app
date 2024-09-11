import { API_OPTION } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = ({ movieid }) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieid +
        "+/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    //  console.log(json);
    //const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = json.results[1];
    //console.log(trailer);
    dispatch(addTrailerVideo(trailer)); //upon dispatching my {"my input"trailer} will be added in the store;
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
