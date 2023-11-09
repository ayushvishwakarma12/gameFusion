import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../api/apiUrl";
import { apiKeys } from "../../api/apiKeys";

export const fetchAsynchGenres = createAsyncThunk(
  "genres/fetch",
  async (page = 1) => {
    const { data } = await axios.get(`${apiUrl}genres?${apiKeys}&page=${page}`);
    return data;
  }
);

console.log(fetchAsynchGenres());
