import PropTypes from "prop-types";
import GameCard from "./GameCard";

const GameList = ({ games, sliceValue = games.length }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-950 lg:pl-32 lg:pr-32">
        {games?.slice(0, sliceValue).map((item) => (
          <GameCard key={item.id} gameData={item} />
        ))}
      </div>
    </div>
  );
};

export default GameList;

GameList.propTypes = {
  games: PropTypes.array,
  sliceValue: PropTypes.number,
};
