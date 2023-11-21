import React from "react";
import { Link } from "react-router-dom";
import StartRating from "../Common/StarRating";

export default function GameCard(props) {
  const { gameData } = props;
  const { id, name, released, background_image, rating, genres } = gameData;

  return (
    <li className="p-5 hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-105 cursor-pointer list-none">
      <Link to={`/game/${gameData?.id}`} className="text-inherit">
        <div className="relative d-flex flex-col h-[280px] z-10 overflow-hidden">
          <img
            className="h-[280px] object-cover w-full brightness-90"
            alt={name?.name}
            src={gameData?.background_image}
          />
          <StartRating rating={gameData?.rating} />
        </div>
        <div className="flex-1 pt-4 pl-4 bg-slate-900 max-h-[150px] overflow-hidden">
          <h1 className="text-white m-0 text-left text-xl font-roboto font-bold tracking-wider">
            {gameData?.name}
          </h1>
          <ul className="w-full">
            <li className="flex justify-between border-b-[0.5px] border-gray-500  border-opacity-40 pt-2 pb-3">
              <p className="text-gray-400 text-base font-semibold">
                release date :{" "}
              </p>
              <p className="text-white text-xs pr-2">{gameData?.released}</p>
            </li>
            <li className="flex justify-between pt-3 pb-3">
              <p className="text-gray-400 font-semibold text-base text-left w-[70px]">
                genres :
              </p>
              <ul className="text-sm flex">
                {gameData?.genres?.map((eachGenre) => {
                  return (
                    <li key={eachGenre.id} className="text-white pl-2 text-xs">
                      {eachGenre.slug},
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
