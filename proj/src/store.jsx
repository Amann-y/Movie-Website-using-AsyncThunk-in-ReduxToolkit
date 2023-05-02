import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/rating/ratingSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
