import React from "react";

const CreatorItem = ({ item }) => {
  const positions = item?.positions?.map((position) => position?.name);
  const games = item?.games?.map((game) => game?.name);
  return (
    <div
      style={{
        background: `linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%), url('${item?.image_background}') center/cover no-repeat`,
      }}
      className="h-[400px] relative bg-cover mb-32 flex flex-col justify-end"
    >
      <div>
        <img
          className=" text-center border-white border-[2px] rounded-[100%] bg-white min-h-[150px] min-w-[150px] max-h-[150px] max-w-[150px] mr-auto ml-auto -m-20 scale-100 hover:scale-105 duration-200"
          alt={item?.name}
          src={item?.image}
        />
      </div>
      <div className=" w-4/5 m-auto">
        <h4 className="font-poppins text-white text-2xl font-bold">
          {item?.name}
        </h4>
        <ul className="text-center flex justify-center items-center pt-2">
          <li>
            <span className="text-white text-base pr-3 font-semibold">
              Games Count :{" "}
            </span>
            <span className="text-white text-base"> {item?.games_count}</span>
          </li>
        </ul>
        <ul className="text-center flex justify-center items-center pt-2">
          <li>
            <span className="text-white text-base pr-3 font-semibold">
              Position :{" "}
            </span>
            <span className="text-white text-base">
              {" "}
              {positions.length > 0 ? positions.join(", ") : "N/A"}
            </span>
          </li>
        </ul>
        <ul className="text-center flex justify-center items-center pt-2">
          <li>
            <span className="text-white text-base pr-3 font-semibold">
              Games Count :{" "}
            </span>
            <span className="text-white text-base">
              {" "}
              {games?.length > 0 ? games.join(", ") : "N/A"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreatorItem;
