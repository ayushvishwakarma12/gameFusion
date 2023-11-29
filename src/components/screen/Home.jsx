import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "react-lottie";

import ImageSlider from "./ImageSlider";
import { STATUS } from "../../utils/status";
import Title from "../Common/Title";
import GameList from "../GameCard/GameList";
import { fetchAsynchGames } from "../../redux/slice/gameUtils2";
import { join_image } from "../../utils/images";
import Tabs from "../Common/Tabs";
import { fetchAsynchGenres } from "../../redux/slice/genreUtils";
import Banner from "./Banner";
import Loading from "../Loader/Loader";
import BannerAnimation from "../../lotties/banner.json";
import { background } from "../../utils/images";

export default function Home() {
  const dispatch = useDispatch();
  const { games, gameStatus } = useSelector((state) => state.games);
  const genresStatus = useSelector((state) => state.genre.genreStatus);
  const genres = useSelector((state) => state.genre.genres.results);
  const { results } = games;
  const gamesList = results;

  const lottieSettings = {
    loop: true,
    autoplay: true,
    animationData: BannerAnimation,
    animationSpeed: 6000,
  };

  const renderedPopularGames = (
    <>
      <GameList sliceValue={9} games={gamesList} />
      <div className="d-flex justify-content-center bg-transparent pt-5 pb-20">
        <Link
          to="/games"
          className="text-white bg-cyan-600 text-2xl p-2 pr-4 pl-4 font-semibold hover:text-white tracking-wider"
        >
          see more games
        </Link>
      </div>
    </>
  );

  const topPopularGame = () => {
    return (
      <section>
        <div className="p-5 bg-slate-950">
          <Title
            titleName={{ firstText: "top popular", secondText: "games" }}
          />
          {gameStatus === STATUS.LOADING ? (
            <div className="bg-slate-950 min-h-[400px]">
              <Loading />
            </div>
          ) : gamesList?.length > 0 ? (
            <h1>{renderedPopularGames}</h1>
          ) : (
            "No games found!"
          )}
        </div>
      </section>
    );
  };

  const joinStreaming = () => {
    return (
      <div
        className="hover:bg-gradient-to-r p-8 md:p-10 text-left flex"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${background}) center/cover no-repeat`,
        }}
      >
        <div>
          <div className="flex justify-between">
            <div className="mt-5 pt-[100px]">
              <h1 className="font-poppins text-4xl lg:text-6xl tracking-widest text-white">
                Join The Community
              </h1>
              <p className="font-mono text-lg font-semibold text-[#F2F3F5] mt-10 w-full text-left">
                Level up your gaming experience with us! Dive into diverse
                gaming channels, connect with a global community, and
                participate in exclusive tournaments with epic prizes. Discuss
                the latest gaming trends and gear.
                <br />
                Let's game together and create unforgettable moments! 🎮🌐
              </p>
            </div>
          </div>
          <div className="text-left mt-16">
            <div className="bg-transparent border-[2px] cursor-pointer text-center border-cyan-700 w-[200px] p-5 text-white text-lg text-bold rounded-md cursor shadow-md transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-cyan-700 duration-300">
              Join Streaming
            </div>
          </div>
        </div>
        <div className="brightness-75 hidden lg:block">
          <Lottie options={lottieSettings} height={500} width={500} />
        </div>
      </div>
    );
  };

  const joinTheCommunity = () => {
    return (
      <section
        className="section sc-join d-flex align-items-center min-h-[500px]"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${join_image}) left top/cover no-repeat`,
        }}
      >
        <div className="w-100">
          <div className="text-white mx-auto text-center">
            <h2 className="font-poppins text-ll">
              At {"     "}
              <span className="pl-2 text-4xl font-semibold tracking-widest">
                GameFusion
              </span>
            </h2>
            <p className="text-lg mt-8 font-poppins leading-10">
              We believe that gaming is not just a pastime; it's a lifestyle.
              <br />
              Join us on this thrilling journey, where every click brings you
              closer to unparalleled gaming experiences. <br /> Let the fusion
              of passion and play begin!
            </p>
            <button
              type="button"
              className="bg-transparent mt-12 border-[2px] border-slate-700 w-[200px] p-5 text-white text-lg text-bold rounded-md cursor shadow-md transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-slate-700 duration-300"
            >
              join discord
            </button>
          </div>
        </div>
      </section>
    );
  };

  const topGenre = () => {
    return (
      <section id="category" className="bg-slate-950">
        <div className="bg-transparent pt-5">
          <Title
            titleName={{
              firstText: "top",
              secondText: "genres",
            }}
          />
        </div>
        {genresStatus === STATUS.LOADING ? (
          <div className="bg-slate-950 min-h-[400px]">
            <Loading />
          </div>
        ) : genres?.length > 0 ? (
          <Tabs sliceValue={9} data={genres} />
        ) : (
          "No genres found!"
        )}
      </section>
    );
  };

  useEffect(() => {
    dispatch(fetchAsynchGames());
    dispatch(fetchAsynchGenres());
  }, []);

  return (
    <>
      <Banner />
      <ImageSlider />
      {topPopularGame()}
      {joinStreaming()}
      {topGenre()}

      {joinTheCommunity()}
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
