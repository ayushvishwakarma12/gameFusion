import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import {
  nextPage,
  previousPage,
  selectAllGames,
} from "../../redux/slice/gameUtils";
//import { selectAllGames, selectAllGamesStatus } from "./utils/gameUtils";

import { fetchAsynchGames } from "../../redux/slice/gameUtils2";
import GameCard from "../GameCard/GameCard";
import { STATUS } from "../../utils/status";
import ImageSlider from "./ImageSliderr";
import Tabs from "../Common/Tabs";
import Title from "../Common/Title";

export default function FindGame() {
  const dispatch = useDispatch();
  const { games, gameStatus } = useSelector((state) => state.games);
  const currentPage = useSelector((state) => state.games.currentPage);
  console.log(currentPage);
  const { results } = games;

  const fetchGameData = async (page) => {
    dispatch(fetchAsynchGames(currentPage));
  };

  useEffect(() => {
    fetchGameData();
  }, []);
  console.log(games);
  const onClickNextPage = () => {
    dispatch(nextPage());
    dispatch(fetchAsynchGames(currentPage + 1));
  };
  const onClickPreviousPage = () => {
    if (currentPage > 1) {
      dispatch(previousPage());
      dispatch(fetchAsynchGames(currentPage - 1));
    }
  };

  return (
    <>
      <div className="p-5 bg-slate-950 min-h-screen flex flex-col">
        <Title titleName={{ firstText: "ALL", secondText: "GAMES" }} />
        <div className="min-h-[80vh] min-w-min flex justify-center items-center">
          {gameStatus === STATUS.SUCCEEDED ? (
            <ul className="lg:pr-32 lg:pl-32 grid sm:grid-cols-1 md:grid-cols-2 md:gap-2 gap-5">
              {results.map((eachGame) => {
                return <GameCard key={eachGame.id} gameData={eachGame} />;
              })}
            </ul>
          ) : (
            <Loader />
          )}
        </div>
        <div className="flex justify-between self-center pt-10 pb-10">
          <button
            onClick={onClickNextPage}
            type="button"
            className="text-white mr-5 w-40 bg-gradient-to-r from-slate-600 via-slate-800 to-slate-900 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-slate-300 shadow-lg shadow-slate-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            next
          </button>
          <button
            onClick={onClickPreviousPage}
            type="button"
            className="text-white mx-5 w-40 bg-gradient-to-r from-slate-600 via-slate-800 to-slate-900 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-slate-300 shadow-lg shadow-slate-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            previous
          </button>
        </div>
      </div>
    </>
  );
}
