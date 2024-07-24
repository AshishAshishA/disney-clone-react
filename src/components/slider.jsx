import React, { useEffect, useState, useRef } from "react";
import {
  movieBaseUrl,
  IMAGE_BASE_URL,
  apikey,
  medium_url1,
} from "../Services/GlobalServices";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import axios from "axios";

const Slider = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [trendingMovieList, setTrendingMovieList] = useState([]);
  const screenWidth = window.innerWidth;

  const elementRef = useRef();

  const leftSlider = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  const rightSlider = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const getTrendingMovies = async () => {
    setLoading(true);
    try {
      const complete_url = movieBaseUrl + medium_url1 + apikey;
      console.log(complete_url);
      const response = await axios.get(complete_url);
      setTrendingMovieList(response.data.results);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
  return (
    <>
      <div>
        <MdKeyboardArrowLeft
          className="hidden md:block text-white text-[30px] absolute mx-8 mt-[180px] scroll-smooth cursor-pointer"
          onClick={() => leftSlider(elementRef.current)}
        />
        <MdKeyboardArrowRight
          className="hidden md:block text-white text-[30px] absolute right-0 mx-8 mt-[180px] scroll-smooth cursor-pointer"
          onClick={() => rightSlider(elementRef.current)}
        />
        <div
          className="flex overflow overflow-x-auto w-full px-16 pt-14 pb-4 scrollbar-none scroll-smooth"
          ref={elementRef}
        >
          {trendingMovieList.map((movie) => (
            <img
              src={IMAGE_BASE_URL + movie.backdrop_path}
              alt="movie template"
              className="max-w-full md:min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            />
          ))}
        </div>
        ;
      </div>
    </>
  );
};

export default Slider;
