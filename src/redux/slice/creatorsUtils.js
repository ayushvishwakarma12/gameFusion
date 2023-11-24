import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../api/apiUrl";
import { apiKeys } from "../../api/apiKeys";

export const fetchAsyncCreators = createAsyncThunk(
  "developers/fetch",
  async (page = 1) => {
    const { data } = await axios.get(
      `${apiUrl}creators?${apiKeys}&page=${page}`
    );
    return data;
  }
);
