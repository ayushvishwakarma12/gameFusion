import styled from "styled-components";
import PropTypes from "prop-types";
import GameCard from "./GameCard";

const GameList = ({ games, sliceValue = games.length }) => {
  // by default we are going to display all the games fetched from api if not any slicevalue is mentioned
  return (
    <GameListWrapper>
      <div className="card-list bg-slate-950 pl-32 pr-32">
        {games?.slice(0, sliceValue).map((item) => (
          <GameCard key={item.id} gameData={item} />
        ))}
      </div>
    </GameListWrapper>
  );
};

export default GameList;

GameList.propTypes = {
  games: PropTypes.array,
  sliceValue: PropTypes.number,
};

const GameListWrapper = styled.div`
  .card-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
`;
