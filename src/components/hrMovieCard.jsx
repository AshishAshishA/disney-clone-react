import React from "react";
import { IMAGE_BASE_URL } from "../Services/GlobalServices";

const HrMovieCard = ({ movie }) => {
  return (
    <div className="hover:scale-110 transition-all duration-150 ease-in">
      {console.log(movie)}
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt=""
        className="w-[110px] md:w-[220px] h-[150px] rounded-lg
    hover:border-[3px] border-gray-400 cursor-pointer
     transition-all duration-150"
      />
      <p className="text-white w-[110px] md:w-[220px] p-2 ">{movie.title}</p>
    </div>
  );
};

export default HrMovieCard;
