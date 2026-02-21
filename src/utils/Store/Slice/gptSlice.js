import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    isLoading: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    clearGptResults: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMovieResult,
  setLoading,
  clearGptResults,
} = gptSlice.actions;

export default gptSlice.reducer;
