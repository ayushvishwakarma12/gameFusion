import React from "react";
import { Link } from "react-router-dom";
import StartRating from "../Common/StarRating";

export default function GameCard(props) {
  const { gameData } = props;
  console.log(gameData);
  const { id, name, released, background_image, rating, genres } = gameData;

  return (
    <li className="p-5 hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-105 cursor-pointer list-none">
      <Link to={`/game/${id}`} className="text-inherit">
        <div className="relative d-flex flex-col h-[280px] z-10 overflow-hidden">
          <img
            className="h-[280px] object-cover"
            alt={name}
            src={background_image}
          />
          <StartRating rating={rating} />
        </div>
        <div className="flex-1 pt-4 pl-4 bg-slate-900">
          <h1 className="text-white m-0 text-left text-2xl font-roboto font-bold tracking-wider">
            {name}
          </h1>
          <p>{rating}</p>
          <ul className="w-full">
            <li className="flex justify-between border-b-[0.5px] border-gray-500  border-opacity-40 pt-2 pb-3">
              <p className="text-gray-400">release date</p>
              <p className="text-white text-sm pr-2">2013</p>
            </li>
            <li className="flex justify-between border-b-[1px]  border-gray-500 border-opacity-40 pt-3 pb-3">
              <p className="text-gray-400">genres</p>
              <ul className="text-sm pr-2">
                {genres.map((eachGenre) => {
                  return (
                    <li
                      key={eachGenre.id}
                      className="text-white w-full flex flex-wrap text-right text-sm"
                    >
                      {eachGenre.slug}
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </Link>
    </li>
  );
}
