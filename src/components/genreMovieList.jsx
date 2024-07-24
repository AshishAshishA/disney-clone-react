import React from "react";
import GenreList from "../constant/genresList";
import MovieList from "./movieList";

const GenreMovieList = () => {
  return (
    <>
      <div>
        {GenreList.genere.map((item, index) => (
          <div className="p-2 px-8 md:px-16">
            <h2 className="text-white font-bold py-3">{item.name}</h2>
            <MovieList genreId={item.id} index_={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreMovieList;
