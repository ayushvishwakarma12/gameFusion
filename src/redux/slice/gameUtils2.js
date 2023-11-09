import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { apiUrl } from "../../api/apiUrl";
import { apiKeys } from "../../api/apiKeys";

export const fetchAsynchGames = createAsyncThunk(
  "games/fetch",
  async (page = 1) => {
    const { data } = await axios.get(`${apiUrl}games?${apiKeys}&page=${page}`);
    return data;
  }
);

export const fetchAsynchGamesDetails = createAsyncThunk(
  `game/details/fetch`,
  async (id) => {
    console.log(id);
    const { data } = await axios.get(`${apiUrl}games/${id}?${apiKeys}`);
    return data;
  }
);
