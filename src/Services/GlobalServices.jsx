import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const apikey = "a90c97b127bdb028c7570567d159be57";

const medium_url1 = "/trending/all/day?api_key=";

export {
  movieBaseUrl,
  movieByGenreBaseURL,
  IMAGE_BASE_URL,
  apikey,
  medium_url1,
};
