import React, { useEffect, useState, useRef } from "react";
import { movieByGenreBaseURL, apikey } from "../Services/GlobalServices";
import axios from "axios";
import MovieCard from "./movieCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HrMovieCard from "./hrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  const fetchMovieByGenre = async () => {
    const response = await axios.get(
      movieByGenreBaseURL + apikey + "&with_genres=" + genreId
    );
    setMovieList(response.data.results);
  };
  const leftSlider = (element) => {
    element.scrollLeft -= 500;
  };

  const rightSlider = (element) => {
    element.scrollLeft += 500;
  };
  useEffect(() => {
    fetchMovieByGenre();
  }, []);
  return (
    <div>
      <MdKeyboardArrowLeft
        onClick={() => leftSlider(elementRef.current)}
        className={`text-white text-[30px] font-bold absolute mx-[-20px] ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[160px]"
        } scroll-smooth cursor-pointer`}
      />
      <MdKeyboardArrowRight
        onClick={() => rightSlider(elementRef.current)}
        className={`text-white text-[30px] absolute ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[160px]"
        } right-0 mx-[25px] scroll-smooth cursor-pointer`}
      />
      <div
        className="flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-4 px-3 pb-4"
        ref={elementRef}
      >
        {movieList.map((item) =>
          index_ % 3 == 0 ? (
            <HrMovieCard movie={item} />
          ) : (
            <MovieCard movie={item} />
          )
        )}
      </div>
    </div>
  );
};

export default MovieList;
