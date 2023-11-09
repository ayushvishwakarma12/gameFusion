import { createSlice } from "@reduxjs/toolkit";
import { fetchAsynchGames, fetchAsynchGamesDetails } from "./gameUtils2";
import { STATUS } from "../../utils/status";
const initialState = {
  games: [],
  currentPage: 1,
  gameStatus: STATUS.IDLE,
  gameSingle: [],
  gameSingleStatus: STATUS.IDLE,
  gamesDetails: [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    previousPage: (state) => {
      state.currentPage > 1 ? (state.currentPage -= 1) : "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsynchGames.pending, (state) => {
      state.gameStatus = STATUS.LOADING;
    });
    builder.addCase(fetchAsynchGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.gameStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchAsynchGames.rejected, (state) => {
      state.gameStatus = STATUS.FAILED;
    });
    builder.addCase(fetchAsynchGamesDetails.pending, (state) => {
      state.gameSingleStatus = STATUS.LOADING;
    });
    builder.addCase(fetchAsynchGamesDetails.fulfilled, (state, action) => {
      state.gameSingle = action.payload;
      state.gameSingleStatus = STATUS.SUCCEEDED;
    });
    builder.addCase(fetchAsynchGamesDetails.rejected, (state) => {
      state.gameSingleStatus = STATUS.FAILED;
    });
  },
});

export const { nextPage, previousPage } = gameSlice.actions;

export const selectAllGames = (state) => state.game.games;
// export const selectAllGamesStatus = (state) => state.game.gameStatus;
// export const selectGamesNextPage = (state) => state.game.games.next;
// export const selectGamePrevPage = (state) => state.game.games.previous;
// export const selectSingleGame = (state) => state.game.gameSingle;
// export const selectSingleGameStatus = (state) => state.game.gameSingleStatus;
// export const selectGameDetails = (state) => state.game.gamesDetails;
export default gameSlice.reducer;
