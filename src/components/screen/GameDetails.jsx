import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, redirect, useNavigate } from "react-router-dom";
import { fetchAsynchGamesDetails } from "../../redux/slice/gameUtils2";
import { STATUS } from "../../utils/status";
import Loading from "../Loader/Loader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function GameDetails(props) {
  const dispatch = useDispatch();
  const idObject = useParams();
  const { id } = idObject;
  const gameDetails = useSelector((state) => state.games.gameSingle);
  const gameStatus = useSelector((state) => state.games.gameSingleStatus);

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

  const selectedClass = { color: "green" };

  useEffect(() => {
    console.log("id", id);
    dispatch(fetchAsynchGamesDetails(id));
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      {gameStatus === STATUS.SUCCEEDED ? (
        <>
          <div
            className="flex flex-col w-full min-h-[400px] md:min-h-[600px] max-h-[300px] md:max-h-[600px] bg-no-repeat p-5"
            style={{
              background: `linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9) ), url(${background_image}) center/cover no-repeat`,
            }}
          >
            <div className=" self-center w-4/5">
              <h1 className="text-start text-4xl text-[30px] font-bold md:text-[60px] xl:text-[75px] first-letter:text-cyan-100 md:first-letter:text-[90px] first-letter:text-[40px] text-white">
                {name}
              </h1>
              <div className="w-full self-start mt-[40px] lg:mt-[100px]">
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
            <h1 className="font-bold text-[30px] text-white pb-5">
              Game Description :
            </h1>
            <p className="text-base md:text-lg text-white  xl:w-4/5 text-center">
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
          {/* <div className="">
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
          </div> */}
          <Tabs>
            <TabList className="mb-[50px]">
              <Tab className="inline-block w-[150px] mr-5 bg-white hover:bg-purple-600 duration-500 hover:text-white text-lg pr-5 pl-5 pt-2 pb-2 font-bold font-poppins cursor-pointer">
                Platform
              </Tab>
              <Tab className="inline-block w-[150px] mr-5 bg-white hover:bg-purple-600 duration-500 hover:text-white text-lg pr-5 pl-5 pt-2 pb-2 font-bold font-poppins cursor-pointer">
                Stores
              </Tab>
            </TabList>
            <TabPanel>
              <div className="4/5">
                <h3 className="text-white mb-3 font-semibold text-2xl">
                  Game Platforms
                </h3>
                <hr className=" text-sm w-4/5 mr-auto ml-auto mt-[40px]" />
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
                  {gameDetails?.platforms?.map((item) => {
                    return (
                      <div key={item?.platform?.id} className="text-white">
                        <p className="font-semibold mb-2">
                          {item?.platform?.name}
                        </p>
                        <div>
                          <img
                            className="min-h-[180px] max-h-[180px] w-full object-cover"
                            src={item?.platform?.image_background}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="4/5">
                <h3 className="text-white mb-3 font-semibold text-2xl">
                  Available Stores
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                  {gameDetails?.stores?.map((item) => {
                    return (
                      <div
                        key={item?.store?.id}
                        className="flex items-center p-2"
                      >
                        <div className="">
                          <img
                            className="min-h-[180px] min-w-[180px] max-h-[180px] max-w-[180px] object-cover"
                            src={item?.store?.image_background}
                          />
                        </div>
                        <div className="p-5 overflow-hidden">
                          <h5 className="text-left uppercase text-white font-bold">
                            {item?.store?.name}
                          </h5>
                          <ul>
                            <li className="text-white flex">
                              <span className="font-bold pr-2">Domain: </span>
                              <p>{item?.store?.domain}</p>
                            </li>
                            <li className="text-white flex">
                              <span className="font-bold">Games Count: </span>
                              <p>{item?.store?.games_count}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </>
      ) : (
        <div className="bg-slate-950 flex justify-center items-center min-h-screen ">
          <Loading />
        </div>
      )}
    </div>
  );
}
