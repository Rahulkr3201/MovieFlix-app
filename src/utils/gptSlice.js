import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchedMovie: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchedMovie: (state, action) => {
      state.searchedMovie = action.payload;
    },
  },
});
export const { toggleGptSearchView, addSearchedMovie } = gptSlice.actions;
export default gptSlice.reducer;
