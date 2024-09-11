import { useRef } from "react";
import lang from "../utils/lanuguageConstant";
import { useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addSearchedMovie } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //this function will take a movie from search bar and return its data
  //search movie in tmdb
  const searchMovieTMDB = async (gptResults) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        gptResults +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    //dispatch(json);
    console.log("json", json.results);
    dispatch(addSearchedMovie(json.results)); //dispatching searched movie into redux
  };

  const handleGptSearchClick = () => {
    const gptResults = searchText.current.value;
    searchMovieTMDB(gptResults);
  };

  return (
    <div className="pt-[10%]  h-[20%] ">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-md ml-96 w-[30%] "
          placeholder={lang[langKey].GptSearchplaceholder}
        />
        <button
          className="w-[8%]  h-12 bg-red-600 ml-6 text-white rounded md
        "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
