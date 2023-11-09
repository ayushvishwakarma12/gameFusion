import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { background } from "../../utils/images";
import ImageSlider from "./ImageSliderr";
import { STATUS } from "../../utils/status";
import Title from "../Common/Title";
import { useDispatch, useSelector } from "react-redux";
import GameList from "../GameCard/GameList";
import { fetchAsynchGames } from "../../redux/slice/gameUtils2";
import { join_image } from "../../utils/images";
import Tabs from "../Common/Tabs";
import { fetchAsynchGenres } from "../../redux/slice/genreUtils";

export default function Home() {
  const dispatch = useDispatch();
  const { games, gameStatus } = useSelector((state) => state.games);
  const genresStatus = useSelector((state) => state.genre.genreStatus);
  const genres = useSelector((state) => state.genre.genres.results);
  const { results } = games;
  const gamesList = results;

  const renderedPopularGames = (
    <>
      <GameList sliceValue={9} games={gamesList} />
      <div className="d-flex justify-content-center  bg-transparent">
        <Link
          to="/game"
          className="text-white bg-cyan-600 text-2xl p-2 pr-4 pl-4 font-semibold hover:text-white tracking-wider"
        >
          see more games
        </Link>
      </div>
    </>
  );

  useEffect(() => {
    dispatch(fetchAsynchGames());
    dispatch(fetchAsynchGenres());
  }, []);

  return (
    <>
      <div
        className="min-h-screen hover:bg-gradient-to-r p-8 md:p-10 md:pl-20 text-left"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${background}) center/cover no-repeat`,
        }}
      >
        <div className="mt-12 p-4 w-[300px] text-center hover:text-[28px] hover:transition-all hover:ease-in-out font-semibold text-2xl inline-block mb-6  bg-cyan-500 text-white cursor-pointer">
          Join Streaming
        </div>
        <div className="flex justify-between">
          <div className="mt-5">
            <h1 className="font-[barlow] text-6xl tracking-widest text-white">
              Welcome to GameZone
            </h1>
            <p className="font-mono text-lg font-semibold text-[#F2F3F5] mt-10 w-4/5 md:w-3/5 text-left">
              - Your Gateway to Gaming Excellence! Dive into the immersive world
              of gaming with us. Discover the latest games, read insightful
              reviews, stay updated on gaming news, and connect with fellow
              gamers. Whether you're a casual player or a hardcore enthusiast,
              GameZone is your one-stop destination for all things gaming. Join
              us on this epic journey and level up your gaming experience today!
            </p>
          </div>
        </div>
        <div className="text-left mt-16">
          <Link to={"/game"}>
            <button className=" bg-transparent border-[2px] border-cyan-700 w-[200px] p-5 text-white text-lg text-bold rounded-md cursor shadow-md transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-cyan-700 duration-300">
              Find Games
            </button>
          </Link>
        </div>
      </div>
      <ImageSlider />

      <section>
        <div className="p-5 bg-slate-950">
          <Title
            titleName={{ firstText: "top popular", secondText: "games" }}
          />
          {gameStatus === STATUS.LOADING ? (
            <h1>Loading...</h1>
          ) : gamesList?.length > 0 ? (
            <h1>{renderedPopularGames}</h1>
          ) : (
            "No games found!"
          )}
        </div>
      </section>

      <section
        className="section sc-join d-flex align-items-center"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${join_image}) center/cover no-repeat`,
        }}
      >
        <div className="container w-100">
          <div className="join-content text-white mx-auto text-center">
            <h2 className="join-title mb-3">
              JOIN THE <span>COMMUNITY</span>
            </h2>
            <p className="lead-text">
              Join our Discord community which is in the making and made by
              gamers for gamers. All are welcome to join no matter the game you
              play, we&apos;re here to have a good.
            </p>
            <button type="button" className="section-btn mt-4">
              join discord
            </button>
          </div>
        </div>
      </section>

      <section className="sc-genres">
        <div className="">
          <Title
            titleName={{
              firstText: "top",
              secondText: "genres",
            }}
          />
        </div>
        {genresStatus === STATUS.LOADING ? (
          <h1>Loding...</h1>
        ) : genres?.length > 0 ? (
          <Tabs sliceValue={9} data={genres} />
        ) : (
          "No genres found!"
        )}
      </section>
    </>
  );
}

const HomeWrapper = styled.div`
  .sc-popular {
    background-color: var(--clr-violet-dark-active);
    .section-btn {
      margin-top: 60px;
    }
  }

  .sc-join {
    min-height: 640px;

    .join-content {
      max-width: 600px;
    }

    .join-title {
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 44px;
      letter-spacing: 0.09em;

      span {
        color: var(--clr-green-normal);
        font-family: var(--font-family-right);
      }
    }
  }

  .sc-genres {
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores {
    min-height: 841px;
  }
`;
