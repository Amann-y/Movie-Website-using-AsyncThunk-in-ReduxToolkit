import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieapi from "../../apis/movieapi";
import { API_KEY } from "../../apis/movieapikey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    // const movieText = "Harry";
    const res = await movieapi.get(`?apiKey=${API_KEY}&s=${term}&type=movie`);
    return res.data.Search;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    // const seriesText = "Friends";
    const res = await movieapi.get(`?apiKey=${API_KEY}&s=${term}&type=series`);
    return res.data.Search;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const res = await movieapi.get(`?apiKey=${API_KEY}&i=${id}&Plot=full`);
    return res.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  loading: false,
  error: null,
  selectedmovieorshow: {},
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedmovieorshow = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    });
    builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });

    builder.addCase(fetchAsyncShows.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = action.payload;
    });
    builder.addCase(fetchAsyncShows.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });

    builder.addCase(fetchAsyncMovieOrShowDetail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedmovieorshow = action.payload;
    });
    builder.addCase(fetchAsyncMovieOrShowDetail.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });
  },
});

export const { removeSelectedMovieOrShow } = ratingSlice.actions;
export const getAllMovies = (state) => state.movies;
export const getAllShows = (state) => state.movies;
export const getMovieOrShowDetail = (state) => state.movies;

export default ratingSlice.reducer;
