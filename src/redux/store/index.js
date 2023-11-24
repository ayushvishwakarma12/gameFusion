import { configureStore } from "@reduxjs/toolkit";
import gameUtils from "../slice/gameUtils";
import sidebarReducer from "../slice/sidebarSLice";
import genreReducer from "../slice/genreSlice";
import creatorsReducers from "../slice/creatorsSlice";

export const store = configureStore({
  reducer: {
    games: gameUtils,
    sidebar: sidebarReducer,
    genre: genreReducer,
    creators: creatorsReducers,
  },
});
