import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, redirect, useNavigate } from "react-router-dom";
import { fetchAsynchGamesDetails } from "../../redux/slice/gameUtils2";
import { STATUS } from "../../utils/status";

export default function GameDetails(props) {
  const dispatch = useDispatch();
  const idObject = useParams();
  const { id } = idObject;
  const gameDetails = useSelector((state) => state.games.gameSingle);
  const gameStatus = useSelector((state) => state.games.gameSingleStatus);
  console.log(gameStatus);
  const navigate = useNavigate();

  const {
    name,
    description,
    description_raw,
    background_image,
    background_image_additional,
    genres,
    rating,
    playtime,
    released,
    platforms,
    tags,
  } = gameDetails;
  console.log(gameDetails);
  console.log(background_image_additional);

  useEffect(() => {
    console.log("id", id);
    dispatch(fetchAsynchGamesDetails(id));
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {gameStatus === STATUS.SUCCEEDED && (
        <>
          <div
            className="flex flex-col w-full min-h-[300px] md:min-h-[600px] max-h-[300px] md:max-h-[600px] bg-no-repeat bg-top p-5"
            style={{
              background: `linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9) ), url(${background_image})`,
            }}
          >
            <div className=" self-center w-4/5">
              <h1 className="text-start text-4xl text-[30px] font-bold md:text-[60px] xl:text-[75px] first-letter:text-cyan-100 md:first-letter:text-[90px] first-letter:text-[40px] text-white">
                {name}
              </h1>
              <div className="w-full self-start mt-[100px]">
                <ul className="flex flex-col self-start w-full text-start">
                  <h1 className="text-base text-[hsla(0,0%,100%,.2)] ">
                    Platform :{" "}
                  </h1>
                  <div className="flex flex-wrap">
                    {platforms.map((platform) => {
                      return (
                        <li className="pr-2" key={platform.platform.id}>
                          <p className="text-base text-white">
                            {platform.platform.name}
                          </p>
                        </li>
                      );
                    })}
                  </div>
                </ul>
                <div className="pt-3">
                  <h1 className="text-start text-lg  text-[hsla(0,0%,100%,.2)]">
                    Genre :{" "}
                  </h1>
                  <div className="flex">
                    {genres.map((genre) => {
                      return (
                        <p className="text-base text-white pr-2" key={genre.id}>
                          {genre.name}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="pt-2">
                  <h1 className="text-start text-lg  text-[hsla(0,0%,100%,.2)]">
                    Release Date:{" "}
                  </h1>
                  <p className="text-start text-base text-white pr-2">
                    {released}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full text-center p-5 flex flex-col items-center">
            <h1 className="font-bold text-[30px] text-white">About :</h1>
            <p className="text-base md:text-lg text-white w-4/5 text-center">
              {description_raw}
            </p>
            <div className=" text-center w-full flex flex-col items-center p-5">
              <h1 className="font-bold text-[30px] text-white text-start">
                Screenshots :
              </h1>
              <img
                className="text-center w-11/12 md:w-3/5 h-[300px] md:h-[450px] pt-5"
                src={background_image_additional}
              />
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-[30px] text-white">
              Games like {name}
            </h1>
            <ul className="flex flex-wrap">
              {tags.map((e) => {
                return (
                  <li className="p-2" key={e.id}>
                    <img
                      className="w-80"
                      onClick={() => window.location.replace(`${e.id}`)}
                      src={e.image_background}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
