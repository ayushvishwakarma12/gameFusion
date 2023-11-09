import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status/";
import { fetchAsynchGenres } from "./genreUtils";

const initialState = {
  genres: [],
  genreStatus: STATUS.IDLE,
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsynchGenres.pending, (state) => {
      state.genreStatus = STATUS.LOADING;
    });
    builder.addCase(fetchAsynchGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genreStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchAsynchGenres.rejected, (state) => {
      state.genreStatus = STATUS.FAILED;
    });
  },
  reducers: {},
});

export const selectAllGenres = (state) => state.genre.genres.results;
export const selectAllGenreStatus = (state) => state.genre.genreStatus;

export default genreSlice.reducer;
