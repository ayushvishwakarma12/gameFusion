import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../api/apiUrl";
import { apiKeys } from "../../api/apiKeys";
import GameCard from "../GameCard/GameCard";

const GenreItem = ({ gameItem }) => {
  const [gameData, setGameData] = useState({});
  const [isGameLoading, setGameLoading] = useState(true);
  console.log(gameItem, "gameitem");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${apiUrl}games/${gameItem.id}?${apiKeys}`
      );
      setGameData(data);
      setGameLoading(false);
    };

    fetchData();
  }, []);

  return <GameCard gameData={gameData} />;
};

export default GenreItem;

GenreItem.propTypes = {
  gameItem: PropTypes.object,
};
