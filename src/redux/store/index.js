import { configureStore } from "@reduxjs/toolkit";
import gameUtils from "../slice/gameUtils";
import sidebarReducer from "../slice/sidebarSLice";
import genreReducer from "../slice/genreSlice";

export const store = configureStore({
  reducer: {
    games: gameUtils,
    sidebar: sidebarReducer,
    genre: genreReducer,
  },
});
