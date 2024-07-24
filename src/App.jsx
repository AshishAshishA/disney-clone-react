import { useState } from "react";
import Header from "./components/header";
import Slider from "./components/slider";
// import "./App.css";
import ProductionHouse from "./components/productionHouse";
import GenreMovieList from "./components/genreMovieList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </>
  );
}

export default App;
