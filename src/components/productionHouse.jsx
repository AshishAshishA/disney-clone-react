import React from "react";
import disneyI from "../assets/images/disney.png";
import marvelI from "../assets/images/marvel.png";
import nationalGI from "../assets/images/nationalG.png";
import pixarI from "../assets/images/pixar.png";
import starwarI from "../assets/images/starwar.png";

import disneyV from "../assets/videos/disney.mp4";
import marvelV from "../assets/videos/marvel.mp4";
import nationalGV from "../assets/videos/national-geographic.mp4";
import pixarV from "../assets/videos/pixar.mp4";
import starwarV from "../assets/videos/star-wars.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      img: disneyI,
      vid: disneyV,
    },
    {
      id: 2,
      img: marvelI,
      vid: marvelV,
    },
    {
      id: 3,
      img: nationalGI,
      vid: nationalGV,
    },
    {
      id: 4,
      img: pixarI,
      vid: pixarV,
    },
    {
      id: 5,
      img: starwarI,
      vid: starwarV,
    },
  ];
  return (
    <>
      <div className="w-full flex gap-5 md:gap-6 p-2 px-16 cursor-pointer overflow-x-auto">
        {productionHouseList.map((item) => (
          <div
            key={item.id}
            className="border-2 border-gray-950 rounded-lg shadow-lg shadow-gray-600 hover:scale-110"
          >
            <video
              src={item.vid}
              autoPlay
              loop
              playsInline
              // controls
              className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
            ></video>
            <img src={item.img} alt="image" className="w-full z-1" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductionHouse;
